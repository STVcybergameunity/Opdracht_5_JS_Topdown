
import { movement } from "./movement.js";
import { PlayerSize } from "./constants.js";
export class player{

    constructor(){

        this.entityState = "run";
        this._DRAW_WIDTH = PlayerSize._WIDTH*0.5;
        this._DRAW_HEIGHT = PlayerSize._HEIGHT*0.5;
        this._PLAYERIMAGE = new Image();

        this.gameFrame = 0;
        this.animationTimer = 0;
        this.animationInterval = 200;

    }

    update(delta, keysdown){

    

    }

    horizontalMovement(delta, keysDown){

        

    }

}