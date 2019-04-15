var MD5 = function (s) {
    function L(k, d) {
        return(k << d) | (k >>> (32 - d))
    }
    function K(G, k) {
        var I, d, F, H, x;
        F = (G & 2147483648);
        H = (k & 2147483648);
        I = (G & 1073741824);
        d = (k & 1073741824);
        x = (G & 1073741823) + (k & 1073741823);
        if (I & d) {
            return(x ^ 2147483648 ^ F ^ H)
        }
        if (I | d) {
            if (x & 1073741824) {
                return(x ^ 3221225472 ^ F ^ H)
            } else {
                return(x ^ 1073741824 ^ F ^ H)
            }
        } else {
            return(x ^ F ^ H)
        }
    }
    function r(d, F, k) {
        return(d & F) | ((~d) & k)
    }
    function q(d, F, k) {
        return(d & k) | (F & (~k))
    }
    function p(d, F, k) {
        return(d ^ F ^ k)
    }
    function n(d, F, k) {
        return(F ^ (d | (~k)))
    }
    function u(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(r(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function f(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(q(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function D(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(p(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function t(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(n(F, aa, Z), k), I));
        return K(L(G, H), F)
    }
    function e(G) {
        var Z;
        var F = G.length;
        var x = F + 8;
        var k = (x - (x % 64)) / 64;
        var I = (k + 1) * 16;
        var aa = Array(I - 1);
        var d = 0;
        var H = 0;
        while (H < F) {
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
            H++
        }
        Z = (H - (H % 4)) / 4;
        d = (H % 4) * 8;
        aa[Z] = aa[Z] | (128 << d);
        aa[I - 2] = F << 3;
        aa[I - 1] = F >>> 29;
        return aa
    }
    function B(x) {
        var k = "", F = "", G, d;
        for (d = 0; d <= 3; d++) {
            G = (x >>> (d * 8)) & 255;
            F = "0" + G.toString(16);
            k = k + F.substr(F.length - 2, 2)
        }
        return k
    }
    function J(k) {
        k = k.replace(/rn/g, "n");
        var d = "";
        for (var F = 0; F < k.length; F++) {
            var x = k.charCodeAt(F);
            if (x < 128) {
                d += String.fromCharCode(x)
            } else {
                if ((x > 127) && (x < 2048)) {
                    d += String.fromCharCode((x >> 6) | 192);
                    d += String.fromCharCode((x & 63) | 128)
                } else {
                    d += String.fromCharCode((x >> 12) | 224);
                    d += String.fromCharCode(((x >> 6) & 63) | 128);
                    d += String.fromCharCode((x & 63) | 128)
                }
            }
        }
        return d
    }
    var C = Array();
    var P, h, E, v, g, Y, X, W, V;
    var S = 7, Q = 12, N = 17, M = 22;
    var A = 5, z = 9, y = 14, w = 20;
    var o = 4, m = 11, l = 16, j = 23;
    var U = 6, T = 10, R = 15, O = 21;
    s = J(s);
    C = e(s);
    Y = 1732584193;
    X = 4023233417;
    W = 2562383102;
    V = 271733878;
    for (P = 0; P < C.length; P += 16) {
        h = Y;
        E = X;
        v = W;
        g = V;
        Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
        V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
        W = u(W, V, Y, X, C[P + 2], N, 606105819);
        X = u(X, W, V, Y, C[P + 3], M, 3250441966);
        Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
        V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
        W = u(W, V, Y, X, C[P + 6], N, 2821735955);
        X = u(X, W, V, Y, C[P + 7], M, 4249261313);
        Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
        V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
        W = u(W, V, Y, X, C[P + 10], N, 4294925233);
        X = u(X, W, V, Y, C[P + 11], M, 2304563134);
        Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
        V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
        W = u(W, V, Y, X, C[P + 14], N, 2792965006);
        X = u(X, W, V, Y, C[P + 15], M, 1236535329);
        Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
        V = f(V, Y, X, W, C[P + 6], z, 3225465664);
        W = f(W, V, Y, X, C[P + 11], y, 643717713);
        X = f(X, W, V, Y, C[P + 0], w, 3921069994);
        Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
        V = f(V, Y, X, W, C[P + 10], z, 38016083);
        W = f(W, V, Y, X, C[P + 15], y, 3634488961);
        X = f(X, W, V, Y, C[P + 4], w, 3889429448);
        Y = f(Y, X, W, V, C[P + 9], A, 568446438);
        V = f(V, Y, X, W, C[P + 14], z, 3275163606);
        W = f(W, V, Y, X, C[P + 3], y, 4107603335);
        X = f(X, W, V, Y, C[P + 8], w, 1163531501);
        Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
        V = f(V, Y, X, W, C[P + 2], z, 4243563512);
        W = f(W, V, Y, X, C[P + 7], y, 1735328473);
        X = f(X, W, V, Y, C[P + 12], w, 2368359562);
        Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
        V = D(V, Y, X, W, C[P + 8], m, 2272392833);
        W = D(W, V, Y, X, C[P + 11], l, 1839030562);
        X = D(X, W, V, Y, C[P + 14], j, 4259657740);
        Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
        V = D(V, Y, X, W, C[P + 4], m, 1272893353);
        W = D(W, V, Y, X, C[P + 7], l, 4139469664);
        X = D(X, W, V, Y, C[P + 10], j, 3200236656);
        Y = D(Y, X, W, V, C[P + 13], o, 681279174);
        V = D(V, Y, X, W, C[P + 0], m, 3936430074);
        W = D(W, V, Y, X, C[P + 3], l, 3572445317);
        X = D(X, W, V, Y, C[P + 6], j, 76029189);
        Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
        V = D(V, Y, X, W, C[P + 12], m, 3873151461);
        W = D(W, V, Y, X, C[P + 15], l, 530742520);
        X = D(X, W, V, Y, C[P + 2], j, 3299628645);
        Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
        V = t(V, Y, X, W, C[P + 7], T, 1126891415);
        W = t(W, V, Y, X, C[P + 14], R, 2878612391);
        X = t(X, W, V, Y, C[P + 5], O, 4237533241);
        Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
        V = t(V, Y, X, W, C[P + 3], T, 2399980690);
        W = t(W, V, Y, X, C[P + 10], R, 4293915773);
        X = t(X, W, V, Y, C[P + 1], O, 2240044497);
        Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
        V = t(V, Y, X, W, C[P + 15], T, 4264355552);
        W = t(W, V, Y, X, C[P + 6], R, 2734768916);
        X = t(X, W, V, Y, C[P + 13], O, 1309151649);
        Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
        V = t(V, Y, X, W, C[P + 11], T, 3174756917);
        W = t(W, V, Y, X, C[P + 2], R, 718787259);
        X = t(X, W, V, Y, C[P + 9], O, 3951481745);
        Y = K(Y, h);
        X = K(X, E);
        W = K(W, v);
        V = K(V, g)
    }
    var i = B(Y) + B(X) + B(W) + B(V);
    return i.toLowerCase()
};
localization = {
    apply: function(lang){
        var loc = this.langs[lang];
        var locItems = document.querySelectorAll("[loc]");
        for (var i=0; i<locItems.length; i++) {
            var attr_val = locItems[i].getAttribute('loc');
            locItems[i].textContent = loc[attr_val];
            if (locItems[i].classList.contains('password-input')) {
                locItems[i].setAttribute('placeholder', loc[attr_val]);
            }
        }
    },
    langs: {
        ua: {
            categories_tab: "Категорії",
            epg_tab: "Програми",
            all_channels: "Всі канали",
            program: "Програми",
            more_about: "Детальніше",
            favorites: "Вибрані",
            settings: "Налаштування",
            parental_control: "Батьківський контроль",
            channels: "Канали",
            archive: "Архів",
            profile: "Профайл",
            sunday: "Неділя",
            monday: "Понеділок",
            tuesday: "Вівторок",
            wednesday: "Середа",
            thursday: "Четвер",
            friday: "П'ятниця",
            saturday: "Субота",
            language: "Мова",
            ukraine: "Українська",
            ukraine_sm: "Укр",
            english: "Англійська",
            english_sm: "Анг",
            poland: "Польська",
            poland_sm: "Пол",
            russian: "Російська",
            russian_sm: "Рос",
            reset_to_default: "Скинути значення",
            serial: "Серійний номер",
            save: "Зберегти",
            category_all: "Всі канали",
            category_favorites: "Вибрані",
            category_blocked: "Заблоковані",
            category_1: "Iнформаційний",
            category_2: "Фільми",
            category_4: "Спортивний",
            category_5: "Пізнавальний",
            category_6: "Дитячий",
            category_7: "Розважальний",
            category_8: "Багатопрофільний",
            category_9: "Музичний",
            category_15: "Телемагазин",
            category_21: "Для дорослих",
            category_23: "Релігійний",
            category_26: "Ефір",
            blocked: "Заблоковані",
            serial_number: "Серійний номер відсутній",
            add_to_blocked: "Введіть пароль для підтвердження додавання каналу в blocked.",
            remove_from_blocked: "Введіть пароль для підтвердження видалення каналу з blocked.",
            enter_to_blocked: "Введіть пароль для підтвердження входу в blocked.",
            set_pc_password: "Встановіть пароль батьківського контролю.",
            enter_password: "Введіть пароль",
            cancel_btn: "Назад",
            ok_btn: "OK",
            current_pass: "Поточний пароль",
            new_pass: "Новий пароль",
            confirm_pass: "Підтвердити пароль",
            success_saved: "Пароль збережений",
            incorrect_password: "Невірний пароль",
            empty_password: "Пароль не може бути порожнім",
            different_password: "Паролі різні",
            rotate_phone: "Поверніть телефон",
            load_more: "Завантажити ще",
            home_menu: "Головне меню",
            internet_error: "Перевірте підключення до мережі Інтернет",
            playlist_error: "Не вдалося отримати плейлист. <br> Повторна спроба отримання…",
            channel_error: "Не вдалося підключитися до каналу",
            blocked_error: "Заблокований канал",
            tariff_plan_activation: "Активація тарифного плану",
            for_activation_tariff: "Для активації тарифного плану необхідно ввести код активації",
            service_is_stopped: "Дія послуги призупиненa. Зверніться до вашого оператора для продовження послуги",
            promo_line_small_promo: "Послуга призупинена, кількість каналів обмежена. Зверніться до вашого оператора",
            enter_activation_code: "Введіть код активації",
            activate: "Активувати",
            see_promo: "Дивитися промо",
            until_end_promo: "До кінця промо періоду залишилося ",
            days: " дні/днів",
            incorrect_activating_code: "Невірний код активації",
            error: "Помилка",
            error_1: "Для перегляду контенту зверніться до вашого оператора",
            error_4: "Client out of date",
            error_5: "Not supported",
            error_6: "Critical update",
            error_8: "Wrong data",
            error_7: "Unknown client version",
            error_9: "Unknown platform",
            error_10: "Not trashed client",
            error_11: "Введено невірний код",
            error_12: "Вичерпані всі спроби ввести код",
            error_13: "Код недійсний",
            retry_btn: "Повторити",
            close_app_btn: "Закрити",
            m3u_error_text: "",
            epg_error_text: "",
            extEpg_error_text: "",
            there_is_no_epg: "Недоступно",
            exit_app_title: "Ви дійсно хочете вийти із програми?"
        },
        en: {
            categories_tab: "Categories",
            epg_tab: "Programs",
            all_channels: "All channels",
            program: "Programs",
            more_about: "More About",
            favorites: "Favorites",
            settings: "Settings",
            parental_control: "Parental control",
            channels: "Channels",
            archive: "Archive",
            profile: "Profile",
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            language: "Language",
            ukraine: "Ukraine",
            ukraine_sm: "Ukr",
            english: "English",
            english_sm: "Eng",
            poland: "Poland",
            poland_sm: "Pol",
            russian: "Russian",
            russian_sm: "Ru",
            reset_to_default: "reset to default",
            serial: "Serial number",
            save: "Save",
            category_all: "All channels",
            category_favorites: "Favorites",
            category_blocked: "Blocked",
            category_1: "Information",
            category_2: "Films",
            category_4: "Sports",
            category_5: "Informative",
            category_6: "Children's",
            category_7: "Entertaining",
            category_8: "Multidisciplinary",
            category_9: "Musical",
            category_15: "Teleshopping",
            category_21: "For adults",
            category_23: "Religious",
            category_26: "On-air",
            blocked: "Blocked",
            serial_number: "No serial number",
            add_to_blocked: "Enter the password to confirm that the channel has been blocked.",
            remove_from_blocked: "Enter the password to confirm the deletion of the channel from blocked.",
            enter_to_blocked: "Enter the password to confirm the login to blocked.",
            set_pc_password: "Set the parental control password.",
            enter_password: "Enter password",
            cancel_btn: "Cancel",
            ok_btn: "OK",
            current_pass: "Current password",
            new_pass: "New password",
            confirm_pass: "Confirm password",
            success_saved: "Password saved",
            incorrect_password: "Incorrect password",
            empty_password: "Password can't be empty",
            different_password: "Passwords are different",
            rotate_phone: "Rotate phone",
            load_more: "Load more",
            home_menu: "Home menu",
            internet_error: "Check the internet connection",
            playlist_error: "Unable to download playlist. <br> Retrying download…",
            channel_error: "Unable to connect to the channel",
            blocked_error: "Blocked channel",
            tariff_plan_activation: "Activation of the tariff plan",
            for_activation_tariff: "You must enter the activation code to activate the tariff plan",
            service_is_stopped: "The service is suspended. Contact your service provider for service extension",
            promo_line_small_promo: "Услуга приостановлена, количество каналов ограничено. Обратитесь к вашему оператору",
            enter_activation_code: "Enter activation code",
            activate: "Activate",
            see_promo: "Watch promo",
            until_end_promo: "Until the end of the promotional period there are/is ",
            days: " days/day left",
            incorrect_activating_code: "Incorrect activating code",
            error: "Error",
            error_1: "To view the content, contact your operator",
            error_4: "Client out of date",
            error_5: "Not supported",
            error_6: "Critical update",
            error_8: "Wrong data",
            error_7: "Unknown client version",
            error_9: "Unknown platform",
            error_10: "Not trashed client",
            error_11: "Code not found",
            error_12: "Exhausted all attempts to enter the code",
            error_13: "Code expired",
            retry_btn: "Retry",
            close_app_btn: "Close",
            m3u_error_text: "",
            epg_error_text: "",
            extEpg_error_text: "",
            there_is_no_epg: "Not available",
            exit_app_title:  "Are you sure you want to exit?"
        },
        ru: {
            categories_tab: "Категории",
            epg_tab: "Программы",
            all_channels: "Все каналы",
            program: "Программы",
            more_about: "Подробнее",
            favorites: "Избранное",
            settings: "Настройки",
            parental_control: "Родительский контроль",
            channels: "Каналы",
            archive: "Архив",
            profile: "Профайл",
            sunday: "Воскресенье",
            monday: "Понедельник",
            tuesday: "Вторник",
            wednesday: "Среда",
            thursday: "Четверг",
            friday: "Пятница",
            saturday: "Суббота",
            language: "Язык",
            ukraine: "Украинский",
            ukraine_sm: "Укр",
            english: "Английский",
            english_sm: "Анг",
            poland: "Польский",
            poland_sm: "Пол",
            russian: "Русский",
            russian_sm: "Рус",
            reset_to_default: "Сбросить значения",
            serial: "Серийный номер",
            save: "Сохранить",
            category_all: "Все каналы",
            category_favorites: "Избранные",
            category_blocked: "Заблокированные",
            category_1: "Информационные",
            category_2: "Фильмы",
            category_4: "Спортивные",
            category_5: "Познавательные",
            category_6: "Детские",
            category_7: "Развлекательные",
            category_8: "Многопрофильные",
            category_9: "Музыкальные",
            category_15: "Телемагазин",
            category_21: "Для взрослых",
            category_23: "Религиозные",
            category_26: "Эфир",
            blocked: "Заблокированные",
            serial_number: "Серийный номер отсутствует",
            add_to_blocked: "Введите пароль для подтверждения добавления канала в blocked.",
            remove_from_blocked: "Введите пароль для подтверждения удаления канала из blocked.",
            enter_to_blocked: "Введите пароль для подтверждения входа в blocked.",
            set_pc_password: "Установите пароль родительского контроля",
            enter_password: "Введите пароль",
            cancel_btn: "Назад",
            ok_btn: "OK",
            current_pass: "Текущий пароль",
            new_pass: "Новый пароль",
            confirm_pass: "Подтвердите пароль",
            success_saved: "Пароль сохранён",
            incorrect_password: "Неверный пароль",
            empty_password: "Пароль не может быть пустым",
            different_password: "Пароли разные",
            rotate_phone: "Поверните телефон",
            load_more: "Загрузить ещё",
            home_menu: "Главное меню",
            internet_error: "Проверьте подключение к интернету",
            playlist_error: "Не удалось получить плейлист. <br> Повторная попытка получения...",
            channel_error: "Не удалось подключиться к каналу",
            blocked_error: "Заблокированный канал",
            tariff_plan_activation: "Активация тарифного плана",
            for_activation_tariff: "Для активации тарифного плана необходимо ввести код активации",
            service_is_stopped: "Действие услуги приостановлено. Обратитесь к вашему оператору для продление услуги",
            promo_line_small_promo: "Услуга приостановлена, количество каналов ограничено. Обратитесь к вашему оператору",
            enter_activation_code: "Введите код активации",
            activate: "Активировать",
            see_promo: "Смотреть промо",
            until_end_promo: "До конца промо периода осталось ",
            days: " дня/дней",
            incorrect_activating_code: "Неправильный код активации",
            error: "Ошибка",
            error_1: "Для просмотра контента обратитесь к вашему оператору",
            error_4: "Client out of date",
            error_5: "Not supported",
            error_6: "Critical update",
            error_8: "Wrong data",
            error_7: "Unknown client version",
            error_9: "Unknown platform",
            error_10: "Not trashed client",
            error_11: "Введен неверный код",
            error_12: "Исчерпаны все попытки на ввод кода",
            error_13: "Код не действителен",
            retry_btn: "Повторить",
            close_app_btn: "Закрыть",
            m3u_error_text: "",
            epg_error_text: "",
            extEpg_error_text: "",
            there_is_no_epg: "Недоступно",
            exit_app_title: "Вы действительно хотите выйти?"
        },
        pl: {
            categories_tab: "Kategorie",
            epg_tab: "Programy telewizyjne",
            all_channels: "Wszystkie kanaly",
            program: "Programy telewizyjne",
            more_about: "Wiecej na temat",
            favorites: "Ulubione",
            settings: "Ustawienia",
            parental_control: "Kontrola rodzicielska",
            channels: "Kanały",
            archive: "Archiwum",
            profile: "Profil",
            sunday: "Niedziela",
            monday: "Poniedzialek",
            tuesday: "Wtorek",
            wednesday: "Sroda",
            thursday: "Czwartek",
            friday: "Piatek",
            saturday: "Sobota",
            language: "Jezyk",
            ukraine: "Ukraine",
            ukraine_sm: "Ukr",
            english: "English",
            english_sm: "Eng",
            poland: "Poland",
            poland_sm: "Pol",
            russian: "Rosyjski",
            russian_sm: "Ros",
            reset_to_default: "Przywroc ustawienia domyslne",
            serial: "Numer seryjny",
            save: "Zapisz wszystko",
            category_all: "Wszystkie kanaly",
            category_favorites: "Ulubione",
            category_blocked: "Zablokowany",
            category_1: "Informacje",
            category_2: "Filmy",
            category_4: "Athletic",
            category_5: "Cognitive",
            category_6: "Dzieci",
            category_7: "Zabawny",
            category_8: "Multidyscyplinarny",
            category_9: "Musical",
            category_15: "Telezakupy",
            category_21: "Dla doroslych",
            category_23: "Religijni",
            category_26: "On-air",
            blocked: "Zablokowany",
            serial_number: "Brak numeru seryjnego",
            add_to_blocked: "Wprowadz hasło, aby potwierdzic, ze kanal zostal zablokowany.",
            remove_from_blocked: "Wprowadz haslo, aby potwierdzic usuniecie kanalu z zablokowanego.",
            enter_to_blocked: "Wprowadz haslo, aby potwierdzic logowanie do zablokowania.",
            set_pc_password: "Ustaw haslo kontroli rodzicielskiej.",
            enter_password: "Wprowadz haslo",
            cancel_btn: "Anuluj",
            ok_btn: "Potwierdz",
            current_pass: "Aktualne haslo",
            new_pass: "Nowe haslo",
            confirm_pass: "Potwierdz haslo",
            success_saved: "Haslo zapisane",
            incorrect_password: "Niepoprawne haslo",
            empty_password: "Haslo nie moze byc puste",
            different_password: "Hasla sa rozne",
            rotate_phone: "Obroc telefon",
            load_more: "Load more",
            home_menu: "Menu główne",
            internet_error: "Sprawdź połączenie z Internetem",
            playlist_error: "Nie mogę pobrać listy odtwarzania. <br> Powtarzanie pobierz...",
            channel_error: "Nie można połączyć się z kanałem",
            blocked_error: "Zablokowany kanał",
            tariff_plan_activation: "Aktywacja abonamentu",
            for_activation_tariff: "Do aktywacji planu, należy wprowadzić kod aktywacyjny",
            service_is_stopped: "Действие услуги приостановлено. Обратитесь к вашему оператору для продление услуги",
            promo_line_small_promo: "Услуга приостановлена, количество каналов ограничено. Обратитесь к вашему оператору",
            enter_activation_code: "Wprowadź kod aktywacyjny",
            activate: "Aktywować",
            see_promo: "Zobacz promo",
            until_end_promo: "Do końca promocji okresu pozostało ",
            days: " dni",
            incorrect_activating_code: "Nieprawidłowy kod aktywacyjny",
            error: "Error",
            error_1: "Not approved client",
            error_4: "Client out of date",
            error_5: "Not supported",
            error_6: "Critical update",
            error_8: "Wrong data",
            error_7: "Unknown client version",
            error_9: "Unknown platform",
            error_10: "Not trashed client",
            error_11: "Code not found",
            error_12: "Blocked",
            error_13: "Code expired",
            retry_btn: "Retry",
            close_app_btn: "Close",
            m3u_error_text: "",
            epg_error_text: "",
            extEpg_error_text: "",
            there_is_no_epg: "Not available",
            exit_app_title: "Czy na pewno chcesz wyjść?"
        }
    }
};
function Adapter () {}

//ЛЕВОЕ МЕНЮ
// Установить фокус на иконке Гамбургера
Adapter.prototype.setFocusOnHamburgerIcon = function () {
    setFocusOnHamburgerIcon();
};

//открыть левое меню
Adapter.prototype.openLeftMenu = function () {
    openLeftMenu();
};

//закрыть левое меню
Adapter.prototype.closeLeftMenu = function() {
    hideMainMenu();
};

//кликаем по выбранному каналу
Adapter.prototype.selectChannel = function () {
    Player.prototype.selectChannel();
};

//листаем список каналов вверх
Adapter.prototype.prevChannelInList = function () {
    Player.prototype.prevChannelInList();
};

//листаем список каналов вниз
Adapter.prototype.nextChannelInList = function () {
    Player.prototype.nextChannelInList();
};

//Возвращаем скролл списка каналов в начальную точку
Adapter.prototype.clearChannelScroll = function () {
    clearChannelScroll();
};

//EPG
//Проверяем или есть у текущего канала Епг
Adapter.prototype.ifHasEpg = function () {
    return ifHasEpg();
};
//открыть Epg выбранного канала
Adapter.prototype.watchEpg = function () {
    Player.prototype.watchEpg();
};

//листаем список Epg вверх
Adapter.prototype.prevEpginList = function () {
    prevEpginList();
};

//листаем список Epg вниз
Adapter.prototype.nextEpginList = function () {
    nextEpginList();
};

//Возвращаем скролл списка Епг в начальную точку
Adapter.prototype.clearEpgScroll = function () {
    clearEpgScroll();
};

//Возвращаем фокус на канал в списке после закрытия Епг
Adapter.prototype.returnFocusOnChannel = function () {
    returnFocusOnChannel();
    removeClassesBeforeCloseEpg();
};


//Extended EPG
//Проверяем или есть у текущей передачи расширенное епг
Adapter.prototype.ifHasExtendedEpg = function () {
    return ifHasExtendedEpg();
};
//открыть расширенное Epg
Adapter.prototype.watchExtendedEpg = function (target) {
    Player.prototype.watchExtendedEpg(target);
};

//закрыть расширенное Epg
Adapter.prototype.closeExtendedEpg = function (target) {
    Player.prototype.closeExtendedEpg(target);
};

//скрываем контейнеры с Epg и расширенным Epg
Adapter.prototype.hideEpgsBlocks = function () {
    Player.prototype.hideEpgsBlocks();
};

//устанавливаем фокус на первую картинку в расшир. Epg
Adapter.prototype.setFocusOnGallery = function () {
    setFocusOnGallery();
};

//убираем фокус с картинок в расшир. Epg
Adapter.prototype.removeFocusFromGallery = function () {
    removeFocusFromGallery();
};

//Проверить установлен ли фокус на картинках галереи
Adapter.prototype.ifFocusOnGallery = function () {
    return ifFocusOnGallery();
};

//Проверить есть ли галерея у расшир. Epg
Adapter.prototype.ifHasGallery = function () {
    return ifHasGallery();
};

//Проверить есть ли текстовое описание у расшир. Epg
Adapter.prototype.ifHasAboutText = function () {
    return ifHasAboutText();
};

//проверяем на первой ли картинке галереи установлен фокус
Adapter.prototype.ifFirstGalleryImg = function () {
    return ifFirstGalleryImg();
};

//раскрыть сфокусированную картинку галереи
Adapter.prototype.setGalleryImg = function () {
    setGalleryImg();
};

//листаем назад картинки из расширенного Epg
Adapter.prototype.prevGalleryImg = function () {
    prevGalleryImg();
};

//листаем вперед картинки из расширенного Epg
Adapter.prototype.nextGalleryImg = function () {
    nextGalleryImg();
};

//устанавливаем фокус на описание в расшир. Epg
Adapter.prototype.setFocusOnAboutText = function () {
    setFocusOnAboutText();
};

//убираем фокус с описание в расшир. Epg
Adapter.prototype.removeFocusFromAboutText = function () {
    removeFocusFromAboutText();
};

//Скроллим текст в расшир. Epg вниз
Adapter.prototype.scrollDownAboutText = function () {
    scrollDownAboutText();
};

//Скроллим текст в расшир. Epg вверх
Adapter.prototype.scrollUpAboutText = function () {
    scrollUpAboutText();
};

//Проверяем не проскроллен ли текст в расшир. Epg. Если в верхней позиции - возвращает true
Adapter.prototype.ifAboutTextNotScroll = function () {
    return ifAboutTextNotScroll();
};

//Categories
//открыть/закрыть категории каналов (обобщающая функция)
Adapter.prototype.toggleCategories = function () {
    displayCategories();
};

//проверяем открыты ли категории
Adapter.prototype.ifCategoriesOpened = function () {
    return ifCategoriesOpened();
};

//открыть список категорий
Adapter.prototype.openCategories = function () {
    openCategories();
};

//закрыть список категорий
Adapter.prototype.closeCategories = function () {
    closeCategories();
};

//листаем список категорий вверх
Adapter.prototype.prevCategoryInList = function () {
    prevCategoryInList();
};

//листаем список категорий вниз
Adapter.prototype.nextCategoryInList = function () {
    nextCategoryInList();
};

//Получить текущую сфокусированную категорию
Adapter.prototype.getFocusedCategory = function () {
    return getFocusedCategory();
};

//При открытых категориях жмем "вправо"
Adapter.prototype.setFirstChannelActive = function () {
    setFirstChannelActive();
};

//открыть выбранный список/категорию каналов
Adapter.prototype.openChoosenCategoryList = function (currentCategory) {
    Player.prototype.openChoosenCategoryList(currentCategory);
};

//открыть список favorites каналов
Adapter.prototype.openFavoritesList = function () {
    Player.prototype.openFavoritesList();
};

//открыть список заблокированных каналов
Adapter.prototype.openBlockedList = function () {
    Player.prototype.openBlockedList();
};



//ПРАВОЕ МЕНЮ
// Установить фокус на иконке Home
Adapter.prototype.setFocusOnHomeIcon = function () {
    setFocusOnHomeIcon();
};

//открыть правое меню
Adapter.prototype.openRightMenu = function () {
    openRightMenu();
};

//Разворачивание или сворачивание пунктов правого меню
Adapter.prototype.toggleRightMenuItem = function () {
    rightMenuArrowClick();
};

//закрыть правое меню
Adapter.prototype.closeRightMenu = function () {
    hideHomeMenu();
};

//листаем пункты правого меню вверх
Adapter.prototype.prevMenuItemInList = function () {
    prevMenuItemInList();
};

//листаем пункты правого меню вниз
Adapter.prototype.nextMenuItemInList = function () {
    nextMenuItemInList();
};

//Получить текущий сфокусированный пункт правого меню
Adapter.prototype.getFocusedMenuItem = function () {
    return getFocusedMenuItem();
};

//Открываем видеоархив
Adapter.prototype.openArchives = function () {
    openArchives();
};


//Parent control
//Открываем родительский контроль
Adapter.prototype.openParentControl = function () {
    Player.prototype.openParentControl();
};

//Устанавливаем фокус на первом инпуте Род. контроля
Adapter.prototype.setFocusOnParentControlInput = function () {
    setFocusOnParentControlInput();
};

//событие "вправо" в Родительском контроле
Adapter.prototype.rightInParentControl = function () {
    rightInParentControl();
};

//событие "влево" в Родительском контроле
Adapter.prototype.leftInParentControl = function () {
    leftInParentControl();
};

//событие "вверх" в Родительском контроле
Adapter.prototype.upInParentControl = function () {
    upInParentControl();
};

//событие "вниз" в Родительском контроле
Adapter.prototype.downInParentControl = function () {
    downInParentControl();
};

//Получить текущий сфокусированный элемент родительского контроля в правом меню
Adapter.prototype.getFocusedParentRight = function () {
    return getFocusedParentRight();
};

//Скрыть/открыть пароль
Adapter.prototype.togglePasswordVisibility = function (showPass) {
    Player.prototype.togglePasswordVisibility(showPass);
};

//Сохранить пароль род. контроля (в правом меню)
Adapter.prototype.savePassword = function () {
    Player.prototype.savePassword();
};

//Settings
//Открываем Настройки
Adapter.prototype.openSettings = function () {
    openSettings();
};

//Устанавливаем фокус на языках
Adapter.prototype.setFocusOnLang = function () {
    setFocusOnLang();
};

//Листаем язык вправо
Adapter.prototype.nextLanguageFocus = function () {
    nextLanguageFocus();
};

//Листаем язык влево
Adapter.prototype.prevLanguageFocus = function () {
    prevLanguageFocus();
};

//Получить текущий сфокусированный язык
Adapter.prototype.getFocusedLang = function () {
    return getFocusedLang();
};

//Выбор языка
Adapter.prototype.setLanguage = function (lang) {
    Player.prototype.setLanguage(lang);
};

//Устанавливаем фокус на кнопке Скинуть настройки
Adapter.prototype.setFocusOnSettingsBtn = function () {
    setFocusOnSettingsBtn();
};

// Переход с кнопки "сбросить настройки" вверх
Adapter.prototype.setFocusOnFirstLangBtn = function () {
    setFocusOnFirstLangBtn();
};

//Сброс настроек
Adapter.prototype.resetSettings = function () {
    Player.prototype.resetSettings();
};


//Действия с МОДАЛЬНЫМ ОКНОМ
//устанавливаем фокус на первом элементе всплывающего окна пароля
Adapter.prototype.setFocusOnPassPopup = function () {
    setFocusOnPassPopup();
};

//Убираем фокус с инпутов и кнопок во всплывающей форме
Adapter.prototype.removeFocusFromPopupItems = function() {
    removeFocusFromPopupItems();
};

//событие "вправо" всплывающего окна пароля
Adapter.prototype.rightInPopupPass = function () {
    rightInPopupPass();
};

//событие "влево" всплывающего окна пароля
Adapter.prototype.leftInPopupPass = function () {
    leftInPopupPass();
};

//событие "вверх" всплывающего окна пароля
Adapter.prototype.upInPopupPass = function () {
    upInPopupPass();
};

//событие "вниз" всплывающего окна пароля
Adapter.prototype.downInPopupPass = function () {
    downInPopupPass();
};

//Получить текущий сфокусированный элемент всплывающего окна пароля
Adapter.prototype.getFocusedElemInPopup = function () {
    return getFocusedElemInPopup();
};

//Сохранить пароль родительского контроля через всплывающую форму (клик по кнопке Save)
Adapter.prototype.saveParentPassword = function () {
    Player.prototype.saveParentPassword();
};

//Клик по кнопке Cancel/Отмена во всплывающей форме
Adapter.prototype.cancelBtnClick = function () {
    Player.prototype.cancelBtnClick();
};

//Подтвердить действие в модальном окне (разблокировать или заблокировать канал; клик по кнопке ОК)
Adapter.prototype.confirmAction = function () {
    Player.prototype.confirmAction();
};


//PLAYBACK
//Показать панель управления видео
Adapter.prototype.showPlayback = function () {
    HideControls.prototype.showPlayback();
};

// Скрытие Playback панели и все что с этим связанно
Adapter.prototype.hidePlayback = function () {
    HideControls.prototype.hidePlayback();
};

//Проверяем текущее состоянеие плейбек панели - открыта или закрыта и возвращаем соответственно true/false
Adapter.prototype.getPlaybackPanelStatus = function () {
    return getPlaybackPanelStatus();
};

//Установить фокус на Паузу
Adapter.prototype.setFocusOnPause = function () {
    setFocusOnPause();
};

//Убрать фокус c элементов Плейбека
Adapter.prototype.removeFocusFromPlayback = function () {
    removeFocusFromPlayback();
};

//Пауза или Плэй в плейбеке
Adapter.prototype.playOrPause = function () {
    Player.prototype.playOrPause();
};

//Включить предыдущий канал
Adapter.prototype.prevChannel = function () {
    Player.prototype.prevChannel();
};

//Включить следующий канал
Adapter.prototype.nextChannel = function () {
    Player.prototype.nextChannel();
};

//Вкл/выкл звук
Adapter.prototype.toggleVolume = function () {
    Player.prototype.toggleVolume();
};

//Добавить/убрать из Blocked
Adapter.prototype.toggleBlock = function () {
    Player.prototype.blockBtnAction();
};

//Добавить/убрать из Favorites
Adapter.prototype.toggleFavorites = function () {
    Player.prototype.favoritesSwitch();
};

//Открыть плеер на весь экран
Adapter.prototype.fullScreenMode = function () {
    Player.prototype.fullScreenMode();
};

//листаем плеер вправо
Adapter.prototype.rightPlaybackItem = function () {
    rightPlaybackItem();
};

//листаем плеер влево
Adapter.prototype.leftPlaybackItem = function () {
    leftPlaybackItem();
};

//листаем плеер вверх
Adapter.prototype.upPlaybackItem = function () {
    upPlaybackItem();
};

//листаем плеер вниз
Adapter.prototype.downPlaybackItem = function () {
    downPlaybackItem();
};

//Получить текущий сфокусированный элемент управления видео (плейбек)
Adapter.prototype.getFocusedPlaybackItem = function () {
    return getFocusedPlaybackItem();
};

// Проверка на активный элемент плейбека для перевода фокуса на одно из меню (на иконку правого или левого меню)
Adapter.prototype.checkActiveInPlaybackTop = function () {
    checkActiveInPlaybackTop();
};

//Остальное
//закрыть ВСЕ меню
Adapter.prototype.hideAllMenus = function() {
    hideAllMenus();
};

//Узнаем у какой иконки меню сейчас фокус (у Гамбургера или у Хоум)
Adapter.prototype.getFocusedMenuIcon = function () {
    return getFocusedMenuIcon();
};

// Убрать фокусы с иконок меню (гамбургер и home)
Adapter.prototype.removeFocusFromMenusIcons = function () {
    removeFocusFromMenusIcons();
};

//Получить текущий сфокусированный значок "глаза"
Adapter.prototype.getFocusedEye = function () {
    return getFocusedEye();
};

//Получить id сфокусироованного Инпута
Adapter.prototype.getFocusedInputId = function () {
    return getFocusedInputId();
};

//Проверить или сохранен в текущей сессии пароль на блокировку канала
Adapter.prototype.ifPassOnBlockExist = function () {
    return ifPassOnBlockExist();
};

//Проверить или сохранен в текущей сессии пароль на разблокировку канала
Adapter.prototype.ifPassOnUnblockExist = function () {
    return ifPassOnUnblockExist();
};

//Проверить или сохранен в текущей сессии пароль на вход в категорию Блокированных
Adapter.prototype.ifPassOnBlockEnterExist = function () {
    return ifPassOnBlockEnterExist();
};


// Adapter 3.0
//Проверяем или есть у текущей передачи расширенное епг
Adapter.prototype.ifHasExtendedEpg = function () {
    return ifHasExtendedEpg();
};

//Проверка на активный элемент плейбека для перевода фокуса на одно из меню (на иконку правого или левого меню)
Adapter.prototype.checkActiveInPlaybackTop = function () {
    checkActiveInPlaybackTop();
};

//Показать панель управления видео
Adapter.prototype.showPlayback = function () {
    HideControls.prototype.showPlayback();
};

//Узнаем у какой иконки меню сейчас фокус (у Гамбургера или у Хоум)
Adapter.prototype.getFocusedMenuIcon = function () {
    return getFocusedMenuIcon();
};


// Adapter 4.0
//Проверяем текущее состоянеие плейбек панели - открыта или закрыта и возвращаем соответственно true/false
Adapter.prototype.getPlaybackPanelStatus = function () {
    return getPlaybackPanelStatus();
};

// Скрытие Playback панели и все что с этим связанно
Adapter.prototype.hidePlayback = function () {
    HideControls.prototype.hidePlayback();
};

// Переход с кнопки "сбросить настройки" вверх
Adapter.prototype.setFocusOnFirstLangBtn = function () {
    setFocusOnFirstLangBtn();
};

//Убираем фокус с инпутов и кнопок во всплывающей форме
Adapter.prototype.removeFocusFromPopupItems = function() {
    removeFocusFromPopupItems();
};

//Возвращаем скролл списка каналов в начальную точку
Adapter.prototype.clearChannelScroll = function () {
    clearChannelScroll();
};

//Форма авторизации
// Возвращает текущий сфокусированный элемент окна активации
Adapter.prototype.getFocusedElemInActivation = function () {
    return getFocusedElemInActivation();
};

//Проверяем доступна ли нам форма авторизации. Если нет - сразу переходим на сам плеер
Adapter.prototype.ifActivationMode = function () {
    return Auth.prototype.ifActivationMode();
};

//Смотрим выдало ли ошибку в форме авторизации. Если true - значит есть ошибка и необходимо скрывать инпут и кнопку "Активировать",
// а показывать кнопки "Повторить" и "Закрыть". Если false то наоборот.
Adapter.prototype.getAuthError = function () {
    return Auth.prototype.getAuthError();
};

//проверяем доступна ли для клика кнопка Активировать, или же заблокированна (дабы избежать нескольких кликов подряд)
Adapter.prototype.ifActivationButtonAvailable = function () {
    return Auth.prototype.ifActivationButtonAvailable();
};

//блокируем нажатие на кнопку Активировать тариф
Adapter.prototype.disableActivationButton = function () {
    Auth.prototype.disableActivationButton();
};

//разблокируем нажатие на кнопку Активировать тариф
Adapter.prototype.enableActivationButton = function () {
    Auth.prototype.enableActivationButton();
};

//Проверяем установлен ли фокус на кнопке Смотреть промо. Если да - то навигация вправо-влево срабатывать не должна
Adapter.prototype.ifFocusOnWatchPromo = function () {
    return ifFocusOnWatchPromo();
};

//Устанавливаем фокус на инпут формы авторизации
Adapter.prototype.setFocusOnActivationInput = function () {
    setFocusOnActivationInput();
};

//Получить id сфокусироованного Инпута авторизации
Adapter.prototype.getFocusedActivationInputId = function () {
    return getFocusedActivationInputId();
};

//Устанавливаем фокус на кнопке Активировать
Adapter.prototype.setFocusOnActivationBtn = function () {
    setFocusOnActivationBtn();
};
//Жмем Активировать тариф
Adapter.prototype.activateTariff = function (callback) {
    activateTariff(callback);
};

//Устанавливаем фокус на кнопке Повторить
Adapter.prototype.setFocusOnActivationRetry = function () {
    setFocusOnActivationRetry();
};
//Жмем Повторить
Adapter.prototype.retryAuth = function (callback) {
    retryAuth(callback);
};

//Устанавливаем фокус на кнопке Закрыть
Adapter.prototype.setFocusOnActivationClose = function () {
    setFocusOnActivationClose();
};

//Устанавливаем фокус на кнопке Смотреть промо
Adapter.prototype.setFocusOnActivationWatchPromo = function () {
    setFocusOnActivationWatchPromo();
};
//Выбираем Смотреть промо
Adapter.prototype.watchPromo = function () {
    watchPromo();
};

//Открыть форму авторизации
Adapter.prototype.showAuthorizationPopup = function () {
    Auth.prototype.showAuthorizationPopup();
};
//Узнать есть ли полоска уведомления о про-режиме. True - есть
Adapter.prototype.ifPromoLineExist = function () {
    return ifPromoLineExist();
};
//Устанавливаем фокус на полоске уведомления о промо-режиме
Adapter.prototype.setFocusOnPromoLine = function () {
    setFocusOnPromoLine();
};
//Убираем фокус с полоски уведомления о промо-режиме
Adapter.prototype.removeFocusFromPromoLine = function () {
    removeFocusFromPromoLine();
};
//Проверить или текущий режим промо - paused
Adapter.prototype.ifPausedPromo = function () {
    return ifPausedPromo();
};
//  Инициализация переменных/массивов/объектов/классов и разного рода функционала
var clientSettings = {};
var activationModal = document.getElementById('activation-modal');
var videoContainer = document.getElementById('video-container');
var errorsContainer = document.getElementById('errors-container');
var playbackTime = document.getElementById('playback-time');
var durationTime = document.getElementById('duration-time');
var errorImg = document.getElementById('error-img');
var header = document.getElementById('header');
var hamburger = document.getElementById('hamburger');
var homeMenuBtn = document.getElementById('header-home-menu');
var controlsContainer = document.getElementById('all-controls-container');
var playPauseBtn = document.getElementById('play-pause-btn');
var nextChBtn = document.getElementById('btn-next');
var prevChBtn = document.getElementById('btn-previous');
var blockBtn = document.getElementById('block-btn');
var favBtn = document.getElementById('fav-btn');
var volumeBtn = document.getElementById('volume-btn');
var fullScreenBtn = document.getElementById('fullscreen-btn');
var progressbar = document.getElementById('_video_progressbar');
var searchMenu = document.getElementById('search-menu');
var searchMenuValue = document.getElementById('search-value');
var mainMenu = document.getElementById('main-menu');
var mainMenuTitle = document.getElementById('main-menu-title');
var currentChInfoContainer = document.getElementById('current-channel');
var currentChLogo = document.getElementById('current-ch-logo');
var currentChNumber = document.getElementById('current-ch-number');
var currentChName = document.getElementById('current-ch-name');
var currentChCategory = document.getElementById('current-ch-category');
var currentChProgram = document.getElementById('current-ch-program');
var channelGroupsContainer = document.getElementById('channel-groups-container');
var arrowsContainer = document.getElementById('arrows-container');
var categoriesContainer = document.getElementById('categories-container');
var categoryBlocked = document.getElementsByClassName('category_blocked')[0];
var epgContainer = document.getElementById('epg-container');
var moreAboutContainer = document.getElementById('more-about-container');
var galleryContainer = document.getElementById('gallery-container');
var contentContainer = document.getElementById('content-container');
var bigImg = document.getElementById('big-img');
var homeMenu = document.getElementById('home-menu');
var languagesContainer = document.getElementById('languages-container');
var resetSettingsBtn = document.getElementById('reset-settings-btn');
var parentControlMenuBtn = document.getElementById('parent-control');
var parentControlContainer = document.getElementById('parent-control-container');
var savePcBtn = document.getElementById('save-pc-btn');
var popup = document.getElementById('popup');
var popupTitle = document.getElementById('popup-title');
var popupCurrentPass = document.getElementById('input-4');
var popupNewPass = document.getElementById('popup-new-pass');
var popupConfirmPass = document.getElementById('input-5');
var popupCancelBtn = document.getElementById('popup-cancel-btn');
var popupConfirmBtn = document.getElementById('popup-confirm-btn');
var popupSavePassBtn = document.getElementById('popup-save-pass-btn');
var exitPopup = document.getElementById('exit-popup');
var exitPopupCancelBtn = document.getElementById('exit-popup-cancel-btn');
var exitPopupConfirmBtn = document.getElementById('exit-popup-confirm-btn');
var mainLoader = document.getElementById('main-loader');
var volumeBar = document.getElementById('volumebar');
var favorite_ch_key = 'favorite_ch:';
var blocked_ch_key = 'blocked_ch:';
var playlist = {};
var reloadData = {};
//play_timeout;
var successAlertTimer;
var channelScrollTimer; // для стрелок Епг
var renredAllTimer;
var searchChannelTimer;
var allChannelsCount;
var selectedCategory;
var activeCategory;
var activeChannel;
var activeEpgArrow;
var errorType;
var errorCode;
var permission = false;
var canceled = false;
var lastBlock = false;
v_paused = false;
var epg = {
    epg_url: null,
    epg_key: 'epg_ch:',
    epg_index: 'epg_index:',

    store: function (epg, ch_id) {
        console.log('STORE-EPG');
        if (!Array.isArray(epg)) {
            console.error("Error: can't parse epg data");
            return false;
        }

        // for (i=stbStorage.length; i>0; i--) {
        //     var keyword = stbStorage.key(i-1);
        //     var item = stbStorage.getItem(keyword);
        //     console.log(item);
        // }

        var str = "epg",
            storageLength = stbStorage.length;
        for (i=storageLength; i>0; i--) {
            if (stbStorage.key(i-1).indexOf(str) != -1) {
                var keyword = stbStorage.key(i-1);
                stbStorage.removeItem(keyword);
            }
        }
        //stbStorage.clear();
        for (var ch_data_i in epg) {
            var ch_data = epg[ch_data_i];
            var is_details = 0;
            var store_data = [ch_data.start_at, ch_data.stop_at, ch_data.id, is_details, ch_data.title];
            stbStorage.setItem(this.epg_key + ch_id + ':' + ch_data_i, store_data);
            stbStorage.setItem(this.epg_index + ch_id, ch_data_i);
        }
    },

    searchProgram: function (ch_id, date) {
        var self = this;
        var searchTime = (date.getTime() / 1000) | 0;
        var ch_data_i = stbStorage.getItem(this.epg_index + ch_id);
        if (!ch_data_i) {
            return null;
        }

        for (var epg_data_i = 0; epg_data_i <= ch_data_i; epg_data_i++) {
            var item = stbStorage.getItem(this.epg_key + ch_id + ':' + epg_data_i);
            item = item ? item.split(',', 5) : null;

            if (item && item[0] <= searchTime && item[1] >= searchTime) {
                return item;
            }
        }
        return null;
    }
};
var currPos = 0,
    imgWidth = 0;
var imgContainer = document.getElementsByClassName('gallery-imgs-container__imgs')[0],
    rightArrow = document.getElementsByClassName('gallery-imgs-container__arrow_right')[0],
    leftArrow = document.getElementsByClassName('gallery-imgs-container__arrow_left')[0];

var epgs = document.getElementsByClassName("_prog_epg");
for (var i = 0; i < epgs.length; i++) {
    // epgs[i].addEventListener('click', function () {
    //     dropGallery();
    //     renderGallery();
    //     var fullImgUrl = document.querySelector(".gallery-imgs-container ._active_img:nth-child(2)").getAttribute("full_img_url");
    //     document.getElementsByClassName('_big_img')[0].style.backgroundImage = 'url("' + fullImgUrl + '")';
    // });
}

// imgContainer.addEventListener('click', function (e) {
//     if (e.target.matches('._gallery_item')) {
//         var fullImgUrl = e.target.getAttribute("full_img_url");
//         document.getElementsByClassName('_big_img')[0].style.backgroundImage = 'url("' + fullImgUrl + '")';
//     }
// }, false);

//кликаем по стрелочке вправо
// rightArrow.addEventListener('click', function () {
//     getGalleryItemWidth();
//     imgContainer.style.right = currPos + imgWidth + 5 + "px";
//     currPos += imgWidth + 5;
//     if (currPos > 0) {
//         showLeftGalleryArrow();
//     }
//     checkIfEndScroll();
// });

//кликаем по стрелочке влево
// leftArrow.addEventListener('click', function () {
//     imgContainer.style.right = currPos - imgWidth - 5 + "px";
//     currPos = currPos - imgWidth - 5;
//     if (currPos == 0) {
//         hideLeftGalleryArrow();
//     }
//     checkIfEndScroll();
// });

getGalleryItemWidth = function () {
    if (document.querySelectorAll('._gallery_item:nth-child(2)')[0]) {
        imgWidth = document.querySelectorAll('._gallery_item:nth-child(2)')[0].offsetWidth;
    }
};

function checkIfEndScroll() {
    getGalleryItemWidth();
    if ((imgContainer.offsetWidth - currPos - 4*5) <= 4 * imgWidth) {
        hideRightGalleryArrow();
    }
    else {
        showRightGalleryArrow();
    }
}

//проверяем количество картинок и соотв. необходимость в правой стрелочке
setGalleryArrows = function () {
    //for gallery
    imgWidth = document.querySelectorAll('._gallery_item:nth-child(2)')[0].offsetWidth;
    hideLeftGalleryArrow();
    if ((imgContainer.offsetWidth - 5) < 4 * imgWidth) {
        hideRightGalleryArrow();
    }
    else showRightGalleryArrow();
};

renderGallery = function () {
    //fix for safari
    var galleryItems = document.getElementsByClassName("_gallery_item");
    for (var i = 0; i < galleryItems.length; i++) {
        var attr = galleryItems[i].getAttribute("src");
        if (!attr) {
            galleryItems[i].classList.add("hidden");
        }
    }
};


// window.addEventListener('resize', function(){
//     dropGallery();
//     renderGallery();
//     checkIfEndScroll();
// }, true);

function dropGallery() {
    imgContainer.style.right = 0;
    currPos = 0;
    dropArrows();
}

function dropArrows() {
    hideLeftGalleryArrow();
    hideRightGalleryArrow();
}


//Скрываем/открываем стрелки галереи
showRightGalleryArrow = function () {
    rightArrow.style.opacity = 1;
    rightArrow.style.pointerEvents = 'auto';
};
hideRightGalleryArrow = function () {
    rightArrow.style.opacity = 0;
    rightArrow.style.pointerEvents = 'none';
};
showLeftGalleryArrow = function () {
    leftArrow.style.opacity = 1;
    leftArrow.style.pointerEvents = 'auto';
};
hideLeftGalleryArrow = function () {
    leftArrow.style.opacity = 0;
    leftArrow.style.pointerEvents = 'none';
};
var maxDelay = 5,
    nonActivityCounter = 0,
    timerActivity;                                                              //this in player.js

function HideControls () {
    var self = this;
//проверяем не наведена ли мышка на элементы упралвения видео (если наведена - скрытие не будет работать)
    var videoControls = document.querySelectorAll('.video-controls');
    // for (i=0; i<videoControls.length; i++) {
    //     videoControls[i].addEventListener('mouseover', function() {
    //         isFocused = true;
    //         clearInterval(timerActivity);
    //     });
    //     videoControls[i].addEventListener('mouseout', function() {
    //         isFocused = false;
    //         dropActivityCounter();
    //         setActivityCounter();
    //     });
    // }
    setActivityCounter();
    setInterval(function () {
        self.checkActivity();
    }, 1000);

    //если юзер повёл мышкой или кликнул
    document.onmousemove = self.showPlayback;
    document.onclick = self.showPlayback;
}

HideControls.prototype.showPlayback = function() {
    dropActivityCounter();
    document.getElementById('header').style.display = '';
    document.getElementById('all-controls-container').style.display = '';
    document.getElementById('video-container').classList.add('shadowed');
};

HideControls.prototype.hidePlayback = function () {
    document.getElementById('header').style.display = 'none';
    document.getElementById('all-controls-container').style.display = 'none';
    document.getElementById('video-container').classList.remove('shadowed');
    dropActivityCounter();
    adapter.removeFocusFromMenusIcons();
};

HideControls.prototype.checkActivity = function () {
    if (document.getElementById('main-menu').classList.contains('hidden') && document.getElementById('home-menu').classList.contains('hidden')) {
        if (nonActivityCounter >= maxDelay) {
            adapter.hidePlayback();
            return;
        }
    }
};

//устанавливаем таймер
setActivityCounter = function () {                                              //this in player.js
    clearInterval(timerActivity);
    timerActivity = setInterval('nonActivityCounter++;', 1000);
};

//обнуляем таймер (но не останавливаем)
dropActivityCounter = function () {                                             //this in player.js
    nonActivityCounter = 0;
};
var videoControlClass = ".video-controls__item";
var openedRightMenu = false;
var selected_ch_id;

//открыть левое меню
// hamburger.addEventListener('click', function() {
//     adapter.openLeftMenu();
//     var btn = this;
//     if (btn.classList.contains('_hamburger_allblocked')) {
//         document.getElementsByClassName('category_blocked')[0].click();
//     }
// });

//закрыть левое меню
// document.getElementsByClassName('main-menu-hamburger')[0].addEventListener('click', function() {
//     adapter.closeLeftMenu();
// });
//
// //кликаем по стрелке для вызова категорий (или чтоб скрыть категории)
// document.querySelectorAll('.main-menu-header .arrow-container')[0].addEventListener('click', function() {
//     adapter.toggleCategories();
// });
//
// //открываем правое меню
// document.getElementById('header-home-menu').addEventListener('click', function() {
//     adapter.openRightMenu();
// });
//
// //закрыть правое меню
// document.getElementsByClassName('home-btn')[0].addEventListener("click", function() {
//     adapter.closeRightMenu();
// });
//
// //нажатие на стрелочку в хедере правого меню
// document.getElementsByClassName('home-menu-header-arrow-container')[0].addEventListener("click", function() {
//     adapter.toggleRightMenuItem();
// });
//
// //если при открытом любом меню кликаем по видео
// videoContainer.addEventListener('click', function () {
//     adapter.hideAllMenus();
// });

hideAllMenus = function () {
    if (!(mainMenu.classList.contains('hidden'))) {
        hideMainMenu();
    }
    if (!(homeMenu.classList.contains('hidden'))) {
        hideHomeMenu();
    }
};

//показываем меню и плейбек после включения режима Промо
function showMenusAndPlayback() {
    if (document.getElementsByClassName('main-content')[0]) {
        document.getElementsByClassName('main-content')[0].classList.remove('hidden');
        HideControls.prototype.showPlayback();
    }
}

// //наведение на пункт меню Парент контрол (плавающая подпись активируется)
// document.getElementsByClassName('_parent_control')[0].addEventListener("mouseover", function() {
//     this.getElementsByClassName('ch-item__name')[0].classList.remove('cropper');
//     this.getElementsByClassName('ch-item__name')[0].classList.add('marquee');
// });
// document.getElementsByClassName('_parent_control')[0].addEventListener("mouseout", function() {
//     this.getElementsByClassName('ch-item__name')[0].classList.remove('marquee');
//     this.getElementsByClassName('ch-item__name')[0].classList.add('cropper');
// });
//
// //Открываем видеоархив //НЕ ВЫПИЛИВАТЬ
// // document.getElementsByClassName('_archive')[0].addEventListener("click", function() {
// //     adapter.openArchives();
// // });
//
// //Открываем Настройки
// document.getElementsByClassName('_settings')[0].addEventListener("click", function() {
//     adapter.openSettings();
// });

//выбираем видео из архива //НЕ ВЫПИЛИВАТЬ
// $(".archive-item").on("click", function () {
//     $(this).addClass("current-item");
//     $(".archive-more-about").removeClass("hidden");
//     setWidth("home-menu", 100);
// });

//Выделяем нужный пункт правого меню при клике
var funcItems = document.getElementsByClassName('function-item-container');
// for (var i = 0; i < funcItems.length; i++) {
//     funcItems[i].addEventListener("click", function () {
//         for (var j=0; j < funcItems.length; j++) {
//             funcItems[j].classList.remove('selected-item');
//         }
//         this.classList.add('selected-item');
//     });
// }

//вспомогательная функция устанавливающая ширину передаваемого элемента/блока
function setWidth(elem, width) {
    var thisElem = document.getElementById(elem);
    var classes = thisElem.className;
    var classesArray = classes.split(' ');
    var newcl =[];
    for(var i=0;i<classesArray.length;i++){
        r = classesArray[i].search(/width+/);
        if(r == -1) newcl[newcl.length] = classesArray[i];
    }
    thisElem.className = '';
    thisElem.className = newcl.join(" ");
    thisElem.className = "width-" + width + " " + thisElem.className;
}

//Находясь на главном экране вызываем какую-либо из менюшек
function menuFirstOpen (parent) {
    var elemHeader = document.getElementsByClassName('header')[0];
    var elemControls = document.getElementById('all-controls-container');
    elemHeader.classList.add('hidden');
    elemControls.classList.add('hidden');
    document.getElementById(parent).classList.remove('hidden');
    document.getElementById(parent).getElementsByClassName('_firstly-open-block')[0].classList.remove('hidden');
}


//обобщающая функция, октрывающая архив, сттеингс, парент контрол (вобщем любой правый столбик правого меню)
function openRightsMenus (elem) {
    var menuItems = document.querySelectorAll(".home-menu-container > div");
    for (i=0; i<menuItems.length; i++) {
        menuItems[i].classList.add('hidden');
    }
    document.getElementsByClassName('home-functions-container')[0].classList.remove('hidden');
    document.getElementsByClassName(elem)[0].classList.remove('hidden');
    var arrows = document.querySelectorAll(".function-item-container .arrow-container__arrow-icon");
    for (i=0; i<arrows.length; i++) {
        arrows[i].classList.remove('mirror-vertical');
    }
    document.getElementsByClassName('home-menu-header-arrow-container')[0].classList.add('mirror-vertical');
    setWidth("home-menu", 50);
}
//закрываем правый столбик хоум меню
function closeRightsMenus() {
    setWidth("home-menu",25);
    var menuItems = document.querySelectorAll(".home-menu-container > div:not(._firstly-open-block)");
    for (i=0; i<menuItems.length; i++) {
        menuItems[i].classList.add('hidden');
    }
    var menuItems = document.querySelectorAll(".function-item-container");
    for (i=0; i<menuItems.length; i++) {
        menuItems[i].classList.remove('selected-item');
    }
    var arrows = document.querySelectorAll(".function-item-container .arrow-container__arrow-icon");
    for (i=0; i<arrows.length; i++) {
        arrows[i].classList.add('mirror-vertical');
    }
    removeFocusesFromParentInput();
}

//подключаем наведения на основные функции левого меню
var rightMenuItem = document.querySelectorAll('.function-item-container');
// for (i=0; i<rightMenuItem.length; i++) {
//     rightMenuItem[i].addEventListener("mouseover", function() {
//         this.classList.add("item-active");
//     });
//     rightMenuItem[i].addEventListener("mouseout", function() {
//         this.classList.remove("item-active");
//     });
// }
//подключаем наведения на архив-айтемы
var rightMenuItem = document.querySelectorAll('.archive-item');
// for (i=0; i<rightMenuItem.length; i++) {
//     rightMenuItem[i].addEventListener("mouseover", function() {
//         this.classList.add("item-active");
//     });
//     rightMenuItem[i].addEventListener("mouseout", function() {
//         this.classList.remove("item-active");
//     });
// }

//For adapter
//открыть левое меню
function openLeftMenu() {
    var activeChannel = null;
    menuFirstOpen("main-menu");
    setWidth("main-menu", 30);
    if (document.querySelectorAll('._channels_group:not(.hidden) .ch-item.item-active')[0]) {           //убираем фиолетовый фокус
        document.querySelectorAll('._channels_group:not(.hidden) .ch-item.item-active')[0].classList.remove('item-active');
    }
    if (document.querySelectorAll('._channels_group:not(.hidden) .ch-item.current-item')[0]) {          //убираем у текущего канала плей-иконку
        document.querySelectorAll('._channels_group:not(.hidden) .ch-item.current-item')[0].classList.remove('current-item');
    }
    var watchingChannelId = stbStorage.getItem('last_watched_ch');
    if (watchingChannelId){
        activeChannel = document.querySelectorAll('._channels_group:not(.hidden) .ch-item[_id="' + watchingChannelId + '"]')[0];
    }
    if (!watchingChannelId || !activeChannel) {
        var activeChannel = document.querySelectorAll('._channels_group:not(.hidden) .ch-item:not(.hidden)')[0];
    }
    activeChannel.classList.add('item-active');
    activeChannel.classList.add('current-item');
    activeChannel.scrollIntoView();
    mainMenuTitle.textContent = Player.prototype.renderCategoryName(categoriesContainer.querySelector('.category-item-container.current-item').getAttribute('_id')); //для перевода категории
}

//закрыть левое меню
function hideMainMenu() {
    document.getElementById("main-menu").classList.add('hidden');
    var elems = document.querySelectorAll(".main-menu-container > div");
    for (i=0; i<elems.length; i++) {
        elems[i].classList.add('hidden');
    }
    elems = document.querySelectorAll(".header, .all-controls-container");
    for (i=0; i<elems.length; i++) {
        elems[i].classList.remove('hidden');
    }
    // if (document.getElementsByClassName('ch-item current-item')[0]) {
    //     document.getElementsByClassName('ch-item current-item')[0].classList.add('item-active');
    // }
    document.getElementsByClassName('main-menu-header')[0].getElementsByClassName('arrow-container__arrow-icon')[0].classList.add('mirror-vertical');
    elems = document.querySelectorAll(".ch-item:not(.current-item)");
    for (i=0; i<elems.length; i++) {
        elems[i].classList.remove('channel-opacity');
    }
    document.getElementById('main-menu').classList.remove('open-categories');
    selected_ch_id = null;
    elems = document.querySelectorAll(".ch-item, .epg-day-prog");
    for (i=0; i<elems.length; i++) {
        elems[i].classList.remove("channel-opacity", "selected-item");
    }
    //возобновляем счетчик плейбека
    var ch = video.getAttribute('_cid');
    var channel_obj = playlist.channels[ch];
}

//Возвращаем скролл списка каналов в начальную точку
function clearChannelScroll() {
    channelContainerScroll = 0;
    channelGroupsContainer.scrollTop = 0;
}


//EPG
//Проверяем или есть у текущего канала Епг
function ifHasEpg() {
    if (channelGroupsContainer.querySelector('._channel.item-active').getAttribute('data-epg')) {
        return true;
    } else {
        return false;
    }
}

//листаем список Epg вверх
function prevEpginList() {
    var epgList = document.querySelectorAll(".epg-day-prog:not(.hidden)");
    for (var i = 0; i < epgList.length; i++) {
        if (epgList[i].classList.contains("item-active")) {
            var currentActive = document.getElementsByClassName("epg-day-prog item-active")[0];
            currentActive.classList.remove("item-active");
            currentActive.querySelector("marquee").classList.add('cropper');
            if (i != 0) {
                epgList[i-1].classList.add("item-active");
                epgList[i-1].classList.remove('cropper');
                var activeEpg = document.querySelector('.epg-day-prog.item-active');
                activeEpg.querySelector('marquee').classList.remove('cropper');
                epgListScroll(activeEpg, 'prev');
                break;
            }
            else {
                var elems = document.querySelectorAll('._one_day_epg:not(.hidden)');
                var activeEpg = elems[0].querySelector('.epg-day-prog:not(.hidden)');
                activeEpg.classList.add("item-active");
                activeEpg.querySelector('marquee').classList.remove('cropper');
                epgContainer.scrollIntoView();
                break;
            }
        }
    }
}

//листаем список Epg вниз
function nextEpginList() {
    var epgList = document.querySelectorAll(".epg-day-prog:not(.hidden)");
    for (var i = 0; i < epgList.length; i++) {
        if (epgList[i].classList.contains("item-active")) {
            var currentActive = document.getElementsByClassName("epg-day-prog item-active")[0];
            currentActive.classList.remove("item-active");
            currentActive.querySelector("marquee").classList.add('cropper');
            if (i != (epgList.length-1)) {
                epgList[i+1].classList.add("item-active");
                break;
            }
            else {
                epgList[i].classList.add("item-active");
            }
        }
    }
    var activeEpg = document.querySelector('.epg-day-prog.item-active');
    activeEpg.querySelector("marquee").classList.remove('cropper');
    epgListScroll(activeEpg, 'next');
}

var epgContainerScroll = 0;
function epgListScroll(currentEpg, direction) {
    var isVisible = checkIfVisible(currentEpg);
    console.log(isVisible);
    if ((direction == 'next' && !isVisible) || direction == 'prev') {
        if (currentEpg.classList.contains('current-item')) {
            console.log("iffff");
            epgContainerScroll = 0;
            epgContainer.scrollTop = epgContainerScroll;
        } else {
            console.log("elseeeee");
            currentEpg.scrollIntoView();
            epgContainerScroll = currentEpg.getBoundingClientRect().top;
        }
    }
}

//Возвращаем фокус на канал в списке после закрытия Епг
function returnFocusOnChannel () {
    var ch_id = epgContainer.getAttribute('ch_id');
    console.log(ch_id);
    var elem = document.querySelector('._channels_group:not(.hidden) .ch-item[_id="' + ch_id + '"]');
    console.log(elem);
    elem.classList.add(' item-active');
    adapter.hideEpgsBlocks();
    elem.classList.remove('selected-item');
    setWidth("main-menu",30);
}

//убираем прозрачности неактивных каналов в списке
function removeClassesBeforeCloseEpg() {
    var channels = channelGroupsContainer.getElementsByClassName('ch-item');
    for (var i = 0; i < channels.length; i++) {
        channels[i].classList.remove('channel-opacity');
    }
}

//показ и скрытие блока с категориями (обобщающая функция)
function displayCategories() {
    selected_ch_id = null;
    if (document.getElementsByClassName("categories-container")[0].classList.contains("hidden")) {
        adapter.openCategories();
    }
    else {
        adapter.closeCategories();
    }
}

//проверяем открыты ли категории
function ifCategoriesOpened ()  {
    if (categoriesContainer.classList.contains("hidden")) return false;
    else return true;
}

//открываем список категорий
function openCategories() {
    document.getElementsByClassName('categories-container')[0].classList.remove("hidden");
    var arrow = document.getElementsByClassName("main-menu-header-arrow-container")[0];
    arrow.className = arrow.className.replace(/\bmirror-vertical\b/g, "");
    //Проверить работу этого при манипуляциях с блокировкой каналов ======>
    // if (!document.getElementsByClassName("category-item-container current-item")[0]) {
    //     document.getElementsByClassName("category_all")[0].classList.add(" current-item");
    // }
    // <=======
    document.getElementsByClassName("category-item-container current-item")[0].classList.add("item-active");
    document.getElementsByClassName("category-item-container current-item")[0].scrollIntoView();
    //var mainMenu = document.getElementById('main-menu');
    //mainMenu.className += " open-categories";
    var elem = document.getElementsByClassName("ch-item item-active")[0];
    if (elem) elem.className = elem.className.replace(/\bitem-active\b/g, "");
    setWidth("main-menu", 55);
}

//закрываем список категорий
function closeCategories() {
    document.getElementById('categories-container').classList.add("hidden");
    //document.getElementById('main-menu').classList.remove("open-categories");
    //setWidth("main-menu", 30);
}

var categoryListTimer;
///  Листаем список категорий вверх
function prevCategoryInList() {
    clearTimeout(categoryListTimer);
    var currentCat = document.getElementsByClassName('category-item-container item-active')[0];
    catListScroll(currentCat, 'prev');
    var categoriesList = document.querySelectorAll('.category-item-container:not(.hidden)');
    hideCategoryContainers();
    for (var i = 0; i < categoriesList.length; i++) {
        if (categoriesList[i].classList.contains('item-active')) {
            currentCat.classList.remove('item-active');
            if (i != 0) {
                categoriesList[i - 1].classList.add('item-active');
                categoryListTimer = setTimeout(function () {
                    adapter.openChoosenCategoryList(categoriesList[i - 1]);
                }, 500);
                break;
            } else {                // если переходим с первой на последнюю категорию
                categoriesList[categoriesList.length - 1].classList.add('item-active');
                categoriesList[categoriesList.length - 1].scrollIntoView();
                categoryListTimer = setTimeout(function () {
                    adapter.openChoosenCategoryList(categoriesList[categoriesList.length - 1]);
                }, 500);
                break;
            }
        }
    }
}

//  Листаем список категорий вниз
function nextCategoryInList() {
    clearTimeout(categoryListTimer);
    var currentCat = document.getElementsByClassName('category-item-container item-active')[0];
    var categoriesList = document.querySelectorAll('.category-item-container:not(.hidden)');
    hideCategoryContainers();
    for (var i = 0; i < categoriesList.length; i++) {
        if (categoriesList[i].classList.contains('item-active')) {
            currentCat.classList.remove('item-active');
            if (i == (categoriesList.length - 1)) {     // если переходим на первую категорию с последней
                categoriesList[0].classList.add('item-active');
                if (!categoriesList[0].classList.contains('category_blocked')) {
                    categoryListTimer = setTimeout(function () {
                        adapter.openChoosenCategoryList(categoriesList[0]);
                    }, 500);
                }
                break;
            } else {
                categoriesList[i + 1].classList.add('item-active');
                categoryListTimer = setTimeout(function () {
                    adapter.openChoosenCategoryList(categoriesList[i + 1]);
                }, 500);
                break;
            }
        }
    }
    var currentCat = document.getElementsByClassName('category-item-container item-active')[0];
    catListScroll(currentCat, 'next');
}

function hideCategoryContainers() {
    var channelGroups = channelGroupsContainer.getElementsByClassName('_channels_group');
    for (var i = 0; i < channelGroups.length; i++) {
        channelGroups[i].classList.add('hidden');
    }
}

//  Проверка видимости элемента/айтема для скроллинга на ВебОси
function checkIfVisible (el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var headerHeight = document.getElementsByClassName('main-menu-container')[0].getBoundingClientRect().top;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= headerHeight) && (elemBottom <= window.innerHeight);
    return isVisible;
}

var categoryContainerScroll = 0;
function catListScroll(currentCat, direction) {
    //НЕ УДАЛЯТЬ !!!
    var isVisible = checkIfVisible(currentCat);
    if (direction == 'next' && !isVisible) {
        currentCat.scrollIntoView();
        categoryContainerScroll = currentCat.getBoundingClientRect().top;
    } else if (direction == 'prev') {
        if (currentCat.classList.contains('category_all')) {
            var elems = currentCat.parentNode.querySelectorAll('.category-item-container:not(.hidden)');
            categoryContainerScroll = elems[elems.length - 1].getBoundingClientRect().top;
            categoriesContainer.scrollTop = categoryContainerScroll;
        } else if (currentCat.previousSibling.nodeName == '#text') {
            categoryContainerScroll = categoryContainerScroll - currentCat.offsetHeight; //высота контейнера канала //100
            categoriesContainer.scrollTop = 0;
        } else if(currentCat.previousSibling.tagName == 'DIV') {
            var containerPosTop = categoriesContainer.getBoundingClientRect().top; //137
            var prevCatPosTop = currentCat.previousSibling.getBoundingClientRect().top;
            if (prevCatPosTop <= containerPosTop) {
                currentCat.previousSibling.scrollIntoView();
                categoryContainerScroll = currentCat.previousSibling.getBoundingClientRect().top;
            }
        }
    }
}

//Получить текущую сфокусированную категорию
function getFocusedCategory() {
    return document.getElementsByClassName("category-item-container item-active")[0].getAttribute("_id");
}

//При открытых категориях жмем "вправо"
function setFirstChannelActive () {
    var elems = document.getElementsByClassName("category-item-container");
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("item-active");
    }
    var firstChannel = document.querySelector('._channels_group:not(.hidden) .ch-item:not(.hidden)');
    if (firstChannel) {
        firstChannel.className += "  ch-item_active item-active ";
        Player.prototype.channelMouseOver(firstChannel);
    }
}


//Right Menu
//открыть правое меню
function openRightMenu() {
    menuFirstOpen("home-menu");
    setWidth("home-menu", 25);
    document.getElementsByClassName('function-item-container')[0].classList.add('item-active');
}

// Проверить открыто ли левое меню
function ifLeftMenuOpened() {
    if (mainMenu.classList.contains('hidden')) return false;
    else return true;
}

// Проверить открыто ли правое меню
function ifRightMenuOpened() {
    if (homeMenu.classList.contains('hidden')) return false;
    else return true;
}

//закрыть правое меню
function hideHomeMenu() {
    var elems = document.querySelectorAll(".home-menu, .home-menu-container > div");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.add("hidden");
    }
    elems = document.querySelectorAll(".header, .all-controls-container");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("hidden");
    }
    elems = document.querySelectorAll(".function-item-container, .archive-item");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("current-item", "item-active");
    }
    elems = document.querySelectorAll(".function-item-container");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("selected-item");
    }
    document.querySelectorAll(".function-item-container:first-child")[0].classList.add("item-active");
    elems = document.querySelectorAll(".function-item-container .arrow-container__arrow-icon");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.add("mirror-vertical");
    }
    document.querySelectorAll(".home-menu-header-arrow-container")[0].classList.remove("mirror-vertical");
    //возобновляем счетчик плейбека
    var ch = video.getAttribute('_cid');
    var channel_obj = playlist.channels[ch];
    savePcBtn.className = savePcBtn.className.replace(/\bactive\b/g, "");
    removeFocusesFromParentInput();

}

