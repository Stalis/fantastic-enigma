/**
 * Created by Stalis on 07.03.2017.
 */
/// <reference path="phaser.d.ts"/>
/// <reference path="Lib/character.ts"/>
/// <reference path="Lib/item.ts"/>
/// <reference path="Lib/GameStates/loadscreen.ts"/>

function exit()
{
    window.location.href = "http://google.com";
}


// Default game state class
class Quest
{
    constructor()
    {
        this.game = new Phaser.Game(
            640, 400, Phaser.AUTO, 'wrap',
            {
                preload: this.preload,
                create: this.create
            });
    }

    game: Phaser.Game;

    preload()
    {
        this.game.load.image('Scene1', "assets/Maps/TestScene/Scene_Behind.png");
    }

    create()
    {
        var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Scene1');
        bg.anchor.setTo(0.5, 0.5);
        bg.scale.setTo(2);
    }
}

// Main function
window.onload = () =>
{
    var game = new Quest();
}