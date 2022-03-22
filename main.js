// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 4;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    if(computerPaddleYPosition > 400){ //bottom boundary for paddle
        computerPaddleYVelocity = computerPaddleYVelocity -4;
    }
    if(computerPaddleYPosition <=0 ){ //top boundary
        computerPaddleYVelocity = computerPaddleYVelocity +4;
    }
}

// Call the update() function every 35ms
setInterval(update, 35);


//===================My Code======================
let ball = document.querySelector(".ball");




//getting the ball to move (Y-axis):
let ballMoveTop = 250;
let ballVelocity = 8;

ball.style.left = '300px';
ball.style.top = '250px';

//getting the ball to move horizontally (X-axis): ============
let ballMoveSide = 50;
let ballVelocityX = 5;

setInterval(function () {
    ballMoveTop = ballMoveTop - ballVelocity;
    ball.style.top = ballMoveTop + 'px';

    ballVelocity += 0.05;

    

    //horizontal

    ballMoveSide= ballMoveSide - ballVelocityX;
    ball.style.left = ballMoveSide + 'px';

    


    
    ballVelocityX -= .05;
    
    //paddle collision
   
    

    //player paddle collision
    
    //=========boundaries============
    if(ballMoveTop >= 480){ //if ball hits bottom of page, bounce back in 
        ballVelocity = ballVelocity * -1;
        ballMoveTop = 479;
    }
    if(ballMoveSide >= 680){  //rightside boundary
        ballVelocityX = ballVelocityX * -1;
        ballMoveSide = 679;
    }
    if(ballMoveSide <=0){ //leftside boundary
        ballVelocityX = ballVelocityX * -1;
        ballMoveSide = 1;
        
       
    }
    if(ballMoveTop <= 0){
        ballVelocity = ballVelocity * -1;
    }

}, 80);

//trying to make player paddle move with keys

//getting player paddle moving
let playerPaddle = document.querySelector(".player-paddle")
let playerPaddleMove =0;
let playerPaddleVelocity = 10;




window.addEventListener("keydown", function (e) {
    console.log(e);
        if(e.code === 'ArrowDown'){
    playerPaddleMove = playerPaddleMove + playerPaddleVelocity;
    //playerPaddleVelocity = playerPaddleVelocity - .5;
    playerPaddle.style.top = `${playerPaddleMove}px`;
    console.log("testing down arrow");
        }
        else if(e.code === 'ArrowUp'){
            playerPaddleMove = playerPaddleMove - playerPaddleVelocity;
            //playerPaddleVelocity = playerPaddleVelocity + 4;
            playerPaddle.style.top = `${playerPaddleMove}px`;
            console.log("testing up arrow");
        }
  })


