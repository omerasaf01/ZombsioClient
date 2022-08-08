const electron = require("electron");

const app = electron.app;

app.on("ready", () => {
    let mainWindow = new electron.BrowserWindow({
        width: 1200, 
        height: 800, 
        title: 'ZombsRoyale Client - Made By Ömer Asaf Karasu',
    });
    
    mainWindow.loadURL("https://zombs.io");
})