'use strict';
//http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
// Create the canvas
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// Background image

let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "Resources/background.png";

let heroReady = false;
let heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "Resources/hero.png";

let monsterReady = false;
let monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "Resources/monster.png";

// Game objects
let hero = {
    speed: 3, // movement in pixels per second
    x: 0,
    y: 0
};

let monster = {
    x: 0,
    y: 0
};

let monstersCaught = 0;

// Handle keyboard controls
let keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
});

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
});

// Reset the game when the player catches a monster
let reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
let update = function () {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed;
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed;
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed;
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed;
    }

    if (hero.y < 0) {
        hero.y = 460;
    } else if (hero.y > 460) {
        hero.y = 10;
    }

    if (hero.x < 0) {
        hero.x = 500;
    } else if (hero.x > 510) {
        hero.x = 10;
    }
    // Are they touching?
    if (hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)) {

        ++monstersCaught;
        reset();
    }
};

// Draw everything
let render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Monsterrs caught: " + monstersCaught, 32, 32);
};

// The main game loop
let main = function () {
    update();
    render();

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame
    || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset();
main();