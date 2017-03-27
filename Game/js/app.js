/**
 * Created by Stalis on 07.03.2017.
 */
/// <reference path="phaser.d.ts"/>
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
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var Character = (function () {
    function Character(name) {
        this.name = name;
    }
    return Character;
}());
var HUD = (function () {
    function HUD() {
    }
    return HUD;
}());
window.onload = function () {
    var game = new Quest();
};
//# sourceMappingURL=app.js.map