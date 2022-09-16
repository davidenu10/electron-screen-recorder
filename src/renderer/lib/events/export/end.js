const { app } = require('electron').remote

module.exports = () => {
  document.querySelector('#saveProgressBar').style.display = 'none'
  document.querySelector('#videoSelectBtn').style.display = 'unset'
  // app.exit(1)
}