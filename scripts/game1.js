/**
 * @jest-environment jsdom
 */

// event listener - for when the user presses the button /interacts 
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is fully loaded and parsed");


// import { player1 } from "./player";

//window outside the document 


// game = [];

let game ={
    // player = renderCrow(),
    // startgame = startGame(),
    // gameBackground = gameBackground(),
    // renderCrow = renderCrow(),
    // moveCrow = moveCrow(),
    // renderGroundEnemy = renderGroundEnemy(),
    score: 0,

};



var canvasWidth = 650;
var canvasHeight = 500;
var flightMinHeight = canvasHeight-80;
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
    let gameSpeed = 5;
    console.log("Game is running");
    gameCanvas.start();
    // create our player using function  
    player = new renderCrow();
    obstacle = new renderGroundEnemy();
    skyObstacle = new renderFlyingEnemy ();
    background = new gameBackground();

    // background = new backgroundLayer();
    var gameRunning = true;
    gameDelta = 20;
    gameDeltaTimer = 1;
    var interval = setInterval(updateCanvas, gameDelta);
    console.log(gameRunning);
    givePlayerLives();
    enemies = [];
    enemyTimer = 0;
    enemyInterval = 100;
    console.log(gameDelta);

    
    
}

// Full Screen 





function addEnemies () {
    enemies.push(new renderGroundEnemy);
    console.log("Enemy Created");
}

// check if the enemy is offscreen



//intro game page

const introPage = document.getElementById("intro");

    introPage.addEventListener('click',() => {
        window.location.href="game.html";
    })




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
var playerPositionY = canvasHeight/2;
//Add Gravity to the environment
var fallSpeed= 0;
//This flaps per tick is movement in the y direction
let CROW_FLAPS_PER_TICK = 20;


