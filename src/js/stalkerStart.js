video = document.getElementById('video-container');

var NAV_MENU_LEFT_CHANNELS = "channels";
var NAV_MENU_LEFT_CATEGORY = "category";
var NAV_MENU_LEFT_PROGRAMS = "programs";
var NAV_MENU_LEFT_INFO_PROGRAM = "info-programs";
var NAV_MENU_LEFT_INFO_PROGRAM_GALLERY = "info-programs-gallery";
var NAV_MENU_LEFT_INFO_PROGRAM_TEXT = "info-programs-text";
var NAV_MENU_RIGHT = "settings";
var NAV_MENU_RIGHT_PARENT_CONTROL = "settings_parent_control";
var NAV_MENU_RIGHT_PARENT_CONTROL_INPUT = "settings_parent_control_input";
var NAV_MENU_RIGHT_LANG = "settings_lang";
var NAV_CONTENT = "content";
var NAV_APP = "app";
var NAV_MENU_ICON = "menu-icon";
var NAV_PLAYER_PANEL_UP = "player_panel_up";
var NAV_PLAYER_PANEL_DOWN = "player_panel_down";
var NAV_POPUP_BLOCKED = "popup_blocked";
var NAV_AUTHORIZATION = "authorization";
var NAV_POPUP_BLOCKED = "popup_blocked";
var NAV_ERORR_HANDLER_CHANNELS = "error_handler_channels";
var NAV_ERORR_HANDLER_EPG = "error_handler_epg";
var NAV_ERORR_HANDLER_EXT_EPG = "error_handler_ext_epg";
var NAV_PROMO_LINE = "promo_line";

var mag = {
    currentObj:NAV_APP
};
mag.setAppMode = function() {this.currentObj = NAV_APP;};
/*focus menu icons*/
mag.setMenuIconsMode = function(){this.currentObj = NAV_MENU_ICON;};
/*focus left menu*/
mag.setChannelsMode = function(){this.currentObj = NAV_MENU_LEFT_CHANNELS;};
mag.setCategoryMode = function(){this.currentObj = NAV_MENU_LEFT_CATEGORY;};
mag.setProgramsMode = function(){this.currentObj = NAV_MENU_LEFT_PROGRAMS;};
mag.setInfoProgramMode = function(){this.currentObj = NAV_MENU_LEFT_INFO_PROGRAM;};
mag.setInfoProgramGalleryMode = function(){this.currentObj = NAV_MENU_LEFT_INFO_PROGRAM_GALLERY;};
mag.setInfoProgramTextMode = function(){this.currentObj = NAV_MENU_LEFT_INFO_PROGRAM_TEXT;};
/*focus right menu*/
mag.setSettingsMode = function(){this.currentObj = NAV_MENU_RIGHT;};
mag.setSettingsParentControlMode = function(){this.currentObj = NAV_MENU_RIGHT_PARENT_CONTROL;};
mag.setSettingsParentControlInputMode = function(){this.currentObj = NAV_MENU_RIGHT_PARENT_CONTROL_INPUT;};
mag.setSettingsLangMode = function(){this.currentObj = NAV_MENU_RIGHT_LANG;};
/*focus playback*/
mag.setContentMode = function() {this.currentObj = NAV_CONTENT;};
/*focus player panel*/
mag.setPlayerPanelUpMode = function() {this.currentObj = NAV_PLAYER_PANEL_UP;};
mag.setPlayerPanelDownMode = function() {this.currentObj = NAV_PLAYER_PANEL_DOWN;};
/*se focus popup blocked*/
mag.setPopupBlockedMode = function() {this.currentObj = NAV_POPUP_BLOCKED;};
/*focus authorization*/
mag.setAuthorizationMode = function(){this.currentObj = NAV_AUTHORIZATION;};
/*set focus error hadler chanels*/
mag.setErrorHandlerChannelsMode = function(){this.currentObj = NAV_ERORR_HANDLER_CHANNELS;};
/*set focus error hadler Epg*/
mag.setErrorHandlerEpgMode = function(){this.currentObj = NAV_ERORR_HANDLER_EPG;};
/*set focus error hadler ext epg*/
mag.setErrorHandlerExtEpgMode = function(){this.currentObj = NAV_ERORR_HANDLER_EXT_EPG;};
/*set focus promr line*/
mag.setPromoLineMode = function(){this.currentObj = NAV_PROMO_LINE;};
/*setfocus last mode*/
mag.setMode = function(currentObj){ this.currentObj = currentObj;};

mag.init = function () {
    mag.navigation = new Adapter();
    mag.openPlayback();
};


// console.log(stbStorage.getItem('key'));
// stbStorage.setItem('key', 123);
// console.log(stbStorage.getItem('key'));

//наложение видео-контейнера и плейбека друг на друга
gSTB.SetTopWin(0);
gSTB.SetMode(1);
gSTB.SetTransparentColor(0);

var stbVideo = stbPlayerManager.list[0];
var instance = stbSurfaceManager.list[0];

