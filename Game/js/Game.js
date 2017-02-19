var game = new Phaser.Game(640, 400, Phaser.AUTO, '', {preload: preload, create:create, update: update});

function preload() {
    game.load.image('background', "assets/Maps/Scene.png");
    game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
}
var player;
var cursors;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    var background = game.add.sprite(0, 0,'background');
    background.scale.setTo(2);
    //game.add.sprite(100, 100, 'John');

    player = game.add.sprite(37, 37, 'John');
    player.scale.setTo(2);
    player.animations.add('idle', range(12), 6, true);

    game.physics.arcade.enable(player);

    //player.body.gravity.y = 0;
    //player.body.gravity.x = 0;

    player.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.animations.play('idle');

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
    }
    if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
    }
    if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
    }
    if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
    }

}

function range(x)
{
    return Array.apply(null, Array(x)).map(function(_,i) {return i;})
}