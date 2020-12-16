const { app, BrowserWindow } = require('electron');
const io_client = require('socket.io-client');
const socket = io_client.connect('http://localhost:3215', {query:'connecting_as=electron'});

// Socket connection to Pi Server
socket.on('connect', () => {
	console.log('Connected to Pi Local Socket')
})

socket.on('LSS_is_electron_running', data => {
	console.log('LSS ELECTRON')
	socket.emit('PP_electron_is_running');
})

function createWindow () {
	
  // Create the browser window.
  let win = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			contextIsolation: true
		}
  })

	// and load the index.html of the app.
	win.loadURL('http://localhost:4200');
	win.setFullScreen(true);
	// win.setMenuBarVisibility(false);

	win.webContents.on('render-process-gone', error => {
		console.log('WEBCONTENT RENDER PROCESS GONE:', new Date(), error);
		app.quit();
	})
	
	win.webContents.on('unresponsive', error => {
		console.log('UNRESPONSIVE:', new Date(), error);
		app.quit();
	})
}


app.whenReady(() => {
	app.allowRendererProcessReuse = true;
}).then(createWindow);


// app.commandLine.appendSwitch("disable-http-cache");

app.on('gpu-process-crashed', error => {
	console.log('GPU PROCESS CRASHED:', new Date(), error);
	app.quit();
})

app.on('render-process-crashed', error => {
	console.log('RENDER PROCESS CRASHED:', new Date(), error);
	app.quit();
})

app.on('render-process-gone', error => {
	console.log('RENDER PROCESS GONE:', new Date(), error);
	app.quit();
})

process.on('uncaughtException', error => {
	console.log('UNCAUGHT EXCEPTION:', new Date(), error);
	app.quit();
})