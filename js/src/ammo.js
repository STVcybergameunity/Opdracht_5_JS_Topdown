export class ammo{

    #maxAmmo;
    #currentAmmo;
    #reloading;

    constructor(maxAmmo){

        this._MAX_AMMO_ELEMENT = document.querySelector(".max_ammo")
        this._CURRENT_AMMO_ELEMENT = document.querySelector(".current_ammo")
        this.#maxAmmo = maxAmmo;
        this.#currentAmmo = this.#maxAmmo;
        this.#reloading = false;

    }

    setMaxAmmo(magMaximum) {
        
        this._MAX_AMMO_ELEMENT.innerHTML = magMaximum + "/"

    }

    setCurrentAmmo(magCurrent) {

        this.#currentAmmo=magCurrent;
        this._CURRENT_AMMO_ELEMENT.innerHTML = this.#currentAmmo;

    }

    getCurrentAmmo() {
        return this.#currentAmmo;
    }

    getMaxAmmo() {
        return this.#maxAmmo;
    }

    shoot(){

        // console.log(e.pageX, e.pageY)

        if (this.currentAmmo >= 0){

            this.currentAmmo--;

            return
        } else {
            this.currentAmmo=this._MAX_AMMO_ELEMENT;

            return
        }
    }

    reload(){
        console.log(this.#reloading)
        if (this.#reloading === false){

            this.#reloading = true;

            console.log(this.#reloading)
            setTimeout(function(){
                this.#currentAmmo = this.#maxAmmo;
                this.#reloading = false;
            }, 2000)
            
        } else {
            console.log('still balling...');
        }
    }

}
