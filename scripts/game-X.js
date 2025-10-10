
window.addEventListener('DOMContentLoaded', e => {
    console.log("DOM Content fully Loaded and parsed");
    
      


const startStorybtn = document.querySelector('#start-story-button');
const previous = document.querySelector('#previous-button');
const next = document.querySelector('#next-button');
const startFlyGamebtn = document.querySelector('#start-flygame-button');
const skipStorybtn = document.querySelector('#skip-story-button');

storybuttonArray = [startStorybtn, previous , next, startFlyGamebtn, skipStorybtn ];


var canvasWidth = 650;
var canvasHeight = 500;
var flightMinHeight = canvasHeight-80;


var gameWindow = document.getElementById("game-window");
var gameStatusBar = document.getElementById("game-status-bar");

var playerUpButton = document.getElementById("player-up-button");
var playerDownButton = document.getElementById("player-down-button");
var playerControlPad = document.querySelector('.player-control-pad');
// var playerMovementControls = document.getElementById("player-movement-control")
var playerMovementControls = document.getElementById("player-controls-left");
var portrait = document.getElementById("portrait");

let playerLives = 0;



let game = {
    canvasHeight,
    canvasWidth,
    score: 0,
    pageNumber: 0 ,
    storyButtons: ["previous-button","next-button","skip-button"],
    playerStoryOptions: [],
    storyPages: [],

};



const startButton = document.querySelector('#game-start-button');

startButton.addEventListener('click',() => {
    console.log("start game");
    startGame();
})

// full screen fucntionality

const toggleFullScreen = document.querySelector('#game-start-button');
const fullGameWindow = document.querySelector('.game-tile');


    toggleFullScreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
        gameWindow.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    })


//Start game function********

function startGame() {
    
console.log("game running");
gameWindow.classList.remove("none");
gameWindow.classList.remove("hidden");
portrait.classList.add("none");
gameCanvas.start();
gameControlButtons();


gameWindow.style.background = "black";
fullGameWindow.style.background = "black";




gameSpeed = 2;
gameDelta = 50;
gameDeltaTimer = 1;
deltaTime = gameDeltaTimer;
var interval = setInterval(updateCanvas, gameDelta);

// background = new gameBackground();


playerLives = 0;
givePlayerLives();

 player = new renderCrow();
 playerCrow = [];
 playerCrow.push(player);
 playerMoves = [];
 
 

enemies = [];
enemyTimer = 0;
enemyInterval = 500;
obstacle = new generateEnemy(gameSpeed);


enemiesPastS = [];
activeObstacles = [];

}


function addEnemies (gameSpeed, enemyInterval, enemyTimer) {

    console.log(Math.random());

    var enums = Math.random();
    // if (enums > 0.5) {
    //     enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
    // } 

    // if (enums > 0.6) {
    //     enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
    // } else {
    //     enemies.push(new renderGroundEnemy(gameSpeed, enemyInterval, enemyTimer));
    // }

        if (enums > 0.5) {
        enemies.push(new renderGroundEnemy(gameSpeed, enemyInterval, enemyTimer));
    } else if (enums < 0.3 ) {
        enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
    } else {
        enemies.push(new renderFlyingEnemy(gameSpeed, enemyInterval, enemyTimer));
    }

}


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

        }   
            return enemiesPast;
}

        scoreBoxImage = document.getElementById("game-score");
        scoreBoxImage.classList.remove("none");


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


    function updateCanvas() {

         ctx = gameCanvas.context;
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // let playerScore = 0;

        //  gameSp = (Math.floor(playerScore/10) * 0.5) + 3;



        gameSpeed = 3;
        // console.log(gameSp);



        // while (playerScore < 10 ){
        //     gameSpeed = 5;
        // }
        // while(playerScore > 10) {
        //     gameSpeed = 
            
        //     Math.floor(playerScore/10) * 0.5
        // }
        // while (score() >= 10 ){
        //     gameSpeed += 0.5;
        // }

        

        // gameTime();

        if (enemyTimer >= enemyInterval) {
            addEnemies(gameSpeed, enemyInterval, enemyTimer);
            enemyTimer = 0;
           
         }
         else {
            enemyTimer += gameDeltaTimer;
            // console.log(enemyTimer);
        }
        
        obstacle.draw();

        // background.layersMovement();
        // background.draw();

        player.draw();
        player.makeFall();
        player.stopPlayer();
        player.windowWall();

        this.enemies.forEach(generateEnemy => {
                generateEnemy.draw(ctx);
            })

        this.enemies.forEach(generateEnemy => {
            generateEnemy.attackSpeed(deltaTime);
          })  
       
        // crowPlayerHealth(playerLives);

        if (playerLives > 0 ) {
        detectCollision(); 
        playerScore = score();
        console.log(playerScore);
        } else {
            console.log("yah dead");
        }
        endGame;


    }



    var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function ctx() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context =this.canvas.getContext("2d");
        gameStatusBar.insertAdjacentElement("afterend", this.canvas);
 
     
        console.log("game canvas function")
    }
    }