//*Function to create the player
    function renderCrow () {

        this.width = 70;
        this.height = 70;
        this.x = canvasWidth- this.width - 10;
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
            if(this.y >  flightMinHeight) {
                this.y = flightMinHeight;
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
            fallSpeed  += 0.0005;
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


// GAme Background

    function backgroundLayer (gameSpeed, width, height, speedModifier, image) {
        //  console.log("display background layer 1")
         //assumes that the width and height of all images match.
        // this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.scrollSpeed = gameSpeed;
        // this.width = 889;
        // this.height = 500;
        // this.speedModifier = 1;
        // this.image = document.getElementById('layer1');
        
        this.x = canvasWidth-this.width;
        // this.x = canvasWidth - 960;
        this.y = 0;
        

         this.layerMovement = function() {
             if(this.x > canvasWidth - 960) {
                 this.x = canvasWidth-this.width;
             } else {
                this.x += this.scrollSpeed;
             }
         }

        this.draw = function() {
            ltx =gameCanvas.context;
            // ltx.fillStyle = "green";
            // ltx.fillRect(this.x, this.y, this.width, this.height);
            ltx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    function gameBackground() { 
            // this.game = game;
        // console.log("Started moving background.");
        // console.log("display background");
        this.width = 2535;
        this.height = 500;
        this.layersImage = document.getElementById(`layer1`);
        this.layer1 = new backgroundLayer(5, this.width, this.height, 1, this.layersImage);
        let layer1 = this.layer1;
        this.backgroundLayers = [layer1];

        this.layersMovement = function() {
            // console.log("background draw function")
            this.backgroundLayers.forEach(backgroundLayer => {
                backgroundLayer.layerMovement();
            })
        }
    
        //  Create a draw function
        this.draw = function() { 
            // console.log("background draw function")
            this.backgroundLayers.forEach(backgroundLayer => {
                backgroundLayer.draw();
            })
        }
        // this.draw = function() {
        //     console.log("render background")
        //     btx = gameCanvas.context;
        //     btx.fillStyle = "grey";
        //     btx.fillRect(this.x, this.y, this.width, this.height);
        
        // }

        }

    var obstaclePositionY = 250;
    var objectbaseMoveSpeed = 5;  
    var obstacle;
    var obstacleMoveSpeed = 5;

// function generateEnemy() {

//         // this.frameX = 0;
//         // this.frameY = 0;
//         this.fps = 20;
//         this.frameinterval = 1000/this.fps;
//         this.frameTimer = 0;
        //    this.OffScreenEnemy = false;
    
//     this.update = function () {
//         this.x = this.attackSpeedX;
//         this.y = this.attackSpeedY;
//         if (this.frameTimer > this.frameInterval){
//             this.framTimer = 0;
//             if (this.frameX < this.maxFrame) {
//                 this.frameX++;}
//             else this.frameX = 0;
//         } else {
//             this.frameTimer += gameTime;
//         }
//     }
//     this.draw = function () {
//         console.log("enemys");
//         gameCanvas.context.drawImage(this.image, this.x, this.y, this.width, this.height,)
//     }


//     }





// *Function to render the obstacles contains the: image, speed,
// and continue.
    function renderGroundEnemy() {
        
        this.width = 67;
        this.height = 150;
        this.x = 10
        this.y = canvasHeight - this.height;
        objectMoveSpeed = 5;
        this.image = document.getElementById('groundObstacle');

        // this.width = width;
        // this.height = height;
        // this.x = x
        // this.y = canvasHeight - this.height;
        // objectMoveSpeed = obstacleMoveSpeed

    this.attackSpeed= function () {

        this.x += obstacleMoveSpeed;
        // obstacleMoveSpeed -= 0.005;
        obstacleMoveSpeed.min = 2
        
        // this.continueAttack();
        
        return(x);
    }
    // this.continueAttack = function() {
    //     if (this.x > canvasWidth-300) {
            
    //         obstacleMoveSpeed = randomNumber(2,5);
    //         this.y = canvasHeight - this.height;
    //         this.x = 0;
    //         obstacleMoveSpeed = obstacleMoveSpeed
    //     } 
    // }
        this.draw = function () {
        otx = gameCanvas.context;
        // otx.fillStyle = "grey";
        //  otx.fillRect(this.x, this.y, this.width, this.height); 
        otx.drawImage(this.image, this.x, this.y, this.width, this.height,)
    }


} 



    var obstaclePositionY = 250;
    var objectbaseMoveSpeed = 5;  
    var obstacle;
    var obstacleMoveSpeed = 5;


    //* Sky enemy object function 
    function renderFlyingEnemy() {

        // this.width = width;
        // this.height = height;
        // this.x = x
        // this.y = canvasHeight - this.height;
        // objectMoveSpeed = obstacleMoveSpeed

        this.width = 70;
        this.height = 50;
        this.x = 0;
        this.y = this.height +10;
        objectMoveSpeed = 5;

    this.attackSpeed= function () {
        this.x += obstacleMoveSpeed;
        // obstacleMoveSpeed -= 0.005;
        obstacleMoveSpeed.min = 2
        
        this.continueAttack();
        
        return(x);
    }
    this.continueAttack = function() {
        if (this.x > canvasWidth-300) {
            
            obstacleMoveSpeed = randomNumber(2,5);
            this.y = this.height +10;
            this.x = 0;
            obstacleMoveSpeed = obstacleMoveSpeed
        } 
    }
        this.draw = function () {
        ostx = gameCanvas.context;
        ostx.fillStyle = "grey";
        ostx.fillRect(this.x, this.y, this.width, this.height);       
    }
    
    }


    //* Air enemy object function 
    function renderAirEnemy() {

        // this.width = width;
        // this.height = height;
        // this.x = x
        // this.y = canvasHeight - this.height;
        // objectMoveSpeed = obstacleMoveSpeed

        this.width = 70;
        this.height = 50;
        this.x = 0;
        this.y = this.height +10;
        objectMoveSpeed = 5;

    this.attackSpeed= function () {
        this.x += obstacleMoveSpeed;
        // obstacleMoveSpeed -= 0.005;
        obstacleMoveSpeed.min = 2
        
        this.continueAttack();
        
        return(x);
    }
    this.continueAttack = function() {
        if (this.x > canvasWidth-300) {
            
            obstacleMoveSpeed = randomNumber(2,5);
            this.y = this.height +10;
            this.x = 0;
            obstacleMoveSpeed = obstacleMoveSpeed
        } 
    }
        this.draw = function () {
        ostx = gameCanvas.context;
        ostx.fillStyle = "grey";
        ostx.fillRect(this.x, this.y, this.width, this.height);       
    }
    
    }


    
//end  of renderObject function


//*
//* Random Number (min-max) function {min,max}
    function randomNumber(min,max) {
       return Math.random()*(max-min)+ min;
    }

//function to move the background ######
    function gBackground() {
  
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

         renderGroundEnemy();
         renderFlyingEnemy ();

         

         if (enemyTimer >= enemyInterval) {
            addEnemies();
            enemyTimer = 0;
            console.log(enemyTimer);
        } else {
            enemyTimer += gameDeltaTimer;
            console.log(enemyTimer);
        }

    



         background.draw();

        
        //  background.layerMovement();
         background.layersMovement();

        player.makeFall();
        player.draw();
        player.stopPlayer();
        player.windowWall();
        
        obstacle.draw();
        obstacle.attackSpeed();
        // obstacle.continueAttack();

        enemies.forEach(renderGroundEnemy => {
            renderGroundEnemy.draw();
            renderGroundEnemy.attackSpeed();
            renderGroundEnemy.max =10;
            console.log(enemies);
                if (renderGroundEnemy.x > canvasWidth) {
             this.OffScreenEnemy = true;
        }
            // if (renderGroundEnemy.OffScreenEnemy = true) {
            //     console.log("remove form enemies")
            //     this.enemies.splice(this.enemies.indexOf(renderGroundEnemy), 1)
            // }
            // console.log(enemies);
        })


        skyObstacle.draw();
        skyObstacle.attackSpeed();
        skyObstacle.continueAttack();

        //   detectCollision();

           
    // create our player using function  
        
    

            
        
    }


const butto = document.querySelector('.close-game-over-btn');

const gameOverBox = document.querySelector('.game-over');
const overlay = document.querySelector('.overlay');
const endGameScreen = document.querySelector('.end-game-screen');
const pop = document.getElementById('reset');

// pop.addEventListener('click', openGC);

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



module.exports ={ game };

});