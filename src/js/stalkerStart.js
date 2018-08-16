init = function () {
    Player.prototype.getM3UJson();
    Player.prototype.loadEpg(Player.prototype.buildBasicEpgURL(getLanguage()));
    document.getElementsByClassName('main-content')[0].classList.remove('hidden');
};
var AUTH_URL = 'https://cdnua01.hls.tv/v3/hlsclient/auth';
//переопределить потом в epg.js
// store: function (epg) {
//     console.log('STORE-EPG');
//     if (!Array.isArray(epg)) {
//         console.error("Error: can't parse epg data");
//         return false;
//     }
//
//     stbStorage.clear();
//     for (var ch_data_i in epg) {
//         var ch_data = epg[ch_data_i];
//         var ch_id = ch_data.channel_id;
//         var epg_data_i = 0;
//
//         for (epg_data_i in ch_data.list) {
//             var epg_data = ch_data.list[epg_data_i];
//             var is_details = 0;
//             var store_data = [epg_data.start_at, epg_data.stop_at, epg_data.id, is_details, epg_data.title];
//             stbStorage.setItem(this.epg_key + ch_id + ':' + epg_data_i, store_data);
//         }
//
//         stbStorage.setItem(this.epg_index + ch_id, epg_data_i);
//     }
//     console.log(stbStorage.length);
// },
//
// searchProgram: function (ch_id, date) {
//     var self = this;
//     var searchTime = (date.getTime() / 1000) | 0;
//     //console.log(searchTime);
//     var ch_data_i = stbStorage.getItem(this.epg_index + ch_id);
//     if (!ch_data_i) {
//         return null;
//     }
//
//     for (var epg_data_i = 0; epg_data_i <= ch_data_i; epg_data_i++) {
//         var item = stbStorage.getItem(this.epg_key + ch_id + ':' + epg_data_i);
//         item = item ? item.split(',', 5) : null;
//
//         if (item && item[0] <= searchTime && item[1] >= searchTime) {
//             //console.log(item);
//             return item;
//         }
//     }
//     return null;
// }



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
    currentObj:NAV_APP,
    focusInputActivateCode:false,
    idMenuIcon:false
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

function Navigation () {
    Adapter.apply(this, arguments);
}
Navigation.prototype = Object.create(Adapter.prototype);
Navigation.prototype.selectChannel = function () {
    stalker.selectChannel();
};
Navigation.prototype.openCategories = function () {
    stalker.openCategories();
};
Navigation.prototype.watchEpg = function () {
    stalker.watchEpg();
};
Navigation.prototype.returnFocusOnChannel = function () {
    returnFocusOnChannel();
};
var navigation = new Navigation();

mag.init = function () {
    navigation.hidePlayback();
    var tvType = 'Mag';
    Auth.prototype.clientAuthorization(null, function () {
        if (navigation.ifActivationMode()) {
            mag.authorization();
        } else {
            mag.openPlayback();
        }
        return tvType;
    });
    //mag.openPlayback();
};

//наложение видео-контейнера и плейбека друг на друга
gSTB.SetTopWin(0);
gSTB.SetMode(1);
gSTB.SetTransparentColor(0);

var stbVideo = stbPlayerManager.list[0];
var instance = stbSurfaceManager.list[0];

stbVideo.onPlayStart = function () {
    console.log('Video playback has begun.');
    //mag.openPlayback();
};

