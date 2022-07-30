


/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/



// function render(){

// }

//Below will turn to either tie, win, or lose from the player perspective but will remain null until then
//Will return tie if all of the arrays are full, and win if any of the arrays have all 1s and lose if any
//of the arrays have all 2s
let winStatus = null;

//Not sure what to do with this player object yet
// let player {

// }


//Global variables below

let topRow = [0,0,0]; //left to right
let middleRow = [0,0,0];
let bottomRow = [0,0,0]; 
let leftColumn= [0,0,0]; //top to bottom
let centerColumn = [0,0,0];
let rightColumn = [0,0,0];
let diagonalTopToBottom = [0,0,0]; //left to right + description for north south direction
let diagonalBottomToTop = [0,0,0];

let boardArray = [topRow, middleRow, bottomRow];

let firstArrayNum = 0;
let secondArrayNum = 0;
let nextCompMove = 0;


const topLeftButton = document.getElementById('top-left');
topLeftButton.addEventListener('click', function(){
    if (topRow[0]===0){
        topRow[0] = 1;
        leftColumn[0]=1;
        diagonalTopToBottom[0]=1;
        topLeftButton.textContent = 'X';
        topLeftButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
        }

        //before this I need to call a function that would update a global variable win status 

     //should update first and second arrayNum
       //Should still reconognize these input since they are global variables and therefore those values are being updated from the while looop
            //Now that we have our position for the computer, we can call the compAssignment function passing in these position values, which will update the arrays accordingly
            //eventually call the render function now that the arrays are updated 
    }
        
        //Now that we have our position for the computer, we can call the compAssignment function passing in these position values, which will update the arrays accordingly
        
        //eventually call the render function now that the arrays are updated 
    else{
        console.log("This space is already taken, please try again");
    }
});


const topCenterButton = document.getElementById('top-center');
topCenterButton.addEventListener('click', function(){
    if (topRow[1]===0){
        topRow[1] = 1;
        centerColumn[0]=1;
        topCenterButton.textContent = 'X';
        topCenterButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        } 
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
        topRightButton.textContent = 'X';
        topRightButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
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
        middleLeftButton.textContent = 'X';
        middleLeftButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
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
        middleCenterButton.textContent = 'X';
        middleCenterButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
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
        middleRightButton.textContent = 'X';
        middleRightButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
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
        bottomLeftButton.textContent = 'X';
        bottomLeftButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
    }
    else{
        console.log("This space is already taken, please try again");
    }
});


const bottomCenterButton = document.getElementById('bottom-center');
bottomCenterButton.addEventListener('click', function(){
    if (bottomRow[1]===0){
        bottomRow[1] = 1;
        centerColumn[2] = 1;
        bottomCenterButton.textContent = 'X';
        bottomCenterButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
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
        bottomRightButton.textContent = 'X';
        bottomRightButton.setAttribute('style', "font-size: 80px");
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            determineWinner();
        }
    }
    else{
        console.log("This space is already taken, please try again");
    }
});


//function render(){
    //if 
//}
               
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

function compPosition (){ //find the position we should add a 2 at by using randomly generated index numbers and checking if the values at those indicies are 0 (aka haven't been played yet)
        let numOfEmptySpaces = 0; 
        for (i = 0 ; i < boardArray.length; i++){
            for (x = 0; x < boardArray[i].length; x++){
                if (boardArray[i][x] === 0){ //if the actual values in boardArray === 0 (aka no one has played there yet), increment the number of empty spaces
                    numOfEmptySpaces ++;
                }
            }
        }
        if (numOfEmptySpaces > 0){   //use this number of empty spaces variable to make sure the computer is not trying to do this while loop forever with no empty spaces
            //This is needed because the user could click the button and add a 1 to the board array for the 9th square and then the computer would be trying to fill the 10th forever 
               firstArrayNum = Math.floor(Math.random()*3); //This should give me a random integer of either 0,1,or 2
               secondArrayNum = Math.floor(Math.random()*3);
               nextCompMove = boardArray[firstArrayNum][secondArrayNum]; //so in our boardArray which is basically just an array of the three rows, 
            //this is the value at the potential position of the computers move
    
            while (nextCompMove !== 0){  //while the value at the potential position is NOT 0, the computer will keep generating random integers for the positions
                //until it lands on a combo position where there would be a value of 0, meaning no one has played there yet
                firstArrayNum = Math.floor(Math.random()*3);
                secondArrayNum = Math.floor(Math.random()*3);
                nextCompMove = boardArray[firstArrayNum][secondArrayNum]; //I believe that changing this variable is enough for the while loop to keep running untill that is not true (aka is equal to 0)
            //eventually this should be 0 and we would have our position of where to put a 2 for the computer generated value and the while loop would end
            }
        }
        else {
            //change the win status to whoever won or tie and render 
        }
}

           


