/**
 * @jest-environment jsdom
 */

// import { startFlyGame } from "./game2";

// event listener - for when the user presses the button /interacts 
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is fully loaded and parsed");


// import { player1 } from "./player";


//window outside the document 


// game = [];

// let game ={
//     // player = renderCrow(),
//     // startgame = startGame(),
//     // gameBackground = gameBackground(),
//     // renderCrow = renderCrow(),
//     // moveCrow = moveCrow(),
//     // renderGroundEnemy = renderGroundEnemy(),
//     score: 0,

// };



var canvasWidth = 650;
var canvasHeight = 500;
var flightMinHeight = canvasHeight-80;
var  gameWindow = document.getElementById("game-window");
var gameStatusBar = document.getElementById("game-status-bar");
var play;
var gameRunning;
var interval;
let playerLives = 0;
var gameSpeed;
// let startDateTime = new Date();



// let game = [
//     canvasWidth = 650;
//     canvasHeight = 500;
//     flightMinHeight = canvasHeight-80;
//     gameWindow = document.getElementById("game-window");
//     play;
//     gameRunning;
//     interval;
//     playerLives = playerLives;
// ]



const startButton = document.querySelector('#game-start-button');
const startGameFeedback = document.querySelector('#start-game-feedback');


startButton.addEventListener('click',() => {


    // startPlay();
    // window.location.href="game.html";
    
    // console.log(startGameFeedback.textContent)
    startGame();
    
})
function startPlay() {
        let sbp = startGameFeedback.textContent;

    if (startGameFeedback.textContent = "0" ) {
    startGameFeedback.textContent = 1;

    } else if(startGameFeedback.textContent != "0") {
     console.log(startGameFeedback.textContent);  
    }

}

function startGame() {
    let gameSpeed = 2;
    console.log("Game is running");
    gameCanvas.start();

    
    gameControlButtons();
    playerLives = 0;
    enemiesPast = 0;
    
    // create our player using function  
    
    var gameRunning = true;
    gameDelta = 20;
    gameDeltaTimer = 1;
    deltaTime = gameDeltaTimer;
    var interval = setInterval(updateCanvas, gameDelta);
    console.log(gameRunning);
    
    enemies = [];
    enemyTimer = 0;
    enemyInterval = 700;
    console.log(gameDelta);
    //array stores the player moves
    playerMoves = [];
    enemyGround= [];
    playTime = gameTime();

    player = new renderCrow();
    obstacle = new generateEnemy;
    // skyObstacle = new renderFlyingEnemy ();
    background = new gameBackground();
    givePlayerLives();
    playerCrow = [];
    playerCrow.push(player);

    enemiesPastS = [];
    activeObstacles = [];
}


    function updateCanvas() {
        
         ctx = gameCanvas.context;
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        gameSpeed = 1;                              
        // startDateTime = startDateTime;
        
        gameTime();

        //  if (enemiesPast < 5) {
        //     gameSpeed = 3;
        //  } else if (enemiesPast < 10 ) {
        //     gameSpeed = 5;
        //     enemyInterval = 200;
        //  } else if (enemiesPast < 20 ) {
        //     gameSpeed = 7;
        //     enemyInterval = 150;
        //  } 

        if (enemyTimer >= enemyInterval) {
            addEnemies(gameSpeed, enemyInterval, enemyTimer);
            // enemies += [renderGroundEnemy];
            // obstacle();
            //  addEnemies();
             enemyTimer = 0;
           
         }
         else {
            enemyTimer += gameDeltaTimer;
            // console.log(enemyTimer);
        }
        
        obstacle.draw();

         background.draw();
         background.layersMovement();

        

        
        player.draw();
        player.makeFall();
        player.stopPlayer();
        player.windowWall();
        
        
        // obstacle.attackSpeed();

          this.enemies.forEach(generateEnemy => {
                generateEnemy.draw(ctx);
            })
        // obstacle.continueAttack();

        this.enemies.forEach(generateEnemy => {
            generateEnemy.attackSpeed(deltaTime);
          })  
          
   

        // score.draw()
        //   this.enemies.forEach (generateEnemy => {
        //     if (generateEnemy.x > canvasWidth) {
        //         score();
        //         enemiesPastS.push(generateEnemy)

        //         // enemies.splice()
        //     }
        //   })
        if (playerLives > 0 ) {
        detectCollision(); 
        score();
        } else {
            console.log("yah dead")
        }
        endGame;



    // create our player using function  s        
        
    }