stbVideo.onPlayStart = function () {
    console.log('Video playback has begun.');
};

window.addEventListener('keydown', function ( event ) {
    switch (event.keyCode) {
        case 13: //enter
            console.log('enter');
            switch (mag.currentObj) {
                case NAV_MENU_ICON :
                    mag.openMenu();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    mag.eventPanel();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    mag.eventPanel();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    mag.navigation.selectChannel();
                    mag.navigation.removeFocusFromMenusIcons();
                    mag.navigation.closeLeftMenu();
                    mag.openPlayback();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    mag.navigation.setFirstChannelActive();
                    mag.navigation.clearChannelScroll();
                    mag.setChannelsMode();
                    stalker.channelActive = null;
                    break;
            }
            break;
        case 37: //left-button
            console.log('left');
            switch (mag.currentObj) {
                case NAV_MENU_ICON :
                    mag.focusMenuIcon();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    mag.navigation.leftPlaybackItem();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    mag.navigation.leftPlaybackItem();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    mag.navigation.openCategories();
                    mag.setCategoryMode();
                    break;
                case(NAV_MENU_LEFT_PROGRAMS):
                    mag.navigation.hideEpgsBlocks();
                    mag.setChannelsMode();
                    mag.navigation.returnFocusOnChannel();
                    break;
            }
            break;
        case 39: // right-button
            console.log('right');
            switch (mag.currentObj) {
                case NAV_MENU_ICON :
                    mag.focusMenuIcon();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    mag.navigation.rightPlaybackItem();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    mag.navigation.rightPlaybackItem();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    mag.openEpgForChannels();
                    setTimeout(function(){
                        stalker.setActiveFirstEpgItem();
                    },3000);
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    mag.navigation.setFirstChannelActive();
                    mag.navigation.clearChannelScroll();
                    mag.setChannelsMode();
                    var elems = document.querySelectorAll(".item-active");
                    console.log(elems.length);
                    for (i=0;i<elems.length;i++) {
                        console.log(elems[i].className);
                    }
                    stalker.channelActive = null;
                    break;
            }
            break;
        case 38: // up-button
            console.log('up');
            switch (mag.currentObj) {
                case NAV_PLAYER_PANEL_UP :
                    mag.setMenuIconsMode();
                    mag.navigation.checkActiveInPlaybackTop();
                    mag.navigation.removeFocusFromPlayback();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    mag.navigation.upPlaybackItem();
                    mag.setPlayerPanelUpMode();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    stalker.prevChannelInList();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    console.log('epg-up');
                    mag.navigation.prevEpginList();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    mag.navigation.prevCategoryInList();
                    mag.selecCategoryFocus();
                    break;
            }
            break;
        case 40: // down-button
            console.log('down');
            switch (mag.currentObj) {
                case NAV_MENU_ICON :
                    mag.navigation.removeFocusFromMenusIcons();
                    mag.navigation.showPlayback();
                    mag.setPlayerPanelUpMode();
                    mag.navigation.setFocusOnPause();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    mag.navigation.downPlaybackItem();
                    mag.setPlayerPanelDownMode();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    stalker.nextChannelInList();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    console.log('epg-down');
                    mag.navigation.nextEpginList();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    mag.navigation.nextCategoryInList();
                    mag.selecCategoryFocus();
                    break;
            }
            break;
        case 89: //info
            console.log('info');
            break;
        case 107: // volume up
            stbVideo.volume++;
            break;
        case 109: // volume down
            stbVideo.volume--;
            break;
    }
});

