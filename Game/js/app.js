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
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var loadScreen = (function () {
    function loadScreen() {
    }
    return loadScreen;
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
        var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Scene1');
        bg.anchor.setTo(0.5, 0.5);
        bg.scale.setTo(2);
    };
    return Quest;
}());
window.onload = function () {
    var game = new Quest();
};
//# sourceMappingURL=app.js.map