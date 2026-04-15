import { animation } from "./animation.js";
import { menus } from "./menus.js";
import { PlayerSize, KEYS, _GRAVITY, _SKILLCOOLDOWNT, _ELEMENTS } from "./constants.js";
export class player{

    constructor(movementInstance){

        this.entityState = "run";
        this._DRAW_WIDTH = PlayerSize._WIDTH*0.5;
        this._DRAW_HEIGHT = PlayerSize._HEIGHT*0.5;
        this._PLAYERIMAGE = new Image()

        this.skillCooldownT = _SKILLCOOLDOWNT; // ms
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
        this.boomPlaying = false;
        this.skillCooldown = false

    }

    jump() {

        if (!this.isJumping) {

            this.velocityY += 30;
            this.isJumping = true;

        }

    }

    onBoomComplete() {
        this.boomPlaying = false;
        this.entityState = "run"
    }
 
    update(delta, keysDown, _ANIMATION_STATE) {

        if (this.skillCooldown && this.skillCooldownT > 0){

            _ELEMENTS._COOLDOWN_ELEMENT.innerHTML = Math.ceil(this.skillCooldownT/1000)

            this.skillCooldownT -= delta;

        }else{
            _ELEMENTS._COOLDOWN_ELEMENT.innerHTML = ""
            this.skillCooldownT = 0;
        }
        

        /************************
         *  Deals with jumping  *
         ************************/ 

        if (this.boomPlaying) return;
 
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

            this.entityState = "run"

        }

        /*************************
         *  Deals with teleport  *
         *************************/

        //try to make a animation repeat atleast once

        if (this.skillCooldownT <= 0){

            this.skillCooldown = false
            this.skillCooldownT = _SKILLCOOLDOWNT
        }

        if (keysDown[KEYS._MOVERIGHT] && this.distanceFromSide === 0 && this.skillCooldown === false) {

            this.entityState = "boom"
            this.boomPlaying = true
            this.skillCooldown = true
            this.distanceFromSide = 1000

        }else if(this.distanceFromSide !=0){

            this.distanceFromSide -= 8

        }else if(this.distanceFromSide < 0){

            this.distanceFromSide = 0

        }
 
    }
 
}