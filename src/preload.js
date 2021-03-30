const {contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld(
    "api",
    {
        getSystemInformation: async () => {
            return await ipcRenderer.invoke("get-system-information");
        }
    }
)