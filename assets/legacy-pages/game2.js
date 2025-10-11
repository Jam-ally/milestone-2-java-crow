
window.addEventListener('DOMContentLoaded', e => {
    console.log("DOM Content fully Loaded and parsed");

     //  $('.title-screen > #title-screen-game-name').fadeIn();
   
    
})
// const {startPlay} = require("../game1");

// import {startPlay} from "./game1.js";



let game = {
    score:0,
    pageNumber: 0 ,
    storyButtons: ["previous-button","next-button","skip-button"],
    playerStoryOptions: [],
    storyPages: [],
    // nextPage: nextPage(),
    // previousPage: previousPage(),

    

};

const storyPages = document.getElementsByClassName("box");

function pgs () {
    const storyPages = document.getElementsByClassName("box");

    for (let i=0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
    }


}

// storyPages.id 

// game.storyPages.forEach(page => {
//     page = storyPages[pg];

// })



function startStory() {
    // $('h1').fadeout();
    //  $('.title-screen > #title-screen-game-name').fadeIn();

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

//* Displays the "Start Action Video Game" button
function displayStartPlay() {

    next.classList.add("none");
    startFlyGamebtn.classList.remove("none");
    document.getElementById("fly-page").classList.remove("none");
}


//* Previous Page Function 
//Turns to the next page in the story
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
   


// if(pageNumber < 8) {   
// }   else {
//     addStartButton();
// }



function startFlyGame() {

    // Hide Story Game Panels
    for (let i=0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
    }
    

    

    window.location.href="index.html";
    startPlay();
    // startGameFeedback();

    // document.querySelector('#start-game-feedback').textContent = "1";
    

  
}


function newGame() {
    
    game.playerStoryOptions = [];
    game.score = 0;
    showScore();
    
}




function showScore() {
    // let change = document.getElementById("score");
    //     change.innerText = 0;
    // document.getElementById("score").innerText = game.score;
}


const startStorybtn = document.querySelector('#start-story-button');
const previous = document.querySelector('#previous-button');
const next = document.querySelector('#next-button');
const startFlyGamebtn = document.querySelector('#start-flygame-button');

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


module.exports = { game, newGame, showScore, startFlyGame };
