const stream = require('stream')

module.exports = function createReadableVideoBuffer () {
  const readableVideoBuffer = new stream.PassThrough()
  
  readableVideoBuffer.write(window.videoBuffer.toString())
  readableVideoBuffer.end()
  readableVideoBuffer.destroy()

  return readableVideoBuffer
}