// Full Screen 


function addEnemies (gameSpeed, enemyInterval, enemyTimer) {
    // enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));

    let randEnemy = parseInt(randomNumber(0,4));

    // randEnemy = 3;  
    console.log(randEnemy);

  if (randEnemy <= 1) {
    enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
    } else if ( 1 < randEnemy <= 2) {
        enemies.push(new renderGroundEnemy(gameSpeed, enemyInterval, enemyTimer));
    } else if (randEnemy > 2 ) {
        enemies.push(new renderFlyingEnemy(gameSpeed, enemyInterval, enemyTimer));
    }

}

// check if the enemy is offscreen

//intro game page
const introPage = document.getElementById("intro");

    introPage.addEventListener('click',() => {
        window.location.href="game.html";
    })


///* full screen fucntionality

// const toggleFullScreen = document.querySelector('#game-start-button');
// const fullGameWindow = document.querySelector('.game-tile');

//     toggleFullScreen.addEventListener('click', () => {
//         if (!document.fullscreenElement) {
//         fullGameWindow.requestFullscreen();
//         } else if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//     })
//intervall 

function score() {

    enemiesPastS = []; 
    this.enemies.forEach (generateEnemy => {
            if (generateEnemy.x > canvasWidth) {
                enemiesPastS.push(generateEnemy);
        
            }
          })     
          enemiesPast = enemiesPastS.length;
          document.getElementById("game-score").textContent = parseInt(enemiesPast);

        this.draw = function() {
        // scoreBoxImage = document.getElementById("game-score");
        // scoreBoxImage.classList.remove("none")
        // ctx.drawRect(sceBoxImage, 70, 70 , 300, 10);
        }   
}

        scoreBoxImage = document.getElementById("game-score");
        scoreBoxImage.classList.remove("none")


function givePlayerLives() {
    playerLives += 2;
    console.log("player lives:", playerLives);
    

}

function crowPlayerHealth(playerLives) {
    playerLives = playerLives;
    healthBar = document.getElementById("player-lives");
    
    if (playerLives = 2) {
        playerHealth = 2;
        healthBar.textContent = "<3 <3";
        
    } else if ( playerLives = 1){
        playerHealth = 1;
        healthBar.textContent = "<3 0";
    }
    else if ( playerLives = 0 ){
        playerHealth = 0;
        healthBar.textContent = "0 0";
    }

}

