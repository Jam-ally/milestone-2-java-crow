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
    player = new renderPlayer(30, 30, 600);
    obstacle = new renderObstacle(30, 40, 10);
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

//This flaps per tick is movement in the y direction
const CROW_FLAPS_PER_TICK = 12;


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
            fallSpeed  += 0.005
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
                this.y -= CROW_FLAPS_PER_TICK;
                 console.log(`Crow conceptually moved up ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)

              }
        })
      
        window.addEventListener('keydown', event => {
            console.log(event.code);
            console.log("button was pressed");
              if (event.code == "ArrowDown") {
                this.y += CROW_FLAPS_PER_TICK;
                 console.log(`Crow conceptually moved down ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)

              }
        })        

       
        
    }

    var obstaclePositionY = 250;

    var environmentMoveSpeed = 0;


     


    var obstacle;

    function renderObstacle(width, height, x) {
        this.width = width;
        this.height = height;
        this.x = x
        this.y = obstaclePositionY;

    this.draw = function () {
        ctx.fillStyle = "grey";
         ctx.fillRect(this.x, this.y, this.width, this.height);
          
    }

    this.attackSpeed= function () {
        this.x += environmentMoveSpeed;
        environmentMoveSpeed += 0.05;
        this.continueAttack();
        
        return(obstacle.x);
    }

    this.continueAttack = function() {
        if (this.x > 600) {
            width = randomNumber(10,50);
            height = randomNumber(50,200);
            environmentMoveSpeed = randomNumber(1,2);
            this.y = canvasHeight - this.height;
            this.x = 0;

        }

        
    }

    }

    function randomNumber(min,max) {
       return Math.random()*(max-min)+ min;
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


//detect collision functions and effects

//detect collision when the obstacle and the player interact
//in the same virtual space

function detectCollision() {
    // console.log(obstacle.x);
    // console.log(player.x);
    var playerLeft = player.x + 0;
    var playerRight = player.x + player.width;
    
    var obstacleRight = obstacle.x + obstacle.width;
    var obstacleLeft = obstacle.x;

    var obstableTop = obstacle.y;
    var playerBottom = player.y + player.height;

    if (obstacleRight > playerLeft &&
        obstacleRight < playerRight &&
        obstableTop < playerBottom        
    ) {
        console.log("collision detected - 1 life");
        gameCanvas.stop();  //says its not a ffunction at some point. but it works
        this.stop();
    }

}

//Function to stop the stop. 
//1. First use case: collion between object and player.

function detectCollisions() {
    console.log("player collision dettected - subtract 'Life'");
    // var playerLeft = player.x;
    // var playerRight = player.x + player.width;
    const elem = document.createElement('div');
    elem.classList.add('test-shape');
    document.getElementById("footer-home-page").appendChild(elem);

}

detectCollisions();



    function updateCanvas() {
        detectCollision();

        ctx = gameCanvas.context;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        player.makeFall();
        player.draw();
        player.stopPlayer();

        obstacle.draw();
        obstacle.attackSpeed();
        obstacle.continueAttack();


    }



    




    //move the background



    //crow player movements





