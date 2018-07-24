video = document.getElementById('video');

// console.log(stbStorage.getItem('key'));
// stbStorage.setItem('key', 123);
// console.log(stbStorage.getItem('key'));

//наложение видео-контейнера и плейбека друг на друга
gSTB.SetTopWin(0);
gSTB.SetMode(1);
//gSTB.SetWinMode(0, 1);
gSTB.SetTransparentColor(0);
//gSTB.SetChromaKey(0, 0xffffff);

var stbVideo = stbPlayerManager.list[0];
var instance = stbSurfaceManager.list[0];

stbVideo.onPlayStart = function () {
    console.log('Video playback has begun.');
};

window.addEventListener('keydown', function ( event ) {
    switch ( event.keyCode ) {
        case 107: // volume up
            stbVideo.volume++;
            console.log('volume up');
            break;
        case 109: // volume down
            stbVideo.volume--;
            console.log('volume down');
            break;
        case 83:
            if ( event.altKey ) { // stop
                stbVideo.stop();
            }
            break;
        case 37: // bottom
            console.log('bottom');
            instance.moveBottom();
            break;
        case 38: // up
            console.log('up');
            instance.moveUp();
            break;
        case 39: // top
            console.log('top');
            instance.moveTop();
            break;
        case 40: // down
            console.log('down');
            instance.moveDown();
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