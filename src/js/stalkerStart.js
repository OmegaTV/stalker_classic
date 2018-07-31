video = document.getElementById('video-container');

// console.log(stbStorage.getItem('key'));
// stbStorage.setItem('key', 123);
// console.log(stbStorage.getItem('key'));

//наложение видео-контейнера и плейбека друг на друга
gSTB.SetTopWin(0);
gSTB.SetMode(1);
// ////gSTB.SetWinMode(0, 1);
 gSTB.SetTransparentColor(0);
////gSTB.SetChromaKey(0, 0xffffff);

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
        case 37:
            console.log('left');
            openLeftMenu();
            break;
        case 38: // up
            console.log('up');
            prevChannelInList();
            break;
        case 39: // top
            console.log('right');
            Player.prototype.watchEpg();
            break;
        case 40: // down
            console.log('down');
            nextChannelInList();
            break;
        case 13: //enter
            console.log('enter');
            Player.prototype.selectChannel();
            break;
        case 89: //info
            console.log('info');
            openCategories();
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


//  Обрабатываем JSON с epg
Player.prototype.loadEpg = function (url, callback) {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    //xhr.responseType = "json";
    xhr.onload = function() {
        epg.store(JSON.parse(this.responseText));
        if(xhr.readyState == 4 && xhr.status === 200) {
            if (callback) {
                callback();
            }
            self.initRename();
        }
    };
    xhr.onerror = function() {
        console.log( 'Ошибка ' + this.status );
    };
    xhr.send();
};


//листаем список каналов вверх
var channelActive;
function prevChannelInList() {
    if (!channelActive) {
        channelActive = document.querySelector("._channel.item-active");
    }
    var currentChannel = document.getElementsByClassName("_channel item-active")[0];
    channelActive.classList.remove("ch-item_active", "item-active");
    var prevChannel = channelActive.previousSibling;
    if (prevChannel && prevChannel.tagName == 'DIV') {
        prevChannel.classList.add("ch-item_active", "item-active");
        channelActive = prevChannel;
    }
    else {
        document.querySelectorAll('._channels_group:not(.hidden) ._channel:last-child')[0].classList.add("ch-item_active", "item-active");
        channelActive = document.querySelectorAll('._channels_group:not(.hidden) ._channel:last-child')[0];
    }
    channelListScroll(channelActive, 'prev');
    var activeChannel = document.querySelector('._channel.item-active');
    //Player.prototype.channelMouseOver(activeChannel);
}

//листаем список каналов вниз
function nextChannelInList () {
    var nextChannel;
    if (!channelActive) {
        channelActive = document.querySelector("._channel.item-active");
    }
    var currentChannel = channelActive;
    channelActive.classList.remove("ch-item_active", "item-active");
    if (channelActive.nextElementSibling) {
        nextChannel = channelActive.nextSibling;
        if (nextChannel.getAttribute("_cid")) {
            nextChannel.classList.add("ch-item_active", "item-active");
        }
    }
    else {
        document.querySelectorAll('._channels_group:not(.hidden) ._channel:nth-child(2)')[0].classList.add("ch-item_active", "item-active");
    }
    channelActive = nextChannel;
    channelListScroll(currentChannel, 'next');
    var activeChannel = document.querySelector('._channel.item-active');
    //Player.prototype.channelMouseOver(activeChannel);
}


var channelContainerScroll = 0;
function channelListScroll(currentChannel, direction) {
    console.log(currentChannel.getAttribute('_cid'));
    if (direction == 'next') {
        if (currentChannel.nextSibling) {       //текущий канал НЕ последний
            var nextChannel = currentChannel.nextSibling;
            var isVisible = checkIfVisible(nextChannel);
            if (!isVisible) {
                nextChannel.scrollIntoView();
                //channelContainerScroll = currentChannel.getBoundingClientRect().top;
            }
        }
        else {                                  //текущий канал последний
            //channelContainerScroll = 0;
            channelGroupsContainer.scrollTop = 0;
        }
    }
    else if (direction == 'prev') {     //здесь currentChannel уже является следующим наведенным каналом
        if (currentChannel.nextSibling) {       //текущий канал НЕ первый
            //var isVisible = checkIfVisible(currentChannel);
            //if (prevChannelPosTop <= containerPosTop) {
            if (!isVisible) {
                console.log('OLOLO');
                currentChannel.scrollIntoView();
                //channelContainerScroll = currentChannel.getBoundingClientRect().top;
            }
        }
        else {                                                       //текущий канал первый
            //channelContainerScroll = currentChannel.getBoundingClientRect().top;
            //currentChannel.scrollIntoView();
        }
    }
}