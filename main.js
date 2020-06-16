const { app, BrowserWindow } = require('electron');
const io_client = require('socket.io-client');
const socket = io_client.connect('http://localhost:3215', {query:'connecting_as=electron'});

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			nodeIntegration: true
		}
  })

	// and load the index.html of the app.
	win.loadURL('http://localhost:4201')
	win.setFullScreen(true);
}

app.whenReady().then(createWindow)

socket.on('connect', () => {
	console.log('Connected to Pi Local Socket')
})

socket.on('LSS_is_electron_running', data => {
	socket.emit('PP_electron_is_running');
})