const { app, BrowserWindow } = require('electron');
const io_client = require('socket.io-client');
const numeral = require('numeral');
const socket = io_client('http://localhost:3215', {query:'connecting_as=electron'});

// Disable security warnings in console
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

// Socket connection to Pi Server
socket.on('connect', () => {
	console.log('Connected to Local Socket Server')
})

socket.on('LSS_is_electron_running', data => {
	console.log('LSS ELECTRON');
	socket.emit('PP_electron_is_running');
})

function createWindow () {
	
	// Create the browser window.
	let win = new BrowserWindow({
		width: 1920,
		height: 1080
	})

	win.loadURL(`file://${__dirname}/app/index.html`);
	win.setFullScreen(true);

	win.webContents.on('render-process-gone', error => {
		console.log('WEBCONTENT RENDER PROCESS GONE:', new Date(), error);
		app.quit();
	})
	
	win.webContents.on('unresponsive', error => {
		console.log('UNRESPONSIVE:', new Date(), error);
		app.quit();
	})
}

app.allowRendererProcessReuse = true;

app.whenReady().then(createWindow);

app.commandLine.appendSwitch("disable-http-cache");

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

// setInterval(() => {
// 	const {rss, heapTotal} = process.memoryUsage();
// 	console.log('rss', numeral(rss).format('0.0 ib'),
// 				'heaptotal', numeral(heapTotal).format('0.0 ib'));
// }, 10000)