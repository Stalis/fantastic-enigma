var game = new Phaser.Game(640, 400, Phaser.AUTO, '', {preload: preload, create:create, update: update, render: render});

// loading assets
function preload() {
    game.load.tilemap('sceneMask', "assets/Maps/TestScene/Scene_Mask.csv", null);
    game.load.image('maskTiles', "assets/Maps/TileSet.png");

    game.load.image('sceneFront', "assets/Maps/TestScene/Scene_Front.png");
    game.load.image('sceneBehind', "assets/Maps/TestScene/Scene_Behind.png");

    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
	
	game.load.image('HUD', "assets/etc/HUD-0001.png");
	game.load.spritesheet('button0', "assets/etc/Button_Pause.png", 20, 20);
}

// global variables
var player;
var debugText;
var cursors;
var sceneMask;
var maskLayer;
var button
// Initialization
function create() {
    // adding physics for controlling characters
    game.physics.startSystem(Phaser.Physics.ARCADE);

    sceneMask = game.add.tilemap('sceneMask', 1, 1);
    maskLayer = sceneMask.createLayer(0);
    maskLayer.visible = false;

    var sceneBehind = game.add.sprite(0, 0,'sceneBehind');
    player = game.add.sprite(320, 200, 'John');

    var sceneFront = game.add.sprite(0, 0,'sceneFront');
	
	var HUD = game.add.sprite(0,0, 'HUD');
	button = game.add.button(game.world.width - 28, 2, 'button0', showMenu, this, 1, 0, 0);

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
    player.body.setSize(Math.floor(player.width / 1.5), Math.floor(player.height / 10), 0, player.height - Math.floor(player.height / 10));
    // scaling
    player.scale.setTo(2);

    sceneFront.scale.setTo(2);
    sceneBehind.scale.setTo(2);

    //======================================================
    //=                    CONTROLS                        =
    //======================================================
    // initialize control with cursor keys
    cursors = game.input.keyboard.createCursorKeys();
}

// on update running  function
function update() {

    var coll = game.physics.arcade.collide(player, maskLayer);

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
    game.debug.body(player);
}

function showMenu(){
	console.log('Pause button pressed');
}

// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}