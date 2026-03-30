export class canvas{

    constructor(){

        this._CANVAS = document.querySelector('#game');
        this._CTX = this._CANVAS.getContext('2d');
        this._CANVAS_WIDTH = this._CANVAS.width = window.innerWidth;
        this._CANVAS_HEIGHT = this._CANVAS.height = window.innerHeight;
        this._CANVAS_POSITION = this._CANVAS.getBoundingClientRect();
        
    }

}