//листать пункты правого меню вниз
function nextMenuItemInList() {
    var currentMenuItem = document.getElementsByClassName("function-item-container item-active")[0];
    var elems = document.getElementsByClassName("function-item-container");
    for (var j = 0; j < elems.length; j++) {
        elems[j].classList.remove("item-active");
    }
    if (currentMenuItem.nextElementSibling){
        var nextItem = currentMenuItem.nextElementSibling;
        nextItem.classList.add("item-active");
    }
    else {
        document.querySelectorAll(".function-item-container:first-child")[0].classList.add("item-active");
    }
}

//Получить текущий сфокусированный пункт правого меню
function getFocusedMenuItem() {
    return document.getElementsByClassName("function-item-container item-active")[0].getAttribute("func_id");
}

//листать пункты правого меню вверх
function prevMenuItemInList() {
    var currentMenuItem = document.getElementsByClassName("function-item-container item-active")[0];
    var elems = document.getElementsByClassName("function-item-container");
    for (var j = 0; j < elems.length; j++) {
        elems[j].classList.remove("item-active");
    }
    if (currentMenuItem.previousElementSibling){
        var prevItem = currentMenuItem.previousElementSibling;
        prevItem.classList.add("item-active");
    }
    else {
        document.querySelectorAll(".function-item-container:last-child")[0].classList.add("item-active");
    }
    // var currentMenuItem = $(".function-item-container.item-active");
    // $(".function-item-container").removeClass(activeClasses);
    // var prevItem = $(currentMenuItem).prev();
    // if ($(prevItem).hasClass("function-item-container")) {
    //     $(prevItem).addClass('item-active');
    // }
    // else {
    //     $(".function-item-container:last-child").addClass('item-active');
    // }
}

