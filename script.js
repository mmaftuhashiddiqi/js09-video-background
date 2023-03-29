const checkbox = document.querySelector('.checkbox');
const video = document.querySelector('.video-bg');

function check() {
    if ( checkbox.checked ) {
        video.pause();
    } else {
        video.play();
    }
}