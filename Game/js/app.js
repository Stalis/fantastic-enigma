/**
 * Created by Stalis on 07.03.2017.
 */
/// <reference path="phaser.d.ts"/>
// Default game state class
var Quest = (function () {
    function Quest() {
        this.game = new Phaser.Game(640, 400, Phaser.AUTO, 'content', {
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
// Base states of parts of char
var OState;
(function (OState) {
    OState[OState["Default"] = 0] = "Default";
    OState[OState["Light"] = 1] = "Light";
    OState[OState["Medium"] = 2] = "Medium";
    OState[OState["Hard"] = 3] = "Hard";
    OState[OState["Out"] = 4] = "Out";
})(OState || (OState = {}));
// Struct w/ states of char
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
// Class w/ Role Playing part of char
var RPChar = (function () {
    function RPChar() {
    }
    return RPChar;
}());
// Base class for items
var Item = (function () {
    function Item() {
    }
    return Item;
}());
// Base class of character
var Character = (function () {
    function Character(name) {
        this.name = name;
    }
    return Character;
}());
// Base class for HUD
var HUD = (function () {
    function HUD() {
    }
    return HUD;
}());
// Main function
window.onload = function () {
    var game = new Quest();
};
//# sourceMappingURL=app.js.map