var game = new Phaser.Game(640, 400, Phaser.AUTO, '', {preload: preload, create:create, update: update});

// loading assets
function preload() {
    game.load.tilemap('sceneMask', "assets/Maps/TestScene/Scene_Mask.csv", null);
    game.load.image('maskTiles', "assets/Maps/TileSet.png");

    game.load.image('sceneFront', "assets/Maps/TestScene/Scene_Front.png");
    game.load.image('sceneBehind', "assets/Maps/TestScene/Scene_Behind.png");

    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
    game.load.image('charCollision', "assets/Characters/Collide-0001.png");

}

// global variables
var player;
var playerTex;
var playerColl;
var cursors;
var sceneMask;
var maskLayer;
// Initialization
function create() {
    // adding physics for controlling characters
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //======================================================
    //=                   INITIALIZE                       =
    //======================================================
    sceneMask = game.add.tilemap('sceneMask', 1, 1);
    maskLayer = sceneMask.createLayer(0);

    var sceneBehind = game.add.sprite(0, 0,'sceneBehind');
    player = game.add.group();
    playerTex = game.add.sprite(320, 200, 'John');
    playerColl = game.add.sprite(player.x, player.y, 'charCollision');

    var sceneFront = game.add.sprite(0, 0,'sceneFront');



    //======================================================
    //=                   BACKGROUND                       =
    //======================================================
    // setup properties
    maskLayer.resizeWorld();
    sceneMask.setCollision(0);
    maskLayer.debug = true;

    // scaling
    sceneFront.scale.setTo(2);
    sceneBehind.scale.setTo(2);

    //======================================================
    //=                   CHARACTERS                       =
    //======================================================
    // setup animations
    playerTex.animations.add('idle', range(12), 6, true);
    // add physics to it
    game.physics.arcade.enable(playerColl);

    player.enableBody = true;
    //playerColl.body.gravity.y = 10;
    //playerColl.body.gravity.x = 10;
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

    game.physics.arcade.collide(playerColl, maskLayer);
    // stop player
    //player.body.velocity.x = 0;
    //player.body.velocity.y = 0;
    groupVelocity(player, 0, 'x');
    groupVelocity(player, 0, 'y');
    playerTex.animations.play('idle');

    // checking pushed keys
    // when some navigation keys are pushed, go player to some direction
    if (cursors.left.isDown || game.input.keyboard.isDown(Phaser.KeyCode.A))
    {
        //player.body.velocity.x = -100;
        groupVelocity(player, -100, 'x');
    }
    if (cursors.right.isDown || game.input.keyboard.isDown(Phaser.KeyCode.D))
    {
        //player.body.velocity.x = 100;
        groupVelocity(player, 100, 'x');
    }
    if (cursors.down.isDown || game.input.keyboard.isDown(Phaser.KeyCode.S))
    {
        //player.body.velocity.y = 100;
        groupVelocity(player, 100, 'y');
    }
    if (cursors.up.isDown || game.input.keyboard.isDown(Phaser.KeyCode.W))
    {
        //player.body.velocity.y = -100;
        groupVelocity(player, -100, 'y');
    }

}

function groupVelocity(g, vel, dir) {
    if (dir === 'x'){
        group.forEach(function (item, i, g) {
            item.body.velocity.x = vel;
        });
    } else if (dir === 'y'){
        arr.forEach(function (item, i, g) {
            item.body.velocity.y = vel;
        });
    }


}
// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}