var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OState;
(function (OState) {
    OState[OState["Default"] = 0] = "Default";
    OState[OState["Light"] = 1] = "Light";
    OState[OState["Medium"] = 2] = "Medium";
    OState[OState["Hard"] = 3] = "Hard";
    OState[OState["Out"] = 4] = "Out";
})(OState || (OState = {}));
var CharacterState = (function () {
    function CharacterState() {
        this.arms = OState.Default;
        this.head = OState.Default;
        this.legs = OState.Default;
        this.body = OState.Default;
        this.common = OState.Default;
        this.radiation = OState.Default;
        this.acid = OState.Default;
    }
    return CharacterState;
}());
var RPChar = (function () {
    function RPChar() {
    }
    return RPChar;
}());
var Character = (function () {
    function Character(name) {
        this.name = name;
    }
    return Character;
}());
var ItemState;
(function (ItemState) {
    ItemState[ItemState["Null"] = 0] = "Null";
    ItemState[ItemState["Create"] = 1] = "Create";
    ItemState[ItemState["Add"] = 2] = "Add";
    ItemState[ItemState["Remove"] = 3] = "Remove";
    ItemState[ItemState["Destroy"] = 4] = "Destroy";
    ItemState[ItemState["PointerIn"] = 5] = "PointerIn";
    ItemState[ItemState["PointerOut"] = 6] = "PointerOut";
})(ItemState || (ItemState = {}));
var Item = (function () {
    function Item() {
    }
    Item.prototype.parse = function (json) {
    };
    return Item;
}());
var loadScreen = (function (_super) {
    __extends(loadScreen, _super);
    function loadScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    loadScreen.prototype.preload = function () {
    };
    loadScreen.prototype.create = function () {
    };
    return loadScreen;
}(Phaser.State));
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenu.prototype.preload = function () {
        _super.prototype.preload.call(this);
    };
    MainMenu.prototype.create = function () {
        _super.prototype.create;
    };
    return MainMenu;
}(Phaser.State));
var point = (function () {
    function point() {
    }
    return point;
}());
var LayerGate = (function () {
    function LayerGate() {
    }
    return LayerGate;
}());
var SceneLayer = (function () {
    function SceneLayer() {
    }
    return SceneLayer;
}());
var Scene = (function () {
    function Scene() {
    }
    Scene.prototype.updateLayers = function () {
    };
    return Scene;
}());
function exit() {
    window.location.href = "http://google.com";
}
var Quest = (function () {
    function Quest() {
        this.game = new Phaser.Game(640, 400, Phaser.AUTO, 'wrap', {
            preload: this.preload,
            create: this.create
        });
    }
    Quest.prototype.preload = function () {
        this.game.load.image('Scene1', "assets/Maps/TestScene/Scene_Behind.png");
    };
    Quest.prototype.create = function () {
        this.loadScreenState = new loadScreen();
        this.mainMenuState = new MainMenu();
        var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Scene1');
        bg.anchor.setTo(0.5, 0.5);
        bg.scale.setTo(2);
        this.game.state.add('loadscreen', this.loadScreenState);
        this.game.state.add('MainMenu', this.mainMenuState);
    };
    return Quest;
}());
window.onload = function () {
    var game = new Quest();
};
//# sourceMappingURL=app.js.map