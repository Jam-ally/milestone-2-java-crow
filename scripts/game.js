/**
 * @jest-environment jsdom
 */

// event listener - for when the user presses the button /interacts 
document.addEventListener("DOMContentLoader", startGame); 

//window outside the document 

let game = {
    startGame: [],
    gameCanvas: [],
}


var canvasWidth = 755;
var canvasHeight = 300;
var  gameWindow = document.getElementById("game-window");

function startGame() {
    console.log("Game is running");
    gameCanvas.start();
}


var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context =this.canvas.getContext("2d");
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        gameWindow.insertAdjacentElement("afterbegin", this.canvas);
    }
}





