// import { weapon } from "./weapon.js";
import { menus } from "./menus.js";
import { animation } from "./animation.js";
import { player } from "./player.js";
import { canvas } from "./canvas.js";
// import { shoot } from "./shoot.js";

export class game {

    _MENUS;
    _WEAPON;

    constructor(){
        this._MENUS = new menus();
        this.playerCharacter = new player();
        this. _CANVAS = new canvas();
        this._ANIMATION = new animation(this.playerCharacter, this._CANVAS);
        // this._WEAPON = new weapon('ball', 12, 12);
        // this._SHOOT = new shoot(this._MENUS.getGameStarted())
    }


    Play(){
        this._MENUS.buttonClick();
        this._ANIMATION.playerCharacter = this.playerCharacter;
        this._ANIMATION.canvas = this._CANVAS; 
        this._ANIMATION.animate();
    }

    Debug(){
        window.game = this;
    }
}