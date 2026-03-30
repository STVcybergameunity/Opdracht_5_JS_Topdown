import { weapon } from "./weapon.js";
import { menus } from "./menus.js";

export class game {

    _MENUS;
    _WEAPON;

    constructor(){
        this._MENUS = new menus();
        this._WEAPON = new weapon('ball', 12, 12);
    }

    Play(){
        this._MENUS.buttonClick();
    }
}