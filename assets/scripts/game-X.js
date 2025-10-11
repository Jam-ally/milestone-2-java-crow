window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Content fully Loaded and parsed");

  let gameRunning = false;

  // Storyboard
  const startStorybtn = document.querySelector("#start-story-button");
  const previous = document.querySelector("#previous-button");
  const next = document.querySelector("#next-button");
  const startFlyGamebtn = document.querySelector("#start-flygame-button");
  const skipStorybtn = document.querySelector("#skip-story-button");

  storybuttonArray = [
    startStorybtn,
    previous,
    next,
    startFlyGamebtn,
    skipStorybtn,
  ];

  // End Screen
  const butto = document.querySelector(".close-game-over-btn");
  const gameOverBox = document.querySelector(".game-over");
  const overlay = document.querySelector(".overlay");
  const endGameScreen = document.querySelector(".end-game-screen");

  // game related
  const gameTile = document.querySelector(".game-tile");
  const gameGrid = document.querySelector(".game-grid");
  const gameWindow = document.getElementById("game-window");
  const startButton = document.querySelector("#game-start-button");

  var gameStatusBar = document.getElementById("game-status-bar");
  const playerUpButton = document.getElementById("player-up-button");
  const playerDownButton = document.getElementById("player-down-button");
  const playerControlPadLeft = document.querySelector("#player-controls-left");
  const playerMovementControls = document.getElementById(
    "player-controls-left"
  );
  const portrait = document.getElementById("portrait");

  const portraitView = window.matchMedia("(orientation:portrait)").matches;

  var canvasWidth = 650;
  var canvasHeight = 500;
  var flightMinHeight = canvasHeight - 80;
  let playerLives = 0;
  let gameLevel = 0;

  let game = {
    canvasHeight,
    canvasWidth,
    score: 0,
    pageNumber: 0,
    storyButtons: ["previous-button", "next-button", "skip-button"],
    playerStoryOptions: [],
    storyPages: [],
  };

  startButton.addEventListener("click", () => {
    setTimeout(function () {
      console.log("start game");
      playerLives = 2;

      startGame();
    }, 2000);
  });

  // full screen fucntionality

  const toggleFullScreen = document.querySelector("#game-start-button");
  const fullGameWindow = document.querySelector(".game-tile");
  const gameView = document.querySelector("#game-frame");

  toggleFullScreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      gameWindow.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

  //Start game function********

  function startGame() {
    console.log("game running");
    gameWindow.classList.remove("none");
    gameWindow.classList.remove("hidden");
    gameView.classList.remove("none");
    portrait.classList.add("none");
    gameCanvas.start();
    gameControlButtons();

    gameWindow.style.background = "black";
    fullGameWindow.style.background = "black";

    gameRunning = true;
    gameLevel = 1;

    gameSpeed = 3;
    gameDelta = 40;
    gameDeltaTimer = 1;
    deltaTime = gameDeltaTimer;
    var interval = setInterval(updateCanvas, gameDelta);

    background = new gameBackground();

    playerLives = 0;
    givePlayerLives();

    player = new renderCrow();
    playerCrow = [];
    playerCrow.push(player);
    playerMoves = [];

    enemies = [];
    enemyTimer = 300;
    enemyInterval = 400;
    obstacle = new generateEnemy(gameSpeed);

    enemiesPast = 0;
    enemiesPastS = [];
    activeObstacles = [];
  }

  function addEnemies(gameSpeed, enemyInterval, enemyTimer) {
    var enums = Math.random();
    let lvlEnemy = gameLevel;

    if (lvlEnemy == 1) {
      if (enums > 0.5) {
        enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
      }
    } else if (lvlEnemy == 2) {
      if (enums > 0.6) {
        enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
      } else {
        enemies.push(
          new renderGroundEnemy(gameSpeed, enemyInterval, enemyTimer)
        );
      }
    } else {
      if (enums > 0.5) {
        enemies.push(
          new renderGroundEnemy(gameSpeed, enemyInterval, enemyTimer)
        );
      } else if (enums < 0.3) {
        enemies.push(new renderAirEnemy(gameSpeed, enemyInterval, enemyTimer));
      } else {
        enemies.push(
          new renderFlyingEnemy(gameSpeed, enemyInterval, enemyTimer)
        );
      }
    }
  }

  function score() {
    enemiesPastS = [];
    this.enemies.forEach((generateEnemy) => {
      if (generateEnemy.x > canvasWidth) {
        enemiesPastS.push(generateEnemy);
      }
    });
    enemiesPast = enemiesPastS.length;
    document.getElementById("game-score").textContent = parseInt(enemiesPast);

    this.draw = function () {};
    return enemiesPast;
  }

  function givePlayerLives() {
    playerLives += 2;
    console.log("player lives:", playerLives);
  }

  function crowPlayerHealth(playerLives) {
    playerLives = playerLives;
    healthBar = document.getElementById("player-lives");

    if (playerLives == 2) {
      playerHealth = 2;
      healthBar.textContent = "<3 <3";
    } else if (playerLives == 1) {
      playerHealth = 1;
      healthBar.textContent = "<3 0";
    } else if (playerLives == 0) {
      playerHealth = 0;
      healthBar.textContent = "0 0";
    }
  }

  function updateCanvas() {
    ctx = gameCanvas.context;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    gameSpeed = 3;

    if (enemiesPast >= 10) {
      gameLevel = 2;
    } else if (enemiesPast >= 20) {
      gameLevel = 3;
    }

    if (enemyTimer >= enemyInterval) {
      addEnemies(gameSpeed, enemyInterval, enemyTimer);
      enemyTimer = 300;
    } else {
      enemyTimer += gameDeltaTimer;
    }

    obstacle.draw();

    background.layersMovement();
    background.draw();

    player.draw();
    player.makeFall();
    player.stopPlayer();
    player.windowWall();

    this.enemies.forEach((generateEnemy) => {
      generateEnemy.draw(ctx);
    });

    this.enemies.forEach((generateEnemy) => {
      generateEnemy.attackSpeed(deltaTime);
    });

    crowPlayerHealth(playerLives);

    if (playerLives > 0 && gameRunning == true) {
      detectCollision(gameRunning);

      playerScore = score();
    } else {
      console.log("yah dead");
      // endGame;
    }
  }

  var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function ctx() {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
      this.context = this.canvas.getContext("2d");
      gameStatusBar.insertAdjacentElement("afterend", this.canvas);
    },
  };

  function gameControlButtons() {
    gameStatusBar.classList.remove("none");
    gameStatusBar.classList.remove("hidden");
    gameStatusBar.style.width = canvasWidth;

    document.getElementById("up-button").classList.remove("none");
    document.getElementById("down-button").classList.remove("none");
    playerControlPadLeft.classList.remove("hidden");
    playerMovementControls.style.height = 650;
  }

  //*Function to create the player
  function renderCrow() {
    this.width = 70;
    this.height = 70;
    this.x = canvasWidth - this.width - 10;
    this.y = playerPositionY;
    this.image = document.getElementById("player1");

    //  Create a draw function
    this.draw = function () {
      ctx = gameCanvas.context;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    this.windowWall = function () {
      if (this.y > flightMinHeight) {
        this.y = flightMinHeight;
        console.log("sqwaak");
        gameCanvas.canvas.style.border = "red solid 5px";
      } else if (this.y < -16) {
        this.y = -16;
        console.log("aaahhcacaca");
      }
    };

    // //create a makeFall function
    this.makeFall = function () {
      this.y += fallSpeed;
      fallSpeed += 0.0005;
      //call the stopPlayer functon
      this.stopPlayer();
    };

    // //create a stop player function
    this.stopPlayer = function () {
      var ground = canvasHeight - this.height - 10;
      if (this.y >= ground - 10) {
        fallSpeed = 0.0;
        playerPositionY = ground;
      }
    };

    window.addEventListener("keydown", (event) => {
      if (event.code == "ArrowUp") {
        this.y -= CROW_FLAPS_PER_TICK;
        //console.log(`Crow conceptually moved up ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
        playerMoves.push("upArrow");
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.code == "ArrowDown") {
        this.y += CROW_FLAPS_PER_TICK;
        // console.log(`Crow conceptually moved down ${CROW_FLAPS_PER_TICK} px. Now at ${this.y}.`);
        playerMoves.push("downArrow");
      }
    });

    playerUpButton.addEventListener("click", (event) => {
      this.y -= CROW_FLAPS_PER_TICK + screen_button_factor;
      playerMoves.push("upButton");
    });

    playerDownButton.addEventListener("click", (event) => {
      this.y += CROW_FLAPS_PER_TICK + screen_button_factor;
      playerMoves.push("downButton");
    });
  }
  function backgroundLayer(gameSpeed, width, height, speedModifier, image) {
    //assumes that the width and height of all images match.
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.scrollSpeed = gameSpeed;

    this.x = canvasWidth - this.width;
    this.y = 0;

    this.layerMovement = function () {
      if (this.x > canvasWidth - 960) {
        this.x = canvasWidth - this.width;
      } else {
        this.x += this.scrollSpeed;
      }
    };

    this.draw = function () {
      ltx = gameCanvas.context;

      ltx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }

  function gameBackground() {
    //renders the Background in the game canvas context, from an array made of layers of background Layer

    this.width = 2535;
    this.height = 500;
    this.layersImage = document.getElementById(`layer1`);
    this.layer1 = new backgroundLayer(
      2,
      this.width,
      this.height,
      1,
      this.layersImage
    );
    let layer1 = this.layer1;
    this.backgroundLayers = [layer1];

    this.layersMovement = function () {
      // background layermovement
      this.backgroundLayers.forEach((backgroundLayer) => {
        backgroundLayer.layerMovement();
      });
    };

    //  Create a draw function
    this.draw = function () {
      // "background draw function"
      this.backgroundLayers.forEach((backgroundLayer) => {
        backgroundLayer.draw();
      });
    };
  }

  function generateEnemy(gameSpeed, enemyInterval, enemyTimer) {
    canvasHeight = canvasHeight;
    this.height = this.height;
    this.gameSpeed = gameSpeed;
    this.obstacleMoveSpeed = gameSpeed;
    this.enemyInterval = enemyInterval;
    this.enemyTimer = enemyTimer;
    this.x = 5;
    this.fps = 20;
    this.frameinterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.OffScreenEnemy = false;

    let enemyGround = new renderGroundEnemy(0);
    let enemyFlying = new renderFlyingEnemy(0);
    let enemyAir = new renderAirEnemy(0);

    this.attackSpeed = function (deltaTime) {
      this.x += this.obstacleMoveSpeed;
    };
    this.draw = function () {
      ctx = gameCanvas.context;
    };
  }

  // *Function to render the obstacles contains the: image, speed,
  // and continue.
  function renderGroundEnemy(gameSpeed, image) {
    this.obstacleMoveSpeed = gameSpeed;
    this.width = 67;
    this.height = 150;
    this.x = -this.width + 10;
    this.y = canvasHeight - this.height;
    this.maxFrame = 5;
    this.image = document.getElementById("groundObstacle");

    this.attackSpeed = function () {
      this.x += this.obstacleMoveSpeed;
      return this.x;
    };

    this.draw = function () {
      otx = gameCanvas.context;
      otx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }

  function renderFlyingEnemy(gameSpeed) {
    this.width = 111;
    this.height = 100;
    this.x = -this.width + 50;
    this.y = 30;
    this.obstacleMoveSpeed = gameSpeed;

    this.maxFrame = 5;
    this.image = document.getElementById("flyingObstacle");
    i = 0;

    this.attackSpeed = function () {
      this.x += this.obstacleMoveSpeed;
    };
    this.draw = function () {
      ostx = gameCanvas.context;
      ostx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }

  //* Air enemy object function
  function renderAirEnemy(gameSpeed) {
    this.width = 245;
    this.height = 150;
    this.x = -this.width + 50;
    this.y = 150;
    this.obstacleMoveSpeed = gameSpeed;
    this.image = document.getElementById("airObstacle");

    this.attackSpeed = function () {
      this.x += this.obstacleMoveSpeed;
    };

    this.draw = function () {
      ostx = gameCanvas.context;
      ostx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }

  //end  of renderObject function

  //detect collision functions and effects

  //detect collision when the obstacle and the player interact
  //in the same virtual space

  function detectCollision(gameRunning) {
    let collisionDetect = gameRunning;

    if ((collisionDetect = false)) {
      return false;
    } else {
      var playerLeft = player.x + 10;
      // console.log(player.x);
      var playerRight = player.x + player.width;
      var playerTop = player.y;
      var playerBottom = player.y + player.height;

      activeObstacles = [];

      enemies.forEach((generateEnemy) => {
        if (generateEnemy.x > 0 && generateEnemy.x < canvasWidth) {
          activeObstacles.push(generateEnemy);
        }

        activeObstacles.forEach((enemy) => {
          obstacleRight = enemy.x + enemy.width;
          obstacleLeft = enemy.x;
          obstacleTop = enemy.y;
          obstacleBottom = enemy.y + enemy.height;
        });
      });

      var playerBottom = player.y + player.height;

      if (playerLives > 0) {
        if (
          // x, y 0,0 is the top left corner
          obstacleRight > playerLeft &&
          obstacleLeft < playerRight &&
          obstacleTop < playerBottom &&
          obstacleBottom > playerTop
        ) {
          playerLives -= 1;
          alert("Oh bags! [you hit an obstacle]");
          activeObstacles = [];

          //** remove it from the array */
          setTimeout(function () {
            activeObstacles.splice();
          }, 2000);
        } else {
          // console.log("safe");
        }
      } else {
      }

      crowPlayerHealth(playerLives);

      if (playerLives <= 0) {
        console.log("end of game");
        gameRunning = false;
        endOfGame();
      }
    }
  }

  // Story game

  {
    const introPage = document.getElementById("intro");

    introPage.addEventListener("click", () => {
      console.log("Intro button Pressed");
      gameTile.classList.add("none");
      gameGrid.classList.remove("none");

      if (!document.fullscreenElement) {
        gameGrid.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    });

    const storyPages = document.getElementsByClassName("box");

    function pgs() {
      const storyPages = document.getElementsByClassName("box");

      for (let i = 0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
      }
    }

    // opennig sequence for the story board
    function startStory() {
      document
        .getElementById("title-screen-game-name")
        .classList.remove("none");
      document
        .getElementById("title-screen-game-name")
        .classList.add("fade-in");

      setTimeout(function () {
        const storyPages = document.getElementsByClassName("box");

        const startPanel = document.getElementById("start-panel");

        startPanel.classList.remove("button-top-panel");
        startPanel.classList.add("button-top-panel-reading");

        for (let i = 0; i < storyPages.length; i++) {
          storyPages[i].classList.add("none");
        }

        next.classList.remove("none");
        previous.classList.remove("none");
        boxIndex = 0;
        storyPages[boxIndex].classList.remove("none");
        pageNumber = 1;

        class gameX {
          constructor(pageNumber, pageIndex) {
            this.pageNumber = pageNumber;
            this.pageIndex = pageIndex;
          }
        }
      }, 9000);
    }

    //* Next Page Function
    //Turns to the next page in the story
    function nextPage(gameX) {
      storyPages[boxIndex].classList.add("none");
      boxIndex += 1;
      storyPages[boxIndex].classList.remove("none");
      pageNumber += 1;

      if (pageNumber < 8) {
        console.log("continue...");
      } else if ((pageNumber = 8)) {
        displayStartPlay();
      }
    }

    //* Previous Page Function
    //Turns to the previous page in the story
    function previousPage() {
      if (pageNumber <= 1) {
        console.log(
          "You aren't a time traveller, yet... you keep pressing that button."
        );
      } else {
        storyPages[boxIndex].classList.add("none");
        boxIndex -= 1;
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
      for (let i = 0; i < storyPages.length; i++) {
        storyPages[i].classList.add("none");
      }

      storybuttonArray.forEach((button) => {
        button.classList.add("none");
      });

      gameGrid.classList.add("none");
      gameTile.classList.remove("none");

      if (!document.fullscreenElement) {
        gameWindow.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      startGame();
    }

    function skipStory() {
      startFlyGame();
    }

    // Event listeners for UX and stylistic purposes.
    startStorybtn.addEventListener("click", () => {
      console.log("start story button pressed");
      startStory();
    });

    previous.addEventListener("click", () => {
      console.log("previous button pressed");
      previousPage();
    });

    next.addEventListener("click", () => {
      console.log("next button pressed");
      nextPage();
    });

    startFlyGamebtn.addEventListener("click", () => {
      console.log("Start Fly Game Button Pressed. Begin!");
      startFlyGame();
    });

    skipStorybtn.addEventListener("click", () => {
      console.log("Skip Story button pressed");
      skipStory();
    });
  }

  scoreBoxImage = document.getElementById("game-score");
  scoreBoxImage.classList.remove("none");

  // End Game
  function endOfGame() {
    updateCanvas.stop;

    openGC();
  }
  //########################################

  function openGC() {
    gameOverBox.classList.remove("none");
    overlay.classList.remove("none");
    endGameScreen.classList.remove("none");

    gameOverBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
    endGameScreen.classList.remove("hidden");
  }

  function closeGC() {
    gameOverBox.classList.add("hidden");
    overlay.classList.add("hidden");
    endGameScreen.classList.add("hidden");
  }
  butto.addEventListener("click", closeGC);

  //create player variable
  var playerPositionY = canvasHeight / 2;
  //Add Gravity to the environment
  var fallSpeed = 0;
  //This flaps per tick is movement in the y direction
  let CROW_FLAPS_PER_TICK = 20;
  // Factor in the reduced read time of screen button
  let screen_button_factor = 10;
});
