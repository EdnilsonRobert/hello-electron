const {app, BrowserWindow} = require('electron'),
      notifier = require('node-notifier'),
      path = require('path')

let mainWindow

let createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 640
    // frame: false
  })
  mainWindow.loadFile('./egg/my-egg.html')
  // mainWindow.loadURL('http://localhost:3000')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
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

app.on("window-all-closed", () => {
  process.platform !== "darwin" && app.quit()
})
