const { app } = require('electron').remote
const { createVideoFile } = require('./handlers')

async function exportVideo(ext) {
  const tempPath = `${app.getPath("appData")}`;
  const filePath = `${tempPath}\\electron-screen-recorder\\output\\vid-${Date.now()}.${ext}`;
  console.log(filePath);
  if (filePath)
    await createVideoFile(filePath)
}

module.exports = async function selectSource({ id }) {
  await exportVideo(id)
}