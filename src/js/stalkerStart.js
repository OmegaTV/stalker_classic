video = document.getElementById('video');

var video = stbPlayerManager.list[0];
gSTB.SetTopWin(1);
// stbplayer.aspectConversion = 4;
video.setVideoControl = 1;
video.setVideoState = 1;

// video.play({
//     uri: 'https://cdnua01.hls.tv/hls/491a50b67896083136a13a5ce7cc3f1b/139/stream.m3u8',
//     solution: 'auto'
// });
video.onPlayStart = function () {
    console.log('Video playback has begun.');
};

window.addEventListener('keydown', function ( event ) {
    switch ( event.keyCode ) {
        case 107: // volume up
            video.volume++;
            console.log('volume up');
            break;
        case 109: // volume down
            video.volume--;
            console.log('volume down');
            break;
        case 83:
            if ( event.altKey ) { // stop
                video.stop();
            }
            break;
    }
});
window.onload = function() {
    function Webos() {
        Player.apply(this, arguments);
    }
    Webos.prototype = Object.create(Player.prototype);
    Webos.prototype.setVideoType = function () {
        playback = new Factory().checkType('stalker');
    };
    webos = new Webos();
    Webos.prototype.constructor = Webos;
    webos.toggleVolume();
    document.getElementById('fullscreen-btn').classList.add('hidden');
    volumeBtn.classList.remove('_active_btn');                                  //скрываем кнопку звука
    volumeBtn.classList.add('video-controls__item_disabled');                   //скрываем кнопку звука

    auth.clientAuthorization(null, function () {
        var tvType = 'WebOSLG';
        return tvType;
    });

};