function gameControlButtons() {


        gameStatusBar.classList.remove("none");
        gameStatusBar.classList.remove("hidden");
        gameStatusBar.style.width = canvasWidth; 



       document.getElementById("up-button").classList.remove("none");
       document.getElementById("down-button").classList.remove("none");
       playerControlPad.classList.remove("hidden");
       playerMovementControls.style.height = 650;
    }



    //create player variable 
// var player = 0;
// player.x = 0;
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

        // //create a makeFall function
        this.makeFall = function() {
            this.y += fallSpeed;
            fallSpeed  += 0.0005;
            //call the stopPlayer functon
            this.stopPlayer();    
        }

        // //create a stop player function
        this.stopPlayer = function() {
            var ground = canvasHeight - this.height - 10;
            if (this.y >= ground -10) {
                fallSpeed = 0.0;
                playerPositionY = ground;
            }
        }

        // this.crowUp() = function() {
                
        //     this.y -= CROW_FLAPS_PER_TICK;
        //         console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);

        // }


        window.addEventListener('keydown', event => {
              if (event.code == "ArrowUp") {
                this.y -= CROW_FLAPS_PER_TICK;
                 //console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
                 playerMoves.push("upArrow")
                
              }
        })

                window.addEventListener('keydown', event => {
              if (event.code == "ArrowDown") {
                this.y += CROW_FLAPS_PER_TICK;
                // console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
                playerMoves.push("downArrow")
              }
        }) 

        playerUpButton.addEventListener('click', event => {
            this.y -= CROW_FLAPS_PER_TICK + screen_button_factor;
            playerMoves.push("upButton")
        })
        
        playerDownButton.addEventListener('click', event => {
            this.y += CROW_FLAPS_PER_TICK + screen_button_factor;
            playerMoves.push("downButton")
        })
          
    }


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
            // ltx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    function gameBackground() { 
        //renders the Background in the game canvas context, from an array made of layers of background Layer
     
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

        let enemyGround = new renderGroundEnemy(this.gameSpeed);
        let enemyFlying = new renderFlyingEnemy(this.gameSpeed);
        let enemyAir = new renderAirEnemy(this.gameSpeed);


    this.attackSpeed = function (deltaTime) {
        // this.x = renderGroundEnemy.attackSpeed()
        // if (this.obstacleMoveSpeed > 1 && this.x > (this.canvasWidth/2)) {
        //     //approach slow factor
        //     this.obstacleMoveSpeed -= 0.005;
        // }
        this.x += this.obstacleMoveSpeed;
    
    }    
    this.draw = function () {
        // console.log("draw enemy");
        ctx = gameCanvas.context;
        // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    }

    
    // *Function to render the obstacles contains the: image, speed,
    // and continue.
    function renderGroundEnemy(gameSpeed, image) {
        this.obstacleMoveSpeed = gameSpeed;
        this.width = 67;
        this.height = 150;
        this.x = -this.width +10;
        this.y = canvasHeight - this.height;
        this.maxFrame = 5;
        this.image = document.getElementById('groundObstacle');;

    this.attackSpeed= function () {
        // if (this.obstacleMoveSpeed > 1 && this.x > (canvasWidth/2)) {
        //     //approach slow factor
        //     this.obstacleMoveSpeed -= 0.005;
        // }
        this.x += this.obstacleMoveSpeed;  
        return this.x;
    }

        this.draw = function () {
        otx = gameCanvas.context;
        otx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }        
    } 

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
        this.x += this.obstacleMoveSpeed;
    }
    this.draw = function () {
        ostx = gameCanvas.context;
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
        this.image = document.getElementById('airObstacle');

    this.attackSpeed= function () {
        this.x += this.obstacleMoveSpeed;
    }

    this.draw = function () {
        ostx = gameCanvas.context;
        ostx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }  
    }
    
