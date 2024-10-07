# Loumads Active File In Status Bar 

![Loumads Active File In Status Bar](https://github.com/LLouzada/LoumadsActiveFileInStatusBar/raw/master/media/example.gif)

A [Visual Studio Code](https://code.visualstudio.com/) extension that displays the full path of the currently active file in the status bar. It also adds a context menu with utility commands when you click on the status bar item.

This project is a fork of [ActiveFileInStatusBar](https://marketplace.visualstudio.com/items?itemName=RoscoP.ActiveFileInStatusBar), with added functionality such as a context menu with utility commands, bug fixes and usage of newer VSCode APIs.

## ✨ Features

- Show the full path of the currently active file in the status bar.
- Context menu with utility commands available by clicking on the status bar item.
    - Avaliable commands:
      - Reveal In Explorer View
      - Reveal in OS File Explorer
      - Copy Full Path to Clipboard
      - Copy Relative Path to Clipboard
- Customizable settings like enabling/disabling the extension, toggling full path display, and changing the color of the status bar item.

## 🚀 Installation

You can install the extension from the Visual Studio Code Marketplace:

[https://marketplace.visualstudio.com/items?itemName=LoumadSoft.loumads-active-file-in-statusbar](https://marketplace.visualstudio.com/items?itemName=LoumadSoft.loumads-active-file-in-statusbar)


## ⚙️ Configuration Options

You can configure the extension in your `settings.json` file with the following options:

- **Enable / Disable extension** (default: `true`):
  
    ```json
    "ActiveFileInStatusBar.enable": true,
    ```

- **Toggle full path display** (default: `true`):
  
    ```json
    "ActiveFileInStatusBar.fullpath": true,
    ```

- **Change the status bar item color** (default: `#f1c40e`):
  
    ```json
    "ActiveFileInStatusBar.color": "#FFFF00",
    ```

## 📝 Original Repository 

This extension is a fork of the [ActiveFileInStatusBar](https://github.com/RoscoP/ActiveFileInStatusBar) repository, with improvements and additional functionality.

---

Thank you for using **Loumads Active File In Status Bar**! Feel free to contribute or report issues.
