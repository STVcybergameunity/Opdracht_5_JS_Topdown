import { animation } from "./animation.js";
import { PlayerSize, KEYS, _GRAVITY } from "./constants.js";
export class player{

    constructor(movementInstance){

        this.entityState = "run";
        this._DRAW_WIDTH = PlayerSize._WIDTH*0.5;
        this._DRAW_HEIGHT = PlayerSize._HEIGHT*0.5;
        this._PLAYERIMAGE = new Image();

        this.gameFrame = 0;
        this.movement = movementInstance
        this.animationTimer = 0;
        this.animationInterval = 200;
        this.velocityY = 0;
        this.distanceFromSide = 0
        this.isJumping = false
        this.currentHeight = this._PLAYERSPAWNHEIGHT
        this._GROUND_HEIGHT = this._DRAW_HEIGHT * 1.5;
        this.currentHeight = this._GROUND_HEIGHT;
        this.moveBackground = true

    }

    jump() {

        if (!this.isJumping) {

            this.velocityY += 30;
            this.isJumping = true;

        }

    }
 
    update(delta, keysDown) {
 
        if (keysDown[KEYS._JUMP] && !this.isJumping) {
            this.jump();
        }
 
        if (this.isJumping) {
            this.velocityY -= _GRAVITY;
            this.currentHeight += this.velocityY;
        }
 
        if (this.currentHeight <= this._GROUND_HEIGHT) {
            this.currentHeight = this._GROUND_HEIGHT;
            this.velocityY = 0;
            this.isJumping = false;
        }
 
        if (this.isJumping) {
            if (this.velocityY > 0) {
                this.entityState = "jump";
            } else {
                this.entityState = "fall";
            }
        } else {

            const keys = keysDown;
            if (keys[KEYS._MOVELEFT] || keys[KEYS._MOVERIGHT]) {
                this.entityState = "run";
                this.moveBackground = true
            } else {
                this.entityState = "idle";
            }
        }
 
    }
 
}