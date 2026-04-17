import { canvas } from "./canvas.js";

export class background{

    constructor(canvasInstance, image, speedModifier){

        this.canvas = canvasInstance;
        this.image = image;
        this.speedModifier = speedModifier;
        this.gameSpeed = 5;
        this.speed = this.gameSpeed * this.speedModifier;
        this.horizontal_Scroll = 0;
        this.y = 0;
        this.width = window.innerWidth*2;
        this.height = window.innerHeight;
        this.backgroundLoaded = false;
        this._BACKGROUND_LAYERS_IMAGES = [];
        this.backgroundFrame = 0;

    }

    loadBackgrounds() {
 
        const canvasInstance = this.canvas;
 
        const loadImage = (src) => new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.src = src;
        });
 
        Promise.all([
            loadImage('img/layer-1.png'),
            loadImage('img/layer-2.png'),
            loadImage('img/layer-3.png'),
            loadImage('img/layer-4.png'),
            loadImage('img/layer-5.png'),
        ]).then(([img1, img2, img3, img4, img5]) => {
 
            this._BACKGROUND_LAYERS_IMAGES = [
                new background(canvasInstance, img1, 0.2),
                new background(canvasInstance, img2, 0.4),
                new background(canvasInstance, img3, 0.6),
                new background(canvasInstance, img4, 0.8),
                new background(canvasInstance, img5, 1),
            ];
 
            this.backgroundLoaded = true;
 
        });
 
    }

    update(backgroundFrame){
 
        this.speed = this.gameSpeed * this.speedModifier;
 
        this.horizontal_Scroll = -(backgroundFrame * this.speed % this.width);

    }

    draw(){

        this.canvas._BACKGROUND_CTX.drawImage(this.image, this.horizontal_Scroll, this.y, this.width, this.height);
        this.canvas._BACKGROUND_CTX.drawImage(this.image, this.horizontal_Scroll + this.width, this.y, this.width, this.height);

    }

    animateBackground(){
 
        if(this.backgroundLoaded === false){
 
            if(this._BACKGROUND_LAYERS_IMAGES.length === 0){
                this.loadBackgrounds();
            }
 
            return;
 
        }
 

        this.canvas._BACKGROUND_CTX.clearRect(0, 0, this.canvas._BACKGROUND_CANVAS_WIDTH, this.canvas._BACKGROUND_CANVAS_HEIGHT);
 
        this._BACKGROUND_LAYERS_IMAGES.forEach(object => {
 
            object.update(this.backgroundFrame);
            object.draw();
 
        });
 
        this.backgroundFrame++;
 
    };
 
}