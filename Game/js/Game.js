var game = new Phaser.Game(640, 400, Phaser.AUTO, '', {preload: preload, create:create, update: update});

// loading assets
function preload() {
    game.load.image('sceneMask', "assets/Maps/TestScene/Scene_Mask.png");
    game.load.image('sceneFront', "assets/Maps/TestScene/Scene_Front.png");
    game.load.image('sceneBehind', "assets/Maps/TestScene/Scene_Behind.png");

    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
}

// global variables
var player;
var cursors;
var sceneMask;
// Initialization
function create() {
    // adding physics for controlling characters
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //======================================================
    //=                   INITIALIZE                       =
    //======================================================
    var sceneBehind = game.add.sprite(0, 0,'sceneBehind');
    sceneMask = game.add.bitmapData(640, 400);
    sceneMask.draw('sceneMask');
    player = game.add.sprite(320, 200, 'John');
    var sceneFront = game.add.sprite(0, 0,'sceneFront');

    //======================================================
    //=                   BACKGROUND                       =
    //======================================================
    // setup properties
    //game.physics.arcade.enable(sceneMask);
    //sceneMask.enableBody = true;
    //sceneMask.body.immovable = true;
    //sceneMask.body.collidable = true;

    //sceneMask.scale.setTo(2);
    sceneMask.update();
    sceneMask.addToWorld();
    // scaling
    //sceneMask.scale.setTo(2);
    sceneFront.scale.setTo(2);
    sceneBehind.scale.setTo(2);

    //======================================================
    //=                   CHARACTERS                       =
    //======================================================
    // setup animations
    player.animations.add('idle', range(12), 6, true);
    // add physics to it
    game.physics.arcade.enable(player);

    player.enableBody = true;
    player.body.gravity.y = 10;
    player.body.gravity.x = 10;
    player.body.collideWorldBounds = true;
    // scaling
    player.scale.setTo(2);

    //======================================================
    //=                    CONTROLS                        =
    //======================================================
    // initialize control with cursor keys
    cursors = game.input.keyboard.createCursorKeys();
}

// on update running  function
function update() {
    game.physics.arcade.collide(player, sceneMask);
    var hitMask = game.physics.arcade.overlap(player, sceneMask);
    console.log(hitMask);
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
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}