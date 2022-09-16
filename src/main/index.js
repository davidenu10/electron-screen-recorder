const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const isDev = process.env.MODE === 'development'

require('./lib/events')

if (require('electron-squirrel-startup')) {
  app.quit()
}

Menu.setApplicationMenu(null)

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  mainWindow.loadFile(
    path.resolve(
      __dirname,
      '..',
      'renderer',
      'index.html'
    )
  )

  // if (isDev) {
  mainWindow
    .webContents
    .openDevTools()
  // }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})