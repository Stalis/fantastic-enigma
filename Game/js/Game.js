var game = new Phaser.Game(640, 400, Phaser.Canvas, '', {preload: preload, create:create, update: update, render: render});

// loading assets
function preload() {
    game.load.tilemap('sceneMask', "assets/Maps/TestScene1/Scene_Mask.csv", null);
    game.load.image('maskTiles', "assets/Maps/TileSet.png");

    //game.load.image('sceneFront', "assets/Maps/TestScene/Scene_Front.png");
    //game.load.image('sceneBehind', "assets/Maps/TestScene/Scene_Behind.png");
    game.load.image('sceneBackground', "assets/Maps/TestScene1/Scene.png");

    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);

}

// global variables
var player;
var cursors;
var sceneMask;
var maskLayer;
// Initialization
function create() {
    game.add.tileSprite(0, 0, 1920, 1200, 'sceneBackground');
    game.world.setBounds(0, 0, 1920, 1200);
    // adding physics for controlling characters
    game.physics.startSystem(Phaser.Physics.ARCADE);


    sceneMask = game.add.tilemap('sceneMask', 1, 1);
    console.log('width: ' + sceneMask.width + ' height: ' + sceneMask.height);
    maskLayer = sceneMask.createLayer(0);
    maskLayer.visible = false;

    //player = game.add.sprite(320, 200, 'John');
    player = game.add.sprite(600, 320, 'John');
    player.anchor.setTo(0.5, 0.5);

    // setup properties
    maskLayer.resizeWorld();
    sceneMask.setCollision(0);
    maskLayer.debug = true;

    // setup animations
    player.animations.add('idle', range(12), 6, true);
    // add physics to it
    game.physics.arcade.enable(player);

    player.enableBody = true;

    player.body.collideWorldBounds = true;
    player.body.setSize(Math.floor(player.width / 1.5), Math.floor(player.height / 11), 0, player.height - Math.floor(player.height / 10));
    // scaling
    player.scale.setTo(2);

    //======================================================
    //=                    CONTROLS                        =
    //======================================================
    // initialize control with cursor keys
    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
}

// on update running  function
function update() {

    game.physics.arcade.collide(player, maskLayer);

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

function render() {
    //game.debug.body(player);
    //game.debug.cameraInfo(game.camera, 16, 16);
    //game.debug.spriteCoords(player, 16, 200);
    //game.debug.spriteInfo(player, 320, 16);
}

// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}