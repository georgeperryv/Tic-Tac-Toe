


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



//Global variables below

let winStatus = null;
let plays = 0;

let topRow = [0,0,0]; //left to right
let middleRow = [0,0,0];
let bottomRow = [0,0,0]; 
let leftColumn= [0,0,0]; //top to bottom
let centerColumn = [0,0,0];
let rightColumn = [0,0,0];
let diagonalTopToBottom = [0,0,0]; //left to right + description for north south direction
let diagonalBottomToTop = [0,0,0];

let boardArray = [topRow, middleRow, bottomRow];
let totalWinningCombos = [topRow, middleRow, bottomRow, leftColumn, centerColumn, rightColumn, diagonalTopToBottom, diagonalBottomToTop];

let firstArrayNum = 0;
let secondArrayNum = 0;
let nextCompMove = 0;







const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', function(){
    winStatus = null;
    plays = 0;
    
    topRow = [0,0,0]; 
    middleRow = [0,0,0];
    bottomRow = [0,0,0]; 
    leftColumn= [0,0,0]; 
    centerColumn = [0,0,0];
    rightColumn = [0,0,0];
    diagonalTopToBottom = [0,0,0]; 
    diagonalBottomToTop = [0,0,0];

    boardArray = [topRow, middleRow, bottomRow];
    totalWinningCombos = [topRow, middleRow, bottomRow, leftColumn, centerColumn, rightColumn, diagonalTopToBottom, diagonalBottomToTop];

    firstArrayNum = 0;
    secondArrayNum = 0;
    nextCompMove = 0;


    topLeftButton.textContent = '';
    // topLeftButton.setAttribute('style', "font-size: 80px");
    topCenterButton.textContent = '';
    // topCenterButton.setAttribute('style', "font-size: 80px");
    topRightButton.textContent = '';
    // topRightButton.setAttribute('style', "font-size: 80px");
    middleLeftButton.textContent = '';
    // middleLeftButton.setAttribute('style', "font-size: 80px");
    middleCenterButton.textContent = '';
    // middleCenterButton.setAttribute('style', "font-size: 80px");
    middleRightButton.textContent = '';
    // middleRightButton.setAttribute('style', "font-size: 80px");
    bottomLeftButton.textContent = '';
    // bottomLeftButton.setAttribute('style', "font-size: 80px");
    bottomCenterButton.textContent = '';
    // bottomCenterButton.setAttribute('style', "font-size: 80px");
    bottomRightButton.textContent = '';
    // bottomRightButton.setAttribute('style', "font-size: 80px");

    console.clear();
});


