export class canvas{

    constructor(){

        this._CANVAS = document.querySelector('#player');
        this._CTX = _CANVAS.getContext('2d');
        this._CANVAS_WIDTH = _CANVAS.width = 600;
        this._CANVAS_HEIGHT = _CANVAS.height = 600;
        this._CANVAS_POSITION = _CANVAS.getBoundingClientRect();

    }

}