//Устанавливаем фокус на первом инпуте Род. контроля
function setFocusOnParentControlInput() {
    var firstIndex = getFirstParentInput();
    var query = '._input_item[row="' + firstIndex + '"][col="' + 1 + '"]';
    document.querySelectorAll(query)[0].classList.add("active");
    //$('._input_item[row=' + firstIndex + '][col=' + 1 + ']').addClass("active");
}

//событие "вправо" в Родительском контроле
function rightInParentControl() {
    var indexes = getIndexesOfInputItem();
    if (indexes[1] == 1) {          //срабатывает только переход с инпута на глазок
        var elems = document.getElementsByClassName("_input_item");
        for (var i = 0; i< elems.length; i++) {
            elems[i].classList.remove("active");
        }
        var newCol = Number(indexes[1]) + 1;
        var query = '._input_item[row="' + Number(indexes[0]) + '"][col="' + newCol + '"]';
        console.l
        document.querySelector(query).classList.add("active");
    }
}

//событие "влево" в Родительском контроле
function leftInParentControl() {
    var indexes = getIndexesOfInputItem();
    if (indexes[1] == 1) {
        adapter.toggleRightMenuItem();                                      //если мы сейчас на инпуте то скрываем меню Род. контроля
    }
    else {
        var elems = document.getElementsByClassName("_input_item");
        for (var i = 0; i< elems.length; i++) {
            elems[i].classList.remove("active");
        }
        var newCol = Number(indexes[1]) - 1;
        var query = '._input_item[row="' + Number(indexes[0]) + '"][col="' + newCol + '"]';
        document.querySelector(query).classList.add("active");
    }
}

//событие "вверх" в Родительском контроле
function upInParentControl() {
    var savePassBtn = document.getElementsByClassName("_save_pc_btn")[0];
    if (savePassBtn.classList.contains("active")) {                         //если фокус сейчас на кнопке Сбросить настройки
        savePassBtn.classList.remove("active");
        document.querySelector('._input_item[row="3"][col="1"]').classList.add("active");
    }
    else {
        var indexes = getIndexesOfInputItem();
        var firstIndex = getFirstParentInput();
        if (indexes[0] != firstIndex) {
            var elems = document.getElementsByClassName("_input_item");
            for (var i = 0; i< elems.length; i++) {
                elems[i].classList.remove("active");
            }
            var newRow = Number(indexes[0]) - 1;
            var query = '._input_item[row="' + newRow + '"][col="' + Number(indexes[1]) + '"]';
            document.querySelector(query).classList.add("active");
        }
    }
}

//событие "вниз" в Родительском контроле
function downInParentControl() {
    var indexes = getIndexesOfInputItem();
    if (indexes[0] != 3) {          //если не достигли еще кнопки Сбросить настройки
        var elems = document.getElementsByClassName("_input_item");
        for (var i = 0; i< elems.length; i++) {
            elems[i].classList.remove("active");
        }
        var newRow = Number(indexes[0]) + 1;
        var query = '._input_item[row="' + newRow + '"][col="' + Number(indexes[1]) + '"]';
        document.querySelector(query).classList.add("active");
    }
    else {                          //если достигли кнопки Сбросить настройки
        var elems = document.getElementsByClassName("_input_item");
        for (var j = 0; j< elems.length; j++) {
            elems[j].classList.remove("active");
        }
        document.getElementsByClassName("_save_pc_btn")[0].classList.add("active");
    }
}

//Вспомогательная функция для получения информации об сфокусированном элементе род. контроля
function getIndexesOfInputItem() {
    var curItem = document.querySelector(".parent-control-container .form-block ._input_item.active");
    var curRow = curItem.getAttribute("row");
    var curCol = curItem.getAttribute("col");
    return [curRow, curCol];
}

//Вспомогательная функция для определения первого доступного инпута в Род. контроле
function getFirstParentInput() {
    var firstElem = document.querySelector(".parent-control-container .input-row:not(.hidden)");
    var firstIndex = firstElem.querySelector("._input_item").getAttribute("row");
    return firstIndex;
}

//Получить текущий сфокусированный элемент родительского контроля в правом меню
function getFocusedParentRight() {
    return document.getElementsByClassName("parent-control-container")[0].getElementsByClassName("active")[0].getAttribute("data");
}

//клик по стрелке в хедере правого меню
function rightMenuArrowClick() {
    var arrow = document.getElementsByClassName("home-menu-header-arrow-container")[0];
    if (arrow.classList.contains("mirror-vertical")) {
        savePcBtn.className = savePcBtn.className.replace(/\bactive\b/g, "");
        var selectedRightMenuItem = document.querySelector(".function-item-container.selected-item");
        selectedRightMenuItem.classList.add("item-active");
        selectedRightMenuItem.classList.remove("selected-item");
        closeRightsMenus();
        openedRightMenu = false;
        arrow.classList.toggle("mirror-vertical");
    } else {
        setWidth("home-menu",50);
        document.getElementsByClassName("parent-control-container")[0].classList.remove("hidden");
        var focusedMenuItem = adapter.getFocusedMenuItem();
        if (focusedMenuItem == 'parent-control') {
            adapter.openParentControl();
        } else if (focusedMenuItem == 'settings') {
            adapter.openSettings();
        }
        var functionsArrow = document.querySelectorAll(".function-item-container .arrow-container__arrow-icon");
        for (var i = 0; i< functionsArrow.length; i++) {
            functionsArrow[i].classList.remove("mirror-vertical");
        }
    }
}

function toggleBtnClasses () {
    var activeRightMenuItem = document.querySelector(".function-item-container.item-active");
    //activeRightMenuItem.classList.add("selected-item");
    activeRightMenuItem.className = activeRightMenuItem.className.replace(/\bitem-active\b/g, "");
    activeRightMenuItem.className += " selected-item";
}

//устанавливаем фокус на языках
function setFocusOnLang () {
//        document.getElementsByClassName("_lang_btn item-active")[0].classList.add("selected-item");   // Временно отключили, нужно проверить работу локалСторидж
}

//Листаем язык влево
function prevLanguageFocus () {
    var currentLang = document.getElementsByClassName("_lang_btn item-active")[0];
    var elems = document.getElementsByClassName("_lang_btn");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("item-active");
    }
    if (currentLang.previousElementSibling) {
        var prevLang = currentLang.previousElementSibling;
        prevLang.classList.add("item-active");
    }
    else {
        document.querySelector("._lang_btn:first-child").classList.add("item-active");
    }
}

//Листаем язык вправо
function nextLanguageFocus () {
    var currentLang = document.getElementsByClassName("_lang_btn item-active")[0];
    var elems = document.getElementsByClassName("_lang_btn");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("item-active");
    }
    if (currentLang.nextElementSibling) {
        var prevLang = currentLang.nextElementSibling;
        prevLang.classList.add("item-active");
    }
    else {
        document.querySelector("._lang_btn:last-child").classList.add("item-active");
    }
}

//Получить текущий сфокусированный язык
function getFocusedLang() {
    return document.getElementsByClassName("_lang_btn item-active")[0].getAttribute('lang');
}

//Устанавливаем фокус на кнопке Скинуть настройки
function setFocusOnSettingsBtn() {
    var langBtn = document.getElementsByClassName('_lang_btn');
    for (var i=0; i<langBtn.length; i++) {
        langBtn[i].classList.remove('item-active');
    }
    document.querySelector('.settings-container .settings-btn').classList.add('active');
}

// Переход с кнопки "сбросить настройки" вверх
function setFocusOnFirstLangBtn() {
    document.querySelector('.settings-container .settings-btn').classList.remove('active');
    document.getElementsByClassName('_lang_btn')[0].classList.add('item-active');
}

//Открываем видеоархив НЕ ВЫПИЛИВАТЬ!
// function openArchives() {
//     if ( ($("._archive").hasClass("arrow-container") || $("._archive").hasClass("arrow-container__arrow-icon")) && openedRightMenu) {
//         closeRightsMenus();
//         openedRightMenu = false;
//         $(".home-menu-header-arrow-container").toggleClass("mirror-vertical");
//     }
//     else {
//         openRightsMenus(document.getElementsByClassName('_archive')[0].getAttribute("open-data"));
//         openedRightMenu = true;
//     }
// }

//Открываем/закрываем Настройки
function openSettings() {
    var firstCondition = document.getElementsByClassName("_settings")[0].classList.contains("arrow-container");
    var secondCondition = document.getElementsByClassName("_settings")[0].classList.contains("arrow-container__arrow-icon");
    if ((firstCondition || secondCondition) && openedRightMenu) {
        closeRightsMenus();
        openedRightMenu = false;
        document.getElementsByClassName("home-menu-header-arrow-container")[0].classList.toggle("mirror-vertical");
    } else {
        var attr = document.getElementsByClassName('_settings')[0].getAttribute("open-data");
        openRightsMenus(attr);
        openedRightMenu = true;
        toggleBtnClasses();
    }
    removeFocusesFromParentInput();
}


//Playback
//убираем класс Актив у всех элементов плейбека
function removeFocusFromPlaybackItems() {
    var videoControls = document.querySelectorAll(videoControlClass);
    for (var i = 0; i< videoControls.length; i++) {
        videoControls[i].classList.remove('active');
    }
}

//Проверяем текущее состоянеие плейбек панели - открыта или закрыта и возвращаем соответственно true/false
function getPlaybackPanelStatus() {
    var playbackPanel = document.getElementById('all-controls-container');
    if (playbackPanel.classList.contains('hidden') || playbackPanel.style.display === 'none') {
        return false;
    } else {
        return true;
    }
}

//  Установить фокус на Паузу
function setFocusOnPause () {
    document.getElementById('play-pause-btn').classList.add('active');
}

//  Убрать фокус c элементов Плейбека
function removeFocusFromPlayback () {
    var elems = document.querySelectorAll(videoControlClass);
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove('active');
    }
}

//  листаем плеер вправо
function rightPlaybackItem () {
    var activeItem = document.getElementsByClassName('video-controls__item active')[0];
    if (activeItem.nextElementSibling && activeItem.nextElementSibling.classList.contains('video-controls__item')) {
        var siblings = [];
        while (activeItem = activeItem.nextElementSibling) {
            siblings.push(activeItem);                                      //заносим в массив все последующие Siblings
        }
        for (i = 0; i < siblings.length; i++) {
            if ((siblings[i].classList.contains('_active_btn'))) {          //проверяем доступен ли следующий Sibling
                document.getElementsByClassName('video-controls__item active')[0].classList.remove('active');
                siblings[i].classList.add('active');
                break;
            }
        }
    } else {
        return false;
    }
}

//листаем плеер влево
function leftPlaybackItem () {
    var activeItem = document.getElementsByClassName('video-controls__item active')[0];
    if (activeItem.previousElementSibling && activeItem.previousElementSibling.classList.contains('video-controls__item')) {
        activeItem.classList.remove('active');
        var siblings = [];
        while (activeItem = activeItem.previousElementSibling) {
            siblings.push(activeItem);                                      //  заносим в массив все предыдущие Siblings
        }
        for (i = 0; i < siblings.length; i++) {
            if ((siblings[i].classList.contains('_active_btn'))) {          //  проверяем доступен ли предыдущий Sibling
                siblings[i].classList.add('active');
                break;
            }
        }
    } else {
        return false;
    }
}

//листаем плеер вверх
function upPlaybackItem () {
    var activeItem = document.getElementsByClassName('video-controls__item active')[0];
    if (activeItem.classList.contains('_ctrl-row2')) {                      //  если мы сейчас в нижнем блоке плейбека
        activeItem.classList.remove('active');
        adapter.setFocusOnPause();
    } else {
        return false;
    }
}

//листаем плеер вниз
function downPlaybackItem () {
    var activeItem = document.getElementsByClassName('video-controls__item active')[0];
    if (activeItem.classList.contains('_ctrl-row1')) {                      //  если мы сейчас в верхнем блоке плейбека
        activeItem.classList.remove('active');
        if (activeItem.classList.contains('_btn_next') && favBtn.classList.contains('_active_btn')) {
            favBtn.classList.add('active');
        } else {
            document.getElementById('block-btn').classList.add('active');
        }
    } else {
        return false;
    }
}

//Получить текущий сфокусированный элемент управления видео (плейбек)
function getFocusedPlaybackItem() {
    return document.getElementsByClassName("video-controls__item active")[0].getAttribute("id");
}

//Проверка на активный элемент плейбека для перевода фокуса на одно из меню (на иконку правого или левого меню)
function checkActiveInPlaybackTop () {
    if (document.getElementById('btn-next').classList.contains('active')) {
        adapter.setFocusOnHomeIcon();
    } else {
        adapter.setFocusOnHamburgerIcon();
    }
}

//Popup
//устанавливаем фокус на первом элементе всплывающего окна пароля
function setFocusOnPassPopup() {
    document.querySelector("._fullscreen_confirm .input-row:not(.hidden) input").classList.add("active");
}

//Убираем фокус с инпутов и кнопок во всплывающей форме
function removeFocusFromPopupItems() {
    //очищаем инпуты
    var activeInputItem = document.querySelector('._popup_input_item.active');
    if (activeInputItem)
        activeInputItem.classList.remove('active');
    //очищаем кнопки
    var activeInputBtn = document.querySelector('.popup-btn.active');
    if (activeInputBtn)
        activeInputBtn.classList.remove('active');
    document.getElementsByClassName("popup-btns-container")[0].classList.remove("active");

}

//событие "вправо" всплывающего окна пароля
function rightInPopupPass() {
    var btnsContainer = document.getElementsByClassName("popup-btns-container")[0];
    if (btnsContainer.classList.contains("active")) {                       //если фокус сейчас на кнопках
        removeActiveFromPopupBtns();
        availableBtns = document.querySelectorAll(".popup-btn:not(.hidden)");
        availableBtns[availableBtns.length-1].classList.add("active");
    }
    else {
        var indexes = getIndexesOfPopupInputItem();
        if (indexes[1] == 1) {                                              //срабатывает только переход с инпута на глазок
            removeActiveFromPopupInputs();
            var newCol = Number(indexes[1]) + 1;
            var query = '._popup_input_item[row="' + Number(indexes[0]) + '"][col="' + newCol + '"]';
            document.querySelector(query).classList.add("active");
        }
    }
}

