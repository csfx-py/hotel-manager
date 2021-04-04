const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

function createWindow() {
  //const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const width = 800;
  const height = 600;
  const win = new BrowserWindow({
    width: width,
    height: height,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  win.webContents.openDevTools();

  // Remove title bar menu
  win.removeMenu();
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
