// import { weapon } from "./weapon.js";
import { menus } from "./menus.js";
import { animation } from "./animation.js";
import { player } from "./player.js";
import { canvas } from "./canvas.js";
import { background } from "./background.js";
import { movement } from "./movement.js";
// import { shoot } from "./shoot.js";

export class game {

    _MENUS;
    _WEAPON;

    constructor(){

        this._MENUS = new menus();
        this.movement = new movement()
        this.playerCharacter = new player(this.movement);
        this._CANVAS = new canvas();
        this._ANIMATION = new animation();
        this._BACKGROUND = new background(this._CANVAS, null, 1)
        this.loopID = null;
        this.lastTime = 0;

    }


    Play(){

        this._MENUS.buttonClick();
        this._ANIMATION.playerCharacter = this.playerCharacter;
        this._ANIMATION.canvas = this._CANVAS; 
        this._BACKGROUND.animateBackground();
        this.loop();
        
    }

    loop(timestamp){

        if (!this.lastTime) this.lastTime = timestamp;
        const delta = (timestamp - this.lastTime);
        this.lastTime =  timestamp;

        this.playerCharacter.update(delta, this.movement.getKeysArray)

        this._ANIMATION.animate(this.playerCharacter, this._CANVAS, this.movement);

    }

    Debug(){

        window.game = this;

    }
}