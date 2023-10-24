// ==UserScript==
// @name        DTF Settings Opener
// @namespace   https://github.com/TentacleTenticals/
// @match       https://*dtf.ru/*
// @grant       Tentacle Tenticals
// @version     1.0.3
// @author      Tentacle Tenticals
// @description Скрипт для появления панели открытия настроек скриптов
// @homepage    https://github.com/TentacleTenticals/DTF-SettingsOpener
// @updateURL   https://github.com/TentacleTenticals/DTF-SettingsOpener/raw/main/main.user.js
// @downloadURL https://github.com/TentacleTenticals/DTF-SettingsOpener/raw/main/main.user.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/splitCls/classes.js
//
// Settings
// Main
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/settings/opener/js/main.js
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/settings/opener/css/main.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/settings/opener/menu/data/css/main.js
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/settings/opener/menu/cfg/css/main.js
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

(() => {
  new El().Css('DTF-Settings-Opener', openerCss());
  new El().Css('DTF-Settings-Opener cfg', cfgMenuCss());
  new El().Css('DTF-Settings-Opener dat', dataMenuCss());
  SettingsOpener();

})();
