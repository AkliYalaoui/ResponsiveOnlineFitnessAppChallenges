/*global document*/
var video = document.getElementById('videoSrc'),
    overlay = document.getElementById('overlay');

video.setAttribute('src', 'http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4');

function checkControls(element1, element2) {
    'use strict';
    if (!element1.controls) {
        element2.style.display = 'block';
    } else {
        element2.style.display = 'none';
    }
}

//checkControls(video, overlay);
function playVideo() {
    'use strict';
    video.play();
    video.controls = true;
    checkControls(video, overlay);
}
