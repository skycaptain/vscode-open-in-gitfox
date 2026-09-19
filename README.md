# VSCode Open in Gitfox

Adds a command for opening the current project in [Gitfox](https://www.gitfox.app/).

- If there is a file open, it will open the git repo for that file
- If it is a workspace, it will ask you what folder you would like to open
- It will automatically find the best git repo to open

## Usage

It adds 1 command to the command palette and 1 item to the context menu:

```plain
'Open in Gitfox' // Open the current project in Gitfox
```

## Hints

Map `Open in Gitfox` action to this extension, add this to your `keybindings.json` file:

```json
  { "key": "⌘⌃S", "command": "openInGitfox.open" }
```

## Acknowledgements

This extension is based on [morrislaptop/vscode-open-in-git-tower](https://github.com/morrislaptop/vscode-open-in-git-tower) and [fabiospampinato/vscode-open-in-gittower](https://github.com/fabiospampinato/vscode-open-in-gittower).
