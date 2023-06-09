$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls    
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
    


    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
      createPlatform(120, 700, 100, 50)
      createPlatform(300, 640, 200, 100);
      createPlatform(600, 550, 200, 190);
      createPlatform(900, 460, 200, 290);
      createPlatform(1200, 370, 200, 380);
      createPlatform(0, 250, 1120, 10)


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 680, 490, 0.1, 1);
    createCollectable("grace", 1280, 310, 0.1, 1);
    createCollectable("database", 680, 190, 0.1, 1);
    createCollectable("steve", 142, 190, 0.1, 1);
    



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 200, 500, 10, 60);
    createCannon("bottom", 490, 500, 10, 60);
    createCannon("bottom", 790, 500, 10, 60);
    createCannon("bottom", 1090, 500, 10, 60);
    createCannon("left", 103, 4000, 60, 10);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
