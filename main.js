const { app, BrowserWindow, screen, ipcMain } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // const width = 800;
  // const height = 600;
  const win = new BrowserWindow({
    width: width,
    height: height,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  isDev && win.webContents.openDevTools();

  // Remove title bar menu
  win.removeMenu();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// -------------------------------- I P C --------------------------------
ipcMain.on("message", (e, data) => {
  console.log(data);
});
