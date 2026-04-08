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
        this.isJumping = false
        this._PLAYERSPAWNHEIGHT = this._DRAW_HEIGHT*1.5
        this.currentHeight = this._PLAYERSPAWNHEIGHT

    }

    jump() {

        if (!this.isJumping) {

            this.velocityY = -15;
            this.isJumping = true;

        }

    }

    update(delta, keysDown){

        console.log(this.movement.keysDown)

        if (keysDown[KEYS._JUMP] && this.isJumping === false) {
            this.jump();
            this.velocityY += _GRAVITY;
            this.currentHeight = this._PLAYERSPAWNHEIGHT += this.velocityY;
            this.entityState = "jump"
        }

        if (this.currentHeight > this._PLAYERSPAWNHEIGHT){

            this.currentHeight = this._PLAYERSPAWNHEIGHT;
            this.velocityY = 0;
            this.isJumping = false;
            
        }
        
    }

    horizontalMovement(delta, keysDown){

        if (KEYS._MOVELEFT in this.movement.keysDown) {
            // move left
        }
        if (KEYS._MOVERIGHT in this.movement.keysDown) {
            // move right
        }

    }

}