//событие "влево" всплывающего окна пароля
function leftInPopupPass() {
    var btnsContainer = document.getElementsByClassName("popup-btns-container")[0];
    if (btnsContainer.classList.contains("active")) {                       //если фокус сейчас на кнопках
        removeActiveFromPopupBtns();
        document.getElementsByClassName("popup-btn")[0].classList.add("active");
    }
    else {
        var indexes = getIndexesOfPopupInputItem();
        if (indexes[1] != 1) {
            removeActiveFromPopupInputs();
            var newCol = Number(indexes[1]) - 1;
            var query = '._popup_input_item[row="' + Number(indexes[0]) + '"][col="' + newCol + '"]';
            document.querySelector(query).classList.add("active");
        }
    }
}

//событие "вверх" всплывающего окна пароля
function upInPopupPass() {
    var btnsContainer = document.getElementsByClassName("popup-btns-container")[0];
    if (btnsContainer.classList.contains("active")) {                       //если фокус сейчас на кнопках
        btnsContainer.classList.remove("active");
        var availableInputs = document.querySelectorAll("._fullscreen_confirm .input-row:not(.hidden)");
        availableInputs[availableInputs.length-1].getElementsByTagName('input')[0].classList.add("active");
        removeActiveFromPopupBtns();
    }
    else {
        var indexes = getIndexesOfPopupInputItem();
        var firstElem = document.querySelector("._fullscreen_confirm .input-row:not(.hidden)");
        var firstIndex = firstElem.querySelector("._popup_input_item").getAttribute("row");
        if (indexes[0] != firstIndex) {
            removeActiveFromPopupInputs();
            var newRow = Number(indexes[0]) - 1;
            var query = '._popup_input_item[row="' + newRow + '"][col="' + Number(indexes[1]) + '"]';
            document.querySelector(query).classList.add("active");
        }
    }
}

//событие "вниз" всплывающего окна пароля
function downInPopupPass() {
    var indexes = getIndexesOfPopupInputItem();
    var availableInputs = document.querySelectorAll("._fullscreen_confirm .input-row:not(.hidden)");
    if (indexes[0] != 3 && availableInputs.length !=1) {                    //если не достигли еще кнопок
        removeActiveFromPopupInputs();
        var newRow = Number(indexes[0]) + 1;
        var query = '._popup_input_item[row="' + newRow + '"][col="' + Number(indexes[1]) + '"]';
        document.querySelector(query).classList.add("active");
    }
    else if (!document.getElementsByClassName("popup-btns-container")[0].classList.contains("active")) {         //если переходим на кнопки
        removeActiveFromPopupInputs();
        var popupBtns = document.querySelectorAll(".popup-btn:not(.hidden)");
        popupBtns[popupBtns.length - 1].classList.add("active");
        document.getElementsByClassName("popup-btns-container")[0].classList.add("active");
    }
}

//Вспомогательная функция для очищения всех инпутов всплывающего окна пароля от класса Актив
function removeActiveFromPopupInputs() {
    var elems = document.getElementsByClassName("_popup_input_item");
    for (var i = 0; i< elems.length; i++) {
        elems[i].classList.remove("active");
    }
}

//Вспомогательная функция для очищения всех кнопок всплывающего окна пароля от класса Актив
function removeActiveFromPopupBtns() {
    var btns = document.getElementsByClassName("popup-btn");
    for (var i = 0; i< btns.length; i++) {
        btns[i].classList.remove("active");
    }
}

//Вспомогательная функция для получения информации об сфокусированном элементе во всплывающем окне пароля
function getIndexesOfPopupInputItem() {
    var curItem = document.querySelector("._popup_input_item.active");
    var curRow = curItem.getAttribute("row");
    var curCol = curItem.getAttribute("col");
    return [curRow, curCol];
}

//Получить текущий сфокусированный элемент всплывающего окна пароля
function getFocusedElemInPopup () {
    var popup = document.getElementsByClassName("_fullscreen_confirm")[0];
    return popup.querySelectorAll(".active:not(.popup-btns-container)")[0].getAttribute("data");
}

//Получить текущий сфокусированный значок "глаза"
function getFocusedEye() {
    return document.getElementsByClassName("_show_pass_btn active")[0];
}

//Получить id сфокусироованного Инпута
function getFocusedInputId () {
    return document.getElementsByClassName("parent-form__input active")[0].getAttribute('id');
}

//очищаем инпуты и глазы парент контроля от фокуса
function removeFocusesFromParentInput () {
    var inputActive = document.getElementsByClassName('_input_item active');
    //if(inputActive) inputActive.classList.remove('active');
    for (i = 0; i < inputActive.length; i++) {
        inputActive[i].classList.remove('active');
    }
}

//Extended EPG
//Проверяем или есть у текущей передачи расширенное епг
function ifHasExtendedEpg() {
    if (epgContainer.querySelector('.epg-day-prog.item-active').classList.contains('_more_about')) {
        return true;
    } else {
        return false;
    }
}

//устанавливаем фокус на первую картинку в расшир. Epg
function setFocusOnGallery () {
    if (document.querySelector('._active_img:not(.hidden)'))
        document.querySelector('._active_img:not(.hidden)').classList.add('active');
}

//убираем фокус с картинок в расшир. Epg
function removeFocusFromGallery () {
    document.querySelector('._active_img.active').classList.remove('active');
}

//раскрыть сфокусированную картинку галереи
function setGalleryImg () {
    var fullImgUrl = document.querySelector('._active_img.active').getAttribute("full_img_url");
    document.getElementsByClassName('_big_img')[0].style.backgroundImage = 'url("' + fullImgUrl + '")';
}

//листаем назад картинки из расширенного Epg
function prevGalleryImg () {
    var currentImg = document.querySelector('._active_img.active ');
    if (currentImg.previousElementSibling && !currentImg.previousElementSibling.classList.contains('hidden')) {
        showRightGalleryArrow();
        removeFocusFromGalleryItem();
        var prevImg = currentImg.previousElementSibling;
        prevImg.classList.add('active');
        prevImg.scrollIntoView();
        if (prevImg.previousElementSibling.classList.contains('hidden')) {          //првоеряем необходимо ли спрятать стрелочку "вправо"
            hideLeftGalleryArrow();
        }
    }
}

//проверяем на первой ли картинке галереи утсановлен фокус
function ifFirstGalleryImg () {
    var currentImg = document.querySelector('._active_img.active ');
    if (currentImg.previousElementSibling && !currentImg.previousElementSibling.classList.contains('hidden')) {
        return false;
    }
    else return true;
}

//листаем вперед картинки из расширенного Epg
function nextGalleryImg () {
    var currentImg = document.querySelector('._active_img.active ');
    if (currentImg.nextElementSibling) {
        showLeftGalleryArrow();
        removeFocusFromGalleryItem();
        var nextImg = currentImg.nextElementSibling;
        nextImg.classList.add('active');
        nextImg.scrollIntoView();
        if (!nextImg.nextElementSibling) {          //првоеряем необходимо ли спрятать стрелочку "вправо"
            hideRightGalleryArrow();
        }
    }
}

//Проверить установлен ли фокус на картинках галереи
function ifFocusOnGallery () {
    if (document.querySelector('._active_img.active'))
        return true;
    else return false;
}

//Проверить есть ли галерея у расшир. Epg
function ifHasGallery () {
    if (document.querySelector('.gallery-container').classList.contains('hidden'))
        return false;
    else return true;
}

//Проверить есть ли текстовое описание у расшир. Epg
function ifHasAboutText () {
    if(document.getElementsByClassName('_program_description')[0].textContent == '')
        return false;
    else return true;
}

//убираем фокус с картинок галереи
function removeFocusFromGalleryItem () {
    if (document.querySelector('._active_img.active'))
        document.querySelector('._active_img.active').classList.remove('active');
}

//устанавливаем фокус на описание в расшир. Epg
function setFocusOnAboutText () {
    contentContainer.classList.add('active');
}

//убираем фокус с описание в расшир. Epg
function removeFocusFromAboutText () {
    contentContainer.classList.remove('active');
}

var aboutTextScroll = 0;
//Скроллим текст в расшир. Epg вниз
function scrollDownAboutText () {
    var aboutTextScrollStep = contentContainer.offsetHeight - 20;
    var aboutHeight = document.getElementsByClassName('_program_description')[0].offsetHeight;
    if (aboutTextScroll < aboutHeight - aboutTextScrollStep) {
        aboutTextScroll += aboutTextScrollStep;
    }
    else {
        aboutTextScroll = aboutHeight;
    }
    contentContainer.scrollTop = aboutTextScroll;
}

//Скроллим текст в расшир. Epg вверх
function scrollUpAboutText () {
    var aboutTextScrollStep = contentContainer.offsetHeight - 20;
    if (aboutTextScroll > aboutTextScrollStep) {
        aboutTextScroll = aboutTextScroll - aboutTextScrollStep;
    }
    else if (adapter.ifAboutTextNotScroll()) {
        adapter.setFocusOnGallery();
        adapter.removeFocusFromAboutText();
    }
    else {
        aboutTextScroll = 0;
    }
    contentContainer.scrollTop = aboutTextScroll;
}

//Проверяем не проскроллен ли текст в расшир. Epg. Если в верхней позиции - возвращает true
function ifAboutTextNotScroll () {
    if (aboutTextScroll == 0) return true;
    else return false;
}

//Возвращаем скролл списка Епг в начальную точку
function clearEpgScroll() {
    epgContainerScroll = 0;
    epgContainer.scrollTop = 0;
}

//Форма авторизации
// Возвращает текущий сфокусированный элемент окна активации
function getFocusedElemInActivation () {
    if (activationModal.getElementsByClassName('active')[0])
        return activationModal.getElementsByClassName('active')[0].getAttribute('id');
}
//Проверяем установлен ли фокус на кнопке Смотреть промо. Если да - то навигация вправо-влево срабатывать не должна
function ifFocusOnWatchPromo() {
    return document.getElementById('watch-promo-btn').classList.contains('active');
}

//Очистка всех фокусов в форме авторизации
function clearFocusesInActivationForm () {
    if (document.querySelector('.activation-modal-btn.active')) {
        document.querySelector('.activation-modal-btn.active').classList.remove('active');
    }
    document.getElementById('activation-code').classList.remove('active');
}

//Устанавливаем фокус на инпут формы авторизации
function setFocusOnActivationInput() {
    clearFocusesInActivationForm();
    document.getElementById('activation-code').classList.add('active');
}

//Получить id сфокусироованного Инпута авторизации
function getFocusedActivationInputId () {
    return document.getElementById('activation-code').getAttribute('id');
}

//Устанавливаем фокус на кнопке Активировать
function setFocusOnActivationBtn() {
    clearFocusesInActivationForm();
    document.getElementById('activation-btn').classList.add('active');
}

//Устанавливаем фокус на кнопке Повторить
function setFocusOnActivationRetry() {
    clearFocusesInActivationForm();
    document.getElementById('retry-btn').classList.add('active');
}

//Устанавливаем фокус на кнопке Закрыть
function setFocusOnActivationClose() {
    clearFocusesInActivationForm();
    document.getElementById('close-app-btn').classList.add('active');
}

//Устанавливаем фокус на кнопке Смотреть промо
function setFocusOnActivationWatchPromo() {
    clearFocusesInActivationForm();
    document.getElementById('watch-promo-btn').classList.add('active');
}
//Else
// Установить фокус на иконке Гамбургера
function setFocusOnHamburgerIcon () {
    document.getElementById('hamburger').classList.add('active');
}

// Установить фокус на иконке Home
function setFocusOnHomeIcon () {
    document.getElementById('header-home-menu').classList.add('active');
}

//Узнаем у какой иконки меню сейчас фокус (у Гамбургера или у Хоум)
function getFocusedMenuIcon() {
    if (document.getElementById('hamburger').classList.contains('active')) {
        return "main-menu";
    } else if (document.getElementById('header-home-menu').classList.contains('active')) {
        return "home-menu";
    } else {
        return false;
    }
}

// Убрать фокусы с иконок меню (гамбургер и home)
function removeFocusFromMenusIcons() {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('header-home-menu').classList.remove('active');
}

//Проверить или сохранен в текущей сессии пароль на блокировку канала
function ifPassOnBlockExist () {
    var session;
    if (playback.getSessionStorage('trusted_session_block')) {
        session = true;
    } else {
        session = false;
    }
    return session;
}

//Проверить или сохранен в текущей сессии пароль на разблокировку канала
function ifPassOnUnblockExist () {
    var session;
    if (playback.getSessionStorage('trusted_session_unblock')) {
        session = true;
    } else {
        session = false;
    }
    return session;
}

//Проверить или сохранен в текущей сессии пароль на вход в категорию Блокированных
function ifPassOnBlockEnterExist () {
    var session;
    if (playback.getSessionStorage('trusted_session_enter')) {
        session = true;
    } else {
        session = false;
    }
    return session;
}
;(function(e) {
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? (e.matches = e.matchesSelector = function matches(selector) {
        var matches = document.querySelectorAll(selector);
        var th = this;
        return Array.prototype.some.call(matches, function(e) {
            return e === th;
        });
    }) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);
var playlist_hash,
    playback;
Player = function () {
    this.setVideoType();
    this.initLanguageSettings();
//        auth.clientAuthorization();
};

// init = function () {
//     Player.prototype.getM3UJson();
//     //Player.prototype.loadEpg(Player.prototype.buildBasicEpgURL(getLanguage()));
//     document.getElementsByClassName('main-content')[0].classList.remove('hidden');
// };

//  Build url functions
Player.prototype.buildBasicEpgURL = function (language) {
    return clientSettings.success.epg_v3 + clientSettings.success.playlist + EPG_URL_SUFFIX + EPG_LANG + language;
    //return 'https://cdnua01.hls.tv/epg/v3/' + '79fe07520e89862e02b2d00fecf02ca9' + EPG_URL_SUFFIX + EPG_LANG + language;            //  Для тестирования
};

Player.prototype.buildChEpgURL = function (id, language, from, to) {
    return EPG_BASIC_URL + clientSettings.success.playlist + '/' + id + EPG_CH_URL_SUFFIX + EPG_LANG + language + EPG_FROM + from + EPG_TO + to;
    //return EPG_BASIC_URL + '79fe07520e89862e02b2d00fecf02ca9' + '/' + id + EPG_CH_URL_SUFFIX + EPG_LANG + language + EPG_FROM + from + EPG_TO + to; //  Для тестирования

};

Player.prototype.buildMoreAboutURL = function (id, language) {
    return EPG_BASIC_URL + clientSettings.success.playlist + '/' + id + EPG_DETAIL_URL_SUFFIX + EPG_LANG + language + EPG_IMG + 'uhd';
    //return EPG_BASIC_URL + '79fe07520e89862e02b2d00fecf02ca9' + '/' + id + EPG_DETAIL_URL_SUFFIX + EPG_LANG + language + EPG_IMG + 'uhd';    //  Для тестирования

};

//  Обрабатываем JSON с каналами:
Player.prototype.getM3UJson = function (url) {
    var self = this;
    var xhr = new XMLHttpRequest();
    var url = clientSettings.success.playlist_url;
    //var url = 'https://cdnua02.hls.tv/play/7b21d43a0227580479ecf02405a667f8/list.json';                 //  Для тестирования
    xhr.open('GET', url, true);
    //xhr.responseType = "json";
    xhr.onload = function() {
        //playlist.channels = self.hlsChannels(this.response);
        playlist.channels = self.hlsChannels(JSON.parse(this.responseText));
        var ch = self.channelForFirstLoad(playlist.channels);
        self.switchChannel(playlist.channels[ch]);
        self.renderAll(playlist);
        self.firstLoadInit(ch);
        //отрисовываем название текущей передачи
        var lang = getLanguage();
        var ch_id = videoContainer.getAttribute('ch_id');
        var url = self.buildChEpgURL(ch_id, lang, 0, 0);
        // self.loadEpg(url, function () {
        //     self.initRename();
        // });
    };
    xhr.onerror = function() {
        console.log( 'Ошибка ' + this.status );
    };
    xhr.send();
};

//  Обрабатываем JSON с epg
Player.prototype.loadEpg = function (url, callback) {
    console.log("xhr started");
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    //xhr.responseType = "json";
    xhr.onload = function() {
        console.log("data received");
        var ch_id = videoContainer.getAttribute('ch_id');
        epg.store(JSON.parse(this.responseText), ch_id);
        if(xhr.readyState == 4 && xhr.status === 200) {
            if (callback) {
                callback();
            }
            //self.initRename();
        }
        xhr.abort();
    };
    xhr.onerror = function() {
        console.log( 'Ошибка ' + this.status );
    };
    xhr.send();
};

//  Функция фильтрации каналов, возвращает список только hls каналов (отсеивание local каналов)
Player.prototype.hlsChannels = function (channels) {
    playlist.ganres = {};
    var hlsChannels = channels.filter(filterByType);
    for (var ch in hlsChannels) {                                           // Перебираем все hls каналы и записываем в них объект с жанром этого канала и каналами этого жанра
        var channel = hlsChannels[ch];
        if (!playlist.ganres[channel.ganre.id])
            playlist.ganres[channel.ganre.id] = channel.ganre;
        if (!playlist.ganres[channel.ganre.id].channels)
            playlist.ganres[channel.ganre.id].channels = [];
        playlist.ganres[channel.ganre.id].channels.push(channel);
    }
    return hlsChannels;
};

//  Сам фильтр определения канал 'hls' или нет
function filterByType(obj) {
    if (obj.type === 'hls') {
        return true;
    } else {
        return false;
    }
}

Player.prototype.firstLoadInit = function (ch) {
    var cgAll = document.getElementsByClassName('_channels_group')[1];
    cgAll.classList.remove('hidden');
    var firstCh = cgAll.querySelectorAll('.ch-item')[1];
    addClassCurrentItem(firstCh);
    video.setAttribute('_cid', ch);
    activeChannel = firstCh;
    this.hidePlaybackControls();
    //this.reloadTimer();
};

Player.prototype.reloadTimer = function () {
    // var self = this;
    // clearTimeout(renredAllTimer);
    // renredAllTimer = setTimeout(function tick() {
    //     console.log("reload!");
    //     var cid = video.getAttribute('_cid');
    //     var ganre_id = video.getAttribute('ganre_id');
    //     var num = document.getElementById('current-ch-number').textContent;
    //     if (ganre_id != 'all' && ganre_id != 'blocked' && ganre_id != 'favorites') {
    //         var channel_obj = playlist.ganres[ganre_id].channels[cid];
    //     }
    //     else {
    //         var channel_obj = playlist.channels[cid];
    //     }
    //     self.renderChInfo(channel_obj, num);
    //     renredAllTimer = setTimeout(tick, 60000);
    // }, 60000);
};

Player.prototype.saveFocusedChannelId = function () {
    if (document.querySelector('.ch-item.item-active')) {
        var chItemActive = document.querySelector('.ch-item.item-active');
        reloadData.channelItemActiveId = chItemActive.getAttribute('_id');
        reloadData.channelItemActiveGanre = chItemActive.getAttribute('ganre_id');
    } else {
        reloadData.channelItemActiveId = false;
        reloadData.channelItemActiveGanre = false;
    }
};

Player.prototype.saveFocusedCategoryId = function () {
    if (document.querySelector('.category-item-container.item-active')) {
        reloadData.categoryItemActiveId = document.querySelector('.category-item-container.item-active').getAttribute('_id');
    } else {
        reloadData.categoryItemActiveId = false;
    }
};

//  Определяем канал для выбора при первичной загрузке
Player.prototype.channelForFirstLoad = function (channels) {
    var channelIndex = 0;
    var chIdForFirstLoad = false;
    if (this.getLastWatchedCh()) {
        chIdForFirstLoad = Number(this.getLastWatchedCh());
    }

    if (channels) {
        var channelsLength = channels.length;
        for (var i = 0; i < channelsLength; i++) {
            var blocked = this.searchBlockedCh(channels[i].id);
            if (!chIdForFirstLoad) {                                        // Если нет "последнего проигрываемого канала" в памяти приложения
                if (!blocked) {                                             // Если канал не blocked
                    channelIndex = i;
                    return channelIndex;
                }
                if ((i + 1) === channelsLength) {                           // Если мы прошли все итерации и ничего не вернули - значит все каналы заблокированны
                    return channelIndex;
                }
            } else {                                                        // Если есть "последний проигрываемый канал" в памяти приложения
                if (channels[i].id === chIdForFirstLoad) {                  // Поиск "последнего проигрываемого канала" в списке каналов с бекенда
                    var blocked = this.searchBlockedCh(channels[i].id);
                    if (blocked) {
                        chForFirstLoadIsBlocked = true;
                    }
                    channelIndex = i;
                    return channelIndex;
                }
                if ((i + 1) === channelsLength) {                           // Если "последний проигрываемый канал" есть в памяти но его нет в новом списке каналов с бекенда
                    for (var i = 0; i < channelsLength; i++) {              // Заново "пробегаемся" по списку из каналов, что бы вернуть индекс подходящего
                        var blocked = this.searchBlockedCh(channels[i].id);
                        if (!blocked) {                                     // Если канал не blocked
                            channelIndex = i;
                            return channelIndex;
                        }
                        if ((i + 1) === channelsLength) {                   // Если мы прошли все итерации и ничего не вернули - значит все каналы заблокированны
                            return channelIndex;
                        }
                    }
                }
            }
        }
    }
    return channelIndex;
};

//  Выбираем канал
Player.prototype.switchChannel = function (channel_obj, num, ganre_id, cid) {
    var ch_obj = channel_obj;
    var self = this;
    var number;
    if (num)
        number = num;
    var category = 'all';
    if (ganre_id)
        category = ganre_id;
    //this.renderChInfo(channel_obj, number);                                      //  Здесь записываем инфу про видео вверху экрана
    currentChCategory.textContent = this.renderCategoryName(ganre_id);
    mainMenuTitle.textContent = this.renderCategoryName(ganre_id);
    var lang = getLanguage();
    var category_loc = localization.langs[lang];
    currentChCategory.setAttribute('loc', 'category_' + category);
    currentChCategory.textContent = category_loc['category_' + category];
    mainMenuTitle.textContent = category_loc['category_' + category];
    this.renderFavoriteBtn(channel_obj.id);                                      //  Здесь записуем является ли канал фаворитс или нет и в соответствии проставляем нужную кнопку фаворитс
    this.renderBlockedBtn(channel_obj.id);                                       //  Здесь записуем является ли канал блокед или нет и в соответствии проставляем нужную кнопку блокед
    this.setLastWatchedCh(channel_obj.id);
    video.setAttribute('ch_id', channel_obj.id);
    video.setAttribute('ganre_id', category);
    video.setAttribute('_cid', cid);
    //отрисовываем название текущей передачи
    var lang = getLanguage();
    var ch_id = videoContainer.getAttribute('ch_id');
    var url = this.buildChEpgURL(ch_id, lang, 0, 0);
    // this.loadEpg(url);
    // this.loadEpg(url, function () {
    //     self.renderChInfo(ch_obj, number);
    // });
    var videoLink = channel_obj.link.replace(/https/, "http");
    playback.channelSwitch(videoLink);
    //playback.channelSwitch(channel_obj.link);
};

//  Рендерим информацию про проигрываемое на текущий момент видео (вверху экрана)
Player.prototype.renderChInfo = function (channel, num) {
    this.clearChInfo();
    var epgMode = this.getEpgMode();
    var program = epg.searchProgram(channel.id, new Date());
    var prog_number = '1';
    if (num) {
        prog_number = num;
    }
    currentChLogo.setAttribute('src', channel.logo);
    currentChNumber.textContent = prog_number;
    currentChName.textContent = channel.name;
    if (epgMode && program) {
        currentChProgram.textContent = program[4];
    }
    currentChInfoContainer.classList.remove('hidden');
};

//  Рендерим список каналов
Player.prototype.renderAll = function (playlist, ganre_id, activeChannelId, currentCategoryId) {
    this.saveFocusedChannelId();
    this.saveFocusedCategoryId();
    var epgMode = this.getEpgMode();
    this.clearLists();
    var containerTpl = document.getElementsByClassName('_channels_group')[0];
    var all_container = containerTpl.cloneNode(true);
    var favorit_container = containerTpl.cloneNode(true);
    var blocked_container = containerTpl.cloneNode(true);
    for (var item_i in playlist.channels) {
        var ch_obj = playlist.channels[item_i];
        // var blocked = this.searchBlockedCh(ch_obj.id);
        // if (!blocked) {
        // Рендерим этот канал в категорию all channels -->
        var allChTpl = all_container.getElementsByClassName('ch-item')[0];
        var all_channel = allChTpl.cloneNode(true);
        var ganreId = 'all';
        this.renderChannelItem(all_channel, ch_obj, epgMode, item_i, ganreId);
        all_channel.classList.remove('hidden');
        all_container.appendChild(all_channel);
        // var is_favorites = this.searchFavoriteCh(ch_obj.id);
        // if (is_favorites) {
        //     all_channel.getElementsByClassName('rating-container__favorites')[0].style.opacity = '1';
        //     // Рендерим этот канал в категорию favorites -->
        //     //this.renderToFavorites(favorit_container, ch_obj, epgMode, item_i, ganreId);
        //     var favChTpl = favorit_container.getElementsByClassName('ch-item')[0];
        //     var fav_channel = favChTpl.cloneNode(true);
        //     var ganreId = 'favorites';
        //     this.renderChannelItem(fav_channel, ch_obj, epgMode, item_i, ganreId);
        //     fav_channel.getElementsByClassName('rating-container__favorites')[0].style.opacity = '1';
        //     fav_channel.classList.remove('hidden');
        //     favorit_container.appendChild(fav_channel);
        // }
        // } else {
        //     // Рендерим этот канал в категорию blocked -->
        //     var blockedChTpl = blocked_container.getElementsByClassName('ch-item')[0];
        //     var blocked_channel = blockedChTpl.cloneNode(true);
        //     var ganreId = 'blocked';
        //     this.renderChannelItem(blocked_channel, ch_obj, epgMode, item_i, ganreId);
        //     blocked_channel.classList.remove('hidden');
        //     blocked_container.appendChild(blocked_channel);
        // }
    }
    all_container.setAttribute('ganre_id', 'all');
    channelGroupsContainer.appendChild(all_container);
    // this.renderChannelIndexNumber(all_container);

    // favorit_container.setAttribute('ganre_id', 'favorites');
    // channelGroupsContainer.appendChild(favorit_container);
    // this.renderChannelIndexNumber(favorit_container);
    //
    // blocked_container.setAttribute('ganre_id', 'blocked');
    // channelGroupsContainer.appendChild(blocked_container);
    // this.renderChannelIndexNumber(blocked_container);

    // Рендерим каналы из каждой категории
    for (var ganre_i in playlist.ganres) {
        var ganre = playlist.ganres[ganre_i];
        this.renderCategory(ganre);
        var container = containerTpl.cloneNode(true);
        container.setAttribute('ganre_id', ganre.id);
        for (var ch_i in ganre.channels) {
            var item = ganre.channels[ch_i];
            var blocked = this.searchBlockedCh(item.id);
            if (!blocked) {
                var channelTpl = container.getElementsByClassName('ch-item')[0];
                var channel = channelTpl.cloneNode(true);
                this.renderChannelItem(channel, item, epgMode, ch_i);
                channel.classList.remove('hidden');
                container.appendChild(channel);
                var is_favorites = this.searchFavoriteCh(item.id);
                if (is_favorites) {
                    channel.getElementsByClassName('rating-container__favorites')[0].style.opacity = '1';
                }
            }
        }
        channelGroupsContainer.appendChild(container);
        // this.renderChannelIndexNumber(container);
    }
    if (selected_ch_id) {
        var channel = document.querySelector('.ch-item[_id="' + selected_ch_id + '"]');
        channel.classList.add('selected-item');
    }
    // this.toggleFavoritesCategory();
    // this.toggleBlockedCategory();
    // this.toggleAllCategory();
    // this.switchCategoryVisibility(playlist.ganres);
    // if (ganre_id) {
    //     // if (!document.getElementsByClassName("category-item-container current-item")[0]) {
    //     //     document.getElementsByClassName("category_all")[0].classList.add("current-item");
    //     // }
    //     if (document.querySelector('.category-item-container.current-item')) {
    //         var category = document.querySelector('.category-item-container.current-item').getAttribute('category');
    //     }
    //     if (allChannelsCount === 0) {
    //         blocked_container.classList.remove('hidden');
    //     } else {
    //         if (currentCategoryId) {
    //             var currentChGroup = document.querySelector('._channels_group[ganre_id="' + currentCategoryId + '"]');
    //             currentChGroup.classList.remove('hidden');
    //             var currentCategory = document.querySelector('.category[_id="' + currentCategoryId + '"]');
    //             currentCategory.classList.add('  current-item');
    //         } else if (category == 'favorites') {
    //             var favoritesChGroup = document.querySelector('._channels_group[ganre_id="favorites"]');
    //             favoritesChGroup.classList.remove('hidden');
    //         } else if (category == 'blocked') {
    //             var blockedChGroup = document.querySelector('._channels_group[ganre_id="blocked"]');
    //             blockedChGroup.classList.remove('hidden');
    //         } else {
    //             var allChGroup = document.querySelector('._channels_group[ganre_id="all"]');
    //             allChGroup.classList.remove('hidden');
    //             var currentCategory = document.querySelector('.category[_id="' + ganre_id + '"]');
    //             currentCategory.classList.add(' current-item');
    //         }
    //     }
    //     if (activeChannelId) {
    //         var activeChGroup = channelGroupsContainer.querySelector('._channels_group[ganre_id="' + ganre_id + '"]');
    //         var activeCh = activeChGroup.querySelector('.ch-item[_id="' + activeChannelId + '"]');
    //         activeCh.classList.add(' current-item');
    //     }
    // }
    // console.log(reloadData.channelItemActiveId);
    // if (reloadData.channelItemActiveId) {
    //     var channelActive = channelGroupsContainer.querySelector('.ch-item[ganre_id="' + reloadData.channelItemActiveGanre + '"][_id="' + reloadData.channelItemActiveId + '"]');
    //     if (channelActive) {
    //         channelActive.classList.add('item-active');
    //     }
    // }
    // if (reloadData.categoryItemActiveId) {
    //     categoriesContainer.querySelector('.category-item-container[_id="' + reloadData.categoryItemActiveId + '"]').classList.add('item-active');
    //
    // }
//        var epgArrows = document.querySelectorAll('._render_epg_btn');
//        for (var i = 0; i < epgArrows.length; i++) {
//            epgArrows[i].classList.add('hidden');
//        }
};

Player.prototype.renderToFavorites = function (favorit_container, ch_obj, epgMode, item_i, ganreId) {
    var favChTpl = document.querySelector('._channels_group[ganre_id="favorites"] .ch-item');
    var fav_channel = favChTpl.cloneNode(true);
    var ganreId = 'favorites';
    this.renderChannelItem(fav_channel, ch_obj, epgMode, item_i, ganreId);
    fav_channel.getElementsByClassName('rating-container__favorites')[0].style.opacity = '1';
    fav_channel.classList.remove('hidden');
    document.querySelector('._channels_group[ganre_id="favorites"]').appendChild(fav_channel);
};

Player.prototype.renderChannelItem = function  (channel, data, epgMode, i, ganre_id) {
    var epgStatus = this.getEpgStatus();
    channel.setAttribute('_id', data.id);
    channel.setAttribute('_cid', i);
    if (ganre_id) {
        channel.setAttribute('ganre_id', ganre_id);
        channel.setAttribute('category', true);
    } else {
        channel.setAttribute('ganre_id', data.ganre.id);
    }
    if (data.key) {
        channel.setAttribute('_key', data.key);
        channel.getElementsByClassName('_ch_number')[0].textContent = data.key;
    }
    //channel.getElementsByClassName('_ch_img')[0].setAttribute('src', data.logo);
    channel.getElementsByClassName('_ch_name')[0].textContent = data.name;
    //console.log(epgStatus);
    if (epgStatus) {
        var program = epg.searchProgram(data.id, new Date());
        //console.log(program);
        if (program) {
            if (epgMode != 1) {
                channel.setAttribute('data-epg', 1);
            }
        }
    }
    channel.getElementsByClassName('epg-arrow-container')[0].classList.remove('hidden');
};

Player.prototype.initRename = function () {
    var ch = video.getAttribute('_cid');
    var channel_obj = playlist.channels[ch];
    this.renderChInfo(channel_obj);
};

Player.prototype.firstLoadRenamePrograms = function () {
    var epgMode = this.getEpgMode();
    var channels = channelGroupsContainer.querySelectorAll('.ch-item:not(.hidden)');
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        var ch_id = channel.getAttribute('_id');
        var program = epg.searchProgram(ch_id, new Date());
        if (epgMode) {
            if (program) {
                if (epgMode != 1) {
                    channel.setAttribute('data-epg', 1);
                }
                channel.getElementsByClassName('_ch_name')[0].textContent = program[4];
                channel.getElementsByClassName('_channels_progress')[0].classList.remove('hidden');
            }
        }
    }
};

