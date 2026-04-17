// import { weapon } from "./weapon.js";
import { menus } from "./menus.js";
import { animation } from "./animation.js";
import { player } from "./player.js";
import { canvas } from "./canvas.js";
import { background } from "./background.js";
import { movement } from "./parser.js";
import { enemy } from "./enemy.js";

// import { shoot } from "./shoot.js";
 

export class game {
 
    constructor() {
 
        this._MENUS = new menus();
        this.movement = new movement();
        this.playerCharacter = new player(this.movement);
        this._CANVAS = new canvas();
        this._ANIMATION = new animation(this._CANVAS, this.playerCharacter);
        this._BACKGROUND = new background(this._CANVAS, null, 1);
        this._ENEMIES = this.generate_enemies(4, this._CANVAS);
        this.lastTime = 0;
 
    }
 
    Play() {
 
        this._MENUS.buttonClick();
        this._BACKGROUND.animateBackground();

        requestAnimationFrame((timestamp) => this.loop(timestamp));
 
    }
 
    loop(timestamp) {
 
        if (!this.lastTime) this.lastTime = timestamp;
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this._BACKGROUND.animateBackground();

        if (this._MENUS._GAME_STARTED){
 
            this.playerCharacter.update(delta, this.movement.getKeysArray(), this._ANIMATION._ANIMATION_STATE);
    
            this._ANIMATION.animate(this.playerCharacter.entityState, this.playerCharacter.boomPlaying);

            this._ENEMIES.forEach((enemy) => {
                enemy.enemy_Update();
                enemy.enemy_Draw();
            });

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