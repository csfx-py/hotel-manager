const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("ipcApi", {
  messageApi: {
    sendMessage(data) {
      ipcRenderer.send("message", data);
    },
  },
  printApi: {
    sendPrint(data) {
      ipcRenderer.send("print", data);
    },
  },
});
