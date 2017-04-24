var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OState;
(function (OState) {
    OState[OState["Default"] = 0] = "Default";
    OState[OState["Light"] = 1] = "Light";
    OState[OState["Medium"] = 2] = "Medium";
    OState[OState["Hard"] = 3] = "Hard";
    OState[OState["Out"] = 4] = "Out";
})(OState || (OState = {}));

var CharacterState = (function () {
    function CharacterState() {
        this.arms = OState.Default;
        this.head = OState.Default;
        this.legs = OState.Default;
        this.body = OState.Default;
        this.common = OState.Default;
        this.radiation = OState.Default;
        this.acid = OState.Default;
    }
    return CharacterState;
}());

var RPChar = (function () {
    function RPChar() {
    }
    return RPChar;
}());

var Character = (function () {
    function Character(name, game) {
        this.name = name;
        
        this.s = game.add.sprite(600,320,'John');
        this.s.animations.add('idle', range(12), 6, true);
        game.physics.p2.enable(this.s);
        this.s.enableBody = true;        

        this.s.body.collideWorldBounds = true;
        this.s.body.setZeroDamping();
        this.s.body.fixedRotation = true;
        
    }
    return Character;
}());

var ItemState;
(function (ItemState) {
    ItemState[ItemState["Null"] = 0] = "Null";
    ItemState[ItemState["Create"] = 1] = "Create";
    ItemState[ItemState["Add"] = 2] = "Add";
    ItemState[ItemState["Remove"] = 3] = "Remove";
    ItemState[ItemState["Destroy"] = 4] = "Destroy";
    ItemState[ItemState["PointerIn"] = 5] = "PointerIn";
    ItemState[ItemState["PointerOut"] = 6] = "PointerOut";
})(ItemState || (ItemState = {}));

var Item = (function () {
    function Item() {
    }
    Item.prototype.parse = function (json) {
    };
    return Item;
}());

var loadScreen = (function (_super) {
    __extends(loadScreen, _super);
    function loadScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    loadScreen.prototype.preload = function () {
    };
    loadScreen.prototype.create = function () {
    };
    return loadScreen;
}(Phaser.State));

var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenu.prototype.preload = function () {
        _super.prototype.preload.call(this);
    };
    MainMenu.prototype.create = function () {
        _super.prototype.create;
    };
    return MainMenu;
}(Phaser.State));

function exit() {
    window.location.href = "http://google.com";
}

var Quest = (function () {
    
    function Quest() {
        this.game = new Phaser.Game(640, 400, Phaser.AUTO, 'wrap', {
            update: this.update,
            preload: this.preload,
            create: this.create
        });        
    }
    
    Quest.prototype.preload = function () {
        this.game.load.image('Scene1', "assets/Maps/TestScene1/Scene.png");
        this.game.load.spritesheet('John', "assets/Characters/John_Cutingem.png", 37, 55);
    };
    
    Quest.prototype.create = function () {
        this.loadScreenState = new loadScreen();
        this.mainMenuState = new MainMenu();
        var bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Scene1');
        bg.anchor.setTo(0.5, 0.5);
        bg.scale.setTo(2);
        this.game.state.add('loadscreen', this.loadScreenState);
        this.game.state.add('MainMenu', this.mainMenuState);
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
      
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        
        this.player = new Character('John', this);
    };
    
    Quest.prototype.update = function () {
        this.player.s.body.setZeroVelocity();
        
        if (this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.KeyCode.A)) {
            this.player.s.body.moveLeft(100);
        }
        
        if (this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.KeyCode.D)) {
            this.player.s.body.moveRight(100);
        }
        
        if (this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.KeyCode.S)) {
            this.player.s.body.moveDown(100);
        }
        
        if (this.cursors.up.isDown || this.game.input.keyboard.isDown(Phaser.KeyCode.W)) {
            this.player.s.body.moveUp(100);
        }
    };
    
    Quest.prototype.render = function () {
        //this.game.debug.body(this.player.sprite);
        //this.game.debug.cameraInfo(this.game.camera, 16, 46);
        //this.game.debug.spriteCoords(this.player, 16, 350);
        //this.game.debug.spriteInfo(this.player, 280, 46);
    };
    
    return Quest;
}());

window.onload = function () {
    var game = new Quest();
};

// function for getting [0..x] array
function range(x)
{
    return Array.apply(null, new Array(x)).map(function(_,i) {return i;});
}
//# sourceMappingURL=app.js.map