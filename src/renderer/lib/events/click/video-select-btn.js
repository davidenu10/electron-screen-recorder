const getVideoSources = require('../../get-video-resources')

document
    .getElementById('videoSelectBtn')
    .addEventListener('click', getVideoSources)

window.addEventListener('load', () => {
    const el = document.getElementById('videoSelectBtn');
    let clickEvent = new Event('click');
    el.dispatchEvent(clickEvent);
});