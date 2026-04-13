import { _ELEMENTS } from './constants.js';

export class menus{
    
    

    constructor() {

        this._GAME_STARTED = false;

    }

    buttonClick() {

        window.addEventListener('click', (e) => {

            const target = e.target;

            console.log(target);

            switch (e.target.innerText) {

                case 'Start Game':

                    this.startGame()

                    this._GAME_STARTED = true

                    break;

                default:

                    break;

            }

        })
        
    }

    getGameStarted(){

        return this._GAME_STARTED

    }

    startGame() {

        _ELEMENTS._START_SCREEN_ELEMENT.style.display = "none";
        _ELEMENTS._GAME_SCREEN_ELEMENT.style.display = "grid";
        _ELEMENTS._SCORE_SCREEN_ELEMENT.style.display = "grid"
        _ELEMENTS._GAME_CANVAS_ELEMENT.style.display = "flex"
        _ELEMENTS._BACKGROUND_ELEMENT.style.display = "flex"
        _ELEMENTS._AMMO_ELEMENT.style.display = "flex"
        _ELEMENTS._COOLDOWN_ELEMENT.style.display = "flex"

    }

}