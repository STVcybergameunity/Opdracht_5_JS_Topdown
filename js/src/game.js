import { menus } from "./menus.js";
import { animation } from "./animation.js";
import { player } from "./player.js";
import { canvas } from "./canvas.js";
import { background } from "./background.js";
import { movement } from "./parser.js";
import { enemy } from "./enemy.js";
import { _ELEMENTS } from "./constants.js";
import { hitdetection } from "./hitdetection.js";
 

export class game {
 
    constructor() {
 
        this._MENUS = new menus();
        this.movement = new movement();
        this.playerCharacter = new player(this.movement);
        this._CANVAS = new canvas();
        this._ANIMATION = new animation(this._CANVAS, this.playerCharacter);
        this._BACKGROUND = new background(this._CANVAS, null, 1);
        this._ENEMIES = this.generate_enemies(4, this._CANVAS);
        this._HITDETECTION = new hitdetection(this.playerCharacter, this._ENEMIES, this._CANVAS);
        this.lastTime = 0;
        this.score = 0;
        this.scoreTimer = 0;
 
    }
 
    Play() {
 
        this._MENUS.buttonClick();
        this._BACKGROUND.animateBackground();
        setInterval(this.setScore, 1000)

        requestAnimationFrame((timestamp) => this.loop(timestamp));
 
    }
 
    loop(timestamp) {
 
        if (!this.lastTime) this.lastTime = timestamp;
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this._BACKGROUND.animateBackground();

        if (this._MENUS._GAME_STARTED){
            let playerHit = this._HITDETECTION.checkHits();

            this.playerCharacter.update(delta, this.movement.getKeysArray(), this._ANIMATION._ANIMATION_STATE, playerHit);
    
            this._ANIMATION.animate(this.playerCharacter.entityState, this.playerCharacter.boomPlaying);

            this._ENEMIES.forEach((enemy) => {
                enemy.enemy_Update();
                enemy.enemy_Draw();
            });


            this.scoreTimer += delta;

            if (this.scoreTimer >= 1000) {
                this.score++;
                this.scoreTimer = 0;
                _ELEMENTS._SCORE_SCREEN_ELEMENT.innerHTML = "score:" + this.score;
            }

        }
 
        requestAnimationFrame((timestamp) => this.loop(timestamp));
 
    }
 
    Debug() {
 
        window.game = this;
 
    }

    generate_enemies(enemies, ctx){
        const _ARRAY_OF_ENEMIES = [];

        for (let i = 0; i < enemies; i++){
            _ARRAY_OF_ENEMIES.push(new enemy(ctx))
        }
        return _ARRAY_OF_ENEMIES;
    }

}