//end  of renderObject function





//detect collision functions and effects

//detect collision when the obstacle and the player interact
//in the same virtual space

function detectCollision() {

    var playerLeft = player.x + 10;
    // console.log(player.x);
    var playerRight = player.x + player.width;
    var playerTop = player.y;
    var playerBottom = player.y + player.height;
    
    // console.log(playerBottom);
    //   console.log(playerTop);
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

        // console.log(playerLeft);
        // console.log("collision");
        // console.log(playerLives);
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

    // console.log(playerLives);

    crowPlayerHealth(playerLives);
    
    if (playerLives <= 0 ) {
        console.log("end of game");
        endOfGame();
        // break;

    }

    
   
}









const gameTile = document.querySelector('.game-tile');
const gameGrid = document.querySelector('.game-grid');

// Story game 

{
const introPage = document.getElementById("intro");

    introPage.addEventListener('click',() => {
        console.log("Intro button Pressed")
        gameTile.classList.add("none");
        gameGrid.classList.remove("none");
    })



const storyPages = document.getElementsByClassName("box");

function pgs () {
    const storyPages = document.getElementsByClassName("box");

    for (let i=0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
    }


}



function startStory() {

    document.getElementById("title-screen-game-name").classList.remove("none")
    document.getElementById("title-screen-game-name").classList.add("fade-in");

setTimeout(function() {

    

        const storyPages = document.getElementsByClassName("box");

        const startPanel = document.getElementById("start-panel");

        startPanel.classList.remove("button-top-panel");
        startPanel.classList.add("button-top-panel-reading");


    for (let i=0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
    }

    next.classList.remove("none");
    previous.classList.remove("none");
    boxIndex = 0;
    storyPages[boxIndex].classList.remove("none");
    pageNumber = 1;


    class gameX {
    constructor(pageNumber, pageIndex){
    this.pageNumber = pageNumber;
    this.pageIndex = pageIndex;
    }
    
    }

    },10);
}


//* Next Page Function 
//Turns to the next page in the story
function nextPage(gameX) {
    
    storyPages[boxIndex].classList.add("none");
    boxIndex += 1
    storyPages[boxIndex].classList.remove("none");
    pageNumber += 1;

    if (pageNumber < 8 ) {
        console.log("continue...");

    } else if (pageNumber = 8 ) {
        displayStartPlay();
    }
}



//* Previous Page Function 
//Turns to the previous page in the story
function previousPage() {

           if (pageNumber <= 1 ) {
        console.log("You aren't a time traveller, yet... you keep pressing that button.");

    } else {

          storyPages[boxIndex].classList.add("none");
    boxIndex -= 1
    storyPages[boxIndex].classList.remove("none");
    pageNumber -= 1;
        
    } 
    
}

//* Displays the "Start Action Video Game" button
function displayStartPlay() {

    next.classList.add("none");
    startFlyGamebtn.classList.remove("none");
    startFlyGameATag = document.getElementById("fly-page").classList.remove("none");
}
   


function startFlyGame() {

    // Hide Story Game Panels
    for (let i=0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
    }

    storybuttonArray.forEach(button => {
    button.classList.add("none");
    });

    gameGrid.classList.add("none");
    gameTile.classList.remove("none");
    // document.getElementsByTagName('nav').classList.add("none");
    
}


function skipStory() {
    startFlyGame();
} 


startStorybtn.addEventListener('click', () => {
    console.log("start story button pressed");
    startStory();
})

previous.addEventListener('click', () => {
    console.log("previous button pressed");
    previousPage()
})

next.addEventListener('click', () => {
    console.log("next button pressed");
    nextPage();
})

startFlyGamebtn.addEventListener('click',() => {
    console.log("Start Fly Game Button Pressed. Begin!");
    startFlyGame();
    
})

skipStorybtn.addEventListener('click',() => {
    console.log("Skip Story button pressed");
     skipStory();
})

}



// End Game


function endOfGame() {
    // updateCanvas.stop;
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
