function Stalker () {}

Stalker.prototype.play = function (url) {
    video.play({
        uri: url,
        solution: 'auto'
    });
};

Stalker.prototype.stop = function(){
    video.stop();
};

//переключение каналов
Stalker.prototype.switch = function (url) {
    var self = this;
    Stalker.prototype.stop();
    setTimeout(function(){
        Stalker.prototype.startPlay(url);
    },true);
};