
window.addEventListener('DOMContentLoaded', e => {
    console.log("DOM Content fully Loaded and parsed");
    
      
})

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




let game = {
    canvasHeight,
    canvasWidth,
    score: 0,
    pageNumber: 0 ,
    storyButtons: ["previous-button","next-button","skip-button"],
    playerStoryOptions: [],
    storyPages: [],

};


{
const startButton = document.querySelector('#game-start-button');

startButton.addEventListener('click',() => {
    console.log("start game");
    startGame();
})


//Start game function********

function startGame() {
    
console.log("game running");
gameWindow.classList.remove("none");
gameWindow.classList.remove("hidden");
gameCanvas.start();
gameControlButtons();

gameDelta = 50;
gameDeltaTimer = 1;
deltaTime = gameDeltaTimer;
var interval = setInterval(updateCanvas, gameDelta);

 player = new renderCrow();
 playerCrow = [];
 playerCrow.push(player);
 playerMoves = [];

 background = new gameBackground();


}



    function updateCanvas() {

         ctx = gameCanvas.context;
         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        background.layersMovement();
        background.draw();

        player.draw();
        player.makeFall();
        player.stopPlayer();
        player.windowWall();
       

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


