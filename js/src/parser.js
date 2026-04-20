import { KEYS } from './constants.js';

export class movement{
    keysDown = {};

    

    constructor(){

        window.addEventListener("keydown", (e) => this.addToKeysDown(e));
        window.addEventListener("keyup", (e) => this.removeFromKeysDown(e));
        window.addEventListener("mousedown", (e) => this.addToKeysDown(e));
        window.addEventListener("mouseup", (e) => this.removeFromKeysDown(e));
        
    }
    // methods

    addToKeysDown(e) {

        const key = this.parseKey(e);
        if (key !== null) this.keysDown[key] = true;
        console.log(this.keysDown);

    }

    removeFromKeysDown(e) {

        const key = this.parseKey(e);
        if (key !== null) delete this.keysDown[key];
        console.log(this.keysDown);

    }

    parseKey(e) {

        const key = e.button !== undefined ? `Mouse${e.button}` : e.code;

        switch(key) {

            case 'KeyS':
                return KEYS._MOVEDOWN;
            case 'KeyD':
                return KEYS._MOVERIGHT;
            case 'KeyA':
                return KEYS._MOVELEFT;
            case 'Space':
                return KEYS._JUMP;
            case 'ShiftLeft':
            case 'ShiftRight':
                return KEYS._CHANGE;
            case 'Mouse0':
                return KEYS._ATTACK;
            case 'Escape':
                return KEYS._PAUSE;
            default:
                return null;

        }
    }

    getKeysArray(){
        return this.keysDown;
    }
}