function gameTime() {

    
    startDateTime = new Date();

    let gameTimeDif = 0;

    this.clock = function() {
        console.log("time ticking")

        // let dateTime = new Date();

        // // mins  = dateTime.getMinutes();
        // // secs  = dateTime.getSeconds();
        
        // gameTimeDif = (dateTime - startDateTime)/1000;

        // const gameTimeMins = dameTimeDif / 60;
        // const gameTimeSecs = dateTimeDif % 60;

        // console.log(`${gameTimeMins}:${gameTimeSecs}`)
    }

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
        gameStatusBar.insertAdjacentElement("afterend", this.canvas);
        gameStatusBar.classList.remove("none");
        gameStatusBar.classList.remove("hidden");
        gameStatusBar.style.width = canvasWidth;
    }
    }
    


    playerUpButton = document.getElementById("player-up-button");
    playerDownButton = document.getElementById("player-down-button");

    function gameControlButtons() {
        //playerUpButton.classList.remove("none");
       // playerUpButton.classList.remove("none");
       document.getElementById("up-button").classList.remove("none");
       document.getElementById("down-button").classList.remove("none");
    //     let controlButtons = document.getElementsByClassName("player-movement-buttons");
    //     for (let i=0; i < controlButtons.length; i++) {
    //         controlButton[i].classList.remove("none");
    //    }
    }


    function playerMovementControls() {

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
// Factor in the reduced read time of screen button
let screen_button_factor = 10;


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
            // ctx.fillStyle = "rgb(#ffffff)";
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        this.windowWall = function() {
            if(this.y >  flightMinHeight) {
                this.y = flightMinHeight;
                console.log("sqwaak");
                gameCanvas.canvas.style.border = "red solid 5px";
            } else if(this.y < -16 ) {
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
            // console.log(event.code);
            // console.log("button was pressed");

              if (event.code == "ArrowUp") {
                this.y -= CROW_FLAPS_PER_TICK;
                 //console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
                 playerMoves.push("upArrow")
                
              }
        })

        // playerUpButton.addEventListener('click', crowUp); 

        //     console.log(" new upbutton pressed");      

            // this.crowUp() = function() {
                
            //     this.y -= CROW_FLAPS_PER_TICK;
            //     console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

            // }

    //     gameCanvas.canvas.addEventListener('mousemove', event => {
    //     console.log(event.code);
    //     console.log(event.offsetX, event.offsetY);

    //         if (event.offsetY <= (canvasHeight/2)) {
    //             this.y -= CROW_FLAPS_PER_TICK;
    //              console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

    //         }
    // })
      
        window.addEventListener('keydown', event => {
          //  console.log(event.code);
          //  console.log("button was pressed");
              if (event.code == "ArrowDown") {
                this.y += CROW_FLAPS_PER_TICK;
                // console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
                playerMoves.push("downArrow")
              }
        }) 

        playerUpButton.addEventListener('click', event => {
        //console.log("upbutton pressed");   
 
            this.y -= CROW_FLAPS_PER_TICK + screen_button_factor;
        //    console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
        //    playerMoves.push("upButton")

        })
        
        playerDownButton.addEventListener('click', event => {
        //console.log("downbutton pressed");   
 
            this.y += CROW_FLAPS_PER_TICK + screen_button_factor;
           // console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
            playerMoves.push("downButton")
        })

        gameCanvas.canvas.addEventListener('mouseover', event => {
        //console.log(event.code);
        //console.log(event.offsetX, event.offsetY);

            if (event.offsetY > (canvasHeight/2)) {
                this.y += CROW_FLAPS_PER_TICK;
                // console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

            }
    })
          
    }

    // gameCanvas.canvas.addEventListener('mousedown', event => {
    //     console.log(event.code);
    //     console.log(event.offsetX, event.offsetY);
    // })
