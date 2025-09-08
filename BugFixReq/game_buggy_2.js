/**
 * @jest-environment jsdom
 */

// event listener - for when the user presses the button /interacts 
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is fully loaded and parsed");
});

//window outside the document 

// let game = {
//     startGame: [],
//     gameCanvas: [],
// }


var canvasWidth = 650;
var canvasHeight = 300;
var  gameWindow = document.getElementById("game-window");
var play;
var gameRunning;
var interval;
let playerLives = 0;

function startGame() {
    console.log("Game is running");
    gameCanvas.start();
    // creat our player using function  
    player = new renderPlayer(30, 30, 600);
    obstacle = new renderObstacle(30, 40, 10);
   
    var gameRunning = true;
    var interval = setInterval(updateCanvas, 20);
    console.log(gameRunning);
    givePlayerLives();
    
}

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
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
const CROW_FLAPS_PER_TICK = 20;


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
                 console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${playerPositionY}.`);

              }
        })
      
        window.addEventListener('keydown', event => {
            console.log(event.code);
            console.log("button was pressed");
              if (event.code == "ArrowDown") {
                this.y += CROW_FLAPS_PER_TICK;
                 console.log(`Crow conceptually moved dowFLAPS px. Now at ${playerPositionY}.`);

              }
        })        

       
        
    }

    var obstaclePositionY = 250;
    var environmentMoveSpeed = 0;  
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
        environmentMoveSpeed += 0.05;
        this.continueAttack();
        
        return(obstacle.x);
    }

    this.continueAttack = function() {
        if (this.x > canvasWidth) {
            // width = randomNumber(10,50);
            // height = randomNumber(50,200);
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

    


    // {
    //     console.log("collision detected - 1 life");
    //            //says its not a ffunction at some point. but it works
             
    //     updateCanvas.stop;
    //     alert("Oh bags! [you hit an obstacle]");
    //     playerLives -= 1;
          
    //         if(
    //             confirm("Try Again?")){

    //             console.log("Yes");
    //             // clearInterval(interval);
    //             // resetGamePositions();
                

    //         } else {
    //             console.log("No");

    //             endofGame();
    //             const context = canvas.getContext('2d');
    //             context.clearRect(0, 0, canvas.width, canvas.height);
    //         }

    //     let gameRunning = false; 
    //     clearInterval(interval);
    //     player = new renderPlayer(30, 30, 600);
         
        
    // } else {
    //     var gameRunning = true;
    //     // console.log("no lives detected")
    // }
}



// add function back in as Bug 
// 2nd version - so we can look at the code - even if it is buggy.
//##########################################

function endofGame() {
    updateCanvas.stop;
    openGC()

    //  const marker =document.createElement('div');
    //  marker.classList.ad

    //  endGameScreen.classList.add('end-game-screen');
    //  document.getElementById("game-window").appendChild(endGameScreen);
    
}
//########################################

//* function to reset the game mode


// Player lives

// function PlayerLives() {
//     var startPlayerLives = 3;
//     if (numPlayerLivesRemaining  < 1) {
      
//         }
//      else {
//     var numPlayerLivesRemaining = startPlayerLiveslayerLives;
//     }
// }


//Function to stop the stop. 
//1. First use case: collion between object and player.


    function updateCanvas() {
        
         ctx = gameCanvas.context;
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

         renderObstacle();

        player.makeFall();
        player.draw();
        player.stopPlayer();


        

        obstacle.draw();
        obstacle.attackSpeed();
        obstacle.continueAttack();

          detectCollision();
            

    }



    

//improvements -


    //move the background



    //crow player movements


// User Interface interaction


// function closeGameOver () {





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



//    xGameOverBox.("onclick",() => {
//     xGameOverBox.classList.add("hidden");
//    })

// }

const StartBut = document.querySelector('start-game-button')


