const { handleDataAvailable, handleStop } = require('./handlers')

const videoSelectBtn = document.getElementById('videoSelectBtn')
const videoElement = document.querySelector('video')

module.exports = async function selectSource(source) {
  const startBtn = document.getElementById('startBtn')
  const stopBtn = document.getElementById('stopBtn')

  videoSelectBtn.textContent = source.name

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: source.id
      }
    }
  }

  const stream =
    await navigator
      .mediaDevices
      .getUserMedia(constraints)

  videoElement.srcObject = stream
  videoElement.play()
  startBtn.removeAttribute('disabled')

  const options = { mimeType: 'video/webm; codecs=vp9' }

  window.mediaRecorder = new MediaRecorder(stream, options)
  window.mediaRecorder.ondataavailable = handleDataAvailable
  window.mediaRecorder.onstop = handleStop

  setTimeout(() => {
    startBtn.click();
  }, 1000);
  // const stopBtn = document.getElementById('stopBtn')
  // const saveBtn = document.getElementById('saveBtn')
  // const videoSelectBtn = document.getElementById('videoSelectBtn')

  // stopBtn.removeAttribute('disabled')
  // saveBtn.setAttribute('disabled', 'disabled')
  // videoSelectBtn.setAttribute('disabled', 'disabled')
  // startBtn.setAttribute('disabled', 'disabled')

  // window.mediaRecorder.start()

  // startBtn
  //   .classList
  //   .add('is-danger')

  // startBtn.textContent = 'Recording'
}