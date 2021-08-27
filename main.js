const {app , BrowserWindow} = require('electron')
app.on('ready' , ()=>{
    const main = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }, 
        width:800,
        height:600,
        resizable:false,
        title:"Robot Game",
        icon:"image/Apple.ico",
    })
    main.setMenu(null)
    main.loadFile('index.html')
})