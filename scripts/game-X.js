
window.addEventListener('DOMContentLoaded', e => {
    console.log("DOM Content fully Loaded and parsed");
    
      
})

const startStorybtn = document.querySelector('#start-story-button');
const previous = document.querySelector('#previous-button');
const next = document.querySelector('#next-button');
const startFlyGamebtn = document.querySelector('#start-flygame-button');
const skipStorybtn = document.querySelector('#skip-story-button');

storybuttonArray = [startStorybtn, previous , next, startFlyGamebtn, skipStorybtn ];





let game = {
    score:0,
    pageNumber: 0 ,
    storyButtons: ["previous-button","next-button","skip-button"],
    playerStoryOptions: [],
    storyPages: [],
    // nextPage: nextPage(),
    // previousPage: previousPage(),

};


{

const startButton = document.querySelector('#game-start-button');



startButton.addEventListener('click',() => {
    console.log("start game")
    startGame();
})

function startGame() {
    
 console.log("game running")

}

}


const gameTile = document.querySelector('.game-tile');


const gameGrid = document.querySelector('.game-grid');



// Story game 

const introPage = document.getElementById("intro");

    introPage.addEventListener('click',() => {
        console.log("Intro button Pressed")
        gameTile.classList.add("none");
        gameGrid.classList.remove("none");
    })

{

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

