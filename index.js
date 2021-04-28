const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('Ready', () => {

    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        resizable: false
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)

})