// GAme Background

    function backgroundLayer (gameSpeed, width, height, speedModifier, image) {
        
         //assumes that the width and height of all images match.
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.scrollSpeed = gameSpeed;
   
        this.x = canvasWidth-this.width;
       
        this.y = 0;
        

         this.layerMovement = function() {
             if(this.x > canvasWidth - 960) {
                 this.x = canvasWidth-this.width;
             } else {
                this.x += this.scrollSpeed;
             }
         }

        this.draw = function() {
            ltx = gameCanvas.context;
    
            ltx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    function gameBackground() { 
     
        this.width = 2535;
        this.height = 500;
        this.layersImage = document.getElementById(`layer1`);
        this.layer1 = new backgroundLayer(2, this.width, this.height, 1, this.layersImage);
        let layer1 = this.layer1;
        this.backgroundLayers = [layer1];

        this.layersMovement = function() {
            // background layermovement
            this.backgroundLayers.forEach(backgroundLayer => {
                backgroundLayer.layerMovement();
            })
        }
    
        //  Create a draw function
        this.draw = function() { 
            // "background draw function"
            this.backgroundLayers.forEach(backgroundLayer => {
                backgroundLayer.draw();
            })
        }


        }

    var obstaclePositionY = 250;
    var objectbaseMoveSpeed = 5;  
    var obstacle;
    var obstacleMoveSpeed = 5;

function generateEnemy(gameSpeed, enemyInterval, enemyTimer) {

        // this.frameX = 0;
        // this.frameY = 0;
        canvasHeight = canvasHeight;
        this.height = this.height;
        this.gameSpeed = gameSpeed;
        this.obstacleMoveSpeed = gameSpeed;
        //obstacleMoveSpeed = gameSpeed;
        this.enemyInterval = enemyInterval;
        this.enemyTimer = enemyTimer;
        this.x = 5
        this.fps = 20;
        this.frameinterval = 1000/this.fps;
        this.frameTimer = 0;

        this.OffScreenEnemy = false;

        this.enemiesImage = document.getElementById('groundObstacle');

        // otx.drawImage(this.image, 5, (canvasHeight - this.height), 67, 150)

        let enemyGround = new renderGroundEnemy(this.gameSpeed);
        let enemyFlying = new renderFlyingEnemy(this.gameSpeed);
        let enemyAir = new renderAirEnemy(this.gameSpeed);
         this.enemyObstacles = [enemyGround, enemyFlying, enemyAir];
         enemies.push(enemyGround, enemyFlying, enemyAir);

         //renderGroundEnemy.draw();

    this.attackSpeed = function (deltaTime) {
        // this.x = renderGroundEnemy.attackSpeed()
        // if (this.obstacleMoveSpeed > 1 && this.x > (this.canvasWidth/2)) {
        //     //approach slow factor
        //     this.obstacleMoveSpeed -= 0.005;
        // }
        this.x += this.obstacleMoveSpeed;
        // this.y += this.obstacleheightSpeed;

        
        // return this.x;
    }    
    this.draw = function () {
        // console.log("draw enemy");
        ctx = gameCanvas.context;
        // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        
        // ctx.fillStyle = "grey";
        // ctx.fillRect((this.x), (canvasHeight - this.height), 67, 150);
        //  otx.fillRect(enemyGround.x, enemyGround.y, enemyGround.width, enemyGround.height);
    }
    }

    
    
// *Function to render the obstacles contains the: image, speed,
// and continue.

//enemyInterval, enemyTimer, obstacleMoveSpeed

    function renderGroundEnemy(gameSpeed, image) {
        // this.enemyInterval = enemyInterval;
        // this.enemyTimer = enemyTimer;
        this.obstacleMoveSpeed = gameSpeed;
        this.width = 67;
        this.height = 150;
        this.x = -this.width +10;
        this.y = canvasHeight - this.height;
        this.maxFrame = 5;
        // objectMoveSpeed = 5;
        this.image = document.getElementById('groundObstacle');;
        // console.log("draw enemy");

    this.attackSpeed= function () {

        // if (this.obstacleMoveSpeed > 1 && this.x > (canvasWidth/2)) {
        //     //approach slow factor
        //     this.obstacleMoveSpeed -= 0.005;
        // }

        this.x += this.obstacleMoveSpeed;
        
        return this.x;
        
    }

        this.draw = function () {
            // console.log("draw enemy image");
        otx = gameCanvas.context;
        // otx.fillStyle = "grey";
        //  otx.fillRect(this.x, this.y, this.width, this.height); 
        otx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }


         
} 

    // var obstaclePositionY = 250;
    // var objectbaseMoveSpeed = 5;  
    // var obstacle;
    // var obstacleMoveSpeed = 5;


    //* Sky enemy object function 
    function renderFlyingEnemy(gameSpeed) {

        this.width = 111;
        this.height = 100;
        this.x = -this.width+50;
        this.y = 30;
        this.obstacleMoveSpeed = gameSpeed;
        /// spite
        this.maxFrame = 5;
        this.image = document.getElementById('flyingObstacle');
        i = 0;

    this.attackSpeed= function () {
    //   generateEnemy.attackSpeed(deltaTime);
        this.x += this.obstacleMoveSpeed;
        
        // if( i <= 2) {
        //     this.y += 3;
        //     i = 1;
        // } else if ( 2 < i <= 3 ) {
        //      this.y -= 3;
        //     i += 1;
        // } else {
        //     i = 0;
        //     this.y = this.y
        // }    


    }
    //         obstacleMoveSpeed = randomNumber(2,5);
    //         this.y = this.height +10;
    //         this.x = 0;
    //         obstacleMoveSpeed = obstacleMoveSpeed
    //     } 
    // }
        this.draw = function () {
        ostx = gameCanvas.context;
        // ostx.fillStyle = "grey"; 
        // ostx.fillRect(this.x, this.y, this.width, this.height); 

        ostx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    }


    //* Air enemy object function 
    function renderAirEnemy(gameSpeed) {

        this.width = 245;
        this.height = 150;
        this.x = -this.width+50;
        this.y = 150;
        this.obstacleMoveSpeed = gameSpeed;
        /// spite
        this.maxFrame = 5;
        this.image = document.getElementById('airObstacle');
        i = 0;

    this.attackSpeed= function () {
    //   generateEnemy.attackSpeed(deltaTime);
        this.x += this.obstacleMoveSpeed;
        
    }

        this.draw = function () {
        ostx = gameCanvas.context;
        // ostx.fillStyle = "grey"; 
        // ostx.fillRect(this.x, this.y, this.width, this.height); 

        ostx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    }


    
//end  of renderObject function


//*
//* Random Number (min-max) function {min,max}
    function randomNumber(min,max) {
       return Math.floor(Math.random()*(max-min)+ min) ;
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

    var playerLeft = player.x - 10;
    // console.log(player.x);
    var playerRight = player.x + player.width;
    var playerTop = player.y;
    var playerBottom = player.y + player.height;
    
    console.log(playerBottom);
      console.log(playerTop);
    activeObstacles = []
    
    // enemies.forEach(enemy => {
    //     obstacleRight = enemy.x + enemy.width;
    //     obstacleLeft = enemy.x;

    //     obstacleTop = obstacle.y;
    // })
        // this.enemies.forEach (generateEnemy => {
        //     if (generateEnemy.x > canvasWidth) {
        //         enemiesPastS.push(generateEnemy);
        //     }
        //   })     

    enemies.forEach(generateEnemy => {

        if((generateEnemy.x > 0) && (generateEnemy.x < canvasWidth) ) {
             activeObstacles.push(generateEnemy);

        }    

        activeObstacles.forEach(enemy => {
        obstacleRight = enemy.x + enemy.width;
        obstacleLeft = enemy.x;
        obstacleTop = enemy.y;
        obstacleBottom = enemy.y + enemy.height;

        })
       
    });

    // console.log(obstacleLeft);
    // var obstacleRight = obstacle.x + obstacle.width;
    // var obstacleLeft = obstacle.x;
    // var obstableTop = obstacle.y;

    var playerBottom = player.y + player.height;
    
    if (playerLives > 0 ) {
        // console.log("check for collision");

    if ( 
        // x, y 0,0 is the top left corner
        obstacleRight > playerLeft &&
        obstacleLeft < playerRight &&
         
        obstacleTop < playerBottom &&
        obstacleBottom > playerTop


    ) {
        // console.log(obstacleRight);
        // console.log(obstacle.x);
        // console.log(obstacle.width);

        console.log(playerLeft);
        console.log("collision");
        console.log(playerLives);
        playerLives -= 1;
        
        
        alert("Oh bags! [you hit an obstacle]");
        activeObstacles = [];

        //** remove it from the array */
        
        setTimeout(function() {
            activeObstacles.splice();
            // alert("Test]");
        },2000)
        

        // clearInterval(interval);
        // gameReset();
        
       
    } else {
        // console.log("safe");
    }

        } else {
        // console.log("no checks");
    }

    console.log(playerLives);

    crowPlayerHealth(playerLives);
    
    if (playerLives <= 0 ) {
        console.log("end of game");
        endOfGame();
        // break;

    }

    
   
}



//##########################################

function endOfGame() {
    updateCanvas.stop;
    openGC();
}
//########################################

const endGame = document.querySelector('#end');
endGame.addEventListener('click', (e) => {
    console.log("end");
    endOfGame();
})



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

       gameOverBox.classList.remove('none'); 
    overlay.classList.remove('none');
    endGameScreen.classList.remove('none');
}

function closeGC() {

    gameOverBox.classList.add('hidden'); 
    overlay.classList.add('hidden');
    endGameScreen.classList.add('hidden');
    
}


butto.addEventListener('click',closeGC);





});

exports = [ startPlay ];