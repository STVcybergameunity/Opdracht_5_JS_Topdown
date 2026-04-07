export class canvas{

    constructor(){

        this._CANVAS = document.querySelector('#game');
        this._CTX = this._CANVAS.getContext('2d');
        this._CANVAS_WIDTH = this._CANVAS.width = window.innerWidth;
        this._CANVAS_HEIGHT = this._CANVAS.height = window.innerHeight;
        this._CANVAS_POSITION = this._CANVAS.getBoundingClientRect();

        this._BACKGROUND_CANVAS = document.querySelector('#background');
        this._BACKGROUND_CTX = this._BACKGROUND_CANVAS.getContext('2d');
        this._BACKGROUND_CANVAS_WIDTH = this._BACKGROUND_CANVAS.width = window.innerWidth;
        this._BACKGROUND_CANVAS_HEIGHT = this._BACKGROUND_CANVAS.height = window.innerHeight;
        this._BACKGROUND_POSITION = this._BACKGROUND_CANVAS.getBoundingClientRect();

    }

}