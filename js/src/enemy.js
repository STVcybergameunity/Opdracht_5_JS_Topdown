import { Enemy } from "./constants.js"
import { canvas } from "./canvas.js"

let curveAmount = 0;

export class enemy {

    constructor(canvasInstance){

        this.canvas = canvasInstance;

        this.enemyImage = new Image();
        this.enemyImage.src = 'img/enemy4.png'

        this.speedMultiplier = 10
        this.speed = Math.random() * this.speedMultiplier + 10;
        this.sizeMultiplier = 1

        this.width = Enemy._ENEMY_WIDTH * this.sizeMultiplier;
        this.height = Enemy._ENEMY_HEIGHT * this.sizeMultiplier;

        this.x = this.canvas._CANVAS_WIDTH;
        this.y = Math.random() * (this.canvas._CANVAS_HEIGHT - Enemy._ENEMY_HEIGHT);

        this.frame = 0;
        this.angle = 0;
        this.curve = Math.random() * 20;

        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angleSpeed = Math.random() * 0.2;
        this.gameFrame = 0;

    }

    enemy_Update(){

        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;

        if (this.x + this.width < 0){

            this.x = window.innerWidth;

        }

        if (this.y + this.height < 0){

            this.y = this.canvas._CANVAS_HEIGHT;

        }

        if (this.y - this.height > this.canvas._CANVAS_HEIGHT){

            this.y = 0;

        }

        if (this.gameFrame % this.flapSpeed === 0){

            this.frame > 6 ? this.frame = 0 : this.frame++;

        }

        this.gameFrame++;

    }

    enemy_Draw(){

        this.canvas._CTX.drawImage(

            this.enemyImage,
            this.frame * Enemy._ENEMY_WIDTH, 0,
            Enemy._ENEMY_WIDTH, Enemy._ENEMY_HEIGHT,
            this.x, this.y,
            this.width, this.height

        );

    }

}