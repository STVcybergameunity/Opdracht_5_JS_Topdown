
import { ammo } from "./ammo.js";

export class menus{
    
    

    constructor(){

        this._START_SCREEN = document.querySelector("header");
        this._GAME_SCREEN = document.querySelector("main");
        this._GAME_CANVAS = document.querySelector("#game");
        this._SCORE_SCREEN = document.querySelector(".score");
        this._AMMO_ELEMENT = document.querySelector(".ammo");
        this._AMMO = new ammo(12);

    }

    //hi

    buttonClick() {

        window.addEventListener('click', (e) => {

            const target = e.target;

            console.log(target);

            switch (e.target.innerText) {

                case 'Start Game':

                    this.startGame()

                    break;

                default:

                    if (this._AMMO.getCurrentAmmo() > 0) {

                        this._AMMO.setCurrentAmmo(this._AMMO.getCurrentAmmo()-1);
                        console.log(this._AMMO.getCurrentAmmo());

                    } else {

                        this._AMMO.reload;

                    }
                    break;

            }

        })
        
    }

    startGame() {

        this._START_SCREEN.style.display = "none";
        this._GAME_SCREEN.style.display = "grid";
        this._SCORE_SCREEN.style.display = "grid"
        this._GAME_CANVAS.style.display = "flex"
        this._AMMO_ELEMENT.style.display = "flex"

    }

}