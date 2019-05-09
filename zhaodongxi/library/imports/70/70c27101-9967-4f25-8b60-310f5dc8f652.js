"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// scripts/UI/panel/TeacherPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../BaseUI");
var UIManager_1 = require("../../Manager/UIManager");
var NetWork_1 = require("../../Http/NetWork");
var DaAnData_1 = require("../../Data/DaAnData");
var GamePanel_1 = require("./GamePanel");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ListenerType_1 = require("../../Data/ListenerType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleContainer = [];
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
    };
    TeacherPanel.prototype.start = function () {
        this.getNet();
    };
    TeacherPanel.prototype.initData = function () {
        if (DaAnData_1.DaAnData.getInstance().types == 1) {
            this.toggleContainer[0].isChecked = true;
        }
        else if (DaAnData_1.DaAnData.getInstance().types == 2) {
            this.toggleContainer[1].isChecked = true;
        }
        this.checkpointEditbox.string = String(DaAnData_1.DaAnData.getInstance().checkpointsNum);
        this.animalToggle.isChecked = false;
        for (var i = 0; i < DaAnData_1.DaAnData.getInstance().picArr.length; i++) {
            if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.animal) {
                this.animalToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.clothes) {
                this.clothesToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.food) {
                this.foodToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.dailyuse) {
                this.dailyuseToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.figure) {
                this.figureToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.letter) {
                this.letterToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.number) {
                this.numberToggle.isChecked = true;
            }
            else if (DaAnData_1.DaAnData.getInstance().picArr[i] == DaAnData_1.picType.stationery) {
                this.stationeryToggle.isChecked = true;
            }
        }
        this.choicescopeButton.node.getChildByName("Label").getComponent(cc.Label).string = DaAnData_1.scopeRange[DaAnData_1.DaAnData.getInstance().range];
    };
    //上传课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        // let openPanel: UIClass<BaseUI> = GamePanel;
        // UIManager.getInstance().openUI(openPanel);
        // if(this.errorChecking()){
        //     UIManager.getInstance().showUI(SubmissionPanel); 
        // }
        if (this.errorChecking()) {
            UIManager_1.UIManager.getInstance().showUI(GamePanel_1.default, function () {
                ListenerManager_1.ListenerManager.getInstance().trigger(ListenerType_1.ListenerType.OnEditStateSwitching, { state: 1 });
            });
        }
    };
    TeacherPanel.prototype.tips = function () {
        this.tipNode.active = true;
        this.tipNode.getChildByName("layout").on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        });
    };
    TeacherPanel.prototype.onBtnSureClicked = function () {
        this.tipNode.active = false;
    };
    TeacherPanel.prototype.onBtnChoicescopeClicked = function () {
        this.choicescopeButton.interactable = false;
        this.choicescopeButton.node.getChildByName("layout").on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        });
        var layout = this.choicescopeButton.node.getChildByName("mask").getChildByName("layout");
        var move = cc.moveBy(0.3, 0, -300);
        layout.runAction(move);
    };
    TeacherPanel.prototype.ChoicescopeOverClicked = function () {
        this.choicescopeButton.interactable = true;
        this.choicescopeButton.node.getChildByName("layout").off(cc.Node.EventType.TOUCH_START);
        var layout = this.choicescopeButton.node.getChildByName("mask").getChildByName("layout");
        var move = cc.moveBy(0.3, 0, 300);
        layout.runAction(move);
        var label = this.choicescopeButton.node.getChildByName("Label").getComponent(cc.Label);
        var range = DaAnData_1.DaAnData.getInstance().range;
        label.string = DaAnData_1.scopeRange[range];
    };
    TeacherPanel.prototype.FOUR_FOUR = function () {
        DaAnData_1.DaAnData.getInstance().range = 1;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FOUR_FIVE = function () {
        DaAnData_1.DaAnData.getInstance().range = 2;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FOUR_SIX = function () {
        DaAnData_1.DaAnData.getInstance().range = 3;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FOUR_SEVEN = function () {
        DaAnData_1.DaAnData.getInstance().range = 4;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FOUR_EIGHT = function () {
        DaAnData_1.DaAnData.getInstance().range = 5;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FIVE_FOUR = function () {
        DaAnData_1.DaAnData.getInstance().range = 6;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FIVE_FIVE = function () {
        DaAnData_1.DaAnData.getInstance().range = 7;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FIVE_SIX = function () {
        DaAnData_1.DaAnData.getInstance().range = 8;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FIVE_SEVEN = function () {
        DaAnData_1.DaAnData.getInstance().range = 9;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.FIVE_EIGHT = function () {
        DaAnData_1.DaAnData.getInstance().range = 10;
        this.ChoicescopeOverClicked();
    };
    TeacherPanel.prototype.onToggleContainer = function (toggle) {
        var index = this.toggleContainer.indexOf(toggle);
        switch (index) {
            case 0:
                DaAnData_1.DaAnData.getInstance().types = 1;
                break;
            case 1:
                DaAnData_1.DaAnData.getInstance().types = 2;
                break;
            default:
                break;
        }
    };
    TeacherPanel.prototype.editBoxEndEditing = function (sender) {
        var text = this.checkpointEditbox.string;
        switch (text) {
            case "1":
                DaAnData_1.DaAnData.getInstance().checkpointsNum = 1;
                break;
            case "2":
                DaAnData_1.DaAnData.getInstance().checkpointsNum = 2;
                break;
            case "3":
                DaAnData_1.DaAnData.getInstance().checkpointsNum = 3;
                break;
            case "4":
                DaAnData_1.DaAnData.getInstance().checkpointsNum = 4;
                break;
            default:
                text = "";
                this.checkpointEditbox.string = '';
                DaAnData_1.DaAnData.getInstance().checkpointsNum = 0;
                break;
        }
    };
    TeacherPanel.prototype.animal = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.animal) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.animal);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.animal) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.animal; });
            }
        }
    };
    TeacherPanel.prototype.food = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.food) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.food);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.food) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.food; });
            }
        }
    };
    TeacherPanel.prototype.figure = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.figure) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.figure);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.figure) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.figure; });
            }
        }
    };
    TeacherPanel.prototype.dailyuse = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.dailyuse) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.dailyuse);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.dailyuse) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.dailyuse; });
            }
        }
    };
    TeacherPanel.prototype.number = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.number) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.number);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.number) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.number; });
            }
        }
    };
    TeacherPanel.prototype.stationery = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.stationery) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.stationery);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.stationery) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.stationery; });
            }
        }
    };
    TeacherPanel.prototype.clothes = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.clothes) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.clothes);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.clothes) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.clothes; });
            }
        }
    };
    TeacherPanel.prototype.letter = function (toggle) {
        if (toggle.isChecked) {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.letter) == -1) {
                DaAnData_1.DaAnData.getInstance().picArr.push(DaAnData_1.picType.letter);
            }
        }
        else {
            if (DaAnData_1.DaAnData.getInstance().picArr.indexOf(DaAnData_1.picType.letter) != -1) {
                DaAnData_1.DaAnData.getInstance().picArr = DaAnData_1.DaAnData.getInstance().picArr.filter(function (item) { return item !== DaAnData_1.picType.letter; });
            }
        }
    };
    TeacherPanel.prototype.errorChecking = function () {
        // var whatever;
        // this.editBoxEndEditing(whatever);
        if (DaAnData_1.DaAnData.getInstance().checkpointsNum == 0) {
            this.tipNode.getChildByName("tipLabel").getComponent(cc.Label).string = "请填写关卡数量，不能为空。";
            this.tips();
            return false;
        }
        else if (DaAnData_1.DaAnData.getInstance().picArr.length == 0) {
            this.tipNode.getChildByName("tipLabel").getComponent(cc.Label).string = "请选择区域种类，不能为空。";
            this.tips();
            return false;
        }
        else if (DaAnData_1.DaAnData.getInstance().range == 0) {
            this.tipNode.getChildByName("tipLabel").getComponent(cc.Label).string = "请选择区域范围，不能为空。";
            this.tips();
            return false;
        }
        else {
            return true;
        }
    };
    TeacherPanel.prototype.getNet = function () {
        NetWork_1.NetWork.getInstance().httpRequest(NetWork_1.NetWork.GET_TITLE + "?title_id=" + NetWork_1.NetWork.title_id, "GET", "application/json;charset=utf-8", function (err, response) {
            if (!err) {
                var response_data = JSON.parse(response);
                if (response_data.data.courseware_content == null) {
                }
                else {
                    var data = JSON.parse(response_data.data.courseware_content);
                    if (data.types) {
                        DaAnData_1.DaAnData.getInstance().types = data.types;
                    }
                    if (data.checkpointsNum) {
                        DaAnData_1.DaAnData.getInstance().checkpointsNum = data.checkpointsNum;
                    }
                    if (data.range) {
                        DaAnData_1.DaAnData.getInstance().range = data.range;
                    }
                    if (data.picArr) {
                        DaAnData_1.DaAnData.getInstance().picArr = data.picArr;
                    }
                    this.initData();
                }
            }
        }.bind(this), null);
    };
    TeacherPanel.className = "TeacherPanel";
    __decorate([
        property([cc.Toggle])
    ], TeacherPanel.prototype, "toggleContainer", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "checkpointEditbox", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "animalToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "foodToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "figureToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "dailyuseToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "numberToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "stationeryToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "clothesToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], TeacherPanel.prototype, "letterToggle", void 0);
    __decorate([
        property(cc.Button)
    ], TeacherPanel.prototype, "choicescopeButton", void 0);
    __decorate([
        property(cc.Button)
    ], TeacherPanel.prototype, "submissionButton", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "tipNode", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseUI_1.BaseUI));
exports.default = TeacherPanel;

cc._RF.pop();