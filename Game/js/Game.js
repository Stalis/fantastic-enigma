var exit = function(){
    window.location.href= "http://google.com";
}

var game = new Phaser.Game(640, 400, Phaser.Canvas, 'wrap', {preload: preload, create:create, update: update, render: render});

// loading assets
function preload() {
    game.load.image('sceneBackground', "assets/Maps/TestScene1/Scene.png");
    game.load.image('sceneMask0', "assets/Maps/TestScene1/Scene_Mask0.png");
    game.load.image('sceneMask1', "assets/Maps/TestScene1/Scene_Mask1.png");
    game.load.physics('physicsData', "assets/Maps/TestScene1/Scene_Mask.json");


    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
    game.load.image('JohnIcon', "assets/Characters/John_Cutingem_icon.png");

	game.load.spritesheet('PDA', "assets/etc/PDA_Button.png", 96, 32);
	game.load.spritesheet('charButton', "assets/etc/Char_Button.png", 96, 32);
	game.load.spritesheet('heartbeat', "assets/etc/Heartbeat-0003.png", 96, 32);
	game.load.image('itemPanel', "assets/etc/ItemPanel.png");
}

// global variables
var player;
var cursors;
var sceneMask;

var pdaButton;
var charButton;
var heartbeat;

// Initialization
function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);

    //======================================================
    //=                   BACKGROUND                       =
    //======================================================
    game.add.tileSprite(0, 0, 1920, 1200, 'sceneBackground');
    game.world.setBounds(0, 0, 1920, 1200);

    //======================================================
    //=                  COLLIDE MASKS                     =
    //======================================================
    sceneMask = game.add.group();

    var sceneMask0 = sceneMask.create(game.world.width / 2, game.world.height / 2, 'sceneMask0');
    game.physics.p2.enable(sceneMask0);
    sceneMask0.body.clearShapes();
    sceneMask0.body.loadPolygon('physicsData', 'Scene_Mask0');
    sceneMask0.body.static = true;
    sceneMask0.visible = false;

    var sceneMask1 = sceneMask.create(game.world.width / 2, game.world.height / 2, 'sceneMask1');
    game.physics.p2.enable(sceneMask1);
    sceneMask1.body.clearShapes();
    sceneMask1.body.loadPolygon('physicsData', 'Scene_Mask1');
    sceneMask1.body.static = true;
    sceneMask1.visible = false;

    //======================================================
    //=                   CHARACTERS                       =
    //======================================================
    player = game.add.sprite(600, 320, 'John');
    player.animations.add('idle', range(12), 6, true);
    game.physics.p2.enable(player);
    player.enableBody = true;

    player.body.collideWorldBounds = true;
    player.body.setZeroDamping();
    player.body.fixedRotation = true;

    player.scale.setTo(2);

    player.body.setRectangle(
        Math.floor(player.width / 1.5),
        Math.floor(player.height / 11),
        (- Math.floor(player.width / 4)),
        Math.floor((player.height - Math.floor(player.height / 11)) / 2));
    //======================================================
    //=                     OBJECTS                        =
    //======================================================
    //var sceneFront = game.add.sprite(0, 0,'sceneFront');

    //======================================================
    //=                       HUD                          =
    //======================================================
	pdaButton = game.add.button(game.camera.width - 96, 0, 'PDA', showMenu, this, 0, 1, 2, 3);
	charButton = game.add.button(0,0, 'charButton', showCharMenu, this, 0, 1, 2, 3);
	var JohnIcon = game.add.sprite(0,0, 'JohnIcon');
	heartbeat = game.add.sprite(16, 0, 'heartbeat');
	var itemPanel = game.add.sprite(game.camera.width - 32, 64, 'itemPanel');
    pdaButton.fixedToCamera = true;
    charButton.fixedToCamera = true;
    JohnIcon.fixedToCamera = true;
    heartbeat.fixedToCamera = true;
    itemPanel.fixedToCamera = true;

    heartbeat.animations.add('default', range(63), 24, true);


    //======================================================
    //=                    CONTROLS                        =
    //======================================================
    // initialize control with cursor keys
    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
}

// on update running  function
function update() {

    // stop player
    player.body.setZeroVelocity();

    player.animations.play('idle');
    heartbeat.animations.play('default');

    // checking pushed keys
    // when some navigation keys are pushed, go player to some direction
    if (cursors.left.isDown || game.input.keyboard.isDown(Phaser.KeyCode.A))
    {
        player.body.moveLeft(100);
    }
    if (cursors.right.isDown || game.input.keyboard.isDown(Phaser.KeyCode.D))
    {
        player.body.moveRight(100);
    }
    if (cursors.down.isDown || game.input.keyboard.isDown(Phaser.KeyCode.S))
    {
        player.body.moveDown(100);
    }
    if (cursors.up.isDown || game.input.keyboard.isDown(Phaser.KeyCode.W))
    {
        player.body.moveUp(100);
    }
}

function render() {
    //game.debug.body(player);
    //game.debug.cameraInfo(game.camera, 16, 46);
    //game.debug.spriteCoords(player, 16, 350);
    //game.debug.spriteInfo(player, 280, 46);
}

function showMenu(){
	console.log('Pause button pressed');
}

function showCharMenu() {
    console.log('Character button pressed');
}

// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}