window.addEventListener('keydown', function ( event ) {
    switch (event.keyCode) {
        case 13: //enter
            console.log('enter');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION :
                    mag.focusElementActivation();
                    break;
                case NAV_CONTENT :
                    navigation.showPlayback();
                    mag.setPlayerPanelUpMode();
                    navigation.setFocusOnPause();
                    break;
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
                    navigation.selectChannel();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.openPlayback();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    navigation.setGalleryImg();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    navigation.setFirstChannelActive();
                    navigation.clearChannelScroll();
                    mag.setChannelsMode();
                    stalker.channelActive = null;
                    break;
                case(NAV_PROMO_LINE):
                    navigation.removeFocusFromPromoLine();
                    if(navigation.ifPausedPromo()){
                        navigation.setFocusOnActivationWatchPromo();
                    }else{
                        navigation.setFocusOnActivationInput();
                    }
                    navigation.showAuthorizationPopup();
                    mag.setAuthorizationMode();
                    break;
            }
            break;
        case 27:
        case 8:
            console.log('back');
            switch (mag.currentObj) {
                case NAV_PROMO_LINE :
                    navigation.hidePlayback();
                    mag.setContentMode();
                    navigation.removeFocusFromPromoLine();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                case NAV_MENU_ICON :
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    break;
                case(NAV_PLAYER_PANEL_UP):
                    navigation.hidePlayback();
                    mag.setContentMode();
                    navigation.removeFocusFromPlayback();
                    break;
                case(NAV_PLAYER_PANEL_DOWN):
                    navigation.hidePlayback();
                    mag.setContentMode();
                    navigation.removeFocusFromPlayback();
                    break;
                case(NAV_MENU_LEFT_CHANNELS):
                    mag.setContentMode();
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    navigation.clearChannelScroll();
                    break;
                case(NAV_MENU_LEFT_PROGRAMS):
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM):
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_TEXT):
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    navigation.removeFocusFromAboutText();
                    break;
            }
            break;
        case 37: //left-button
            console.log('left');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION:
                    if(!navigation.getAuthError()){
                        if(!mag.focusInputActivateCode && !navigation.ifFocusOnWatchPromo()){
                            navigation.setFocusOnActivationInput();
                        }
                    }
                    else{
                        navigation.setFocusOnActivationRetry();
                    }
                    break;
                case(NAV_CONTENT):
                    mag.menu("LEFT");
                    break;
                case NAV_MENU_ICON :
                    mag.focusMenuIcon();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    navigation.leftPlaybackItem();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    navigation.leftPlaybackItem();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    navigation.openCategories();
                    mag.setCategoryMode();
                    break;
                case(NAV_MENU_LEFT_PROGRAMS):
                    navigation.hideEpgsBlocks();
                    mag.setChannelsMode();
                    navigation.returnFocusOnChannel();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM):
                    navigation.closeExtendedEpg();
                    mag.setProgramsMode();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    console.log("ifFirstGalleryImg Prev", navigation.ifFirstGalleryImg());
                    if(navigation.ifFirstGalleryImg()){
                        navigation.removeFocusFromGallery();
                        navigation.closeExtendedEpg();
                        mag.setProgramsMode();
                    }
                    else if(navigation.ifFocusOnGallery()){
                        navigation.prevGalleryImg();
                    }
                    else{
                        navigation.closeExtendedEpg();
                        mag.setProgramsMode();
                    }
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_TEXT):
                    navigation.removeFocusFromAboutText();
                    navigation.closeExtendedEpg();
                    mag.setProgramsMode();
                    break;
            }
            break;
        case 39: // right-button
            console.log('right');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION:
                    if(!navigation.getAuthError()){
                        if(mag.focusInputActivateCode){
                            document.getElementById(mag.focusInputActivateCode).blur();
                            mag.focusInputActivateCode = false;
                        }
                        if(!navigation.ifFocusOnWatchPromo()){
                            navigation.setFocusOnActivationBtn();
                        }
                    }
                    else{
                        navigation.setFocusOnActivationClose();
                    }
                    break;
                case NAV_MENU_ICON :
                    mag.focusMenuIcon();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    navigation.rightPlaybackItem();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    navigation.rightPlaybackItem();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    mag.openEpgForChannels();
                    stalker.setActiveFirstEpgItem();
                    break;
                case(NAV_MENU_LEFT_PROGRAMS):
                    mag.openExtendedEpgForChannels();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM):
                    if(navigation.ifHasGallery()){
                        navigation.setFocusOnGallery();
                        mag.setInfoProgramGalleryMode();
                    }
                    else if(navigation.ifHasAboutText()){
                        navigation.setFocusOnAboutText();
                        mag.setInfoProgramTextMode();
                    }
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    if(navigation.ifFocusOnGallery()){
                        navigation.nextGalleryImg();
                    }
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    navigation.setFirstChannelActive();
                    navigation.clearChannelScroll();
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
                case NAV_AUTHORIZATION :
                    if(!navigation.getAuthError()){
                        if(!mag.focusInputActivateCode && navigation.ifFocusOnWatchPromo()){
                            if(!navigation.ifPausedPromo()){
                                navigation.setFocusOnActivationInput();
                            }
                        }
                    }
                    break;
                case NAV_CONTENT :
                    if(!navigation.getPlaybackPanelStatus()){
                        navigation.prevChannel();
                    }
                    break;
                case NAV_MENU_ICON :
                    if(navigation.ifPromoLineExist()){
                        mag.idMenuIcon = navigation.getFocusedMenuIcon();
                        mag.setPromoLineMode();
                        navigation.setFocusOnPromoLine();
                        navigation.removeFocusFromMenusIcons();
                    }
                    break;
                case NAV_PLAYER_PANEL_UP :
                    mag.setMenuIconsMode();
                    navigation.checkActiveInPlaybackTop();
                    navigation.removeFocusFromPlayback();
                    break;
                case NAV_PLAYER_PANEL_DOWN :
                    navigation.upPlaybackItem();
                    mag.setPlayerPanelUpMode();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    stalker.prevChannelInList();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    console.log('epg-up');
                    navigation.prevEpginList();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_TEXT):
                    if(navigation.ifAboutTextNotScroll()){
                        navigation.removeFocusFromAboutText();
                        mag.setInfoProgramGalleryMode();
                        navigation.setFocusOnGallery();
                    } else{
                        navigation.scrollUpAboutText();
                    }
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    navigation.prevCategoryInList();
                    mag.selecCategoryFocus();
                    break;
            }
            break;
        case 40: // down-button
            console.log('down');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION :
                    if(!navigation.getAuthError() && !navigation.ifFocusOnWatchPromo()){
                        navigation.setFocusOnActivationWatchPromo();
                    }
                    break;
                case(NAV_CONTENT):
                    if(!navigation.getPlaybackPanelStatus()){
                        navigation.nextChannel();
                    }
                    else{
                        navigation.showPlayback();
                        mag.setPlayerPanelUpMode();
                        navigation.setFocusOnPause();
                    }
                    break;
                case NAV_MENU_ICON :
                    navigation.removeFocusFromMenusIcons();
                    navigation.showPlayback();
                    mag.setPlayerPanelUpMode();
                    navigation.setFocusOnPause();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    navigation.downPlaybackItem();
                    mag.setPlayerPanelDownMode();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    stalker.nextChannelInList();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    navigation.nextEpginList();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    if(navigation.ifHasAboutText()){
                        navigation.removeFocusFromGallery();
                        navigation.setFocusOnAboutText();
                        mag.setInfoProgramTextMode();
                    }
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_TEXT):
                    navigation.scrollDownAboutText();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    navigation.nextCategoryInList();
                    mag.selecCategoryFocus();
                    break;
                case NAV_PROMO_LINE :
                    mag.setMenuIconsMode();
                    navigation.removeFocusFromPromoLine();
                    switch(mag.idMenuIcon){
                        case("main-menu"):
                            navigation.setFocusOnHamburgerIcon();
                            break;
                        case("home-menu"):
                            navigation.setFocusOnHomeIcon();
                            break;
                        default:
                            break;
                    }
                    mag.idMenuIcon = false;
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
            playPauseImg.setAttribute('src', 'images/icons/pause-button.png');
        }
        else {
            stbVideo.pause();
            playPauseImg.setAttribute('src', 'images/icons/play-main-btn.png');
        }
    };

    //  Обрабатываем JSON с epg
    // Stalker.prototype.loadEpg = function (url, callback) {
    //     console.log('stalker.loadEpg');
    //     var self = this;
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     //xhr.responseType = "json";
    //     xhr.onload = function() {
    //         epg.store(JSON.parse(this.responseText));
    //         if(xhr.readyState == 4 && xhr.status === 200) {
    //             if (callback) {
    //                 callback();
    //             }
    //             self.initRename();
    //         }
    //     };
    //     xhr.onerror = function() {
    //         console.log( 'Ошибка ' + this.status );
    //     };
    //     xhr.send();
    // };

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
        Player.prototype.channelMouseOver(activeChannel);
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
        Player.prototype.channelMouseOver(activeChannel);
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

    Stalker.prototype.openCategories = function () {
        // var elems = document.querySelectorAll("._render_epg_btn");
        // console.log(elems.length);
        // for (var i = 0; i< elems.length; i++) {
        //     elems[i].classList.add("hidden");
        // }
        elems = document.querySelectorAll(".categories-container, .block-with-arrows");
        for (var i = 0; i< elems.length; i++) {
            elems[i].classList.remove("hidden");
        }
        var arrow = document.getElementsByClassName("main-menu-header-arrow-container")[0];
        arrow.className = arrow.className.replace(/\bmirror-vertical\b/g, "");
        //Проверить работу этого при манипуляциях с блокировкой каналов ======>
        if (!document.getElementsByClassName("category-item-container current-item")[0]) {
            document.getElementsByClassName("_category_all")[0].classList.add("current-item");
        }
        // <=======
        document.getElementsByClassName("category-item-container current-item")[0].classList.add("item-active");
        document.getElementById('arrows-container').classList.add("block-with-arrows_55vw");
        document.getElementById('main-menu').classList.add("open-categories");
        var elem = document.getElementsByClassName("ch-item item-active")[0];
        elem.className = elem.className.replace(/\bitem-active\b/g, "");
        setWidth("main-menu", 55);
    }

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

    //переключаясь на другой канал убираем класс current-item у текущего сфокусированного канала из списка
    Stalker.prototype.removeClassesBeforeSelectChannel = function () {
        var channels = document.querySelectorAll('.ch-item.current-item');
        for (var i = 0; i < channels.length; i++) {
            channels[i].className = channels[i].className.replace(/\bcurrent-item\b/g, "");
        }
    };

    //убираем классы фокуса у текущего сфокусированного канала из списка
    Stalker.prototype.removeClassesBeforeEpg = function () {
        var channels = document.querySelectorAll('.ch-item.item-active');
        for (var i = 0; i < channels.length; i++) {
            channels[i].className = channels[i].className.replace(/\bchannel-item_active\b/g, "");
            channels[i].className = channels[i].className.replace(/\bitem-active\b/g, "");
        }
    };

    stalker = new Stalker();
    Stalker.prototype.constructor = Stalker;
    stalker.toggleVolume();
    document.getElementById('fullscreen-btn').classList.add('hidden');
    volumeBtn.classList.remove('_active_btn');                                  //скрываем кнопку звука
    volumeBtn.classList.add('video-controls__item_disabled');                   //скрываем кнопку звука

    // auth.clientAuthorization(null, function () {
    //     var tvType = 'Mag';
    //     return tvType;
    // });

    mag.init();
};

