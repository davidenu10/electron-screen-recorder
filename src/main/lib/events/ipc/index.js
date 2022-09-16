const { ipcMain } = require('electron')

var found = false;
ipcMain.handle('context-menu', async (event, sources) => {
  const source = JSON.parse(sources);
  console.log(source);
  source.data.map(item => {
    console.log(item.name.toString().indexOf('Google Chrome'));
    if (item.name.toString().indexOf('Google Chrome') > -1) {
      console.log(source.type);
      if (source.type === 'input') {
        event.sender.send('select-source', item);
      }
      found = true;
    }
  });

  if (source.type === 'output') {
    event.sender.send('select-output', { id: 'mp4', name: "mp4" });
  }
})