//  Рендерим список категорий
Player.prototype.renderCategory = function (item) {
    var categoryTpl = categoriesContainer.getElementsByClassName('category')[0];
    var category = categoryTpl.cloneNode(true);
    category.setAttribute('_id', item.id);
    //category.getElementsByClassName('_category_img')[0].setAttribute('src', item.icon.uhd);
    var categoryName = this.renderCategoryName(item.id);
    category.getElementsByClassName('_category_name')[0].textContent = categoryName;
    category.getElementsByClassName('_category_name')[0].removeAttribute('loc');
    category.classList.remove('category_all');
    removeClassCurrentItem(category);
    removeClassActiveItem(category);
    category.setAttribute('category', '');
    var categoryBlocked = categoriesContainer.getElementsByClassName('category_blocked')[0];
    document.getElementsByClassName('category-group')[0].insertBefore(category, categoryBlocked);
};

Player.prototype.renderCategoryName = function (id) {
    var ganreId = 'all';
    if (id) {
        ganreId = id;
    }
    var lang = getLanguage();
    var categoryName = 'Нет названия';
    if (ganreId === 'all' || ganreId === 'favorites' || ganreId === 'blocked') {
        categoryName = localization.langs[lang]['category_' + ganreId];
    } else {
        var categoryItem = playlist.ganres[ganreId];
        if (categoryItem.names) {
            if (categoryItem.names[lang]) {
                categoryName = categoryItem.names[lang];
            } else {
                categoryName = categoryItem.names['ru'];
            }
        }
    }
    return categoryName;
};

Player.prototype.changeCategoryNames = function () {
    var categories = categoriesContainer.getElementsByClassName('category-item-container');
    for (var i = 0; i < categories.length; i++) {
        var id = categories[i].getAttribute('_id');
        var categoryName = this.renderCategoryName(id);
        categories[i].getElementsByClassName('_category_name')[0].textContent = categoryName;
    }
};


//  Хайдим/анхайдим категории в зависимости от того есть в ней активные каналы или все заблокированны
Player.prototype.switchCategoryVisibility = function (ganres) {
    var keys = Object.getOwnPropertyNames(ganres);
    for (i=0; i<keys.length;i++) {
        var ganre = ganres[keys[i]];
        var currentCategory = categoriesContainer.querySelector('.category-item-container[_id="' + ganre.id + '"]');
        var channelsList = channelGroupsContainer.querySelector('._channels_group[ganre_id="' + ganre.id + '"]');
        var channelsLength = channelsList.querySelectorAll('.ch-item:not(.hidden)').length;
        if (channelsLength) {
            currentCategory.classList.remove('hidden');
        } else {
            currentCategory.classList.add('hidden');
        }
    }
};

// Очищмем от старой епг, отпределяем тип епг, рендерим епг. Пока что я отключил опередление типа епг
Player.prototype.renderEpg = function (ch_id, reload) {
    console.log("render epg");
    var self = this;
    self.clearEpg();
    var lang = getLanguage();
    // if (sessionStorage.getItem("full_epg_ch:" + lang + ":" + ch_id)) {
    //     var data = JSON.parse(sessionStorage.getItem("full_epg_ch:" + lang + ":" + ch_id));
    //     self.renderFullEpg(data);
    // } else {
    var day = 0;
    var url = this.buildChEpgURL(ch_id, lang, day, day);
    self.clearEpg();
    setTimeout(function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        //xhr.responseType = "json";
        xhr.onload = function () {
            console.log("xhr epg started");
            setWidth("main-menu", 55);
            var response = JSON.parse(this.responseText);
            if (response.length > 0) {                             //если нам приходит не пустой массив епг
                console.log("xhr epg not empty");
                self.renderFullEpg(response, reload, ch_id);
                var epgContainerHeight = document.getElementById('epg-container').clientHeight;             //видимая высота контейнера епг
                var epgsSumHeight = self.getEpgDaysHeight();                                                //сумма высот каждого епг-дня
                if (epgsSumHeight < epgContainerHeight) {
                    self.getNextDayEpg(ch_id, ++day);
                    epgsSumHeight = self.getEpgDaysHeight();
                }
            }
            else {                                                      //если пустой то выводим надпись Нет программ в блоке Епг
                console.log("xhr empty");
                var loader = document.getElementById('epg-loader');
                self.disableLoader(loader);
                var channelEpgTpl = epgContainer.getElementsByClassName('_one_day_epg')[0];
                var errorBlock = channelEpgTpl.cloneNode(true);
                var text = errorBlock.getElementsByClassName('_prog_epg_name')[0];
                text.setAttribute('loc', 'there_is_no_epg');
                text.setAttribute('scrollamount', 0);
                text.textContent = localization.langs[lang]['there_is_no_epg'];
                //document.querySelector('.one-epg-day:not(.hidden)').setAttribute('day', 'none');
                text.classList.remove('cropper');
                text.parentNode.style.width = '100%';
                errorBlock.classList.remove('hidden');
                errorBlock.getElementsByClassName('epg-day-title')[0].classList.add('hidden');
                errorBlock.getElementsByClassName('epg-day-prog')[0].classList.remove('hidden');
                epgContainer.appendChild(errorBlock);
                document.querySelector('.one-epg-day:not(.hidden)').setAttribute('day', 'none');
            }
        };
        xhr.send();
    }, 0);
    //}
};

//получить Епг за следующий день
Player.prototype.getNextDayEpg = function (ch_id, day) {
    var self = this;
    var nextDayBtn = document.querySelector('.one-epg-day[day="' + day + '"] ._next_day_btn');
    if (nextDayBtn && nextDayBtn.classList.contains('hidden')) {
        nextDayBtn.classList.remove('hidden');
        var lang = getLanguage();
        var url = self.buildChEpgURL(ch_id, lang, day, day);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        //xhr.responseType = "json";
        xhr.onload = function () {
            self.renderOneDayEpg(JSON.parse(this.responseText), day);
            var epgContainerHeight = document.getElementById('epg-container').clientHeight;             //видимая высота контейнера епг
            var epgsSumHeight = self.getEpgDaysHeight();                                                //сумма высот каждого епг-дня
            if (epgsSumHeight < epgContainerHeight) {
                self.getNextDayEpg(ch_id, ++day);
            }
        };
        xhr.send();
    }
};

//  Рендеринг епг на один день
Player.prototype.renderOneDayEpg = function(data, day) {
    for (var program in data) {
        this.renderProgram(data[program], day);
    }
};

//получаем сумму высот всех видимых дней Епг
Player.prototype.getEpgDaysHeight = function () {
    var sum = 0;
    var epgDays = document.querySelectorAll('.one-epg-day:not(.hidden)');
    for (i=0; i<epgDays.length; i++) {
        sum += epgDays[i].clientHeight;
    }
    return sum;
};

epgContainer.addEventListener('scroll', function(e) {
    Player.prototype.checkPosition();
});

// Функция проверки видимости кнопки подгрузки следующего дня программы
Player.prototype.checkPosition = function () {
    var epgContainerHeight = document.getElementById('epg-container').clientHeight;             //видимая высота контейнера епг
    var epgsSumHeight = this.getEpgDaysHeight();                                                //сумма высот каждого епг-дня
    if (epgContainer.scrollTop + epgContainerHeight >= epgsSumHeight - 50 && epgContainer.querySelectorAll('.one-epg-day:not(.hidden)').length != 0) {
        var ch_id = epgContainer.getAttribute('ch_id');
        var days = epgContainer.querySelectorAll('.one-epg-day:not(.hidden)');
        var nextDay = Number(days[days.length - 1].getAttribute('day')) + 1;
        this.getNextDayEpg(ch_id, nextDay);
    }
};

function returnNext7Days(firstDayProgram) {
    var days = [];
    var firstDayProgramDate = new Date(firstDayProgram * 1000);
    var firstDayStart = new Date(firstDayProgramDate.getFullYear(), firstDayProgramDate.getMonth(), firstDayProgramDate.getDate());
    for (var i = 0; i <= 6; i++) {
        var dayStart = new Date(firstDayStart).setDate(firstDayStart.getDate() + i) / 1000;
        var day = {};
        day.start = dayStart;
        day.end = dayStart + 85999;
        days.push(day);
    }
    return days;
}