mag.authorization = function(){
    mag.setAuthorizationMode();
    console.log('navigation.getAuthError():');
    console.log(navigation.getAuthError());
    if(!navigation.getAuthError()){
        if(navigation.ifPausedPromo()){
            console.log('paused_promo');
            navigation.setFocusOnActivationWatchPromo();
        }else{
            console.log('not paused_promo');
            navigation.setFocusOnActivationInput();
        }
    }else{
        console.log('error in auth');
        navigation.setFocusOnActivationRetry();
    }
};

mag.focusElementActivation = function(){
    switch(navigation.getFocusedElemInActivation()){
        case("activation-code"):
            mag.focusInputActivateCode = navigation.getFocusedActivationInputId();
            document.getElementById(mag.focusInputActivateCode).focus();
            break;
        case("activation-btn"):
            navigation.activateTariff(function(){
                if(!navigation.ifActivationMode()){
                    mag.openPlayback();
                }
                var tvType = 'Mag';
                return tvType;
            });
            break;
        case("watch-promo-btn"):
            navigation.watchPromo();
            mag.openPlayback();
            break;
        case("retry-btn"):
            navigation.retryAuth(function(){
                mag.authorization();
                var tvType = 'Mag';
                return tvType;
            });
            break;
        case("close-app-btn"):
            console.log("exit from app");
            break;
    }
};

