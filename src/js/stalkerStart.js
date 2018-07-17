var video = document.getElementById('video');

window.onload = function() {
    function Webos() {
        Player.apply(this, arguments);
    }

    Webos.prototype = Object.create(Player.prototype);
    Webos.prototype.setVideoType = function () {
        playback = new Factory().checkType('html');
        console.log('right type');
    };
    webos = new Webos();
    Webos.prototype.constructor = Webos;
    webos.toggleVolume();
    document.getElementById('fullscreen-btn').classList.add('hidden');
    //volumeBtn.classList.remove('_active_btn');                                  //скрываем кнопку звука
    //volumeBtn.classList.add('video-controls__item_disabled');                   //скрываем кнопку звука
    console.log('qwerty');

    auth.clientAuthorization(null, function () {
        var tvType = 'WebOSLG';
        return tvType;
    });

};