//  Рендеринг полного епг
Player.prototype.renderFullEpg = function (data, reload, ch_id) {
    if (!reload) {
        this.clearEpg();
        //var loader = document.getElementById('epg-loader');
        //this.enableLoader(loader);
    }
    var lang = getLanguage();
    var days = returnNext7Days(data[0].start_at);
    this.clearEpg();
    for (var d in days) {
        var day = days[d];
        var full_date = formatDate(new Date(day.start * 1000));
        var day_name = getWeekDay(new Date(day.start * 1000), lang);
        var channelEpgTpl = epgContainer.getElementsByClassName('_one_day_epg')[0];
        var channelEpg = channelEpgTpl.cloneNode(true);
        channelEpg.setAttribute('day', d);
        channelEpg.getElementsByClassName('_epg_date')[0].textContent = full_date;
        var epgDay = channelEpg.getElementsByClassName('_epg_day')[0];
        epgDay.setAttribute('loc', day_name);
        epgDay.textContent = day_name;
        epgContainer.appendChild(channelEpg);
    }
    var nowTime = Date.now() / 1000;
    for (var d in data) {
        var program = data[d];
        if (program.stop_at >= nowTime && program.start_at < days[0].end) {
            this.renderProgram(program, 0, reload);
        } else {
            if (program.start_at >= days[1].start && program.start_at < days[1].end) {
                this.renderProgram(program, 1, reload);
            } else {
                if (program.start_at >= days[2].start && program.start_at < days[2].end) {
                    this.renderProgram(program, 2, reload);
                } else {
                    if (program.start_at >= days[3].start && program.start_at < days[3].end) {
                        this.renderProgram(program, 3, reload);
                    } else {
                        if (program.start_at >= days[4].start && program.start_at < days[4].end) {
                            this.renderProgram(program, 4, reload);
                        } else {
                            if (program.start_at >= days[5].start && program.start_at < days[5].end) {
                                this.renderProgram(program, 5, reload);
                            } else {
                                if (program.start_at >= days[6].start && program.start_at < days[6].end) {
                                    this.renderProgram(program, 6, reload);
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    playback.setSessionStorage("full_epg_ch:" + lang + ":" + ch_id, JSON.stringify(data));
    //this.disableLoader(loader);
    var firstVisibleProgram = epgContainer.querySelector('.epg-day-prog:not(.hidden)');
    addClassCurrentItem(firstVisibleProgram);
    addClassActiveItem(firstVisibleProgram);
    firstVisibleProgram.querySelector("marquee").classList.remove('cropper');
};

Player.prototype.renderProgram = function (data, i, reload) {
    var epgMode = this.getEpgMode();
    var thisDayEpgContainer = epgContainer.querySelector('._one_day_epg[day="' + i + '"]');
    var programTpl = thisDayEpgContainer.getElementsByClassName('epg-day-prog')[0];
    var program = programTpl.cloneNode(true);
    var date = (new Date(data.start_at * 1000)).toLocaleTimeString('en-US', {hour12: false});
    var index = date.split(":", 2).join(":").length;
    var start_time = date.substring(0, index);
    program.getElementsByClassName('_prog_epg_timestart')[0].textContent = start_time;
    program.getElementsByClassName('_prog_epg_name')[0].textContent = data.title;
    program.setAttribute('id', data.id);
    // if (data.detail && epgMode === 3) {          //for extended epg
    //     program.classList.add('_more_about');
    //     var moreAboutBtn = program.getElementsByClassName('_more_about_btn')[0];
    //     moreAboutBtn.classList.remove('hidden');
    // } else {
    //     program.classList.add('_no_more_about');
    // }

    // if (reload) {
    //     if (reloadData.selectProgId == data.id) {
    //         program.addClass('selected-item');
    //     }
    // }
    program.classList.remove('hidden');
    thisDayEpgContainer.appendChild(program);
    thisDayEpgContainer.classList.remove('hidden');
};

//  Рендеринг More About (card of TV program)
Player.prototype.renderMoreAbout = function (name, id) {
    var self = this;
    self.clearMoreAbout();
    moreAboutContainer.classList.remove('hidden');
    hideRightGalleryArrow();
    setWidth("main-menu", 100);
    var loader = document.getElementById('more-about-loader');
    this.enableLoader(loader);
    var lang = getLanguage();
    var url = self.buildMoreAboutURL(id, lang);
    setTimeout(function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        //xhr.responseType = "json";
        xhr.onload = function () {
            var response = JSON.parse(this.responseText);
            if (response.images.length) {
                galleryContainer.classList.remove('hidden');
                contentContainer.classList.remove('content-container_without-gallery');
                bigImg.style.backgroundImage = 'url(' + response.images[0].main + ')';
                for (var i in response.images) {
                    var img_data = response.images[i];
                    var gallery = galleryContainer.getElementsByClassName('default-gallery')[0];
                    var imgTpl = gallery.getElementsByClassName('_gallery_item')[0];
                    var img = imgTpl.cloneNode(true);
                    img.setAttribute('_id', img_data.id);
                    img.setAttribute('src', img_data.thumb);
                    img.setAttribute('full_img_url', img_data.main);
                    img.classList.remove('hidden');
                    gallery.appendChild(img);
                }
            } else {
                galleryContainer.classList.add('hidden');
                contentContainer.classList.add('content-container_without-gallery');
            }
            contentContainer.getElementsByClassName('_program_name')[0].textContent = name;
            if (response.tags) {
                for (var t in response.tags) {
                    var tag_data = response.tags[t];
                    var tagsContainer = contentContainer.getElementsByClassName('default-tags')[0];
                    var tagTpl = tagsContainer.getElementsByClassName('_tag_item')[0];
                    var tag = tagTpl.cloneNode(true);
                    tag.setAttribute('tag_id', tag_data.tag_id);
                    tag.textContent = tag_data.name;
                    tag.classList.remove('hidden');
                    tagsContainer.appendChild(tag);
                }
            }
            if (response.desc) {
                contentContainer.getElementsByClassName('_program_description')[0].textContent = response.desc;
            }
            dropGallery();
            renderGallery();
            self.disableLoader(loader);
            checkIfEndScroll();
        };
        xhr.send();
    }, 0);
    var currentItem = epgContainer.querySelector('.epg-day-prog[id="' + id + '"]');
    removeClassActiveItem(currentItem);
};

//  ______________________________________  //
//  ЗДЕСЬ БИНДИМ ВСЕ ИВЕНТЫ
//  Все ивенты на блоке видео
// playPauseBtn.addEventListener('click', function () {
//     adapter.playOrPause();
// });
Player.prototype.playOrPause = function () {
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

// prevChBtn.addEventListener('click', function () {
//     adapter.prevChannel();
// });
Player.prototype.prevChannel = function () {
    var oldChannel = document.getElementsByClassName('ch-item current-item')[0];
    var ganre_id = video.getAttribute('ganre_id');
    var currentChCid = video.getAttribute('_cid');
    var channel = this.findPrevChannel(ganre_id, currentChCid);
    var number = channel.getElementsByClassName('_ch_number')[0].textContent;
    var cid = channel.getAttribute('_cid');
    removeClassCurrentItem(oldChannel);
    removeClassActiveItem(oldChannel);
    if (activeChannel) {
        activeChannel.classList.remove('item-active', 'ch-item_active');
    }
    activeChannel = channel;
    addClassCurrentItem(channel);
    addClassActiveItem(channel);
    if (channel.hasAttribute('category')) {
        this.switchChannel(playlist.channels[cid], number, ganre_id, cid);
    } else {
        this.switchChannel(playlist.ganres[ganre_id].channels[cid], number, ganre_id, cid);
    }
    dropActivityCounter();                                                  //  очищаем таймер для скрытия панели управления видео
    if (document.querySelectorAll('._channels_group:not(.hidden) .ch-item.item-active')[0]) {
        document.querySelectorAll('._channels_group:not(.hidden) .ch-item.item-active')[0].classList.remove('item-active');
    }
};

// nextChBtn.addEventListener('click', function () {
//     adapter.nextChannel();
// });
Player.prototype.nextChannel = function () {
    var oldChannel = document.getElementsByClassName('ch-item current-item')[0];
    var ganre_id = video.getAttribute('ganre_id');
    var currentChCid = video.getAttribute('_cid');
    var channel = this.findNextChannel(ganre_id, currentChCid);
    var number = channel.getElementsByClassName('_ch_number')[0].textContent;
    var cid = channel.getAttribute('_cid');
    removeClassCurrentItem(oldChannel);
    removeClassActiveItem(oldChannel);
    if (activeChannel) {
        activeChannel.classList.remove('item-active', 'ch-item_active');
    }
    activeChannel = channel;
    addClassCurrentItem(channel);
    addClassActiveItem(channel);
    if (channel.hasAttribute('category')) {
        this.switchChannel(playlist.channels[cid], number, ganre_id, cid);
    } else {
        this.switchChannel(playlist.ganres[ganre_id].channels[cid], number, ganre_id, cid);
    }
    dropActivityCounter();                                                  // очищаем таймер для скрытия панели управления видео
};

//  Add / remove from Blocked
// blockBtn.addEventListener('click', function () {
//     adapter.toggleBlock();
// });
//
// //  Add / remove from Favorites
// favBtn.addEventListener('click', function () {
//     adapter.toggleFavorites();
// });
//
// // Volume on video
// volumeBtn.addEventListener('click', function () {
//     adapter.toggleVolume();
// });

Player.prototype.toggleVolume = function () {
    if (volumeBtn.classList.contains('_volume_off')) {
        playback.unmute_video();
    } else {
        playback.mute_video();
    }
    dropActivityCounter();                                                  // очищаем таймер для скрытия панели управления видео
};

Player.prototype.openChoosenCategoryList = function (currentCategory) {
    channelContainerScroll = 0;
    channelGroupsContainer.scrollTop = 0;                                   //обнуляем положение скроллбара у списков каналов
    if (currentCategory.classList.contains('category_blocked')) {
        adapter.openBlockedList();
    } else {
        var cat = categoriesContainer.getElementsByClassName('category-item-container current-item')[0];
        removeClassCurrentItem(cat);
        // for (var i = 0; i < categories.length; i++) {
        //     removeClassCurrentItem(categories[i]);
        // }
        addClassCurrentItem(currentCategory);
        var id = currentCategory.getAttribute('_id');
        var categoryName = currentCategory.getElementsByClassName('_category_name')[0].textContent;
        mainMenuTitle.textContent = categoryName;
        channelGroupsContainer.querySelector('._channels_group[ganre_id="' + id + '"]').classList.remove('hidden');
    }
};

Player.prototype.channelMouseOver = function (self) {
    var oldActiveChannels = channelGroupsContainer.querySelectorAll('.ch-item.item-active');
    removeActiveClassFrom(oldActiveChannels);
    self.classList.add('ch-item_active', 'item-active');
};

Player.prototype.hideEpgsBlocks = function () {
    epgContainer.classList.add('hidden');
    moreAboutContainer.classList.add('hidden');
};

Player.prototype.selectChannel = function (ch_id) {
    epgContainer.classList.add('hidden');
    if (mainMenu.classList.contains('_open-categories')) {
        setWidth("main-menu", 55);
    } else {
        setWidth("main-menu", 30);
    }
    this.removeClassesBeforeSelectChannel();

    if (ch_id) {
        var channel = channelGroupsContainer.querySelector('._channels_group[ganre_id=all] .ch-item[_cid="' + ch_id + '"]');   //  if block or unblock
    } else {
        var channel = document.querySelector('._channels_group:not(.hidden) .ch-item.item-active');                                            //  if choosed channel from list
    }
    var number = channel.getElementsByClassName('_ch_number')[0].textContent;
    var cid = channel.getAttribute('_cid');
    var ganre_id = channel.getAttribute('ganre_id');
    addClassCurrentItem(channel);
    if (channel.hasAttribute('category')) {
        this.switchChannel(playlist.channels[cid], number, ganre_id, cid);
    } else {
        this.switchChannel(playlist.ganres[ganre_id].channels[cid], number, ganre_id, cid);
    }
    hideMainMenu()     //  скрываем левое меню после включения другого канала из списка каналов
};

//  Все ивенты на Сonfirm окне (block/unblock/enter blocked)
// popupSavePassBtn.addEventListener('click', function () {
//     adapter.saveParentPassword();
// });

Player.prototype.saveParentPassword = function () {
    removeErrorAlerts();
    var lang = getLanguage();
    var new_pass = document.getElementById('input-5');
    var new_pass_val = new_pass.value.replace(/\s+/g, '');
    var confirm_pass = document.getElementById('input-6');
    var confirm_pass_val = confirm_pass.value.replace(/\s+/g, '');

    if (!new_pass_val.length) {
        incorrectPassword(new_pass, localization.langs[lang].empty_password);
    } else if (!confirm_pass_val.length) {
        incorrectPassword(confirm_pass, localization.langs[lang].empty_password);
    } else if (new_pass_val !== confirm_pass_val) {
        this.errorDifferentPass(new_pass, confirm_pass, lang);
    } else if (new_pass_val == confirm_pass_val) {
        this.changeSavedPass(confirm_pass_val);
        this.removeSuccessAlert();
        removeErrorAlerts();
        this.closeSetPassMode(lang);
    }
};

// popupCancelBtn.addEventListener('click', function () {
//     adapter.cancelBtnClick();
// });

Player.prototype.cancelBtnClick = function () {
    removeErrorAlerts();
    this.clearAllInputs(popup);
    this.closeConfirmWindow();
    controlsContainer.classList.remove('hidden');
    header.classList.remove('hidden');
    var confirmType = popupConfirmBtn.getAttribute('action_type');
    if (confirmType == 'enter' && allChannelsCount == 0) {
        this.errorHandler('blocked');
        canceled = true;
        hamburger.classList.add('_hamburger_allblocked');
        hamburger.classList.remove('_hamburger');
    } else if (typeof hideControl !== 'undefined') {                //в десктопе запускаем таймер на скрытие контроллов, в вебоси - нет
        setActivityCounter();
    }
};

// popupConfirmBtn.addEventListener('click', function () {
//     adapter.confirmAction();
// });

Player.prototype.confirmAction = function () {
    var lang = getLanguage();
    removeErrorAlerts();
    var saved_pass = this.checkSavedPass();
    var current_pass = popupCurrentPass;
    var current_pass_val = current_pass.value.replace(/\s+/g, '');
    var action_type = popupConfirmBtn.getAttribute('action_type');
    var cid = video.getAttribute('_cid');
    var ganre_id = video.getAttribute('ganre_id');
    if (!current_pass_val.length) {
        incorrectPassword(current_pass, localization.langs[lang].empty_password);
    } else {
        current_pass_val = MD5(current_pass.value.replace(/\s+/g, ''));
        if (current_pass_val !== saved_pass) {
            incorrectPassword(current_pass, localization.langs[lang].incorrect_password);
        } else {
            if (action_type == 'enter') {
                mainMenu.classList.remove('hidden');
                this.enterGroupBlocked();
                if (allChannelsCount == 0) {
                    channelGroupsContainer.classList.remove('hidden');
                    controlsContainer.classList.add('hidden');
                    header.classList.add('hidden');
                    canceled = false;
                    hamburger.classList.remove('_hamburger_allblocked');
                    hamburger.classList.add('_hamburger');
                    this.closeConfirmWindow();
                    setWidth("main-menu", 30);
                }
            } else {
                controlsContainer.classList.remove('hidden');
                header.classList.remove('hidden');
                this.blockedSwitch(action_type, ganre_id, null, cid);
            }
            this.startTrustedSession(action_type);
            this.clearAllInputs(popup);
            this.closeConfirmWindow();
        }
    }
};

Player.prototype.watchEpg = function () {
    console.log("watchepg");
    var self = this;
    var selectedChannel = channelGroupsContainer.querySelector('.ch-item.item-active');
    activeChannel = selectedChannel;
    selected_ch_id = selectedChannel.getAttribute('_id');
    categoriesContainer.classList.add('hidden');
    self.removeClassesBeforeEpg();
    epgContainer.className = epgContainer.className.replace(/\bhidden\b/g, "");
    //mainMenu.classList.remove('open-categories');
    this.clearEpg();
    //setWidth("main-menu", 55);            //replaced to renderEpg to increase speed
    //var loader = document.getElementById('epg-loader');
    //this.enableLoader(loader);
    channelGroupsContainer.querySelector('._channels_group:not(.hidden) .ch-item[_id="' + selected_ch_id + '"]').classList.add('selected-item');
    self.renderEpg(selected_ch_id);
    epgContainer.setAttribute('ch_id', selected_ch_id);
};

//убираем классы фокуса у текущего сфокусированного канала из списка, а также добавляем всем остальным прозрачность
Player.prototype.removeClassesBeforeEpg = function () {
    var channels = document.querySelectorAll('.ch-item.item-active');
    for (var i = 0; i < channels.length; i++) {
        channels[i].className = channels[i].className.replace(/\bchannel-item_active\b/g, "");
        channels[i].className = channels[i].className.replace(/\bitem-active\b/g, "");
    }
};

Player.prototype.epgMouseover = function (self) {
    addClassActiveItem(self);
    var progEpgName = epgContainer.getElementsByClassName('_prog_epg_name');
    for (var i = 0; i < progEpgName.length; i++) {
        progEpgName[i].classList.remove('marquee');
        progEpgName[i].classList.add('cropper');
    }
    var containerWidth = self.getElementsByClassName('epg-day-prog__name_title')[0].offsetWidth;
    var textWidth = self.getElementsByClassName('_prog_epg_name')[0].offsetWidth;
    if (containerWidth <= textWidth) {
        var thisProgEpgName = self.getElementsByClassName('_prog_epg_name')[0];
        thisProgEpgName.classList.remove('cropper');
        thisProgEpgName.classList.add('marquee');
    }
};

Player.prototype.watchExtendedEpg = function (currentProg) {
    var currentProgEpg = epgContainer.querySelector('.epg-day-prog.item-active');
    if (currentProg) {
        currentProgEpg = currentProg;
    }
    var id = currentProgEpg.getAttribute('id');
    var time = currentProgEpg.getElementsByClassName('_prog_epg_timestart')[0].textContent;
    var name = currentProgEpg.getElementsByClassName('_prog_epg_name')[0].textContent;
    var title = time + ' ' + name;
    var programs = epgContainer.getElementsByClassName('epg-day-prog');
    for (var i = 0; i < programs.length; i++) {
        programs[i].classList.remove('selected-item');
        programs[i].classList.add('channel-opacity');
    }
    currentProgEpg.classList.add('selected-item');
    currentProgEpg.className = currentProgEpg.className.replace(/\bchannel-opacity\b/g, "");
    this.renderMoreAbout(title, id);
    aboutTextScroll = 0;                            //для скролла в вебоси
};

Player.prototype.closeExtendedEpg = function (currentProg) {
    removeFocusFromGalleryItem();
    var currentProgEpg = epgContainer.querySelector('.epg-day-prog.selected-item');
    if (currentProg) {
        currentProgEpg = currentProg;
    }
    addClassActiveItem(currentProgEpg);
    this.hideMoreAbout();
};

Player.prototype.setLanguage = function (lang) {
    var self = this;
    //localStorage.setItem('localization', lang);
    playback.setLocalStorage('localization', lang);
    //gSTB.SaveUserData('localization', lang);
    var epg_url = this.buildBasicEpgURL(playlist_hash, lang);
    var cid = video.getAttribute('_cid');
    var ganre_id = video.getAttribute('ganre_id');
    localization.apply(lang);
    this.changeCategoryNames();
    self.checkShortenedLanguage();
    // this.loadEpg(epg_url, function () {
    //     self.firstLoadRenamePrograms();
    //     var cid = video.getAttribute('_cid');
    //     var ganre_id = video.getAttribute('ganre_id');
    //     var num = currentChNumber.textContent;
    //     var channel_obj = playlist.channels[cid];
    //     if (Number.isInteger(+ganre_id)) {
    //         channel_obj = playlist.ganres[ganre_id].channels[cid];
    //     }
    //     self.renderChInfo(channel_obj, num);
    // });
    currentChCategory.textContent = this.renderCategoryName(ganre_id);
    mainMenuTitle.textContent = this.renderCategoryName(ganre_id);
};

// resetSettingsBtn.addEventListener('click', function () {
//     adapter.resetSettings();
// });

Player.prototype.resetSettings = function () {
    document.querySelector('.settings-container .settings-btn').classList.remove('active');
    //document.getElementsByClassName('lang_btn_default')[0].click();
    var lang = document.getElementsByClassName('lang_btn_default')[0].getAttribute('lang');
    this.setLanguage(lang);
};

//  Все ивенты parent control
//Открываем родительский контроль
// parentControlMenuBtn.addEventListener('click', function () {
//     adapter.openParentControl();
// });

Player.prototype.openParentControl = function () {
    if ((parentControlMenuBtn.classList.contains('arrow-container') || parentControlMenuBtn.classList.contains('arrow-container__arrow-icon')) && openedRightMenu) {
        closeRightsMenus();
        openedRightMenu = false;
        homeMenu.getElementsByClassName('home-menu-header-arrow-container').classList.toggle('mirror-vertical');
    } else {
        openRightsMenus(document.getElementsByClassName('_parent_control')[0].getAttribute("open-data"));
        openedRightMenu = true;
        toggleBtnClasses();
    }
    this.clearAllInputs(parentControlContainer);
    this.removeSuccessAlert();
    removeErrorAlerts();
    var saved_pass = this.checkSavedPass();
    var currentPasswordRow = parentControlContainer.getElementsByClassName('_current_pass')[0].parentNode;
    if (!saved_pass) {
        currentPasswordRow.classList.add('hidden');
    } else {
        currentPasswordRow.classList.remove('hidden');
    }
};

// popupConfirmPass.addEventListener('click', function () {
//     removeErrorAlerts();
// });

//  Переключает видимость вводимого пароля на странице перент контрола
var showPassBtns = document.getElementsByClassName('_show_pass_btn');
// for (var i = 0; i < showPassBtns.length; i++) {
//     showPassBtns[i].addEventListener('click', function () {
//         var showPass = this;
//         adapter.togglePasswordVisibility(showPass);
//     });
// }

Player.prototype.togglePasswordVisibility = function (showPass) {
    if (showPass) {
        var input = showPass.parentNode.getElementsByTagName('input')[0];
        if (input.classList.contains('show-pass')) {
            showPass.classList.remove('show-pass');
            input.classList.remove('show-pass');
            input.setAttribute('type', 'password');
        } else {
            showPass.className += "  show-pass";
            input.className += "   show-pass";
            input.setAttribute('type', 'text');
        }
    }
};

//  Сохраняет пароль на странице перент контрола
// savePcBtn.addEventListener('click', function () {
//     adapter.savePassword();
// });

Player.prototype.savePassword = function () {
    var self = this;
    removeErrorAlerts();
    var lang = getLanguage();
    var savedPassValue = this.checkSavedPass();
    var currentPass = parentControlContainer.getElementsByClassName('_current_pass')[0];
    var currentPassValue = MD5(currentPass.value);
    var newPass = parentControlContainer.getElementsByClassName('_new_pass')[0];
    var newPassValue = newPass.value.replace(/\s+/g, '');
    var confirmPass = parentControlContainer.getElementsByClassName('_confirm_pass')[0];
    var confirmPassValue = confirmPass.value.replace(/\s+/g, '');
    if (savedPassValue) {
        if (currentPassValue !== savedPassValue) {
            incorrectPassword(null, localization.langs[lang].incorrect_password);
        } else {
            if (!newPassValue.length) {
                incorrectPassword(newPass, localization.langs[lang].empty_password);
            } else if (!confirmPassValue.length) {
                incorrectPassword(confirmPass, localization.langs[lang].empty_password);
            } else if (newPassValue !== confirmPassValue) {
                this.errorDifferentPass(newPass, confirmPass, lang);
            } else if (newPassValue == confirmPassValue) {
                this.changeSavedPass(confirmPassValue);
                this.clearAllInputs(parentControlContainer);
                clearTimeout(successAlertTimer);
                successAlertTimer = setTimeout(function () {
                    currentPass.parentNode.classList.remove('hidden');
                    self.removeSuccessAlert();
                    clearTimeout(successAlertTimer);
                }, 3000);
            }
        }
    } else {
        if (!newPassValue.length) {
            incorrectPassword(newPass, localization.langs[lang].empty_password);
        } else if (!confirmPassValue.length) {
            incorrectPassword(confirmPass, localization.langs[lang].empty_password);
        } else if (newPassValue !== confirmPassValue) {
            this.errorDifferentPass(newPass, confirmPass, lang);
        } else if (newPassValue == confirmPassValue) {
            this.changeSavedPass(confirmPassValue);
            this.clearAllInputs(parentControlContainer);
            clearTimeout(successAlertTimer);
            successAlertTimer = setTimeout(function () {
                currentPass.parentNode.classList.remove('hidden');
                self.removeSuccessAlert();
                clearTimeout(successAlertTimer);
            }, 3000);
        }
    }
};

//  ______________________________________
//  Разные функции очистки
//  Онициализация очистки списка каналов и списка категорий
Player.prototype.clearLists = function () {
    this.clearCategoriesList();
    this.clearChannelsList();
};

//  Очистка информации про канал вверху видео
Player.prototype.clearChInfo = function () {
    currentChLogo.setAttribute('src', '');
    currentChNumber.textContent = '';
    currentChName.textContent = '';
    currentChProgram.textContent = '';
};

//  Очистка списка категорий
Player.prototype.clearCategoriesList = function () {
    var categories = categoriesContainer.querySelectorAll('.category:not(.category_all):not(.category_favorites)');
    for (var i = 0; i < categories.length; i++) {
        categories[i].remove();
    }
};

//  Очистка списка каналов
Player.prototype.clearChannelsList = function () {
    var channelGroups = channelGroupsContainer.querySelectorAll('._channels_group[ganre_id]');
    for (var i = 0; i < channelGroups.length; i++) {
        channelGroups[i].remove();
    }
};


//  Очистка от старой епг
Player.prototype.clearEpg = function () {
    var oneDayEpg = epgContainer.querySelectorAll('._one_day_epg[day]');
    for (var i = 0; i < oneDayEpg.length; i++) {
        oneDayEpg[i].remove();
    }
};

//  Очистка от старой More About
Player.prototype.clearMoreAbout = function () {
    bigImg.style.backgroundImage = 'url()';
    var galleryItems = galleryContainer.querySelectorAll('._gallery_item:nth-child(n+2)');
    for (var i = 0; i < galleryItems.length ; i++) {
        galleryItems[i].remove();
    }
    contentContainer.getElementsByClassName('_program_name')[0].textContent = '';
    var tags = contentContainer.querySelectorAll('._tag_item:not(.hidden)');
    for (var i = 0; i < tags.length; i++) {
        tags[i].remove();
    }
    contentContainer.getElementsByClassName('_program_description')[0].textContent = '';
};


Player.prototype.clearAllInputs = function (block) {
    var inputs = block.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
};

//  ______________________________________
//  Разные Helpers functions
function addClassCurrentItem(elem) {
    if (elem)
    //elem.classList.add("current-item");
        elem.className += "  current-item";
}

function removeClassCurrentItem(elem) {
    if (elem)
        elem.classList.remove('current-item');
}

function addClassActiveItem(elem) {
    if (elem)
        elem.classList.add('item-active');
}

function removeClassActiveItem(elem) {
    if (elem)
        elem.classList.remove('item-active');
}

function removeActiveClassFrom(elems) {
    if (elems) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('ch-item_active', 'item-active');
        }
    }
}

function formatString(uniq) {
    uniq = uniq.match(new RegExp('.{1,4}', 'g')).join("-");
    return uniq;
}

function formatDate (date) {
    var dd = date.getDate();
    if (dd < 10)
        dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10)
        mm = '0' + mm;

    var yy = date.getFullYear();

    var format_date = dd + '.' + mm + '.' + yy;
    return format_date;
}

function getWeekDay (date, lang) {
    var days = [];
    if (lang == 'ua') {
        days = ['недiля', 'понедiлок', 'вiвторок', 'середа', 'четвер', "п'ятниця", 'субота'];
    } else if (lang == 'en') {
        days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    } else if (lang == 'pl') {
        days = ['Niedziela', 'Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota'];
    } else if (lang == 'ru') {
        days = ['Воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    }
    return days[date.getDay()];
}

//  Поиск предыдущийего канала для переключения
Player.prototype.findPrevChannel = function (ganre_id, currentChCid) {
    var channel;
    var channelList = channelGroupsContainer.querySelector('._channels_group[ganre_id="' + ganre_id + '"]');
    var currentChannel = channelList.querySelector('.ch-item[_cid="' + currentChCid + '"]');
    var prev = currentChannel.previousElementSibling;
    if (!prev.classList.contains('hidden')) {
        channel = prev;
    } else {
        channel = channelList.lastElementChild;
    }
    return channel;
};

//  Поиск следующего канала для переключения
Player.prototype.findNextChannel = function (ganre_id, currentChCid) {
    var channel;
    var channelList = channelGroupsContainer.querySelector('._channels_group[ganre_id="' + ganre_id + '"]');
    var currentChannel = channelList.querySelector('.ch-item[_cid="' + currentChCid + '"]');
    var next = currentChannel.nextElementSibling;
    if (next) {
        channel = next;
    } else {
        channel = channelList.getElementsByClassName('ch-item')[1];        // firstElementChild не отработает, поскольку 1-ый элемент это "шаблон" и он hidden
    }
    return channel;
};

//  Swith on or switch off fullscreen mode
Player.prototype.fullScreenMode = function () {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    dropActivityCounter();                                                  // очищаем таймер для скрытия панели управления видео
};

//  ______________________________
Player.prototype.successAlert = function () {
    savePcBtn.classList.add('hidden');
    var successText = document.getElementsByClassName('_success_saved');
    for (var i = 0; i < successText.length; i++) {
        successText[i].classList.remove('hidden');
    }
};

Player.prototype.removeSuccessAlert = function () {
    savePcBtn.classList.remove('hidden');
    var successText = document.getElementsByClassName('_success_saved');
    for (var i = 0; i < successText.length; i++) {
        successText[i].classList.add('hidden');
    }
};

incorrectPassword = function (input, text) {
    var new_input = document.getElementsByClassName('_current_pass')[0];
    if (input) {
        new_input = input;
    }
    do {
        new_input = new_input.parentNode;
    }
    while (new_input.classList.contains('input-row'));
    new_input.parentNode.classList.add('error-alert');
    var alert = new_input.parentNode.getElementsByClassName('_input_alert')[0];
    alert.classList.remove('hidden');
    alert.textContent = text;
};

Player.prototype.errorDifferentPass = function (new_pass, confirm_pass, lang) {
    var new_input = new_pass.parentNode;
    new_input.classList.add('error-alert');
    var alert = new_input.getElementsByClassName('_input_alert')[0];
    alert.classList.remove('hidden');
    alert.textContent = localization.langs[lang].different_password;
    var confirm_input = confirm_pass.parentNode;
    confirm_input.classList.add('error-alert');
    var confirmAlert = confirm_input.getElementsByClassName('_input_alert')[0];
    confirmAlert.classList.remove('hidden');
    confirmAlert.textContent = localization.langs[lang].different_password;
};

removeErrorAlerts = function () {
    var input = document.getElementsByClassName('input-row');
    for (var i=0; i<input.length; i++) {
        input[i].classList.remove("error-alert");
        var alert = input[i].getElementsByClassName('_input_alert')[0];
        alert.classList.add('hidden');
        alert.textContent = '';
    }
};

//  Показать скрытую категорию в списке, если есть каналы в Favorites
Player.prototype.toggleFavoritesCategory = function () {
    var favoritesChLength = +playback.getLocalStorage('fav_ch_length');
    console.log(favoritesChLength);
    if (favoritesChLength) {
        categoriesContainer.getElementsByClassName('category_favorites')[0].classList.remove('hidden');
    } else {
        categoriesContainer.getElementsByClassName('category_favorites')[0].classList.add('hidden');
    }
};

Player.prototype.openFavoritesList = function () {
    var currentCategory = categoriesContainer.querySelector('.category-item-container.item-active');
    var categoryName = currentCategory.getElementsByClassName('_category_name')[0].textContent;
    mainMenuTitle.textContent = categoryName;
    this.enterGroupFavorites();
};

Player.prototype.enterGroupFavorites = function () {
    var categories = categoriesContainer.getElementsByClassName('category-item-container');
    for (var i = 0; i < categories.length; i++) {
        removeClassCurrentItem(categories[i]);
    }
    addClassCurrentItem(categoriesContainer.getElementsByClassName('category_favorites')[0]);
    var channelGroups = channelGroupsContainer.getElementsByClassName('_channels_group');
    for (var i = 0; i < channelGroups.length; i++) {
        channelGroups[i].classList.add('hidden');
    }
    channelGroupsContainer.querySelector('._channels_group[ganre_id="favorites"]').classList.remove('hidden');
};

Player.prototype.favoritesSwitch = function () {
    console.log("favoritesSwitch starts");
    var ch_id = video.getAttribute('ch_id');
    var ganre_id = video.getAttribute('ganre_id');
    var is_favorites = this.searchFavoriteCh(ch_id);
    if (is_favorites) {
        this.removeFromFavorites(ch_id, favBtn, ganre_id);
    } else {
        this.pushToFavorites(ch_id, favBtn, ganre_id);
    }
    dropActivityCounter();                                                  // очищаем таймер для скрытия панели управления видео
};

Player.prototype.pushToFavorites = function (ch_id, btn, ganre_id) {
    btn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/bookmark-yellow.png');
    channelGroupsContainer.querySelector('.ch-item[_id="' + ch_id + '"] .rating-container__favorites').style.opacity = 1;
    playback.setLocalStorage(favorite_ch_key + ch_id, ch_id);
    var favChLength = +playback.getLocalStorage('fav_ch_length');
    if (!favChLength) favChLength = 0;
    favChLength += 1;
    playback.setLocalStorage('fav_ch_length', favChLength);
    var currentCategoryId = document.querySelector('.category.current-item').getAttribute('_id');
    //this.renderAll(playlist, ganre_id , '', currentCategoryId);
    // from renderAll() ---->
    var containerTpl = document.getElementsByClassName('_channels_group')[0];
    var favorit_container = document.querySelector('._channels_group[ganre_id="favorites"]');
    var epgMode = this.getEpgMode();
    for (var i = 0; i < playlist.channels.length; i++) {
        if (playlist.channels[i].id == ch_id) {
            var ch_obj = playlist.channels[i];
            this.renderToFavorites(favorit_container, ch_obj, epgMode, i, ganre_id);
            break;
        }
    }
    this.renderChannelIndexNumber(favorit_container);
    // <----from renderAll()
    var items = channelGroupsContainer.querySelectorAll('.ch-item[_id="' + ch_id + '"] .rating-container__favorites');
    for (i=0; i<items.length; i++) {
        items[i].style.opacity = 1;
    }
    this.toggleFavoritesCategory();
};

Player.prototype.removeFromFavorites = function (ch_id, btn, ganre_id) {
    if (btn) {
        console.log(btn);
        btn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/bookmark-white.png');
    } else {
        channelGroupsContainer.querySelector('.ch-item[_id="' + ch_id + '"] .rating-container__favorites').style.opacity = 0;
    }
    playback.removeItemLocalStorage(favorite_ch_key + ch_id);
    var favChLength = +playback.getLocalStorage('fav_ch_length') - 1;
    playback.setLocalStorage('fav_ch_length', favChLength);
    //this.renderAll(playlist, ganre_id);
    // from renderAll() ---->
    channelGroupsContainer.querySelector('._channels_group[ganre_id="favorites"] .ch-item[_id="' + ch_id + '"]').remove();
    var items = channelGroupsContainer.querySelectorAll('.ch-item[_id="' + ch_id + '"] .rating-container__favorites');
    for (i=0; i<items.length; i++) {
        items[i].style.opacity = 0;
    }
    var favorit_container = document.querySelector('._channels_group[ganre_id="favorites"]');
    this.renderChannelIndexNumber(favorit_container);
    // <----from renderAll()
    this.openChoosenCategoryList(categoriesContainer.getElementsByClassName('category_all')[0]);
    if (ganre_id) {                                                         // просто убираем из фейворитс (не заносим в Блокед)
        var cid = channelGroupsContainer.querySelector('._channels_group[ganre_id=all] .ch-item[_id="' + ch_id + '"]').getAttribute('_cid');
        this.selectChannel(cid);
    }
    header.classList.remove('hidden');
    controlsContainer.classList.remove('hidden');
    this.toggleFavoritesCategory();
};

// Здесь мы проверяем является ли канал "фейворитс". Если да - то мы подсвечиваем кнопку нужным классом и меняем на нужную картинку
Player.prototype.renderFavoriteBtn = function (id) {
    var favorites = this.searchFavoriteCh(id);
    if (favorites) {
        favBtn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/bookmark-yellow.png');
    } else {
        favBtn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/bookmark-white.png');
    }
};

Player.prototype.showConfirmWindow = function (blocked) {
    var pcPassword = this.checkSavedPass();
    var lang = getLanguage();
    clearInterval(timerActivity);                                           // очищаем таймер для скрытия панели управления видео
    console.log(popup.className);
    popup.classList.remove('hidden');
    popup.classList.add('_ch_confirm');
    if (blocked) {
        popupConfirmBtn.setAttribute('action_type', 'unblock');
    } else {
        popupConfirmBtn.setAttribute('action_type', 'block');
    }
    if (pcPassword) {
        this.closeSetPassMode(lang);
        if (blocked) {
            popupTitle.textContent = localization.langs[lang].remove_from_blocked;
        } else {
            popupTitle.textContent = localization.langs[lang].add_to_blocked;
        }
    } else {
        this.setPassMode(lang);
    }
    mainMenu.classList.add('hidden');
    header.classList.add('hidden');
    controlsContainer.classList.add('hidden');
};

Player.prototype.closeConfirmWindow = function () {
    popup.classList.add('hidden');
};

Player.prototype.setPassMode = function (lang) {
    popupTitle.textContent = localization.langs[lang].set_pc_password;
    var inputRow = popup.getElementsByClassName('input-row');
    for (var i = 0; i < inputRow.length; i++) {
        inputRow[i].classList.add('hidden');
    }
    popupConfirmBtn.classList.add('hidden');
    var setPassMod = popup.getElementsByClassName('_set_pass_mod');
    for (var i = 0; i < setPassMod.length; i++) {
        setPassMod[i].classList.remove('hidden');
    }
};

Player.prototype.closeSetPassMode = function (lang) {
    this.clearAllInputs(popup);
    var inputRow = popup.getElementsByClassName('input-row');
    for (var i = 0; i < inputRow.length; i++) {
        inputRow[i].classList.remove('hidden');
    }
    popupConfirmBtn.classList.remove('hidden');
    var setPassMod = popup.getElementsByClassName('_set_pass_mod');
    for (var i = 0; i < setPassMod.length; i++) {
        setPassMod[i].classList.add('hidden');
    }
    popupTitle.textContent = localization.langs[lang].add_to_blocked;
};

//  Показать скрытую категорию в списке, если есть каналы в Blocked
Player.prototype.toggleBlockedCategory = function () {
    var blockedChLength = +playback.getLocalStorage('blocked_ch_length');
    if (blockedChLength) {
        categoriesContainer.getElementsByClassName('category_blocked')[0].classList.remove('hidden');
    } else {
        categoriesContainer.getElementsByClassName('category_blocked')[0].classList.add('hidden');
    }
};

Player.prototype.toggleAllCategory = function () {
    var self = this;
    allChannelsCount = channelGroupsContainer.querySelectorAll('._channels_group[ganre_id="all"] .ch-item:not(.hidden)').length;
    if (allChannelsCount == 0) {
        categoriesContainer.getElementsByClassName('category_all')[0].classList.add('hidden');
        if (!permission && !canceled) {
            var action_type = categoriesContainer.getElementsByClassName('category_blocked')[0].getAttribute('action_type');
            var lang = getLanguage();
            mainMenu.classList.add('hidden');
            popup.classList.remove('hidden');
            popupTitle.textContent = localization.langs[lang].enter_to_blocked;
            popupConfirmBtn.setAttribute('action_type', action_type);
            video.setAttribute('src', '');
            self.errorHandler('blocked');
        }
        if (canceled) {
            hamburger.classList.add("_hamburger_allblocked");
            hamburger.classList.remove("_hamburger");
            // hamburger.getElementsByClassName('_hamburger_allblocked')[0].addEventListener("click", function() {
            //     hamburger.getElementsByClassName('category_blocked')[0].click();
            // });
        }
        if (permission && lastBlock) {
            self.errorHandler('blocked');
            setTimeout(function () {
                self.enterGroupBlocked();
            }, 500);
        }
        if (!permission && lastBlock) {
            self.errorHandler('blocked');
            setTimeout(function () {
                mainMenu.classList.add('hidden');
                header.classList.add('hidden');
                controlsContainer.classList.add('hidden');
                var actionType = categoriesContainer.getElementsByClassName('category_blocked')[0].getAttribute('action_type');
                var lang = getLanguage();
                popup.classList.remove('hidden');
                popupTitle.textContent = localization.langs[lang].enter_to_blocked;
                popupConfirmBtn.setAttribute('action_type', actionType);
            }, 200);
        }
    }
};

Player.prototype.openBlockedList = function () {
    var action_type = document.getElementsByClassName('category_blocked')[0].getAttribute('action_type');
    console.log(action_type);
    console.log(playback.getSessionStorage('trusted_session_' + action_type));
    if (this.trustedSession(action_type)) {
        var currentCategory = categoriesContainer.querySelector('.category-item-container.item-active');
        var categoryName = currentCategory.getElementsByClassName('_category_name')[0].textContent;
        mainMenuTitle.textContent = categoryName;
        this.enterGroupBlocked();
    } else {
        // var lang = getLanguage();
        // mainMenu.classList.add('hidden');
        // popup.classList.remove('hidden');
        // popupTitle.textContent = localization.langs[lang].enter_to_blocked;
        // popupConfirmBtn.setAttribute('action_type', action_type);
    }
};

Player.prototype.enterGroupBlocked = function () {
    var categories = categoriesContainer.getElementsByClassName('category-item-container');
    for (var i = 0; i < categories.length; i++) {
        removeClassCurrentItem(categories[i]);
    }
    addClassCurrentItem(categoriesContainer.getElementsByClassName('category_blocked')[0]);
    var channelGroups = channelGroupsContainer.getElementsByClassName('_channels_group');
    for (var i = 0; i < channelGroups.length; i++) {
        channelGroups[i].classList.add('hidden');
    }
    channelGroupsContainer.querySelector('._channels_group[ganre_id="blocked"]').classList.remove('hidden');
    var category_name = categoriesContainer.querySelector('.category_blocked ._category_name').innerHTML;
    mainMenuTitle.textContent = category_name;
};

Player.prototype.blockBtnAction = function () {
    var actionType = blockBtn.getAttribute('action_type');
    var ch_id = video.getAttribute('ch_id');
    var cid = video.getAttribute('_cid');
    var ganre_id = video.getAttribute('ganre_id');
    var blocked = this.searchBlockedCh(ch_id);
    console.log(this.trustedSession(actionType));
    if (this.trustedSession(actionType)) {
        this.blockedSwitch(actionType, ganre_id, blockBtn, cid);
    } else {
        console.log('showPopup');
        this.showConfirmWindow(blocked);
    }
};

Player.prototype.blockedSwitch = function (actionType, ganre_id, btn, cid) {
    var ch_id = video.getAttribute('ch_id');
    if (actionType == 'unblock') {
        this.removeFromBlocked(ch_id, btn);
        permission = true;
        this.renderAll(playlist, ganre_id);
        this.switchCategory(ganre_id, cid, actionType);
    } else if (actionType == 'block') {
        this.pushToBlocked(ch_id, btn);
        if ((allChannelsCount - 1) == 0) {
            lastBlock = true;
        } else {
            lastBlock = false;
        }
        this.renderAll(playlist, ganre_id);
        this.switchCategory(ganre_id, cid, actionType);
    }
    if (typeof hideControl !== 'undefined') {                //в десктопе запускаем таймер на скрытие контроллов, в вебоси - нет
        setActivityCounter();
    }
};

Player.prototype.switchCategory = function (ganre_id, cid, actionType) {
    if (ganre_id == 'blocked' && actionType == 'unblock') {
        categoriesContainer.getElementsByClassName('category_all')[0].classList.remove('hidden');
        //categoriesContainer.getElementsByClassName('category_all')[0].click();
        var categoryAll = categoriesContainer.getElementsByClassName('category_all')[0];
        adapter.openChoosenCategoryList(categoryAll);
        this.selectChannel(cid);
    } else if (actionType == 'block') {
        console.log(categoriesContainer.getElementsByClassName('category_all')[0]);
        var categoryAll = categoriesContainer.getElementsByClassName('category_all')[0];
        adapter.openChoosenCategoryList(categoryAll);
        //categoriesContainer.getElementsByClassName('category_all')[0].click();
        var firstChannel = document.querySelector('._channels_group[ganre_id="all"] .ch-item:not(.hidden)');
        var cid = firstChannel.getAttribute('_cid');
        this.selectChannel(cid);
    }
    header.classList.remove('hidden');
    controlsContainer.classList.remove('hidden');
};

Player.prototype.pushToBlocked = function (ch_id, btn) {
    playback.setLocalStorage(blocked_ch_key + ch_id, ch_id);
    if (playback.getLocalStorage('favorite_ch:' + ch_id)) {
        this.removeFromFavorites(ch_id);
    }
    var blockedChLength = +playback.getLocalStorage('blocked_ch_length');
    if (!blockedChLength) blockedChLength = 0;
    blockedChLength += 1;
    playback.setLocalStorage('blocked_ch_length', blockedChLength);
    this.renderBlockedBtn(ch_id, btn);
};

Player.prototype.removeFromBlocked = function (ch_id, btn) {
    playback.removeItemLocalStorage(blocked_ch_key + ch_id);
    var blockedChLength = +playback.getLocalStorage('blocked_ch_length') - 1;
    playback.setLocalStorage('blocked_ch_length', blockedChLength);
    this.renderBlockedBtn(ch_id, btn);
};

Player.prototype.renderBlockedBtn = function (id, btn) {
    var blocked_btn = blockBtn;
    if (btn)
        blocked_btn = btn;
    var blocked = this.searchBlockedCh(id);
    if (blocked) {
        blocked_btn.setAttribute('action_type', 'unblock');
        blocked_btn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/padlock-locked.png');
        favBtn.classList.add(' video-controls__item_disabled');
        //favBtn.classList.remove('_active_btn');
        favBtn.className = favBtn.className.replace(/\b_active_btn\b/g, "");
    } else {
        blocked_btn.setAttribute('action_type', 'block');
        blocked_btn.getElementsByTagName('img')[0].setAttribute('src', 'images/icons/padlock.png');
        //favBtn.classList.remove('video-controls__item_disabled');
        favBtn.className = favBtn.className.replace(/\bvideo-controls__item_disabled\b/g, "");
        favBtn.classList.add('_active_btn');
    }
};

Player.prototype.checkShortenedLanguage = function () {
    var changes = false;
    var loc = '';
    var langs = languagesContainer.getElementsByClassName('_lang_btn');
    for (var i = 0; i < langs.length; i++) {
        loc = langs[i].getAttribute('loc');
        if (window.innerWidth < 1700) {
            var index = loc.indexOf('_sm');
            if (index == -1) {
                loc = loc + '_sm';
                changes = true;
            }
        } else {
            loc = langs[i].getAttribute('loc');
            changes = true;
        }
        if (changes == true) {
            var lang = getLanguage();
            langs[i].textContent = localization.langs[lang][loc];
            changes = false;
        }
    }
};


Player.prototype.searchFavoriteCh = function (ch_id) {
    return playback.getLocalStorage(favorite_ch_key + ch_id);
};

Player.prototype.searchBlockedCh = function (ch_id) {
    return playback.getLocalStorage('blocked_ch:' + ch_id);
};

Player.prototype.setLastWatchedCh = function (ch_id) {
    stbStorage.setItem('last_watched_ch', ch_id);
};

Player.prototype.getLastWatchedCh = function () {
    return stbStorage.getItem('last_watched_ch');
};

Player.prototype.startTrustedSession = function (action_type) {
    playback.setSessionStorage('trusted_session_' + action_type, true);
};

Player.prototype.trustedSession = function (action_type) {
    return playback.getSessionStorage('trusted_session_' + action_type);
};

Player.prototype.changeSavedPass = function (confirm_pass) {
    var new_pass = MD5(confirm_pass);
    playback.setLocalStorage('parent_control', new_pass);
    this.successAlert();
};

Player.prototype.checkSavedPass = function () {
    return playback.getLocalStorage('parent_control');
};

Player.prototype.getEpgStatus = function () {
    var epgStatus = 1;
    if (clientSettings.success.epg) {
        epgStatus = clientSettings.success.epg.status;
    }
    return epgStatus;;
};

Player.prototype.getEpgMode = function () {
    var epgMode = 3;
    //if (clientSettings.success.epg) {                                       // ВКЛЮЧИТЬ ПОСЛЕ ТЕСТИРОВАНИЯ
    //    epgMode = clientSettings.success.epg.mode;
    //}
    return epgMode;
};

Player.prototype.enableLoader = function (loader) {
    loader.classList.remove('hidden');
};

Player.prototype.disableLoader = function (loader) {
    loader.classList.add('hidden');
};

//  Определяем текущий язык при первичной загрузке и применяем его в нужных местах
Player.prototype.initLanguageSettings = function () {
    var lang = getLanguage();
    document.querySelector('._lang_btn[lang="' + lang + '"]').classList.add('item-active');
    localization.apply(lang);
    this.checkShortenedLanguage();
};


Player.prototype.getCurrentProgrammWidth = function (self, item) {
    var selfItem = self.getElementsByClassName(item)[0];
    var html_org = selfItem.innerHTML;
    var html_calc = '<span>' + html_org + '</span>';
    selfItem.innerHTML = html_calc;
    var text = selfItem.querySelector('span');
    var textWidth = text.offsetWidth;
    selfItem.innerHTML = html_org;
    return textWidth;
};

Player.prototype.hideMoreAbout = function () {
    moreAboutContainer.classList.add('hidden');
    var progEpg = epgContainer.getElementsByClassName('epg-day-prog');
    for (var i = 0; i < progEpg.length; i++) {
        if (progEpg[i].classList.contains('_more_about')){
            //progEpg[i].classList.remove('selected-item');
            progEpg[i].className = progEpg[i].className.replace(/\bselected-item\b/g, "");
        }
        //progEpg[i].classList.remove('channel-opacity');
        progEpg[i].className = progEpg[i].className.replace(/\bchannel-opacity\b/g, "");
    }
    setWidth("main-menu", 55);
};

Player.prototype.errorHandler = function (errorType, errorCode) {
    this.showError();
    if (!errorCode) {
        var code = '';
    } else {
        var code = ' (' + errorCode + ')';
    }

    if (errorType == 'playlist') {
        errorImg.setAttribute('src', 'images/icons/errors/10.png');
        this.showErrorText('_playlist_error');
        disableVideoControls();
        disableHamburger();
        currentChInfoContainer.classList.add('hidden');
    } else if (errorType == 'channel') {
        errorImg.setAttribute('src', 'images/icons/errors/09.png');
        this.showErrorText('_channel_error');
    } else if (errorType == 'blocked') {
        errorImg.setAttribute('src', 'images/icons/padlock-locked.png');
        disableVideoControls();
        currentChInfoContainer.classList.add('hidden');
    } else {
        errorImg.setAttribute('src', 'images/icons/errors/04.png');
        this.showErrorText('_internet_error');
    }
};

//Делаем недоступными элементы управления видео
function disableVideoControls() {
    var videoItems = controlsContainer.getElementsByClassName('video-controls__item');
    for (var i = 0; i < videoItems.length; i++) {
        videoItems[i].classList.add('disabled');
    }
}
//Делаем недоступным доступ в левое меню
function disableHamburger() {
    hamburger.classList.add('disabled');
}

//Показываем на весь экран ошибку
Player.prototype.showError = function () {
    videoContainer.classList.add('hidden');
    errorsContainer.classList.remove('hidden');
};

//Скрываем блок с ошибкой на главном экране
hideError = function () {
    videoContainer.classList.remove('hidden');
    errorsContainer.classList.add('hidden');
    hamburger.classList.remove('disabled');
    var videoItems = controlsContainer.getElementsByClassName("video-controls__item");
    for (var i = 0; i < videoItems.length; i++) {
        videoItems[i].classList.remove('disabled');
    }
};

//Выводим нужный текст ошибки на главном экране
Player.prototype.showErrorText = function (type) {
    var errors = document.getElementsByClassName('_errors-text');
    for (var i = 0; i < errors.length; i++) {
        errors[i].classList.add('hidden');
    }
    document.getElementsByClassName(type)[0].classList.remove('hidden');
};

//  Сокращение надписей языков для мелких экранов
// window.addEventListener('resize', function () {
//     Player.prototype.checkShortenedLanguage();
// });

Player.prototype.hidePlaybackControls = function () {
    var popupDisabled = popup.classList.contains('hidden');
    if (allChannelsCount == 0 && !popupDisabled) {
        header.classList.add('hidden');
        controlsContainer.classList.add('hidden');
    }
};

//листаем список каналов вверх
Player.prototype.prevChannelInList = function () {
    this.channelActive = document.querySelector(".ch-item.item-active");
    var currentChannel = document.getElementsByClassName("ch-item item-active")[0];
    this.channelActive.classList.remove("ch-item_active", "item-active");
    var prevChannel = this.channelActive.previousSibling;
    if (prevChannel && prevChannel.tagName == 'DIV') {
        //prevChannel.classList.add("ch-item_active", "item-active");
        prevChannel.className += "  ch-item_active item-active ";
        this.channelActive = prevChannel;
    }
    else {
        document.querySelectorAll('._channels_group:not(.hidden) .ch-item:last-child')[0].classList.add("ch-item_active", "item-active");
        this.channelActive = document.querySelectorAll('._channels_group:not(.hidden) .ch-item:last-child')[0];
    }
    this.channelListScroll(this.channelActive, 'prev');
    var activeChannel = document.querySelector('.ch-item.item-active');
};

//листаем список каналов вниз
Player.prototype.nextChannelInList = function () {
    var nextChannel;
    this.channelActive = document.querySelector(".ch-item.item-active");
    var currentChannel = this.channelActive;
    this.channelActive.classList.remove("ch-item_active", "item-active");
    if (this.channelActive.nextElementSibling) {
        nextChannel = this.channelActive.nextSibling;
        if (nextChannel.getAttribute("_cid")) {
            nextChannel.className += "  ch-item_active item-active ";
        }
    }
    else {
        document.querySelectorAll('._channels_group:not(.hidden) .ch-item:nth-child(2)')[0].classList.add("ch-item_active", "item-active");
    }
    this.channelActive = nextChannel;
    this.channelListScroll(currentChannel, 'next');
    var activeChannel = document.querySelector('.ch-item.item-active');
};

var channelContainerScroll = 0;
Player.prototype.channelListScroll = function (currentChannel, direction) {
    if (direction == 'next') {
        if (currentChannel.nextSibling) {       //текущий канал НЕ последний
            var nextChannel = currentChannel.nextSibling;
            var isVisible = checkIfVisible(nextChannel);
            if (!isVisible) {
                nextChannel.scrollIntoView();
            }
        }
        else {                                  //текущий канал последний
            channelGroupsContainer.scrollTop = 0;
        }
    }
    else if (direction == 'prev') {     //здесь currentChannel уже является следующим наведенным каналом
        if (currentChannel.nextSibling) {       //текущий канал НЕ первый
            if (!isVisible) {
                currentChannel.scrollIntoView();
            }
        }
        else {                                                       //текущий канал первый
            currentChannel.scrollIntoView();
        }
    }
};

Player.prototype.setVideoType = function() {
    playback = new Factory().checkType('hls');
};

function getLanguage () {
    var lang = playback.getLocalStorage('localization');
    if (!lang) {
        lang = 'ru';
    }
    return lang;
}

function renderUniq(uniqNum) {
    var lang = getLanguage();
    var uniqRow = document.getElementById('serial-number');
    var uniq = localization.langs[lang].serial_number;
    uniq = formatString(uniqNum);
    uniqRow.textContent = uniq;
}

function prepareOpeningAuthPopup () {
    document.getElementsByClassName('main-content')[0].classList.add('hidden');
    HideControls.prototype.hidePlayback();
}

adapter = new Adapter();
auth = new Auth();
(function() {
    var arr = [window.Element, window.CharacterData, window.DocumentType];
    var args = [];

    arr.forEach(function (item) {
        if (item) {
            args.push(item.prototype);
        }
    });

    // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
    (function (arr) {
        arr.forEach(function (item) {
            if (item.hasOwnProperty('remove')) {
                return;
            }
            Object.defineProperty(item, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    this.parentNode.removeChild(this);
                }
            });
        });
    })(args);
})();
// var categoryItem,
//     channelItemHeight,
//     epgItemHeight,
//     aboutHeight,
//     moreAbout;
//
// var containers = {};
//
// $(window).on("load",function(){
//     //смотрим каким браузером открыта страница
//     var isFirefox = typeof InstallTrigger !== 'undefined';
//     var isIE = /*@cc_on!@*/false || !!document.documentMode;
//     var isEdge = !isIE && !!window.StyleMedia;
//     if (isFirefox || isEdge) {
//         getScripts();
//
//         //пересчет размера скроллинга(по высоте) при изменении размеров экрана (и соот.в высоты channel-item)
//         $( window ).resize(function () {
//             setNewScrollHeight();
//             setDataForScroll();
//             newScrollBars(containers);
//         });
//     }
// });
//
// //подключаем джс и цсс библиотеки
// function getScripts() {
//     var tag_css = document.createElement('link');
//     tag_css.rel = 'stylesheet';
//     tag_css.href = 'css/vendor/jquery.mCustomScrollbar.min.css';
//     tag_css.type = 'text/css';
//     var tag_head = document.getElementsByTagName('head');
//     tag_head[0].appendChild(tag_css);
//
//     $.getScript('js/vendor/jquery.mCustomScrollbar.concat.min.js', function() {
//         setDataForScroll();
//         newScrollBars(containers);
//     });
// }
//
// //устанавливаем или меняем данные о высоте айтемов блоков для скролла
// function setDataForScroll() {
//     containers = {};
//
//     categoryItem = $("._category ").height();
//     channelItemHeight = $("._channel").height();
//     epgItemHeight = $("._prog_epg").height();
//     aboutHeight = parseInt($("._program_description").css("line-height"));
//     moreAbout = $(".more-about-container").height();
//
//     containers = {
//         "._categories_container" : categoryItem,
//         "._ch_container" : channelItemHeight,
//         ".program-list-container" : epgItemHeight,
//         "._content_container" : aboutHeight,
//         ".more-about-container" : moreAbout
//     };
// }
//
// //инициализируем на нужные селекторы скроллы
// function newScrollBars(obj) {
//     for (key in obj) {
//         $(key).mCustomScrollbar({
//             axis: "y",
//             scrollInertia: 0,
//             scrollbarPosition: "outside",
//             mouseWheel:{ scrollAmount: obj[key] },
//             callbacks:{
//                 onScrollStart: function() {
//                     $("._arrow_block").addClass("hidden");
//                 },
//                 onScroll: function() {
//                     if ($(this).hasClass("_ch_container"))
//                         $('.block-with-arrows').css("top", this.mcs.top + $(".main-menu-header").outerHeight(true));
//                     $("._arrow_block").removeClass("hidden");
//                 }
//             }
//         });
//     }
// }
//
// //блок со стрелочками премещается вместе с блоком списка каналов
// function setNewScrollHeight () {
//     $('.block-with-arrows').css("top", $(".main-menu-header").outerHeight(true));
//     destroy();
// }
//
// //стираем старые настройки скроллинга
// function destroy () {
//     $("._ch_container, .program-list-container, ._content_container").mCustomScrollbar("destroy");
// }
function Factory () {}

Factory.prototype.checkType = function(type) {
    switch (type) {
        case 'hls' :
            console.log('hls');
            return new ClassHls();
            break;
        case 'html' :
            console.log('html');
            return new VideoTag();
            break;
        case 'tizen' :
            console.log('tizen');
            return new tizenPlayer();
            break;
        case 'stalker' :
            console.log('stalker');
            return new StalkerPlayer();
            break;
    }
};
function StalkerPlayer () {
    this.audio = stbAudioManager.list[0];
    this.audio.volume = 80;
    this.localData = 'localData';
    // var data = this.prepareData(gSTB.LoadUserData(this.localData), true);
    // for (key in data) {
    //     delete data[key];
    // }
    // gSTB.SaveUserData(this.localData, this.prepareData(data, false));
}

StalkerPlayer.prototype.play = function (url) {
    stbVideo.play({
        uri: url,
        solution: 'auto'
    });
};

StalkerPlayer.prototype.stop = function(){
    stbVideo.stop();
};

//переключение каналов
StalkerPlayer.prototype.channelSwitch = function (url) {
    var self = this;
    self.stop();
    setTimeout(function(){
        self.play(url);
    },true);
};

StalkerPlayer.prototype.mute_video = function() {
    stbVideo.mute = true;
};

StalkerPlayer.prototype.unmute_video = function() {
    stbVideo.mute = false;
};

//local- and session- storages
StalkerPlayer.prototype.prepareData = function(data, isString) {
    if (isString) {
        if (data) return JSON.parse(data);
    }
    else return JSON.stringify(data);
};

StalkerPlayer.prototype.setLocalStorage = function(key, value) {
    var data = this.prepareData(gSTB.LoadUserData(this.localData), true);
    if (!data) data = {};
    data[key] = value;
    gSTB.SaveUserData(this.localData, this.prepareData(data, false));
};

StalkerPlayer.prototype.getLocalStorage = function(key) {
    var data = this.prepareData(gSTB.LoadUserData(this.localData), true);
    if (data) return data[key];
};

StalkerPlayer.prototype.removeItemLocalStorage = function(key) {
    var data = this.prepareData(gSTB.LoadUserData(this.localData), true);
    delete data[key];
    gSTB.SaveUserData(this.localData, this.prepareData(data, false));
};

StalkerPlayer.prototype.setSessionStorage = function(key, value) {
    stbStorage.setItem(key, value);
};

StalkerPlayer.prototype.getSessionStorage = function(key) {
    return stbStorage.getItem(key);
};

function Auth() {}

Auth.prototype.modalError = false;
Auth.prototype.ifAuthForm = true;

Auth.prototype.clientAuthorization = function (code, callback) {
    var self = this;
    var xhr = new XMLHttpRequest();
    var body;
    var tvType;
    if (typeof callback === 'function') {
        tvType = callback();
        playback.setSessionStorage('tvType', tvType);   //потом вернуть!!! Это для первой выливки Сталкера
    }
    switch (tvType) {
        case 'WebOSLG':
            body = infoWebOSLG.prototype.buildBody();
            break;
        case 'Tizen':
            body = infoTizen.prototype.buildBody();
            break;
        case 'Desktop':
            //var body = 'sn=1231321&model=22222&info=33333&version=1&platform=android&hash=79fe07520e89862e02b2d00fecf02ca9';  // Для тестирования
            break;
        case 'ios':
            body = iOSBuildBody();
            break;
        case 'Mag':
            //body = 'sn=1231321&model=22222&info=33333&version=1&platform=android&hash=79fe07520e89862e02b2d00fecf02ca9';
            //console.log(stalker.buildBody());
            body = stalker.buildBody();
            break;
        default:
            console.log('android');
    }
    if (code) {
        body = body + '&code=' + code;
    }
    self.disableActivationButton();
    xhr.open('POST', AUTH_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        self.enableActivationButton();
        var data = JSON.parse(this.responseText);
        if (data.success) {
            clientSettings.success = data.success;
            if (data.success.trashed) {
                if (data.success.trashed.type === 'paused') {
                    self.showAuthorizationPopup();
                    console.log("(data.success.trashed.type === 'paused')");
                    self.renderPopupInfo();
                } else {
                    if (tvType === 'Desktop') {
                        document.getElementById('promo-line').classList.add('inactive');
                        document.getElementById('promo-days-left').textContent = ' ' + clientSettings.success.trashed.expired + ' ';
                        watchPromo();
                    } else {
                        self.showAuthorizationPopup();
                        console.log("(data.success.trashed.type != 'paused')");
                        self.renderPopupInfo();
                    }
                }
            } else {
                Auth.prototype.ifAuthForm = false;
                document.body.classList.remove('promo');
                init();
                renderUniq(clientSettings.success.uniq);
                document.getElementById('activation-modal').classList.add('hidden');
            }
        } else if (data.error) {
            clientSettings.error = data;
            self.showAuthorizationPopup();
            self.renderPopupInfo(data.error, tvType);
            self.showAuthErrors(data.error);
        }
        if (typeof callback === 'function') {
            callback();
        }
    };
    xhr.onerror = function () {
        self.enableActivationButton();
        var data = this.status;
        self.errorHandling(data);
    };
    xhr.send(body);
};

Auth.prototype.showAuthorizationPopup = function () {
    document.getElementById('promo-line').classList.add('hidden');
    prepareOpeningAuthPopup();                                                  //in mob/desktop projects
    document.getElementById('activation-modal').classList.remove('hidden');
};

Auth.prototype.renderPopupInfo = function (error) {
    var uniq = document.getElementById('cliens-uniq');
    var daysLeft = document.getElementById('days-left');
    var promoLineDaysLeft = document.getElementById('promo-days-left');
    var companyName = document.getElementById('company-name');
    var companyPhone = document.getElementById('company-phone');
    var companyUrl = document.getElementById('company-url');
    if (error) {
        if (clientSettings.error.uniq) {
            renderUniq(clientSettings.error.uniq);
            uniq.parentNode.classList.remove('hidden');
            uniq.textContent = formatString(clientSettings.error.uniq);
        }
        if (clientSettings.error.message) {
            if (clientSettings.error.message.name)
                companyName.textContent = clientSettings.error.message.name;
            if (clientSettings.error.message.phone)
                companyPhone.textContent = clientSettings.error.message.phone;
            if (clientSettings.error.message.url)
                companyUrl.textContent = clientSettings.error.message.url;
        }
        if (clientSettings.error.trashed && clientSettings.error.trashed.type == 'paused') {
            document.getElementById('days-to-end-promo').classList.add('hidden');
            document.getElementById('activation-tariff-text').classList.add('hidden');
            document.getElementById('activation-code-row').classList.add('hidden');
            document.getElementById('service-is-stopped').classList.remove('hidden');
        }
    } else {
        if (clientSettings.success.uniq) {
            renderUniq(clientSettings.success.uniq);
            uniq.parentNode.classList.remove('hidden');
            uniq.textContent = formatString(clientSettings.success.uniq);
        }
        if (clientSettings.success.trashed.expired) {
            document.getElementById('days-to-end-promo').classList.remove('hidden');
            daysLeft.textContent = clientSettings.success.trashed.expired;
            promoLineDaysLeft.textContent = clientSettings.success.trashed.expired;
        } else {
            document.getElementById('days-to-end-promo').classList.add('hidden');
        }
        if (clientSettings.success.trashed.type == 'small') {
            document.getElementById('days-to-end-promo').classList.add('hidden');
        } else if (clientSettings.success.trashed.type == 'paused') {
            document.getElementById('days-to-end-promo').classList.add('hidden');
            document.getElementById('activation-tariff-text').classList.add('hidden');
            document.getElementById('activation-code-row').classList.add('hidden');
            document.getElementById('service-is-stopped').classList.remove('hidden');
        }
        if (clientSettings.success.message) {
            if (clientSettings.success.message.name)
                companyName.textContent = clientSettings.success.message.name;
            if (clientSettings.success.message.phone)
                companyPhone.textContent = clientSettings.success.message.phone;
            if (clientSettings.success.message.url)
                companyUrl.textContent = clientSettings.success.message.url;
        }
    }
};

Auth.prototype.showAuthErrors = function (error) {
    var error_loc = localization.langs[getLanguage()];
    if (error > 9 && error < 14) {
        document.getElementById('activation-modal-title').classList.remove('hidden');
        document.getElementById('activation-modal-error').classList.add('hidden');
        document.getElementById('days-left').parentNode.classList.remove('hidden');
        document.getElementById('activation-btn').parentNode.classList.remove('hidden');
        document.getElementById('retry-btn').parentNode.classList.add('hidden');
        document.getElementById('watch-promo-btn').classList.remove('hidden');
        incorrectPassword(document.getElementById('activation-code'), error_loc['error_' + error]);
        Auth.prototype.modalError = false;
    } else {
        document.getElementById('activation-modal-title').classList.add('hidden');
        document.getElementById('activation-modal-error').classList.remove('hidden');
        document.getElementById('days-left').parentNode.classList.add('hidden');
        document.getElementById('activation-tariff-text').classList.add('hidden');
        document.getElementById('activation-btn').parentNode.classList.add('hidden');
        document.getElementById('retry-btn').parentNode.classList.remove('hidden');
        document.getElementById('watch-promo-btn').classList.add('hidden');
        var errorText = document.getElementById('error-modal-text');
        errorText.parentNode.classList.remove('hidden');
        errorText.setAttribute('loc', 'error_' + error);
        errorText.textContent = error_loc['error_' + error] + ' ( ' + error + ' )';
        Auth.prototype.modalError = true;
    }
};

Auth.prototype.errorHandling = function (data) {
    this.showAuthorizationPopup();
    document.getElementById('activation-modal-title').classList.add('hidden');
    document.getElementById('activation-modal-error').classList.remove('hidden');
    document.getElementById('days-left').parentNode.classList.add('hidden');
    document.getElementById('activation-btn').parentNode.classList.add('hidden');
    document.getElementById('retry-btn').parentNode.classList.remove('hidden');
    document.getElementById('watch-promo-btn').classList.add('hidden');
    var errorText = document.getElementById('error-modal-text');
    errorText.parentNode.classList.remove('hidden');
    errorText.textContent = 'Unknown error' + ' ( ' + data + ' )';
    Auth.prototype.modalError = true;
};

// Activation popup events
document.getElementById('watch-promo-btn').addEventListener('click', watchPromo);
function watchPromo() {
    var promoLine = document.getElementById('promo-line');
    document.getElementById('activation-modal').classList.add('hidden');
    //promoLine.classList.remove('hidden');
    if (typeof enterPromoInHorizontal === 'function') {
        enterPromoInHorizontal();
    }
    if (!document.body.classList.contains('promo')) {     //проверяем включался ли уже промо-режим в текущей сессии. Если да - НЕ перегружаем всё заново, а просто закрываем окно авторизации
        document.body.classList.add('promo');
        if (clientSettings.success.trashed.type == 'small' || clientSettings.success.trashed.type == 'paused') {
            var bigPromoElements = document.getElementsByClassName('_big_promo');
            for (var i = 0; i < bigPromoElements.length; i++) {
                bigPromoElements[i].classList.add('hidden');
            }
        } else {
            document.getElementsByClassName('_small_promo')[0].classList.add('hidden');
        }
        Auth.prototype.ifAuthForm = false;
        init();

    } else {
        Auth.prototype.ifAuthForm = false;
    }
    showMenusAndPlayback();
}


document.getElementById('activation-btn').addEventListener('click', activateTariff);
function activateTariff(callback) {
    var codeInput = document.getElementById('activation-code');
    var code = Auth.prototype.checkCodeValid(codeInput);
    if (code) {
        removeErrorAlerts();
        Auth.prototype.clientAuthorization(code, callback);
    } else {
        incorrectPassword(codeInput, localization.langs[getLanguage()].incorrect_activating_code);
    }
}

document.getElementById('retry-btn').addEventListener('click', retryAuth);
function retryAuth(callback) {
    Auth.prototype.clientAuthorization(null, callback);
}

Auth.prototype.checkCodeValid = function (input) {
    var reg = /^([a-np-z1-9]+|\d+)$/i;
    var inputValue = input.value;
    if (reg.test(inputValue) && inputValue.length == 4 && inputValue.indexOf('0') == -1) {
        return inputValue;
    } else {
        return false;
    }
};

//Смотрим выдало ли ошибку в форме авторизации. Если true - значит есть ошибка и необходимо скрывать инпут и кнопку "Активировать",
// а показывать кнопки "Повторить" и "Закрыть". Если false то наоборот.
Auth.prototype.getAuthError = function () {
    return Auth.prototype.modalError;
};

//Проверяем доступна ли нам форма авторизации. Если нет (false) - сразу переходим на сам плеер
//Этот же метод проверяет прошли ли мы авторизацию. Если мы прошли авторизацию то форма пропадает, а соотв. возвращается false
Auth.prototype.ifActivationMode = function () {
    return Auth.prototype.ifAuthForm;
};

//проверяем доступна ли для клика кнопка Активировать, или же заблокированна (дабы избежать нескольких кликов подряд)
Auth.prototype.ifActivationButtonAvailable = function () {
    if (document.getElementById('activation-btn').classList.contains('disabled')) {
        return false;
    }
    else return true;
};
//блокируем нажатие на кнопку Активировать тариф
Auth.prototype.disableActivationButton = function () {
    document.getElementById('activation-btn').classList.add('disabled');
};
//разблокируем нажатие на кнопку Активировать тариф
Auth.prototype.enableActivationButton = function () {
    document.getElementById('activation-btn').classList.remove('disabled');
};

//Клик по желтой полоске промо-режима
document.getElementById('promo-line').addEventListener('click', function () {
    if (this.classList.contains('inactive')) {
        return false;
    } else {
        Auth.prototype.showAuthorizationPopup();
    }
});

//Устанавливаем фокус на полоске уведомления о промо-режиме
function setFocusOnPromoLine() {
    document.getElementById('promo-line').classList.add('active');
}
//Узнать есть ли полоска уведомления о про-режиме. True - есть
function ifPromoLineExist() {
    if (document.getElementById('promo-line').classList.contains('hidden')) {
        return false;
    } else
        return true;
}
//Убираем фокус с полоски уведомления о промо-режиме
function removeFocusFromPromoLine() {
    document.getElementById('promo-line').classList.remove('active');
}

//Проверить или текущий режим промо - paused.
function ifPausedPromo() {
    if (Object.keys(clientSettings).length != 0 && clientSettings.success.trashed.type == 'paused') return true;
    else return false;
}

function iOSBuildBody() {
    var deviceSerial = 'sn=' + localStorage.getItem('sn');
    var deviceModel = 'model=' + localStorage.getItem('model');
    var deviceInfo = 'info=' + localStorage.getItem('info');
    var version = 'version=1';
    var platform = 'platform=ios';
    var hash = 'hash=' + localStorage.getItem('hash');

    return deviceSerial + '&' + deviceModel + '&' + deviceInfo + '&' + version + '&' + platform + '&' + hash;
};
var EPG_BASIC_URL = 'https://cdnua01.hls.tv/epg/v3/';
var EPG_URL_SUFFIX = '/channels.json';
var EPG_CH_URL_SUFFIX = '/channel.json';
var EPG_DETAIL_URL_SUFFIX = '/detail.json';
var EPG_LANG = '?lang=';
var EPG_FROM = '&from=';
var EPG_TO = '&to=';
var EPG_IMG = '&img_q=';
var RELOAD_TIME = 1500000;
;(function() {
    // helpers
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className += ' '+ name;
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name) {
            return this.contains(name)
                ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
if (!window.JSON) {
    window.JSON = {
        parse: function(sJSON) { return eval('(' + sJSON + ')'); },
        stringify: function(vContent) {
            if (vContent instanceof Object) {
                var sOutput = '';
                if (vContent.constructor === Array) {
                    for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ',', nId++);
                    return '[' + sOutput.substr(0, sOutput.length - 1) + ']';
                }
                if (vContent.toString !== Object.prototype.toString) {
                    return '"' + vContent.toString().replace(/"/g, '\\$&') + '"';
                }
                for (var sProp in vContent) {
                    sOutput += '"' + sProp.replace(/"/g, '\\$&') + '":' + this.stringify(vContent[sProp]) + ',';
                }
                return '{' + sOutput.substr(0, sOutput.length - 1) + '}';
            }
            return typeof vContent === 'string' ? '"' + vContent.replace(/"/g, '\\$&') + '"' : String(vContent);
        }
    };
}
init = function () {
    Player.prototype.getM3UJson();
    document.getElementsByClassName('main-content')[0].classList.remove('hidden');
};
var AUTH_URL = 'https://cdnua01.hls.tv/v3/hlsclient/auth';

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
var NAV_SEARCH_CHANNEL = "search-channel"
var EXIT_POPUP = "exit_popup";

var mag = {
    navigation:false,
    currentObj:NAV_APP,
    rightResetActiveBtn:false,
    eyePopupFocus:false,
    focusInputParentPassword:false,
    focusInputActivateCode:false,
    memoryMode:false,
    passwordPopup:false,
    passwordUnblockPopup:false,
    passwordCategory:false,
    focusCategory:false,
    closeSettings:false,
    idMenuIcon:false,
    keydownTimer: null
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
// set focus on search channel menu
mag.setSearchChannelMode = function(){ this.currentObj = NAV_SEARCH_CHANNEL;};
/*set focus on exitApp popup */
mag.setExitAppPopupMode = function(){this.currentObj = EXIT_POPUP;};

function Navigation () {
    Adapter.apply(this, arguments);
}
Navigation.prototype = Object.create(Adapter.prototype);
Navigation.prototype.selectChannel = function () {
    stalker.selectChannel();
};
Navigation.prototype.returnFocusOnChannel = function () {
    returnFocusOnChannel();
};
Navigation.prototype.confirmAction = function () {
    stalker.confirmAction();
};
Navigation.prototype.toggleFavorites = function () {
    stalker.favoritesSwitch();
};
Navigation.prototype.toggleBlock = function () {
    stalker.blockBtnAction();
};
var navigation = new Navigation();

mag.init = function () {
    navigation.hidePlayback();
    var tvType = 'Mag';
    Auth.prototype.clientAuthorization(null, function () {
        if (navigation.ifActivationMode()) {
            mag.authorization();
        } else {
            mag.setContentMode();
        }
        return tvType;
    });
};

//наложение видео-контейнера и плейбека друг на друга
//stbWindowMgr.setVirtualKeyboardInitAttr(JSON.stringify({height: 600, backgroundColor: "#46CE36"}));
gSTB.SetTopWin(0);
gSTB.SetMode(1);
gSTB.SetTransparentColor(0);

var stbVideo = stbPlayerManager.list[0];

stbVideo.onPlayStart = function () {
    console.log('Video playback has begun.');
};

window.addEventListener('keydown', eventsList);

function eventsList() {
    console.log(mag.currentObj);
    clearTimeout(mag.keydownTimer);
    switch (event.keyCode) {
        case 13: //enter
            console.log('enter');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION :
                    mag.focusElementActivation();
                    break;
                case NAV_CONTENT :
                    // navigation.showPlayback();
                    // mag.setPlayerPanelUpMode();
                    // navigation.setFocusOnPause();
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
                    navigation.hidePlayback();
                    mag.setContentMode();
                    break;
                case(NAV_MENU_LEFT_INFO_PROGRAM_GALLERY):
                    navigation.setGalleryImg();
                    break;
                case NAV_MENU_LEFT_CATEGORY :
                    mag.selecCategoryFocus();
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
                case NAV_MENU_RIGHT :
                    mag.openRightMenuContent();
                    break;
                case(NAV_MENU_RIGHT_PARENT_CONTROL):
                    mag.focusInputPasswordParentRight();
                    break;
                case(NAV_MENU_RIGHT_PARENT_CONTROL_INPUT):
                    mag.showHideInputPassword();
                    break;
                case(NAV_MENU_RIGHT_LANG):
                    mag.setLanguage();
                    break;
                case NAV_POPUP_BLOCKED :
                    if(!mag.eyePopupFocus) mag.focusPopup ();
                    else mag.showHideInputPassword();
                    break;
                case NAV_SEARCH_CHANNEL :
                    clearTimeout(searchChannelTimer);
                    mag.searchingChannelSelect();
                    break;
                case EXIT_POPUP :
                    if (mag.getFocusedBtnExitPopup() == 'exitBtn') mag.exitFromApp();
                    else {
                        mag.removeFocusesFromExitPopup();
                        mag.closeExitPopup();
                        mag.setContentMode();
                    }
                    break;
            }
            break;
        case 27:
            console.log('back');
            switch (mag.currentObj) {
                case NAV_AUTHORIZATION :
                    mag.exitFromApp();
                    break;
                case NAV_CONTENT :
                    console.log("exit");
                    mag.setExitAppPopupMode();
                    mag.openExitPopup();
                    mag.focusOnExitAppConfirmBtn();
                    break;
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
                    //navigation.clearChannelScroll();
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
                    navigation.usFromMenusIcons();
                    navigation.closeLeftMenu();
                    mag.setContentMode();
                    navigation.removeFocusFromAboutText();
                    break;
                case NAV_MENU_RIGHT :
                    mag.closeRightMenu();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL :
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeRightMenu();
                    mag.setContentMode();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL_INPUT :
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeRightMenu();
                    mag.setContentMode();
                    break;
                case NAV_MENU_RIGHT_LANG :
                    navigation.hidePlayback();
                    navigation.removeFocusFromMenusIcons();
                    navigation.closeRightMenu();
                    mag.setContentMode();
                    break;
                case NAV_POPUP_BLOCKED :
                    mag.cancelPopup();
                    break;
                case NAV_SEARCH_CHANNEL :
                    mag.removeLastDigit();
                    break;
                case EXIT_POPUP :
                    mag.removeFocusesFromExitPopup();
                    mag.closeExitPopup();
                    mag.setContentMode();
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
                case NAV_MENU_RIGHT :
                    mag.openRightMenuContent();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL :
                    navigation.toggleRightMenuItem();
                    mag.setSettingsMode();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL_INPUT :
                    navigation.leftInParentControl();
                    mag.setSettingsParentControlMode();
                    break;
                case(NAV_MENU_RIGHT_LANG):
                    // mag.prevLanguage();
                    mag.closeRightMenu();
                    break;
                case(NAV_POPUP_BLOCKED):
                    mag.setFocusPopup("LEFT");
                    break;
                case EXIT_POPUP :
                    mag.removeFocusesFromExitPopup();
                    mag.focusOnExitAppCancelBtn();
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
                case(NAV_CONTENT):
                    mag.menu("RIGHT");
                    mag.openRightMenuContent();
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
                    // mag.openExtendedEpgForChannels();
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
                    mag.selecCategoryFocus();
                    // navigation.setFirstChannelActive();
                    // navigation.clearChannelScroll();
                    // mag.setChannelsMode();
                    // stalker.channelActive = null;
                    break;
                case NAV_MENU_RIGHT :
                    mag.closeRightMenu();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL :
                    navigation.rightInParentControl();
                    mag.setSettingsParentControlInputMode();
                    mag.blurInputPassword();
                    break;
                case(NAV_MENU_RIGHT_LANG):
                    if(!mag.rightResetActiveBtn) navigation.nextLanguageFocus();
                    break;
                case NAV_POPUP_BLOCKED :
                    mag.setFocusPopup("RIGHT");
                    break;
                case EXIT_POPUP :
                    mag.removeFocusesFromExitPopup();
                    mag.focusOnExitAppConfirmBtn();
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
                    mag.pauseKeydownListener();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    console.log('epg-up');
                    navigation.prevEpginList();
                    mag.pauseKeydownListener();
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
                    //mag.selecCategoryFocus();
                    mag.pauseKeydownListener();
                    break;
                case NAV_MENU_RIGHT :
                    navigation.prevMenuItemInList();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL :
                    navigation.upInParentControl();
                    mag.blurInputPassword();
                    break;
                case NAV_MENU_RIGHT_PARENT_CONTROL_INPUT :
                    navigation.upInParentControl();
                    break;
                case(NAV_MENU_RIGHT_LANG):
                    if(mag.rightResetActiveBtn){
                        navigation.setFocusOnFirstLangBtn();
                    }
                    mag.rightResetActiveBtn = false;
                    break;
                case(NAV_POPUP_BLOCKED):
                    mag.setFocusPopup("UP");
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
                        // navigation.showPlayback();
                        // mag.setPlayerPanelUpMode();
                        // navigation.setFocusOnPause();
                    }
                    break;
                case NAV_MENU_ICON :
                    // navigation.removeFocusFromMenusIcons();
                    // navigation.showPlayback();
                    // mag.setPlayerPanelUpMode();
                    // navigation.setFocusOnPause();
                    break;
                case NAV_PLAYER_PANEL_UP :
                    navigation.downPlaybackItem();
                    mag.setPlayerPanelDownMode();
                    break;
                case NAV_MENU_LEFT_CHANNELS :
                    stalker.nextChannelInList();
                    mag.pauseKeydownListener();
                    break;
                case NAV_MENU_LEFT_PROGRAMS :
                    navigation.nextEpginList();
                    mag.pauseKeydownListener();
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
                    //mag.selecCategoryFocus();
                    mag.pauseKeydownListener();
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
                case NAV_MENU_RIGHT :
                    navigation.nextMenuItemInList();
                    break;
                case(NAV_MENU_RIGHT_PARENT_CONTROL):
                    navigation.downInParentControl();
                    mag.blurInputPassword();
                    break;
                case(NAV_MENU_RIGHT_PARENT_CONTROL_INPUT):
                    navigation.downInParentControl();
                    switch(navigation.getFocusedParentRight()){
                        case("settings-btn"):
                            mag.setSettingsParentControlMode();
                            break;
                    }
                    break;
                case(NAV_MENU_RIGHT_LANG):
                    mag.rightResetActiveBtn = true;
                    navigation.setFocusOnSettingsBtn();
                    break;
                case(NAV_POPUP_BLOCKED):
                    mag.setFocusPopup("DOWN");
                    break;
            }
            break;
        case 9: // next/prev channel
            switch (mag.currentObj) {
                case(NAV_CONTENT):
                    if ( event.shiftKey ) {
                        navigation.prevChannel();
                    }
                    else {
                        navigation.nextChannel();
                    }
                    break;
            }
            break;
        case 107: // volume up
            stbVideo.volume += 5;
            stalker.changeVolume(stbVideo.volume);
            break;
        case 109: // volume down
            if (stbVideo.volume != 0){
                stbVideo.volume -= 5;
            }
            stalker.changeVolume(stbVideo.volume);
            break;
        case 192: // volume off/on
            if (gSTB.GetMute() == 0) playback.mute_video();//if not muted
            else playback.unmute_video();
            break;
        case 48: // 0-9
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('0');
            }
            break;
        case 49:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('1');
            }
            break;
        case 50:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('2');
            }
            break;
        case 51:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('3');
            }
            break;
        case 52:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('4');
            }
            break;
        case 53:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('5');
            }
            break;
        case 54:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('6');
            }
            break;
        case 55:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('7');
            }
            break;
        case 56:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('8');
            }
            break;
        case 57:
            if(mag.currentObj == NAV_CONTENT || mag.currentObj == NAV_SEARCH_CHANNEL) {
                mag.initChSearch('9');
            }
            break;
    }
}

