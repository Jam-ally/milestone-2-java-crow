// Plan in English:
// - User comes to game 
//     - Initially just start the game on page load
//     - Once we've figured things out, have a start button
// - Background moves from right to left
//     - (infinitely -- will figure out how to do this. In the beginning just have it be finite)
// - Obstacles show up at specific points
//     - Initially these are set points, eventually we'd wanna randomise where they are
// - When player collides with obstacle
//     - Initially game over i.e. no concept of lives
//     - Ideally subtract from total lives
// - When player collides with food add to food bank
//     - Add to food  
// - 


/*

     window (stuff about the page/window outside HTML e.g. history, window size, url, browser name)
        |
     document (the html element)
     /      \
 head        body

// The window object
window.addEventListener(..)

// <html>
document.addEventListener("DOMContentLoaded", startGame)

// <body>
document.body.addEventListener("click", startGame)

// <div id="game-area>
const gameAreaDiv = document.querySelector("#game-area")
gameAreaDiv.addEventListener("click", startGame)
 */

document.addEventListener("DOMContentLoaded", startGame)

function startGame() {
  console.log("Game is running")
  
  // 0. Render crow, background and obstacles

  // 1. Start moving the background
  moveBackground()
  
  // 2. Continuously check for the following:
  //    a. User pressed the up/down arrows, move the crow
  document.addEventListener("keydown", moveCrow);
  
  //    b. Obstacle hits
}

function moveBackground() {
  console.log("Started moving background.")
}

function moveCrow(event) {
  
  if (event.code == "ArrowUp") {
    moveCrowUp()
  }
  else if (event.code == "ArrowDown") {
    moveCrowDown()
  }
  else {
    // If they pressed anything else, don't do anything.
    // This else statement is unnecessary.
  }
}

let crowPositionY = 0
// Number of pixels to move crow up or down when user presses an arrow key.
// style for constants is ALL_CAPS snake case
const CROW_MOVE_AMOUNT_PER_TICK = 12
  
function moveCrowUp() {
  crowPositionY += CROW_MOVE_AMOUNT_PER_TICK
  renderCrow()
  console.log(`Crow conceptually moved up ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)
}

function moveCrowDown() {
  crowPositionY -= CROW_MOVE_AMOUNT_PER_TICK
  renderCrow()
  console.log(`Crow conceptually moved up ${CROW_MOVE_AMOUNT_PER_TICK} px. Now at ${crowPositionY}.`)
}

function renderCrow() {
  // Updates the crow icon/image's position to crowPositionY
  console.log("Rendering crow...")
}
//*************************** */


let game = {
    player: [],
    startGame: [],
    moveBackground: [],
    renderCrow: [],
    moveCrow: [],
    renderObstacles: [],
    score: [],
    showScore: [],


}


// start the game 

function startGame() {
    console.log("Game is running")
    game.score = 0;
    gameCanvas.start();
    player = new renderPlayer(30,30,10);
  
    // const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d');
    // let rectX = 0;
    // let rectW = 50;
    // let rectH = 30;

    // setTimeout(() => {
    //     drawRectangle()
    // }, 5);

    // showScore();
    // renderCrow();
}

var canvasWidth = 600;
var canvasHeight = 240;
var gameTile = document.getElementById("game-window");


var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context =this.canvas.getContext("2d");
        gameTile.insertAdjacentElement("beforeend", this.canvas);

    }
}

// Render crow background and obstacles 
// renderCrow()
// function

    let postionTest = "red";
    let stBTN = document.getElementById("start-button");

    function updateColour() {

        // document.getElementsByClassName("obstacles").style.backgroundColor = postionTest;
        document.getElementById("obstacles").classList.add("hidden");

    }

    // stBTN.addEventListener("click", updateColour) ;

function showScore() {
     document.getElementById("game-score").innerText = game.score;
}

function renderCrow() {
    console.log("Render Crow");
    let bird = document.getElementById("stone-piercer");
    let space = document.getElementById("bird-space");
    startGame();
    // space.innerHTML = bird.innerHTML

    // document.body.append(bird);

}



// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// let rectX = 0;
// let rectW = 50;
// let rectH = 30;


//     function drawRectangle() {
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.fillStyle ='blue';
//         ctx.fillRect(rextX,100,rectW,rectH);
//             rectX += 2
//             if (rectX < canvas.width) {
//             requestAnimationFrame(drawRectanle);
//         }

//     }
//************************************* */
// var player;
// var playerYPosition = 200;

//     function renderPlayer (width, height, x) {
//         this.Width = width;
//         this.Height = height;
//        this.x = x;
//        this.y = playerYPosition;

//        ctx = gameCanvas.context;
//        ctx.fillStyle = "green";
//        ctx.fillRect(this.x, this.y, this.width, this.height);
    

// }



function moveBackground() {
    console.log("Moving background");
}

module.exports = {game, startGame, showScore, renderCrow};






// // function startGame () {
    //begin screen movement 
    //generate obstacles
    // monitor for movement 
    //monitor for interactions with obstacles
    //count score 

// }



    // 0. Render the background and obstacles

    // 1. Start moving the background 

    // 2. Register events - Continously chceck for the following
    //        - User presses the up/down buttons 



    // obstacle hits  

    // Loop  frame - browser will tell you each time it redender

            // keydown  - unpressed to pressed down 
            // keyup // release
            // keypress

    // one keydown 
    // document.addEventListener("keydown", moveCrow);

    // function moveCrow(event) {
    //     console.log(`Key that was pressed: $(event.code)`)
    //     console.log.textContent +=  ``


// hard code the outer wall parameters


//cont crow_move_amount_per_tick


// python add an f

// *** document variables always use Camel code
// CONST  -- Place holder does not change during the lifecycle of the product



// function playerMovement (player) {

//  player active and visible 
// player movement - along the y -axis 
                // - along the x axis 
//     
// } *//
