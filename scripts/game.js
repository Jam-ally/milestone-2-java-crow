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


var canvasWidth = 650;
var canvasHeight = 300;
var  gameWindow = document.getElementById("game-window");

function startGame() {
    console.log("Game is running");
    gameCanvas.start();
    // creat our player using function
    player = new renderPlayer(30, 30, 10);
}


var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function ctx() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context =this.canvas.getContext("2d");
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        gameWindow.insertAdjacentElement("afterbegin", this.canvas);
    }
}

//create player variable 
var player;
//create initial Y-position of the player
var playerPositionY = 200;


//Add Gravity to the environment
var fallSpeed= 0;
//intervall for fall (function, delay[in ms])
var interval = setInterval(updateCanvas, 20);


//*Function to create the player
    function renderPlayer (width, height, x) {
        this.width = width;
        this.height = height;
        this.x =x;
        this.y = playerPositionY;

        //  Create a draw function
        this.draw = function() { 
            ctx = gameCanvas.context;
            ctx.fillStyle = "rgb(#ffffff)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        //create a makeFall function
        this.makeFall = function() {
            this.y += fallSpeed;
            fallSpeed  += 0.1;
            //call the stopPlayer functon
            this.stopPlayer();
            
        }

        //create a stop player function
    }




    function updateCanvas() {
        ctx = gameCanvas.context;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        player.makeFall();
        player.draw();

        if (playerPositionY = 300) {
            fallSpeed = 0;
        } else if (playerPositionY < 300) {
           return() ;
        } else {
        
        }     
    }



    
    fallspeed = playerPositionY - 2



    //move the background



    //crow player movements