const topLeftButton = document.getElementById('top-left');
topLeftButton.addEventListener('click', function(){
    if (topRow[0]===0){
        topRow[0] = 1;
        leftColumn[0]=1;
        diagonalTopToBottom[0]=1;
        topLeftButton.textContent = 'X';
        topLeftButton.setAttribute('style', "font-size: 80px");
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
            determineWinner();
            
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
        plays++;
        determineWinner();
        if (winStatus === null){
        
            compPosition();
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
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
    if (winStatus === null){
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
}

// (plays === 8) && 

function determineWinner (){  //This first if is predicting a tie ahead of time so the player doesn't have to finish - if each of the 8 winning arrays has both a 1 and a 2 in it
    //or it is the 8th turn and there is a 2 in each of the 8 winning arrays but the computer hasn't won yet (meaning the player can't win with the last move), the it will predict 
    // and call a tie before making the player play the last move
   
        
    //     topRow.includes(1) &&
    // middleRow.includes(1) && bottomRow.includes(1) && leftColumn.includes(1) && centerColumn.includes(1) && rightColumn.includes(1) && diagonalTopToBottom.includes(1) && diagonalBottomToTop.includes(1))))){



    // ((topRow.includes(2) && middleRow.includes(2) && bottomRow.includes(2) && leftColumn.includes(2) && centerColumn.includes(2) && rightColumn.includes(2)
    // && diagonalTopToBottom.includes(2) && diagonalBottomToTop.includes(2)))  
    
    // ((plays === 7 && (!(topRow.includes(1) && middleRow.includes(1) && bottomRow.includes(1) && leftColumn.includes(1) && centerColumn.includes(1) && rightColumn.includes(1) && diagonalTopToBottom.includes(1) && diagonalBottomToTop.includes(1)))) && (((topRow[0] === 0 && topRow[1] === 0 && topRow[2] === 1) || (topRow[0] === 0 &&
    //     topRow[1] ===1 && topRow[2] ===0) || (topRow[0]===1 && topRow[1] === 0 && topRow[2] === 0)) || ((middleRow[0] === 0 && middleRow[1] === 0 && middleRow[2] === 1) || (middleRow[0] === 0 &&
    //         middleRow[1] ===1 && middleRow[2] ===0) || (middleRow[0]===1 && middleRow[1] === 0 && middleRow[2] === 0)) || ((bottomRow[0] === 0 && bottomRow[1] === 0 && bottomRow[2] === 1) || (bottomRow[0] === 0 &&
    //             bottomRow[1] ===1 && bottomRow[2] ===0) || (bottomRow[0]===1 && bottomRow[1] === 0 && bottomRow[2] === 0)) || ((leftColumn[0] === 0 && leftColumn[1] === 0 && leftColumn[2] === 1) || (leftColumn[0] === 0 &&
    //                 leftColumn[1] ===1 && leftColumn[2] ===0) || (leftColumn[0]===1 && leftColumn[1] === 0 && leftColumn[2] === 0)) || ((centerColumn[0] === 0 && centerColumn[1] === 0 && centerColumn[2] === 1) || (centerColumn[0] === 0 &&
    //                     centerColumn[1] ===1 && centerColumn[2] ===0) || (centerColumn[0]===1 && centerColumn[1] === 0 && centerColumn[2] === 0)) || ((rightColumn[0] === 0 && rightColumn[1] === 0 && rightColumn[2] === 1) || (rightColumn[0] === 0 &&
    //                         rightColumn[1] ===1 && rightColumn[2] ===0) || (rightColumn[0]===1 && rightColumn[1] === 0 && rightColumn[2] === 0)) || ((diagonalTopToBottom[0] === 0 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 1) || (diagonalTopToBottom[0] === 0 &&
    //                             diagonalTopToBottom[1] ===1 && diagonalTopToBottom[2] ===0) || (diagonalTopToBottom[0]===1 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 0)) || ((diagonalBottomToTop[0] === 0 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 1) || (diagonalBottomToTop[0] === 0 &&
    //                                 diagonalBottomToTop[1] ===1 && diagonalBottomToTop[2] ===0) || (diagonalBottomToTop[0]===1 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 0))))){
    if (winStatus === null){
        if (!topRow.includes(0)){
            if (!topRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!topRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!middleRow.includes(0)){
            if (!middleRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!middleRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!bottomRow.includes(0)){
            if (!bottomRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!bottomRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!leftColumn.includes(0)){
            if (!leftColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!leftColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!centerColumn.includes(0)){
            if (!centerColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!centerColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!rightColumn.includes(0)){
            if (!rightColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!rightColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!diagonalTopToBottom.includes(0)){
            if (!diagonalTopToBottom.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!diagonalTopToBottom.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (!diagonalBottomToTop.includes(0)){
            if (!diagonalBottomToTop.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!")
            }
            else if (!diagonalBottomToTop.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(")
            }
        }
        if (winStatus === null){
            if (((topRow.includes(1) && topRow.includes(2)) && (middleRow.includes(1) && middleRow.includes(2)) && (bottomRow.includes(1) && bottomRow.includes(2)) //in the future could i put all of these arrays into an array and do .contains of the whole thing?
            && (leftColumn.includes(1) && leftColumn.includes(2)) && (centerColumn.includes(1) && centerColumn.includes(2)) && (rightColumn.includes(1) && rightColumn.includes(2)) //if there is a 1 and 2 in every winning array
            && (diagonalTopToBottom.includes(1) && diagonalTopToBottom.includes(2)) && (diagonalBottomToTop.includes(1) && diagonalBottomToTop.includes(2)))){
                                                                                winStatus = 3;
                                                                                // console.log(topRow);
                                                                                // console.log(middleRow);
                                                                                // console.log(bottomRow);
                                                                                // console.log(leftColumn);
                                                                                // console.log(centerColumn);
                                                                                // console.log(rightColumn);
                                                                                // console.log(diagonalTopToBottom);
                                                                                // console.log(diagonalBottomToTop);
                                                                                console.log("It's a tie1! Try again!");
            }
        
        } 

        if(winStatus === null){
            if (plays === 7 || plays === 8){
                let possibleWinsForPlayer = 0;
                let numZeros = 0;
                let numOnes = 0;

                for(let i = 0; i < totalWinningCombos.length; i++){
                    for(let x = 0; x < totalWinningCombos[i].length; x++){  //This should reset numZeros and numOnes to 0 every time the inner for loop interates, so then possible Wins is updated if the condition is met and that would be a running tally 
                        if (totalWinningCombos[i][x] === 0){
                            numZeros++;
                        }
                        if (totalWinningCombos[i][x] === 1){
                            numOnes++;
                        }
                        if (numOnes === 2 && numZeros === 1){
                            possibleWinsForPlayer++;
                            //console.log(possibleWinsForPlayer + "First 1" + plays);
                        }
                        
                        
                    }
                console.log("numZeros" + numZeros);
                console.log("numOnes" + numOnes);
                console.log("possible Wins" + possibleWinsForPlayer);
                numZeros = 0;
                numOnes = 0;
                }
                if (possibleWinsForPlayer === 0){
                    //console.log(possibleWinsForPlayer + "Second 2" + plays);
                    let possibleWinsForComputer = 0;
                    let numZerosComp = 0;
                    let numTwosComp = 0;
                    for(let a = 0; a < totalWinningCombos.length; a++){               
                        for(let b = 0; b < totalWinningCombos[a].length; b++){  //This should reset numZeros and numOnes to 0 every time the inner for loop interates, so then possible Wins is updated if the condition is met and that would be a running tally 
                           
                            if (totalWinningCombos[a][b] === 0){
                                numZerosComp++;
                            }
                            if (totalWinningCombos[a][b] === 2){
                                numTwosComp++;
                            }
                            if (numTwosComp === 2 && numZerosComp === 1){
                                possibleWinsForComputer++;
                            }
                            
                        }
                        numZerosComp = 0;
                        numTwosComp = 0; 
                       
                    }
                    if (possibleWinsForComputer === 0){
                        //console.log(totalWinningCombos);
                        //console.log(possib)
                        winStatus = 3;
                        console.log("GOING TO BE A TIE!!");
                        // console.log(possibleWinsForPlayer);
                        // console.log(possibleWinsForComputer);
                        // console.log(plays);
                        
                    }
                }

                }

        }
        
        if(winStatus === null){
            if (plays === 8){
                let possibleWinsForPlayerV2 = 0;
                let numZerosV2 = 0;
                let numOnesV2 = 0;
                for(let c = 0; c < totalWinningCombos.length; c++){
                    
                    for(let d = 0; d < totalWinningCombos[c].length; d++){  //This should reset numZeros and numOnes to 0 every time the inner for loop interates, so then possible Wins is updated if the condition is met and that would be a running tally 
                      
                        
                        if (totalWinningCombos[c][d] === 0){
                            numZerosV2++;
                        }
                        if (totalWinningCombos[c][d] === 1){
                            numOnesV2++;
                        }
                        if (numOnesV2 === 2 && numZerosV2 === 1){
                            possibleWinsForPlayerV2++;
                        }
                    } 
                    numZerosV2 = 0;
                    numOnesV2 = 0;   
                }
                if (possibleWinsForPlayerV2 === 0){
                    // console.log(totalWinningCombos);
                    winStatus = 3;
                    console.log("GOING TO BE A TIE! 8Plays!")
                }  
                }
            }
        }
    
    else{
        console.log("The game is already over!")
    }
}











    // //if it has been 7 plays, you need to account for it being a tie if there are no examples of two 2s or two 1s because with one more turn, neither could win
    // //if it has been 8 turns, you onnly need to account for if player 1 (x) could win because the computer can't win - in that case only annouce a tie if there is not something with two 1s in it
    // if (winStatus === null){
    //     if (((plays === 7) && (!(topRow[0] === 0 && topRow[1] === 1 && topRow[2] === 1) && !(topRow[0] === 1 &&  // If it has been 7 turns and there is NO array with two 1s (aka player 1 cannot win)
    //     topRow[1] ===1 && topRow[2] ===0) && !(topRow[0]===1 && topRow[1] === 0 && topRow[2] === 1) && !(middleRow[0] === 0 && middleRow[1] === 1 && middleRow[2] === 1) && !(middleRow[0] === 1 &&
    //         middleRow[1] ===1 && middleRow[2] ===0) && !(middleRow[0]===1 && middleRow[1] === 0 && middleRow[2] === 1) && !(bottomRow[0] === 0 && bottomRow[1] === 1 && bottomRow[2] === 1) && !(bottomRow[0] === 1 &&
    //             bottomRow[1] ===1 && bottomRow[2] ===0) && !(bottomRow[0]===1 && bottomRow[1] === 0 && bottomRow[2] === 1) && !(leftColumn[0] === 0 && leftColumn[1] === 1 && leftColumn[2] === 1) && !(leftColumn[0] === 1 &&
    //                 leftColumn[1] ===1 && leftColumn[2] ===0) && !(leftColumn[0]===1 && leftColumn[1] === 0 && leftColumn[2] === 1) && !(centerColumn[0] === 0 && centerColumn[1] === 1 && centerColumn[2] === 1) && !(centerColumn[0] === 1 &&
    //                     centerColumn[1] ===1 && centerColumn[2] ===0) && !(centerColumn[0]===1 && centerColumn[1] === 0 && centerColumn[2] === 1) && !(rightColumn[0] === 0 && rightColumn[1] === 1 && rightColumn[2] === 1) && !(rightColumn[0] === 1 &&
    //                         rightColumn[1] ===1 && rightColumn[2] ===0) && !(rightColumn[0]===1 && rightColumn[1] === 0 && rightColumn[2] === 1) && !(diagonalTopToBottom[0] === 0 && diagonalTopToBottom[1] === 1 && diagonalTopToBottom[2] === 1) && !(diagonalTopToBottom[0] === 1 &&
    //                             diagonalTopToBottom[1] ===1 && diagonalTopToBottom[2] ===0) && !(diagonalTopToBottom[0]===1 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 1) && !(diagonalBottomToTop[0] === 0 && diagonalBottomToTop[1] === 1 && diagonalBottomToTop[2] === 1) && !(diagonalBottomToTop[0] === 1 &&
    //                                 diagonalBottomToTop[1] ===1 && diagonalBottomToTop[2] ===0) && !(diagonalBottomToTop[0]===1 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 1))) || ((plays === 8) && ((!(topRow[0] === 0 && topRow[1] === 2 && topRow[2] === 2) && !(topRow[0] === 2 &&  // If it has been 7 turns and there is NO array with two 1s (aka player 1 cannot win)
    //                                 topRow[1] ===2 && topRow[2] ===0) && !(topRow[0]===2 && topRow[1] === 0 && topRow[2] === 2) && !(middleRow[0] === 0 && middleRow[1] === 2 && middleRow[2] === 2) && !(middleRow[0] === 2 &&
    //                                     middleRow[1] ===2 && middleRow[2] ===0) && !(middleRow[0]===2 && middleRow[1] === 0 && middleRow[2] === 2) && !(bottomRow[0] === 0 && bottomRow[1] === 2 && bottomRow[2] === 2) && !(bottomRow[0] === 2 &&
    //                                         bottomRow[1] ===2 && bottomRow[2] ===0) && !(bottomRow[0]===2 && bottomRow[1] === 0 && bottomRow[2] === 2) && !(leftColumn[0] === 0 && leftColumn[1] === 2 && leftColumn[2] === 2) && !(leftColumn[0] === 2 &&
    //                                             leftColumn[1] ===2 && leftColumn[2] ===0) && !(leftColumn[0]===2 && leftColumn[1] === 0 && leftColumn[2] === 2) && !(centerColumn[0] === 0 && centerColumn[1] === 2 && centerColumn[2] === 2) && !(centerColumn[0] === 2 &&
    //                                                 centerColumn[1] ===2 && centerColumn[2] ===0) && !(centerColumn[0]===2 && centerColumn[1] === 0 && centerColumn[2] === 2) && !(rightColumn[0] === 0 && rightColumn[1] === 2 && rightColumn[2] === 2) && !(rightColumn[0] === 2 &&
    //                                                     rightColumn[1] ===2 && rightColumn[2] ===0) && !(rightColumn[0]===2 && rightColumn[1] === 0 && rightColumn[2] === 2) && !(diagonalTopToBottom[0] === 0 && diagonalTopToBottom[1] === 2 && diagonalTopToBottom[2] === 2) && !(diagonalTopToBottom[0] === 2 &&
    //                                                         diagonalTopToBottom[1] ===2 && diagonalTopToBottom[2] ===0) && !(diagonalTopToBottom[0]===2 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 2) && !(diagonalBottomToTop[0] === 0 && diagonalBottomToTop[1] === 2 && diagonalBottomToTop[2] === 2) && !(diagonalBottomToTop[0] === 2 &&
    //                                                             diagonalBottomToTop[1] ===2 && diagonalBottomToTop[2] ===0) && !(diagonalBottomToTop[0]===2 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 2)) && (!(topRow[0] === 0 && topRow[1] === 1 && topRow[2] === 1) && !(topRow[0] === 1 &&  // If it has been 7 turns and there is NO array with two 1s (aka player 1 cannot win)
    //                                                             topRow[1] ===1 && topRow[2] ===0) && !(topRow[0]===1 && topRow[1] === 0 && topRow[2] === 1) && !(middleRow[0] === 0 && middleRow[1] === 1 && middleRow[2] === 1) && !(middleRow[0] === 1 &&
    //                                                                 middleRow[1] ===1 && middleRow[2] ===0) && !(middleRow[0]===1 && middleRow[1] === 0 && middleRow[2] === 1) && !(bottomRow[0] === 0 && bottomRow[1] === 1 && bottomRow[2] === 1) && !(bottomRow[0] === 1 &&
    //                                                                     bottomRow[1] ===1 && bottomRow[2] ===0) && !(bottomRow[0]===1 && bottomRow[1] === 0 && bottomRow[2] === 1) && !(leftColumn[0] === 0 && leftColumn[1] === 1 && leftColumn[2] === 1) && !(leftColumn[0] === 1 &&
    //                                                                         leftColumn[1] ===1 && leftColumn[2] ===0) && !(leftColumn[0]===1 && leftColumn[1] === 0 && leftColumn[2] === 1) && !(centerColumn[0] === 0 && centerColumn[1] === 1 && centerColumn[2] === 1) && !(centerColumn[0] === 1 &&
    //                                                                             centerColumn[1] ===1 && centerColumn[2] ===0) && !(centerColumn[0]===1 && centerColumn[1] === 0 && centerColumn[2] === 1) && !(rightColumn[0] === 0 && rightColumn[1] === 1 && rightColumn[2] === 1) && !(rightColumn[0] === 1 &&
    //                                                                                 rightColumn[1] ===1 && rightColumn[2] ===0) && !(rightColumn[0]===1 && rightColumn[1] === 0 && rightColumn[2] === 1) && !(diagonalTopToBottom[0] === 0 && diagonalTopToBottom[1] === 1 && diagonalTopToBottom[2] === 1) && !(diagonalTopToBottom[0] === 1 &&
    //                                                                                     diagonalTopToBottom[1] ===1 && diagonalTopToBottom[2] ===0) && !(diagonalTopToBottom[0]===1 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 1) && !(diagonalBottomToTop[0] === 0 && diagonalBottomToTop[1] === 1 && diagonalBottomToTop[2] === 1) && !(diagonalBottomToTop[0] === 1 &&
    //                                                                                         diagonalBottomToTop[1] ===1 && diagonalBottomToTop[2] ===0) && !(diagonalBottomToTop[0]===1 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 1))))){


    //                                                                         winStatus = 3;
    //                                                                         console.log(topRow);
    //                                                                         console.log(middleRow);
    //                                                                         console.log(bottomRow);
    //                                                                         console.log(leftColumn);
    //                                                                         console.log(centerColumn);
    //                                                                         console.log(rightColumn);
    //                                                                         console.log(diagonalTopToBottom);
    //                                                                         console.log(diagonalBottomToTop);
    //                                                                         console.log(plays);
    //                                                                         console.log("TIE TWO");}
                                                                
    // }
    
    
    
    // else if (((plays === 7) && (!(topRow[0] === 0 && topRow[1] === 2 && topRow[2] === 2) && !(topRow[0] === 2 &&  // If it has been 7 turns and there is NO array with two 1s (aka player 1 cannot win)
    // topRow[1] ===2 && topRow[2] ===0) && !(topRow[0]===2 && topRow[1] === 0 && topRow[2] === 2) && !(middleRow[0] === 0 && middleRow[1] === 2 && middleRow[2] === 2) && !(middleRow[0] === 2 &&
    //     middleRow[1] ===2 && middleRow[2] ===0) && !(middleRow[0]===2 && middleRow[1] === 0 && middleRow[2] === 2) && !(bottomRow[0] === 0 && bottomRow[1] === 2 && bottomRow[2] === 2) && !(bottomRow[0] === 2 &&
    //         bottomRow[1] ===2 && bottomRow[2] ===0) && !(bottomRow[0]===2 && bottomRow[1] === 0 && bottomRow[2] === 2) && !(leftColumn[0] === 0 && leftColumn[1] === 2 && leftColumn[2] === 2) && !(leftColumn[0] === 2 &&
    //             leftColumn[1] ===2 && leftColumn[2] ===0) && !(leftColumn[0]===2 && leftColumn[1] === 0 && leftColumn[2] === 2) && !(centerColumn[0] === 0 && centerColumn[1] === 2 && centerColumn[2] === 2) && !(centerColumn[0] === 2 &&
    //                 centerColumn[1] ===2 && centerColumn[2] ===0) && !(centerColumn[0]===2 && centerColumn[1] === 0 && centerColumn[2] === 2) && !(rightColumn[0] === 0 && rightColumn[1] === 2 && rightColumn[2] === 2) && !(rightColumn[0] === 2 &&
    //                     rightColumn[1] ===2 && rightColumn[2] ===0) && !(rightColumn[0]===2 && rightColumn[1] === 0 && rightColumn[2] === 2) && !(diagonalTopToBottom[0] === 0 && diagonalTopToBottom[1] === 2 && diagonalTopToBottom[2] === 2) && !(diagonalTopToBottom[0] === 2 &&
    //                         diagonalTopToBottom[1] ===2 && diagonalTopToBottom[2] ===0) && !(diagonalTopToBottom[0]===2 && diagonalTopToBottom[1] === 0 && diagonalTopToBottom[2] === 2) && !(diagonalBottomToTop[0] === 0 && diagonalBottomToTop[1] === 2 && diagonalBottomToTop[2] === 2) && !(diagonalBottomToTop[0] === 2 &&
    //                             diagonalBottomToTop[1] ===2 && diagonalBottomToTop[2] ===0) && !(diagonalBottomToTop[0]===2 && diagonalBottomToTop[1] === 0 && diagonalBottomToTop[2] === 2)))){
        
    //                                                                     winStatus = 3;
    //                                                                     console.log(topRow);
    //                                                                     console.log(middleRow);
    //                                                                     console.log(bottomRow);
    //                                                                     console.log(leftColumn);
    //                                                                     console.log(centerColumn);
    //                                                                     console.log(rightColumn);
    //                                                                     console.log(diagonalTopToBottom);
    //                                                                     console.log(diagonalBottomToTop);
    //                                                                     console.log(plays);
    //                                                                     console.log("It's a tie3! Try again!")


    //                                                                 }
 



// let topRow = [0,0,0];
// let middleRow = [0,0,0];
// let bottomRow = [0,0,0];
// let leftColumn= [0,0,0];
// let centerColumn = [0,0,0];
// let rightColumn = [0,0,0];
// let diagonalTopToBottom = [0,0,0];
// let diagonalBottomToTop = [0,0,0];


//all of these functions should call render at the end so that last thing to happen is it does something to the screen? 