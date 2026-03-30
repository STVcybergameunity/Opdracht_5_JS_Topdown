// import { weapon } from "./weapon.js";
import { menus } from "./menus.js";
import { animation } from "./animation.js";
// import { shoot } from "./shoot.js";

export class game {

    _MENUS;
    _WEAPON;

    constructor(){
        this._MENUS = new menus();
        this._ANIMATION = new animation();
        // this._WEAPON = new weapon('ball', 12, 12);
        // this._SHOOT = new shoot(this._MENUS.getGameStarted())
    }


    Play(){
        this._MENUS.buttonClick();
        this._ANIMATION.animate();
    }

    Debug(){
        window.game = this;
    }
}