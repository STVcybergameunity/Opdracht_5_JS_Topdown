// import { weapon } from "./weapon.js";
import { menus } from "./menus.js";
import { animation } from "./animation.js";
import { player } from "./player.js";
import { canvas } from "./canvas.js";
import { background } from "./background.js";
// import { shoot } from "./shoot.js";

export class game {

    _MENUS;
    _WEAPON;

    constructor(){
        this._MENUS = new menus();
        this.playerCharacter = new player();
        this. _CANVAS = new canvas();
        this._ANIMATION = new animation(this.playerCharacter, this._CANVAS);
        this._BACKGROUND = new background(this._CANVAS, null, 1)
        this.loopID = null;
        this.lastTime = 0;
    }


    Play(){

        this._MENUS.buttonClick();
        this._ANIMATION.playerCharacter = this.playerCharacter;
        this._ANIMATION.canvas = this._CANVAS; 
        this._ANIMATION.animate();
        this._BACKGROUND.animateBackground();
        
    }

    loop(timestamp){
        if (!this.lastTime) this.lastTime = timestamp;
        const delta = (timestamp - this.lastTime);
        this.lastTime =  timestamp;

        // this.playerCharacter.
    }

    Debug(){

        window.game = this;

    }
}