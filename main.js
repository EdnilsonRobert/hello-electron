const {app, BrowserWindow} = require('electron'),
      notifier = require('node-notifier'),
      path = require('path')

let mainWindow

let createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 640,
    icon: './egg/favicon.svg'
    // frame: false
  })
  mainWindow.loadFile('./egg/my-egg.html')
  // mainWindow.loadURL('http://localhost:3000')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
  })
}

let createNotification = () => {
  notifier.notify({
    title: 'Electron',
    message: 'Works like a charm.',
    icon: path.join(__dirname, 'egg/favicon.svg'),
    sound: true,
    wait: false
  }, (error, response) => {
    console.log(`Error`)
  })
}

app.on('ready', () => {
  createWindow()
  createNotification()
})

app.on('activate', () => {
  if(mainWindow === null) {
    createWindow()
    createNotification()
  }
})

app.on('window-all-closed', () => {
  process.platform !== 'darwin' && app.quit()
})

app.on('before-quit', () => {
})

app.on('will-quit', () => {
})

app.on('quit', () => {
})

app.on('will-finish-launching', () => {
  // No Windows e Linux é igual ao evento 'ready'
})
