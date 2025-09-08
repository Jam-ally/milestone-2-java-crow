/**
 * @jest-environment jsdom
 */

// event listener - for when the user presses the button /interacts 
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is fully loaded and parsed");
});

// import { player1 } from "./player";

//window outside the document 




var canvasWidth = 650;
var canvasHeight = 300;
var  gameWindow = document.getElementById("game-window");
var play;
var gameRunning;
var interval;
let playerLives = 0;

const startButton = document.querySelector('#game-start-button');

startButton.addEventListener('click',() => {
    startGame();
    
})

function startGame() {

    console.log("Game is running");
    gameCanvas.start();
    // create our player using function  
    player = new renderPlayer();
    obstacle = new renderObstacle(30, 40, 10);
   
    var gameRunning = true;
    var interval = setInterval(updateCanvas, 20);
    console.log(gameRunning);
    givePlayerLives();
    
}

// Full Screen 

const toggleFullScreen = document.querySelector('#game-start-button');
const fullGameWindow = document.querySelector('.game-tile');

    toggleFullScreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
        fullGameWindow.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    })

//intervall 


function givePlayerLives() {
    playerLives += 2;
    console.log("player lives:", playerLives);
}

function gameReset() {
    
    ctx.context.clearRect(0, 0, canvas.width, canvas.height);
    gameCanvas.context.remove;

}



    var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function ctx() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context =this.canvas.getContext("2d");
        gameWindow.insertAdjacentElement("afterbegin", this.canvas);
    }
    }





//create player variable 
var player = 0;
player.x = 0;
//create initial Y-position of the player
var playerPositionY = 150;
//Add Gravity to the environment
var fallSpeed= 0;

//This flaps per tick is movement in the y direction
let CROW_FLAPS_PER_TICK = 20;


//*Function to create the player
    function renderPlayer () {

        this.width = 30;
        this.height = 30;
        this.x = 600;
        this.y = playerPositionY;
        this.image = document.getElementById('player1')

        //  Create a draw function
        this.draw = function() { 
            ctx = gameCanvas.context; 
            ctx.fillStyle = "rgb(#ffffff)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        this.windowWall = function() {
            if(this.y > 260 ) {
                this.y = 260;
                console.log("sqwaak")
            } 
            if(this.y < -16 ) {
                this.y = -16;
                console.log("aaahhcacaca")
            } 
        }


        //create a makeFall function
        this.makeFall = function() {
            this.y += fallSpeed;
            fallSpeed  += 0.005;
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
                 console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

              }
        })
      
        window.addEventListener('keydown', event => {
            console.log(event.code);
            console.log("button was pressed");
              if (event.code == "ArrowDown") {
                this.y += CROW_FLAPS_PER_TICK;
                 console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

              }
        })        

       
        
    }

    var obstaclePositionY = 250;
    var environmentMoveSpeed = 0.1;  
    var obstacle;


//*Function to render the obstacles contains the: image, speed,
//and continue.

    function renderObstacle(width, height, x) {
        this.width = width;
        this.height = height;
        this.x = x
        this.y = obstaclePositionY;

    this.draw = function () {
        otx = gameCanvas.context;
        otx.fillStyle = "grey";
         otx.fillRect(this.x, this.y, this.width, this.height);
          
    }

    this.attackSpeed= function () {
        this.x += environmentMoveSpeed;
        environmentMoveSpeed -= 0.05;
        this.continueAttack();
        
        return(obstacle.x);
    }

    this.continueAttack = function() {
        if (this.x > canvasWidth) {
 
            environmentMoveSpeed = randomNumber(1,2);
            this.y = canvasHeight - this.height;
            this.x = 0;
        } 
    }

} //end  of renderObject function

//*
//* Random Number (min-max) function {min,max}
    function randomNumber(min,max) {
       return Math.random()*(max-min)+ min;
    }

//function to move the background ######
    function moveBackground() {
  console.log("Started moving background.")
}

//controls to move the crow player.
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

    var playerLeft = player.x;
    var playerRight = player.x + player.width;
    
    var obstacleRight = obstacle.x + obstacle.width;
    var obstacleLeft = obstacle.x;

    var obstableTop = obstacle.y;
    var playerBottom = player.y + player.height;
    
    
    if (playerLives > 1) {
        console.log("check for collision");

    if (
        obstacleRight > playerLeft &&
        obstacleLeft < playerRight &&
        obstableTop < playerBottom      

    ) {
        console.log(obstacleRight);
        console.log(obstacle.x);
        console.log(obstacle.width);

        console.log(playerLeft);
        console.log("collision");
        console.log(playerLives);
        playerLives -= playerLives;

        
        alert("Oh bags! [you hit an obstacle]");
        clearInterval(interval);
        gameReset();
       
    } else {
        console.log("safe");
    }

        } else {
        console.log("no checks");
    }

    console.log(playerLives);
   
}

//##########################################

function endofGame() {
    updateCanvas.stop;
    openGC()

    
}
//########################################

    function updateCanvas() {
        
         ctx = gameCanvas.context;
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

         renderObstacle();

        player.makeFall();
        player.draw();
        player.stopPlayer();
        player.windowWall();
        
        // obstacle.draw();
        // obstacle.attackSpeed();
        // obstacle.continueAttack();

        //   detectCollision();
            
        
    }


const butto = document.querySelector('.close-game-over-btn');

const gameOverBox = document.querySelector('.game-over');
const overlay = document.querySelector('.overlay');
const endGameScreen = document.querySelector('.end-game-screen');
const pop = document.getElementById('reset');

pop.addEventListener('click', openGC);

function openGC() {
    gameOverBox.classList.remove('hidden'); 
    overlay.classList.remove('hidden');
    endGameScreen.classList.remove('hidden');
}

function closeGC() {
    
    gameOverBox.classList.add('hidden'); 
    overlay.classList.add('hidden');
    
}


butto.addEventListener('click',closeGC);




