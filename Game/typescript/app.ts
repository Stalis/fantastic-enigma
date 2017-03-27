/**
 * Created by Stalis on 07.03.2017.
 */
/// <reference path="phaser.d.ts"/>

// Default game state class
class Quest
{
    constructor()
    {
        this.game = new Phaser.Game(
            640, 400, Phaser.AUTO, 'content',
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

// Base states of parts of char
enum OState 
{
    Default = 0,
    Light,
    Medium,
    Hard,
    Out
}

// Struct w/ states of char
class CharacterState
{
    arms:       OState = OState.Default;
    head:       OState = OState.Default;
    legs:       OState = OState.Default;
    body:       OState = OState.Default;
    common:     OState = OState.Default;
    radiation:  OState = OState.Default;
    acid:       OState = OState.Default;
}

// Class w/ Role Playing part of char
class RPChar
{

}

// Base class for items
class Item
{

}

// Base class of character
class Character
{
    name: string;
    state: CharacterState;
    constructor(name)
    {
        this.name = name;
    }
    rolePart: RPChar;
}

// Base class for HUD
class HUD
{

}

// Main function
window.onload = () =>
{
    var game = new Quest();
}