window.onload = function() {
    function Stalker() {
        this.channelActive = null;
        this.volumeTimer = null;
        Player.apply(this, arguments);
    }
    Stalker.prototype = Object.create(Player.prototype);
    Stalker.prototype.setVideoType = function () {
        playback = new Factory().checkType('stalker');
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

    //переключаясь на другой канал убираем класс current-item у текущего сфокусированного канала из списка
    Stalker.prototype.removeClassesBeforeSelectChannel = function () {
        var channels = document.querySelectorAll('.ch-item.current-item');
        for (var i = 0; i < channels.length; i++) {
            channels[i].className = channels[i].className.replace(/\bcurrent-item\b/g, "");
        }
    };

    //дополняем методы блокировки/разблокировки и джобавление/удаление favorites для последующей успешной навигации по спискам каналов
    Stalker.prototype.pushToBlocked = function (ch_id, btn) {
        Player.prototype.pushToBlocked.apply(this, arguments);
        this.channelActive = null;
    };
    Stalker.prototype.removeFromBlocked = function (ch_id, btn) {
        Player.prototype.removeFromBlocked.apply(this, arguments);
        this.channelActive = null;
    };
    Stalker.prototype.pushToFavorites = function (ch_id, btn, ganre_id) {
        Player.prototype.pushToFavorites.apply(this, arguments);
        this.channelActive = null;
    };
    Stalker.prototype.removeFromFavorites = function (ch_id, btn, ganre_id) {
        Player.prototype.removeFromFavorites.apply(this, arguments);
        this.channelActive = null;
    };
    Stalker.prototype.showUniq = function () {
        document.getElementById('serial-number-container').classList.remove('hidden');
        // if (typeof clientSettings.success.uniq != 'undefined') {
        //     if (clientSettings.success.uniq) renderUniq(clientSettings.success.uniq);
        // }
    };

    //for volume
    Stalker.prototype.changeVolume = function (volume) {
        var self = this;
        clearTimeout(self.volumeTimer);
        self.setVolumeInBar(volume);
        self.showVolumebar();
        self.volumeTimer = setTimeout(function () {
            self.hideVolumebar();
            clearTimeout(self.volumeTimer);
        }, 3000);
    };
    Stalker.prototype.showVolumebar = function () {
        volumeBar.classList.remove('hidden');
    };
    Stalker.prototype.hideVolumebar = function () {
        volumeBar.className += " hidden";
    };
    Stalker.prototype.setVolumeInBar = function (volume) {
        document.getElementsByClassName('volumebar-text')[0].textContent = volume;
    };

    //for auth
    Stalker.prototype.getModel = function() {
        return gSTB.GetDeviceModel();
    };
    Stalker.prototype.getSerialNumber = function() {
        return gSTB.GetDeviceSerialNumber();
    };
    Stalker.prototype.getMacAddress = function() {
        return gSTB.GetDeviceMacAddress();
    };
    Stalker.prototype.buildBody = function() {
        var deviceSerial = 'sn=' + this.getSerialNumber();
        var deviceModel = 'model=' + this.getModel();
        var deviceInfo = 'info=StalkerDevice';
        var version = 'version=1';
        var platform = 'platform=mag';
        var hash = 'hash=' + MD5(this.getMacAddress() + '' + this.getModel());
        return deviceSerial + '&' + deviceModel + '&' + deviceInfo + '&' + version + '&' + platform + '&' + hash;
    };

    stalker = new Stalker();
    Stalker.prototype.constructor = Stalker;
    stalker.toggleVolume();
    stalker.showUniq();
    document.getElementById('fullscreen-btn').classList.add('hidden');

    // auth.clientAuthorization(null, function () {
    //     var tvType = 'Mag';
    //     return tvType;
    // });

    mag.init();
};
//инициализируем поиск каналов по цифрам
mag.initChSearch = function (value) {
    if (!(searchMenuValue.textContent.length == 0 && value == '0')) {
        mag.setSearchChannelMode();
        if (!mag.searchListOpen()) {
            mag.unhideSearchMenu();
        }
        else {
            clearTimeout(searchChannelTimer);
        }
        mag.addCharToSearchMenu(value);
        searchChannelTimer = setTimeout(function () {
            mag.searchingChannelSelect();
        }, 3000);
    }
};

mag.searchingChannelSelect = function () {
    var value = searchMenuValue.textContent;
    mag.hideAndClearSearch();
    var channel = channelGroupsContainer.querySelector('._channels_group[ganre_id=all] .ch-item[_key="' + value + '"]');
    if (channel) {      //собственно переключаем канал и, если необходимо, включаем категорию Олл в левой менюшке
        var cid = channel.getAttribute("_cid");
        stalker.selectChannel(cid);
        var oldActiveChannels = channelGroupsContainer.querySelectorAll('.ch-item.item-active');
        removeActiveClassFrom(oldActiveChannels);
        hideCategoryContainers();
        var categoryAll = document.querySelector('.category-item-container:not(.hidden)');
        navigation.openChoosenCategoryList(categoryAll);
    }
};
// проверяем открыто ли окно поиска каналов
mag.searchListOpen = function () {
    if (searchMenu.classList.contains('hidden')) {
        return false;
    } else {
        return true;
    }
};
// открываем окно поиска каналов
mag.unhideSearchMenu = function() {
    searchMenu.classList.remove('hidden');
};
// закрываем окно поиска каналов
mag.hideSearchMenu = function () {
    searchMenu.classList.add('hidden');
};
//скрываем и очищаем меню поиска
mag.hideAndClearSearch = function () {
    mag.clearSearchMenu();
    mag.hideSearchMenu();
    mag.setContentMode();
    clearTimeout(searchChannelTimer);
};
// добавляем цифру в строку поиска каналов
mag.addCharToSearchMenu = function (char) {
    if (searchMenuValue.textContent.length < 4) {
        searchMenuValue.textContent += char;
    }
};
// очищаем строку поиска каналов
mag.clearSearchMenu = function (char) {
    searchMenuValue.textContent = '';
};
//убираем последнюю цифру из строки поиска
mag.removeLastDigit = function () {
    var value = searchMenuValue.textContent;
    var newValue = value.slice(0, -1);
    searchMenuValue.textContent = newValue;
    clearTimeout(searchChannelTimer);
    if (!newValue) {
        this.hideAndClearSearch();
    }
    else {
        searchChannelTimer = setTimeout(function () {
            mag.searchingChannelSelect();
        }, 3000);
    }
};

mag.authorization = function(){
    mag.setAuthorizationMode();
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
            gSTB.ShowVirtualKeyboard();
            break;
        case("activation-btn"):
            if (navigation.ifActivationButtonAvailable()) {
                navigation.activateTariff(function () {
                    if (!navigation.ifActivationMode()) {
                        //mag.openPlayback();
                        navigation.hidePlayback();
                        mag.setContentMode();
                    }
                    var tvType = 'Mag';
                    return tvType;
                });
            }
            break;
        case("watch-promo-btn"):
            navigation.watchPromo();
            //mag.openPlayback();
            navigation.hidePlayback();
            mag.setContentMode();
            break;
        case("retry-btn"):
            navigation.retryAuth(function(){
                mag.authorization();
                var tvType = 'Mag';
                return tvType;
            });
            break;
        case("close-app-btn"):
            mag.exitFromApp();
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
            //navigation.clearChannelScroll();
            mag.setChannelsMode();
            break;
        case("home-menu"):
            navigation.openRightMenu();
            mag.setSettingsMode();
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

mag.pauseKeydownListener = function() {
    window.removeEventListener('keydown', eventsList);
    this.keydownTimer = setTimeout(function (){
        window.addEventListener('keydown', eventsList);
    },0);
};

mag.openEpgForChannels = function(){
    //if(navigation.ifHasEpg()){
    if (navigation.ifCategoriesOpened()) {
        navigation.closeCategories();
    }
    //navigation.saveSelectedChannelId();                         //вернуть когда будет вмерджена ветка с обработкой ошибок xhr-запросов!!!
    navigation.watchEpg(function () {
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
            mag.openPopup("category");
            break;
        default:
            mag.focusOnFirstChannel();
            break;
    }
};

mag.focusOnFirstChannel = function () {
    navigation.setFirstChannelActive();
    navigation.clearChannelScroll();
    mag.setChannelsMode();
    stalker.channelActive = null;
};

//right menu
mag.closeRightMenu = function(){
    navigation.hidePlayback();
    navigation.removeFocusFromMenusIcons();
    navigation.closeRightMenu();
    mag.setContentMode();
};

mag.openRightMenuContent = function(){
    switch(navigation.getFocusedMenuItem()){
        case("parent-control"):
            navigation.openParentControl();
            mag.setSettingsParentControlMode();
            navigation.setFocusOnParentControlInput();
            break;
        case("settings"):
            navigation.openSettings();
            mag.setSettingsLangMode();
            // if(mag.rightResetActiveBtn){
            //     mag.rightResetActiveBtn = false;
            //     navigation.setFocusOnFirstLangBtn();
            // }
            // navigation.setFocusOnLang();
            break;
    }
};

mag.focusInputPasswordParentRight = function(){
    switch(navigation.getFocusedParentRight()){
        case("settings-btn"):
            navigation.savePassword();
            break;
        default:
            mag.focusInputParentPassword = navigation.getFocusedInputId();
            document.getElementById(mag.focusInputParentPassword).focus();
            gSTB.ShowVirtualKeyboard();
            break;
    }
};

mag.showHideInputPassword = function(){
    var id = navigation.getFocusedEye();
    navigation.togglePasswordVisibility(id);
};

mag.blurInputPassword = function(){
    if(mag.focusInputParentPassword) document.getElementById(mag.focusInputParentPassword).blur();
    mag.focusInputParentPassword = false;
};

mag.setLanguage = function(){
    if(!mag.rightResetActiveBtn){
        var id = navigation.getFocusedLang();
        navigation.setLanguage(id);
    }
    else{
        navigation.resetSettings();
        mag.rightResetActiveBtn = false;
        navigation.setFocusOnLang();
    }
};

mag.prevLanguage = function(){
    // if(!mag.rightResetActiveBtn){
    //     navigation.prevLanguageFocus();
    //     var id = navigation.getFocusedLang();
    //     if(mag.closeSettings === id){
    //         navigation.toggleRightMenuItem();
    //         mag.setSettingsMode();
    //         mag.closeSettings = false;
    //     }
    //     else{
    //         mag.closeSettings = id;
    //     }
    //     console.log("prevLanguage", id);
    // }
    navigation.toggleRightMenuItem();
    mag.setSettingsMode();
    mag.closeSettings = false;
};

mag.openPopup = function(type){
    mag.memoryMode = mag.currentObj;
    switch(type){
        case("panel"):
            navigation.toggleBlock();
            if(mag.focusCategory==="blocked"){
                if(!mag.passwordUnblockPopup){
                    mag.setPopupBlockedMode();
                    navigation.setFocusOnPassPopup();
                }
                else{
                    navigation.removeFocusFromPlayback();
                    mag.setContentMode();
                    mag.memoryMode = false;
                }
            }
            else{
                if(!mag.passwordPopup){
                    console.log('1');
                    mag.setPopupBlockedMode();
                    navigation.setFocusOnPassPopup();
                }
                else{
                    console.log('2');
                    navigation.removeFocusFromPlayback();
                    mag.setContentMode();
                    mag.memoryMode = false;
                }
            }
            break;
        case("category"):
            console.log(navigation.ifPassOnBlockEnterExist());
            if (navigation.ifPassOnBlockEnterExist()){
                navigation.openBlockedList();
                navigation.setFirstChannelActive();
                navigation.clearChannelScroll();
                mag.setChannelsMode();
                stalker.channelActive = null;
                mag.memoryMode = false;
            }
            else {
                var action_type = document.getElementsByClassName('category_blocked')[0].getAttribute('action_type');
                var lang = getLanguage();
                mainMenu.classList.add('hidden');
                popup.classList.remove('hidden');
                popupTitle.textContent = localization.langs[lang].enter_to_blocked;
                popupConfirmBtn.setAttribute('action_type', action_type);
                //navigation.openBlockedList();
                mag.setPopupBlockedMode();
                navigation.setFocusOnPassPopup();
            }
            mag.focusCategory = "blocked";
            // if(!mag.passwordCategory){
            //     mag.setPopupBlockedMode();
            //     navigation.setFocusOnPassPopup();
            // }else{
            //     mag.memoryMode = false;
            // }
            // mag.focusCategory = "blocked";
            break;
    }
};

mag.focusPopup = function(){
    switch(navigation.getFocusedElemInPopup()){
        case("cancel-btn"):
            console.log("cancel-btn");
            mag.cancelPopup();
            removeErrorAlerts();
            stalker.clearAllInputs(popup);
            navigation.removeFocusFromPopupItems();
            stalker.closeConfirmWindow();
            var categoryAll = document.querySelector('.category-item-container:not(.hidden)');
            navigation.openChoosenCategoryList(categoryAll);
            navigation.closeCategories();
            //navigation.openCategories();
            //mag.setCategoryMode();
            navigation.hidePlayback();
            mag.setContentMode();
            //navigation.setFocusOnPause();
            break;
        case("savepass-btn"):
            navigation.removeFocusFromPopupItems();
            navigation.saveParentPassword();
            navigation.setFocusOnPassPopup();
            break;
        case("confirm-btn"):
            navigation.confirmAction();
            navigation.removeFocusFromPopupItems();
            if(mag.memoryMode === NAV_MENU_LEFT_CATEGORY){
                mag.passwordCategory = navigation.ifPassOnBlockEnterExist();
                if(mag.passwordCategory){
                    mag.setMode(mag.memoryMode);
                    mag.memoryMode = false;
                    categoryBlocked.scrollIntoView();
                    mag.focusOnFirstChannel();
                }
                else{
                    navigation.setFocusOnPassPopup();
                }
                console.log("NAV_MENU_LEFT_CATEGORY ",navigation.ifPassOnBlockEnterExist());
            }
            else if(mag.memoryMode === NAV_PLAYER_PANEL_DOWN){
                if(mag.focusCategory === "blocked"){
                    mag.passwordUnblockPopup = navigation.ifPassOnUnblockExist();
                    if(mag.passwordUnblockPopup){
                        mag.cancelPopup();
                    }
                    else{
                        navigation.setFocusOnPassPopup();
                    }
                    console.log("NAV_MENU_LEFT_CATEGORY focusCategory ",navigation.ifPassOnUnblockExist());
                }
                else{
                    mag.passwordPopup = navigation.ifPassOnBlockExist();
                    if(mag.passwordPopup){
                        mag.cancelPopup();
                    }
                    else{
                        navigation.setFocusOnPassPopup();
                        console.log("NOT SAVE PASSWORD ",navigation.ifPassOnBlockExist());
                    }
                }
                mag.focusCategory = false;
            }
            break;
        default:
            mag.focusInputPassword();
            break;
    }
};

mag.cancelPopup = function(){
    navigation.cancelBtnClick();
    navigation.removeFocusFromMenusIcons();
    navigation.removeFocusFromPlayback();
    mag.setContentMode();
    navigation.removeFocusFromPopupItems();
    mag.memoryMode = false;

};

mag.setFocusPopup = function(event){
    switch(event){
        case("LEFT"):
            switch(navigation.getFocusedElemInPopup()){
                case("cancel-btn"):
                case("savepass-btn"):
                case("confirm-btn"):
                    navigation.leftInPopupPass();
                    break;
                default:
                    if(mag.eyePopupFocus){
                        navigation.leftInPopupPass();
                        mag.eyePopupFocus = false;
                    }
                    break;
            }
            break;
        case("RIGHT"):
            switch(navigation.getFocusedElemInPopup()){
                case("cancel-btn"):
                case("savepass-btn"):
                case("confirm-btn"):
                    navigation.rightInPopupPass();
                    break;
                default:
                    navigation.rightInPopupPass();
                    mag.blurInputPassword();
                    mag.eyePopupFocus = true;
                    break;
            }
            break;
        case("UP"):
            switch(navigation.getFocusedElemInPopup()){
                case("cancel-btn"):
                case("savepass-btn"):
                case("confirm-btn"):
                    navigation.upInPopupPass();
                    break;
                default:
                    if(!mag.eyePopupFocus){
                        mag.blurInputPassword();
                        navigation.upInPopupPass();
                    }
                    break;
            }
            break;
        case("DOWN"):
            switch(navigation.getFocusedElemInPopup()){
                case("cancel-btn"):
                case("savepass-btn"):
                case("confirm-btn"):
                    return false;
                    break;
                default:
                    if(!mag.eyePopupFocus){
                        mag.blurInputPassword();
                        navigation.downInPopupPass();
                    }
                    break;
            }
            break;
    }
};

mag.focusInputPassword = function(){
    mag.focusInputParentPassword = navigation.getFocusedInputId();
    document.getElementById(mag.focusInputParentPassword).focus();
    gSTB.ShowVirtualKeyboard();
};



mag.openExitPopup = function () {
    exitPopup.classList.remove('hidden');
};
mag.closeExitPopup = function () {
    exitPopup.classList.add('hidden');
};
mag.focusOnExitAppConfirmBtn = function () {
    exitPopupConfirmBtn.classList.add('active');
};
mag.focusOnExitAppCancelBtn = function () {
    exitPopupCancelBtn.classList.add('active');
};
mag.getFocusedBtnExitPopup = function () {
    var activeBtn = exitPopup.querySelectorAll('.settings-btn.active')[0];
    if (activeBtn.getAttribute('id') == 'exit-popup-confirm-btn') return 'exitBtn';
    else return 'cancelBtn';
};
mag.removeFocusesFromExitPopup = function() {
    exitPopupConfirmBtn.classList.remove('active');
    exitPopupCancelBtn.classList.remove('active');
};
mag.exitFromApp = function() {
    gSTB.Stop();
    var referrerObj = this.getRefferer();
    var location = referrerObj.referrer;
    var index = location.indexOf('/', 8);
    location = location.slice(0, index);
    location = location + '/stalker_portal/c/';
    window.location = location;
};

mag.getRefferer = function(){
    var url = window.location.href;
    var x = url.indexOf('?');
    var get = {};
    if (x!=-1){
        var l = url.length;
        url= url.substr(x+1, l-x);
        l = url.split('&');
        x = 0;
        for(var i in l){
            if (l.hasOwnProperty(i)){
                url= l[i].split('=');
                get[url[0]] = decodeURIComponent(url[1]);
                x++;
            }
        }
    }
    return get;
};


/*!
 * @license MIT
 * @preserve
 *
 * vUnit.js: A vanilla JS alternative for vh and vw CSS units.
 * Version: 0.2.0
 * https://github.com/joaocunha/v-unit/
 *
 * @author João Cunha - joao@joaocunha.net - twitter.com/joaocunha
 */

;(function(win,doc,undefined){"use strict";win.vUnit=function(options){var vunit=this;var opts=options||{};vunit.options={stylesheetId:opts.stylesheetId||"v-unit-stylesheet",viewportObserverInterval:opts.viewportObserverInterval||100,CSSMap:opts.CSSMap||null,onResize:opts.onResize||function(){}};vunit.viewportSize={height:0,width:0};vunit.init=function(){if(opts.CSSMap){return win.setInterval(function viewportObserver(){if(viewportHasChanged()){var stylesheet=createStylesheet();var CSSRules=createCSSRules();appendCSSRulesToStylesheet(CSSRules,stylesheet);appendStylesheetOnHead(stylesheet);vunit.options.onResize(vunit.viewportSize)}return viewportObserver}(),vunit.options.viewportObserverInterval)}else{return false}};var viewportHasChanged=function(){var currentViewportSize=calculateViewportSize();var differentHeight=currentViewportSize.height!==vunit.viewportSize.height;var differentWidth=currentViewportSize.width!==vunit.viewportSize.width;vunit.viewportSize=currentViewportSize;return differentHeight||differentWidth};var createStylesheet=function(){var stylesheet=doc.createElement("style");stylesheet.setAttribute("rel","stylesheet");stylesheet.setAttribute("type","text/css");stylesheet.setAttribute("media","screen");stylesheet.setAttribute("id",vunit.options.stylesheetId);return stylesheet};var createCSSRules=function(){var computedHeight=vunit.viewportSize.height/100;var computedWidth=vunit.viewportSize.width/100;var vmin=Math.min(computedWidth,computedHeight);var vmax=Math.max(computedWidth,computedHeight);var map=vunit.options.CSSMap;var CSSRules="";var value=0;for(var selector in map){var property=map[selector].property;for(var range=1;range<=100;range++){switch(map[selector].reference){case"vw":value=computedWidth*range;break;case"vh":value=computedHeight*range;break;case"vmin":value=vmin*range;break;case"vmax":value=vmax*range;break}var CSSRuleTemplate="_SELECTOR__RANGE_{_PROPERTY_:_VALUE_px}\n";CSSRules+=CSSRuleTemplate.replace("_SELECTOR_",selector).replace("_RANGE_",range).replace("_PROPERTY_",property).replace("_VALUE_",value)}}return CSSRules};var appendCSSRulesToStylesheet=function(CSSRules,stylesheet){if(stylesheet.styleSheet){stylesheet.styleSheet.cssText=CSSRules}else{stylesheet.appendChild(doc.createTextNode(CSSRules))}};var appendStylesheetOnHead=function(stylesheet){var head=doc.head||doc.getElementsByTagName("head")[0]||doc.documentElement;var legacyStylesheet=doc.getElementById(vunit.options.stylesheetId);if(legacyStylesheet){head.removeChild(legacyStylesheet)}head.appendChild(stylesheet)};var calculateViewportSize=function(){var viewportSize={height:doc.documentElement.clientHeight,width:doc.documentElement.clientWidth};return viewportSize}}})(window,document);

new vUnit({
    CSSMap: {
        // The selector (vUnit will create rules ranging from .selector1 to .selector100)
        '.width-': {
            // The CSS property (any CSS property that accepts px as units)
            property: 'width',
            // What to base the value on (vh, vw, vmin or vmax)
            reference: 'vw'
        },
        // Wanted to have a font-size based on the viewport width? You got it.
        '.vw_font-size': {
            property: 'font-size',
            reference: 'vw'
        },
        // vmin and vmax can be used as well.
        '.vmin_margin-top': {
            property: 'margin-top',
            reference: 'vmin'
        }
    },
    onResize: function() {

    }
}).init(); // call the public init() method