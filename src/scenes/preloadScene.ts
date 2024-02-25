import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup;

    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.scene.start("MainScene");

        this.platforms = this.physics.add.staticGroup();
        const ground = this.platforms.create(
            400,
            458,
            "ground"
        ) as Phaser.Physics.Arcade.Sprite;
        ground.setScale(2).refreshBody();

        this.platforms.create(600, 400, "ground");
        this.platforms.create(50, 250, "ground");
        this.platforms.create(750, 250, "ground");
    }
}
