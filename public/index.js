const video = document.getElementById("video");
function PlayPause(){
    if (video.paused)
    video.play();
    else
    video.pause();
};