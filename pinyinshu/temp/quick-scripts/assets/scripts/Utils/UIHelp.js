(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Utils/UIHelp.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c44e6cLg85JzaIFNvBdsH7x', 'UIHelp', __filename);
// scripts/Utils/UIHelp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../Manager/UIManager");
var TipUI_1 = require("../UI/panel/TipUI");
var OverTips_1 = require("../UI/Item/OverTips");
var UIHelp = /** @class */ (function () {
    function UIHelp() {
    }
    UIHelp.showTip = function (message) {
        var tipUI = UIManager_1.UIManager.getInstance().getUI(TipUI_1.TipUI);
        if (!tipUI) {
            UIManager_1.UIManager.getInstance().openUI(TipUI_1.TipUI, 200, function () {
                UIHelp.showTip(message);
            });
        }
        else {
            tipUI.showTip(message);
        }
    };
    UIHelp.showOverTips = function (type, time, str, callback1, callback2) {
        var overTips = UIManager_1.UIManager.getInstance().getUI(OverTips_1.OverTips);
        if (!overTips) {
            UIManager_1.UIManager.getInstance().openUI(OverTips_1.OverTips, 200, function () {
                UIHelp.showOverTips(type, time, str, callback1, callback2);
            });
        }
        else {
            overTips.init(type, time, str, callback1, callback2);
        }
    };
    return UIHelp;
}());
exports.UIHelp = UIHelp;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=UIHelp.js.map
        