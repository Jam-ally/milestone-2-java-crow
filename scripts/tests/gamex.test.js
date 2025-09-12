/**
 * @jest-environment jsdom
 */

const{ game, newGame, showScore}  = require("../game2");




beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
    
});


describe("game object contains correct keys", () =>{
    test("score key exists", () => {
        expect("score" in game).toBe(true);        
    });
        test("currentPage key exists", () => {
        expect("pageNumber" in game).toBe(true);        
    });
        test("Previous button exists", () => {
        expect(game.storyButtons).toEqual(["previous-button","next-button","skip-button"]) ;     
    });
});

describe("game object contains correct keys", () => {
    beforeAll(() => {
        game.score = 42;
        game.storyButtons = ["next-button","previous-button"];
        
        document.getElementById("score").textContent = "6";
        

        newGame();
        // showScore();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
        test("should clear story board array", () => {
        expect(game.playerStoryOptions.length).toBe(0);
    });
        test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").textContent).toBe("0");
    });

    
});



// describe("game object contains correct keys", () => {

//     test("player key exists", () => {
//         expect("player" in game).toBe(true);
//     });
//     test("The game starts", () => {
//         expect("startGame" in game).toBe(true);     
//     });
//     test("The background Moves", () => {
//         expect("moveBackground" in game).toBe(true);     
//     });
//     test("The crow exists", () => {
//         expect("renderCrow" in game).toBe(true);     
//     });
//     test("The crow moves", () => {
//         expect("moveCrow" in game).toBe(true);     
//     });
//     test("The game obstacles exist", () => {
//         expect("renderObstacle" in game).toBe(true);     
//     });
//     test("The score key exists", () => {
//         expect("score" in game).toBe(true);     
//     });
// });

//     describe("startGame works correctly", () => {

//         beforeAll(() => {
//             game.score = 42;
//             document.getElementById("game-score").innerText = "42";
//             startGame();
//         });


//         test("The Score is set to zero", () => {
//             expect(game.score).toEqual(0);
//         });

//         test("should display zero for the element with class score", () => {
//             expect(document.getElementById("game-score").innerText).toEqual(0);
//         });

//         test("the background moves", () => {
//             expect(document.getElementById)
//         });

//         // test("crow bird should render in position", () => {
//         //     expect(renderCrow).toHaveReturned();
//         // });
//     });



