/**
 * Created by Stalis on 07.03.2017.
 */
/// <reference path="phaser.d.ts"/>
/// <reference path="Lib/character.ts"/>
/// <reference path="Lib/item.ts"/>
/// <reference path="Lib/GameStates/loadscreen.ts"/>
/// <reference path="Lib/GameStates/mainmenu.ts"/>

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

    loadScreenState: loadScreen;
    mainMenuState:   MainMenu;

    preload(): void
    {
        this.game.load.image('Scene1', "assets/Maps/TestScene/Scene_Behind.png");
    }

    create(): void
    {
        this.loadScreenState = new loadScreen();
        this.mainMenuState = new MainMenu();

        var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Scene1');
        bg.anchor.setTo(0.5, 0.5);
        bg.scale.setTo(2);

        this.game.state.add('loadscreen', this.loadScreenState);
        this.game.state.add('MainMenu', this.mainMenuState);
    }
}

// Main function
window.onload = () =>
{
    var game = new Quest();
}