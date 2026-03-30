
export class menus{
    
    

    constructor(){

        this._START_SCREEN_ELEMENT = document.querySelector("header");
        this._GAME_SCREEN_ELEMENT = document.querySelector("main");
        this._GAME_CANVAS_ELEMENT = document.querySelector("#game");
        this._SCORE_SCREEN_ELEMENT = document.querySelector(".score");
        this._AMMO_ELEMENT = document.querySelector(".ammo");

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

        this._START_SCREEN_ELEMENT.style.display = "none";
        this._GAME_SCREEN_ELEMENT.style.display = "grid";
        this._SCORE_SCREEN_ELEMENT.style.display = "grid"
        this._GAME_CANVAS_ELEMENT.style.display = "flex"
        this._AMMO_ELEMENT.style.display = "flex"

    }

}