function compAssignment(rowPosition, columnPosition){
    //if winner is not null 
    if (rowPosition === 0 && columnPosition === 0){//these represent the position aka the top left, not the actual value in the array
        topRow[0] = 2;
        leftColumn[0] = 2;
        diagonalTopToBottom[0] = 2;
        topLeftButton.textContent = 'O';
        topLeftButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 0 && columnPosition === 1){
        topRow[1] = 2;
        centerColumn[0]=2;
        topCenterButton.textContent = 'O';
        topCenterButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 0 && columnPosition === 2){
        topRow[2] = 2;
        rightColumn[0] = 2;
        diagonalBottomToTop[2] = 2;
        topRightButton.textContent = 'O';
        topRightButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 1 && columnPosition ===0){
        middleRow[0] = 2;
        leftColumn[1] = 2;
        middleLeftButton.textContent = 'O';
        middleLeftButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 1 && columnPosition ===1){
        middleRow[1] = 2;
        centerColumn[1] = 2;
        diagonalBottomToTop[1] = 2;
        diagonalTopToBottom[1] = 2;
        middleCenterButton.textContent = 'O';
        middleCenterButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 1 && columnPosition ===2){
        middleRow[2] = 2;
        rightColumn[1] = 2;
        middleRightButton.textContent = 'O';
        middleRightButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 2 && columnPosition ===0){
        bottomRow[0] = 2;
        leftColumn[2] = 2;
        diagonalBottomToTop[0] = 2;
        bottomLeftButton.textContent = 'O';
        bottomLeftButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 2 && columnPosition ===1){
        bottomRow[1] = 2;
        centerColumn[2] = 2;
        bottomCenterButton.textContent = 'O';
        bottomCenterButton.setAttribute('style', "font-size: 80px");
    }
    if (rowPosition === 2 && columnPosition ===2){
        bottomRow[2] = 2;
        rightColumn[2] = 2;
        diagonalTopToBottom[2] = 2;
        bottomRightButton.textContent = 'O';
        bottomRightButton.setAttribute('style', "font-size: 80px");
    }
}

function determineWinner (){
    if (!topRow.includes(0)){
        if (!topRow.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!topRow.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!middleRow.includes(0)){
        if (!middleRow.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!middleRow.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!bottomRow.includes(0)){
        if (!bottomRow.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!bottomRow.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!leftColumn.includes(0)){
        if (!leftColumn.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!leftColumn.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!centerColumn.includes(0)){
        if (!centerColumn.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!centerColumn.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!rightColumn.includes(0)){
        if (!rightColumn.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!rightColumn.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
    if (!diagonalTopToBottom.includes(0)){
        if (!diagonalTopToBottom.includes(2)){
            winStatus = 1;
            console.log(diagonalTopToBottom);
            console.log("Contracts! You win!")
        }
        else if (!diagonalTopToBottom.includes(1)){
            console.log(diagonalTopToBottom);
            console.log("Bummer...the computer won :(")
        }
    }
    if (!diagonalBottomToTop.includes(0)){
        if (!diagonalBottomToTop.includes(2)){
            winStatus = 1;
            console.log("Contracts! You win!")
        }
        else if (!diagonalBottomToTop.includes(1)){
            console.log("Bummer...the computer won :(")
        }
    }
}

// let topRow = [0,0,0];
// let middleRow = [0,0,0];
// let bottomRow = [0,0,0];
// let leftColumn= [0,0,0];
// let centerColumn = [0,0,0];
// let rightColumn = [0,0,0];
// let diagonalTopToBottom = [0,0,0];
// let diagonalBottomToTop = [0,0,0];


//all of these functions should call render at the end so that last thing to happen is it does something to the screen? 