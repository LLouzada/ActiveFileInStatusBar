var vscode = require("vscode");
var path = require("path");

var statusBar = null;
var filePath = "";

/**
 *  Called when extension is activated
 * 
 * @return {void}
 */
function activate(context) {
  var config = vscode.workspace.getConfiguration("ActiveFileInStatusBar");
  if (config.enable) {
    statusBar = CreateStatusBarItem();
    vscode.window.onDidChangeActiveTextEditor(OnStatusBarItemUpdate);
    vscode.workspace.onDidChangeConfiguration(OnStatusBarItemUpdate);
    OnStatusBarItemUpdate(vscode.window.activeTextEditor);

    context.subscriptions.push(statusBar);
  }

  var disposable = registerCommandActiveFileInStatusBarClicked();

  context.subscriptions.push(disposable);
}

/**
 * Registers the command that is executed when the status bar item is clicked.
 * 
 * @returns {Disposable}
 */
function registerCommandActiveFileInStatusBarClicked() {
  return vscode.commands.registerCommand(
    "extension.ActiveFileInStatusBarClicked",
    async function (args) {
      const options = [
        { label: "Reveal in Explorer View", action: "revealInExplorerView" },
        { label: "Reveal in OS File Explorer", action: "revealInOS" },
        { label: "Copy File Path to Clipboard", action: "copyToClipboard" },
      ];
      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: "Choose an action",
      });

      if (!selectedOption) {
        return;
      }

      switch (selectedOption.action) {
        case "revealInExplorerView":
          vscode.commands.executeCommand(
            "workbench.files.action.showActiveFileInExplorer"
          );
          break;
        case "revealInOS":
          vscode.commands.executeCommand("revealFileInOS");
          break;
        case "copyToClipboard":
          vscode.env.clipboard.writeText(statusBar.text);
          break;
      }
    }
  );
}

/**
 * Creates the Status bar item for our extension
 * 
 * @returns {vscode.StatusBarItem}
 */
function CreateStatusBarItem() {
  var statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    -1
  );
  statusBar.text = "";
  statusBar.command = "extension.ActiveFileInStatusBarClicked";
  statusBar.tooltip = "Click to open Options Menu";
  return statusBar;
}

/**
 * Handles StatusBar item update
 * 
 * @param {vscode.TextEditor} textEditor 
 * @returns {void}
 */
function OnStatusBarItemUpdate(textEditor) {
  textEditor = textEditor ? textEditor : vscode.window.activeTextEditor;
  if (textEditor) {
    var config = vscode.workspace.getConfiguration("ActiveFileInStatusBar");
    if (!textEditor.document || textEditor.document.isUntitled) {
      statusBar.text = "";
      statusBar.hide();
      return;
    }

    var filePath = textEditor.document.fileName;
    if (!config.fullpath) {
      filePath = vscode.workspace.asRelativePath(textEditor.document.fileName);
      filePath = path.normalize(filePath);
    }

    statusBar.color = config.color;
    statusBar.text = filePath;
    statusBar.show();
  }
}

/**
 * Called when extension is deactivated 
 * 
 * @return {void}
 */ 
function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;