mag.openPlayback = function(){
    navigation.showPlayback();
    this.setPlayerPanelUpMode();
    navigation.setFocusOnPause();
};

mag.eventPanel = function(){
    switch(navigation.getFocusedPlaybackItem()){
        case("play-pause-btn"):
            stalker.playOrPause();
            break;
        case("btn-previous"):
            navigation.prevChannel();
            break;
        case("btn-next"):
            navigation.nextChannel();
            break;
        case("fullscreen-btn"):
            navigation.fullScreenMode();
            break;
        case("volume-btn"):
            navigation.toggleVolume();
            break;
        case("fav-btn"):
            navigation.toggleFavorites();
            break;
        case("block-btn"):
            mag.openPopup("panel");
            break;
    }
};

mag.focusMenuIcon = function(){
    switch(navigation.getFocusedMenuIcon()){
        case("main-menu"):
            navigation.removeFocusFromMenusIcons();
            navigation.setFocusOnHomeIcon();
            break;
        case("home-menu"):
            navigation.removeFocusFromMenusIcons();
            navigation.setFocusOnHamburgerIcon();
            break;
        default:
            break;
    }
};

mag.openMenu = function(){
    switch(navigation.getFocusedMenuIcon()){
        case("main-menu"):
            navigation.openLeftMenu();
            navigation.clearChannelScroll();
            mag.setChannelsMode();
            break;
        case("home-menu"):
            // navigation.openRightMenu();
            // mag.setSettingsMode();
            break;
        default:
            break;
    }
};

