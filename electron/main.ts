import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
  }
});
