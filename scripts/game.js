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
    obstacle = new renderObstacle(30, 40, 400);
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
var playerPositionY = 150;


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
            fallSpeed  += 0.05
            //call the stopPlayer functon
            this.stopPlayer();    
        }

        //create a stop player function
        this.stopPlayer = function() {
            var ground = canvasHeight - this.height - 10;
            if (this.y >= ground -10) {
                fallSpeed = 0.0;
                playerPositionY = ground;
            }
        }

        window.addEventListener('keydown', event => {
            console.log(event.code);
            console.log("button was pressed");
              if (event.code == "ArrowUp") {
                this.y -= 12;
              }
        })
      
        window.addEventListener('keydown', event => {
            console.log(event.code);
            console.log("button was pressed");
              if (event.code == "ArrowDown") {
                this.y += 12;
              }
        })        

       
        
    }

    var obstaclePositionY = ground;

    var environmentMoveSpeed = 0;


     


    var obstacle;

    function renderObstacle(width, height, x) {
        this.width = width;
        this.height = height;
        this.x = x
        this.y = obstaclePositionY;

    this.draw = function () {
        ctx = gameCanvas.context;
        ctx.fillStyle = "grey";
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    this.attackSpeed= function () {
        this.x += environmentMoveSpeed;
        environmentMoveSpeed += 0.05;
    }

    }




//function to move the background    
    function moveBackground() {
  console.log("Started moving background.")
}

function moveCrow(event) {
  
  if (event.code == "ArrowUp") {
    moveCrowUp();

  }
  else if (event.code == "ArrowDown") {
    moveCrowDown();
  }
  else {
    // If they pressed anything else, don't do anything.
    // This else statement is unnecessary.
    // eventually will include onscreen button controls if suitable
  }
}

// Number of pixels to move crow up or down when user presses an arrow key.
// style for constants is ALL_CAPS snake case#
//#####
// const CROW_FLAPS_PER_TICK = 12
  
// function moveCrowUp() {
//   this.y -= CROW_MOVE_AMOUNT_PER_TICK
//   renderPlayer();
//   console.log(`Crow conceptually moved up ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)
// }

// function moveCrowDown() {
//   this.y += CROW_MOVE_AMOUNT_PER_TICK
//   renderPlayer();
//   console.log(`Crow conceptually moved up ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)
// }


    function updateCanvas() {
        ctx = gameCanvas.context;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        player.makeFall();
        player.draw();
        player.stopPlayer();

        // obstacle.draw();


    }



    




    //move the background



    //crow player movements





