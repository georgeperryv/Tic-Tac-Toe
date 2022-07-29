console.log('hello')


/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/



// function render(){

// }


//Below 1 will represent the player and 2 the computer turn and will change after a number has been added to an array
//a number will only be added to an array if that slot currently = 0
let turn = 1;
//Below will turn to either tie, win, or lose from the player perspective but will remain null until then
//Will return tie if all of the arrays are full, and win if any of the arrays have all 1s and lose if any
//of the arrays have all 2s
let winStatus = null;

//Not sure what to do with this player object yet
// let player {

// }


// function playerTurn (){
//     if 
// }


let topRow = [0,0,0];
let middleRow = [0,0,0];
let bottomRow = [0,0,0];
let leftColumn= [0,0,0];
let centerColumn = [0,0,0];
let rightColumn = [0,0,0];
let diagonalTopToBottom = [0,0,0];
let diagonalBottomToTop = [0,0,0];


// const buttonList = document.querySelectorAll('.game-button')


    // for (i=0; i<buttonList.length-1; i++){
    //     buttonList[i].addEventListener('click', function() {


const topLeftButton = document.getElementById('top-left');
    if (topRow[0]===0){
        topRow[0] = 1;
        leftColumn[0]=1;
        diagonalTopToBottom[0]=1;
        console.log(topRow);
    }
    else{
        console.log("This space is already taken, please try again");
    }


const topCenterButton = document.getElementById('top-center');
topCenterButton.addEventListener('click', function(){
    if (topRow[1]===0){
        topRow[1] = 1;
        centerColumn[0]=1;
        console.log(topRow);
    }
    else{
        console.log("This space is already taken, please try again");
    }
});


const topRightButton = document.getElementById('top-right');
topRightButton.addEventListener('click', function(){
        if (topRow[2]===0){
            topRow[2] = 1;
            rightColumn[0] = 1;
            diagonalBottomToTop[2] = 1;
            console.log(topRow);
        }
        else{
            console.log("This space is already taken, please try again");
        }
});


const middleLeftButton = document.getElementById('middle-left');
middleLeftButton.addEventListener('click', function(){
    if (middleRow[0]===0){
        middleRow[0] = 1;
        leftColumn[1] = 1;
        console.log(middleRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});


const middleCenterButton = document.getElementById('middle-center');
middleCenterButton.addEventListener('click', function(){
    if (middleRow[1]===0){
        middleRow[1] = 1;
        centerColumn[1] = 1;
        diagonalBottomToTop[1] = 1;
        diagonalTopToBottom[1] = 1;
        console.log(middleRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});



const middleRightButton = document.getElementById('middle-right');
middleRightButton.addEventListener('click', function(){
    if (middleRow[2]===0){
        middleRow[2] = 1;
        rightColumn[1] = 1;
        console.log(middleRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});

const bottomLeftButton = document.getElementById('bottom-left');
bottomLeftButton.addEventListener('click', function(){
    if (bottomRow[0]===0){
        bottomRow[0] = 1;
        leftColumn[2] = 1;
        diagonalBottomToTop[0] = 1;
        console.log(bottomRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});


const bottomCenterButton = document.getElementById('bottom-center');
bottomCenterButton.addEventListener('click', function(){
    if (bottomRow[1]===0){
        bottomRow[1] = 1;
        middleColumn[2] = 1;
        console.log(bottomRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});


const bottomRightButton = document.getElementById('bottom-right');
bottomRightButton.addEventListener('click', function(){
    if (bottomRow[2]===0){
        bottomRow[2] = 1;
        rightColumn[2] = 1;
        diagonalTopToBottom[2] = 1;
        console.log(bottomRow);
        }
    else{
        console.log("This space is already taken, please try again");
    }
});
               
//do a function where like if a button is clicked, check the array? 

// console.log(bottomRow);
// console.log(leftColumn);
// console.log(centerColumn);
// console.log(rightColumn);
// console.log(diagonalBottomToTop);
// console.log(diagonalTopToBottom);

            
            
         
    //some variable to determine if it's player 1 or computers turn)
        //basically do if turn equals 1, then you're going to add 1s to the arrays and if player turn is 2
        
    

    



// function addToArray (){
//     if (turn === 1 & winStatus === null){
//         if ()
//         topRow[0] = 1;
//         leftColumn[0]=1;
//         diagonalTopToBottom[0]=1;
//     }
// }


// eventListener();