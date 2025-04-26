const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

let mainWindow

const createWindow = () => {
  try {
    mainWindow = new BrowserWindow({
      width: 900,
      height: 600,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true
      }
    })

    mainWindow.loadFile(path.join(__dirname, 'src/pages/home.html'))
      .catch(err => {
        console.error('Failed to load home.html:', err)
        app.quit()
      })

    return mainWindow
  } catch (err) {
    console.error('Failed to create window:', err)
    app.quit()
  }
}

// Window control handlers
ipcMain.on('minimize-window', () => {
  mainWindow.minimize()
})

ipcMain.on('maximize-window', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})

ipcMain.on('close-window', () => {
  mainWindow.close()
})

ipcMain.on('navigate-to', (event, page) => {
  if (mainWindow) {
    mainWindow.loadFile(path.join(__dirname, 'src/pages', page))
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  app.quit()
})