mag.menu = function(event){
    switch(event){
        case("LEFT"):
            navigation.setFocusOnHamburgerIcon();
            if(!navigation.getPlaybackPanelStatus()){
                mag.openMenu();
            }
            else{
                mag.setMenuIconsMode();
                navigation.showPlayback();
            }
            break;
        case("RIGHT"):
            navigation.setFocusOnHomeIcon();
            if(!navigation.getPlaybackPanelStatus()){
                mag.openMenu();
            }
            else{
                mag.setMenuIconsMode();
                navigation.showPlayback();
            }
            break;
    }
};

mag.openEpgForChannels = function(){
    //if(navigation.ifHasEpg()){
    navigation.closeCategories();
    //navigation.saveSelectedChannelId();                         //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
    navigation.watchEpg(function(){
        mag.setErrorHandlerEpgMode();
        //navigation.setFocusOnErrorPopup();                        //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
    });
    navigation.clearEpgScroll();
    mag.setProgramsMode();
    //}
};

mag.openExtendedEpgForChannels = function(){
    if(navigation.ifHasExtendedEpg()){
        navigation.watchExtendedEpg(null,function(){
            mag.setErrorHandlerExtEpgMode();
            //navigation.setFocusOnErrorPopup();                         //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
        });
        mag.setInfoProgramMode();
    }
};

mag.selecCategoryFocus = function(){
    switch(navigation.getFocusedCategory()){
        case("blocked"):
            //mag.openPopup("category");
            break;
    }
};