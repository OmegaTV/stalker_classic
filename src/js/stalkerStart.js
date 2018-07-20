video = document.getElementById('video');

// var testString = 'testString';
// console.log(gSTB);
// console.log(typeof gSTB);
// gSTB.saveUserData('test.txt', testString);
// var data = gSTB.loadUserData('test.txt');
// console.log(data);

console.log(stbStorage.getItem('key'));
stbStorage.setItem('key', 123);
console.log(stbStorage.getItem('key'));

var stbVideo = stbPlayerManager.list[0];
var instance = stbSurfaceManager.list[0];

instance.owner = stbVideo;
instance.type = 2;
instance.opacity = 0.1;
//instance.moveBottom();
console.log(typeof instance);
console.log(typeof stbBrowser);

// instance[0].type = 2;
// instance[0].owner = stbVideo;
// instance[0].opacity = 0.1;
// console.log(instance);

// stbVideo.id = 1;
// stbVideo.type = 2;
// stbVideo.opacity = 0.1;
// stbVideo.owner = stbVideo;
// stbSurfaceManager.list[0].moveDown();
gSTB.SetTopWin(1);
// stbplayer.aspectConversion = 4;
stbVideo.setVideoControl = 1;
stbVideo.setVideoState = 1;

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