window.onload = function() {
    function Stalker() {
        this.channelActive = null;
        Player.apply(this, arguments);
    }
    Stalker.prototype = Object.create(Player.prototype);
    Stalker.prototype.setVideoType = function () {
        playback = new Factory().checkType('stalker');
    };

    Stalker.prototype.playOrPause = function () {
        var playPauseImg = document.getElementById('play-pause-btn-img');
        if (stbVideo.state == 3) {
            stbVideo.resume();
            playPauseImg.setAttribute('src', 'images/icons/pause-button.svg');
        }
        else {
            stbVideo.pause();
            playPauseImg.setAttribute('src', 'images/icons/play-main-btn.svg');
        }
    };

    //  Обрабатываем JSON с epg
    Stalker.prototype.loadEpg = function (url, callback) {
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
    Stalker.prototype.prevChannelInList = function () {
        if (!this.channelActive) {
            this.channelActive = document.querySelector(".ch-item.item-active");
        }
        var currentChannel = document.getElementsByClassName("ch-item item-active")[0];
        this.channelActive.classList.remove("ch-item_active", "item-active");
        var prevChannel = this.channelActive.previousSibling;
        if (prevChannel && prevChannel.tagName == 'DIV') {
            prevChannel.classList.add("ch-item_active", "item-active");
            this.channelActive = prevChannel;
        }
        else {
            document.querySelectorAll('._channels_group:not(.hidden) .ch-item:last-child')[0].classList.add("ch-item_active", "item-active");
            this.channelActive = document.querySelectorAll('._channels_group:not(.hidden) .ch-item:last-child')[0];
        }
        this.channelListScroll(this.channelActive, 'prev');
        var activeChannel = document.querySelector('.ch-item.item-active');
        //Player.prototype.channelMouseOver(activeChannel);
    };

//листаем список каналов вниз
    Stalker.prototype.nextChannelInList = function () {
        var nextChannel;
        if (this.channelActive == null) {
            this.channelActive = document.querySelector(".ch-item.item-active");
        }
        var currentChannel = this.channelActive;
        this.channelActive.classList.remove("ch-item_active", "item-active");
        if (this.channelActive.nextElementSibling) {
            nextChannel = this.channelActive.nextSibling;
            if (nextChannel.getAttribute("_cid")) {
                nextChannel.classList.add("ch-item_active", "item-active");
            }
        }
        else {
            document.querySelectorAll('._channels_group:not(.hidden) ._channel:nth-child(2)')[0].classList.add("ch-item_active", "item-active");
        }
        this.channelActive = nextChannel;
        this.channelListScroll(currentChannel, 'next');
        var activeChannel = document.querySelector('._channel.item-active');
        //Player.prototype.channelMouseOver(activeChannel);
    };

    var channelContainerScroll = 0;
    Stalker.prototype.channelListScroll = function (currentChannel, direction) {
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
                    currentChannel.scrollIntoView();
                    //channelContainerScroll = currentChannel.getBoundingClientRect().top;
                }
            }
            else {                                                       //текущий канал первый
                //channelContainerScroll = currentChannel.getBoundingClientRect().top;
                //currentChannel.scrollIntoView();
            }
        }
    };

    //ставим фиолетовый фокус на первый достпный элемент из списка Епг
    Stalker.prototype.setActiveFirstEpgItem = function () {
        var firstVisibleProgram;
        var programms = document.querySelectorAll('.epg-day-prog');
        for (i=0; i<programms.length; i++) {
            if (!programms[i].classList.contains('hidden')) {
                firstVisibleProgram = programms[i];
                break;
            }
        }
        addClassCurrentItem(firstVisibleProgram);
        addClassActiveItem(firstVisibleProgram);
    };

    stalker = new Stalker();
    Stalker.prototype.constructor = Stalker;
    stalker.toggleVolume();
    document.getElementById('fullscreen-btn').classList.add('hidden');
    volumeBtn.classList.remove('_active_btn');                                  //скрываем кнопку звука
    volumeBtn.classList.add('video-controls__item_disabled');                   //скрываем кнопку звука

    auth.clientAuthorization(null, function () {
        var tvType = 'WebOSLG';
        return tvType;
    });

    mag.init();
};

mag.openPlayback = function(){
    mag.navigation.showPlayback();
    this.setPlayerPanelUpMode();
    mag.navigation.setFocusOnPause();
};

mag.eventPanel = function(){
    switch(mag.navigation.getFocusedPlaybackItem()){
        case("play-pause-btn"):
            stalker.playOrPause();
            break;
        case("btn-previous"):
            mag.navigation.prevChannel();
            break;
        case("btn-next"):
            mag.navigation.nextChannel();
            break;
        case("fullscreen-btn"):
            mag.navigation.fullScreenMode();
            break;
        case("volume-btn"):
            mag.navigation.toggleVolume();
            break;
        case("fav-btn"):
            mag.navigation.toggleFavorites();
            break;
        case("block-btn"):
            mag.openPopup("panel");
            break;
    }
};

mag.focusMenuIcon = function(){
    switch(mag.navigation.getFocusedMenuIcon()){
        case("main-menu"):
            mag.navigation.removeFocusFromMenusIcons();
            mag.navigation.setFocusOnHomeIcon();
            break;
        case("home-menu"):
            mag.navigation.removeFocusFromMenusIcons();
            mag.navigation.setFocusOnHamburgerIcon();
            break;
        default:
            break;
    }
};

mag.openMenu = function(){
    switch(mag.navigation.getFocusedMenuIcon()){
        case("main-menu"):
            mag.navigation.openLeftMenu();
            mag.navigation.clearChannelScroll();
            mag.setChannelsMode();
            break;
        case("home-menu"):
            mag.navigation.openRightMenu();
            mag.setSettingsMode();
            break;
        default:
            break;
    }
};

mag.openEpgForChannels = function(){
    //if(mag.navigation.ifHasEpg()){
    mag.navigation.closeCategories();
    //mag.navigation.saveSelectedChannelId();                         //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
    mag.navigation.watchEpg(function(){
        mag.setErrorHandlerEpgMode();
        //mag.navigation.setFocusOnErrorPopup();                        //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
    });
    mag.navigation.clearEpgScroll();
    mag.setProgramsMode();
    //}
};

mag.selecCategoryFocus = function(){
    switch(mag.navigation.getFocusedCategory()){
        case("blocked"):
            //mag.openPopup("category");
            break;
    }
};