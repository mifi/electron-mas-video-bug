const { BrowserWindow, app, dialog } = require('electron');
const remote = require('@electron/remote/main');

remote.initialize()

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  
  remote.enable(mainWindow.webContents);
  
  mainWindow.loadFile('index.html');  
})

async function showOpenDialog() {
  const ret = await dialog.showOpenDialog({
    filters: [{ name: 'All Files', extensions: ['*'] }],
    title: 'Select file',
    properties: ['openFile'],
    message: 'Select video file',
  });
  return ret.filePaths[0];
}

module.exports = {
  showOpenDialog,
}