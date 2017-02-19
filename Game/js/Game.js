var game = new Phaser.Game(640, 400, Phaser.AUTO, '', {preload: preload, create:create, update: update});

// loading assets
function preload() {
    game.load.image('background', "assets/Maps/Scene.png");
    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
}

// global variables
var player;
var cursors;

// Initialization
function create() {
    // adding physics for controlling characters
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add background sprite
    var background = game.add.sprite(0, 0,'background');
    background.scale.setTo(2);

    // add player sprite
    player = game.add.sprite(37, 37, 'John');
    player.scale.setTo(2);
    player.animations.add('idle', range(12), 6, true);
    // add physics to it
    game.physics.arcade.enable(player);
    player.enableBody = true;

    // initialize control with cursor keys
    cursors = game.input.keyboard.createCursorKeys();
}

// on update running  function
function update() {
    // stop player
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.animations.play('idle');

    // checking pushed keys
    // when some navigation keys are pushed, go player to some direction
    if (cursors.left.isDown || game.input.keyboard.isDown(Phaser.KeyCode.A))
    {
        player.body.velocity.x = -100;
    }
    if (cursors.right.isDown || game.input.keyboard.isDown(Phaser.KeyCode.D))
    {
        player.body.velocity.x = 100;
    }
    if (cursors.down.isDown || game.input.keyboard.isDown(Phaser.KeyCode.S))
    {
        player.body.velocity.y = 100;
    }
    if (cursors.up.isDown || game.input.keyboard.isDown(Phaser.KeyCode.W))
    {
        player.body.velocity.y = -100;
    }

}

// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, Array(x)).map(function(_,i) {return i;});
}