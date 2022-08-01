



//Global variables below

let winStatus = null;
let plays = 0; //number of plays that have occured in a game
let gamesWonPlayer = 0; 
let gamesWonComputer = 0;
let tieGames = 0;

let topRow = [0,0,0]; //left to right   - These are arrays of all of the possible ways to win Tic Tac Toe
let middleRow = [0,0,0];
let bottomRow = [0,0,0]; 
let leftColumn= [0,0,0]; //top to bottom
let centerColumn = [0,0,0];
let rightColumn = [0,0,0];
let diagonalTopToBottom = [0,0,0]; //left to right + description for north south direction
let diagonalBottomToTop = [0,0,0];

let boardArray = [topRow, middleRow, bottomRow]; //9 spots, one for each button
let totalWinningCombos = [topRow, middleRow, bottomRow, leftColumn, centerColumn, rightColumn, diagonalTopToBottom, diagonalBottomToTop]; // all possible combos in one array

let firstArrayNum = 0; //used for position for the computer random assignment
let secondArrayNum = 0; //used for position for the computer random assignment
let nextCompMove = 0; //value at the position the computer has randomly chosen (this should be 0 (aka no one has gone there yet) before an "O" is assigned as the computer's turn)

let messageEl = document.querySelector('h3'); //message on screen
let playerTally = document.getElementById('player-tally');
let computerTally = document.getElementById('computer-tally');
let tieTally = document.getElementById('tie-tally');



//buttons below


const resetButton = document.querySelector('.reset-button');//meant to reset the game and erase memory of game history
resetButton.addEventListener('click', function(){
    winStatus = null;
    plays = 0;
    gamesWonPlayer = 0;
    gamesWonComputer = 0;
    tieGames = 0;
    
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

    messageEl.innerText = "Let the games begin!";
    messageEl.setAttribute("style", "color: black");

    playerTally.innerText = "0";
    computerTally.innerText = "0";
    tieTally.innerText = "0";


    topLeftButton.textContent = '';
    topCenterButton.textContent = '';
    topRightButton.textContent = '';
    middleLeftButton.textContent = '';
   middleCenterButton.textContent = '';
    middleRightButton.textContent = '';
    bottomLeftButton.textContent = '';
    bottomCenterButton.textContent = '';
    bottomRightButton.textContent = '';

    console.clear();
});


const nextGameButton = document.querySelector('.next-game'); //resets the game but keeps track of game history 
nextGameButton.addEventListener('click', function(){
   if (winStatus !== null){
        console.clear();
        
        winStatus = null;
        plays = 0;
        console.log(gamesWonPlayer);
        console.log(gamesWonComputer)
        console.log(tieGames);
        
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

        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");

        playerTally.innerText = gamesWonPlayer;
        computerTally.innerText = gamesWonComputer;
        tieTally.innerText = tieGames;

        topLeftButton.textContent = '';
        topCenterButton.textContent = '';
        topRightButton.textContent = '';
        middleLeftButton.textContent = '';
        middleCenterButton.textContent = '';
        middleRightButton.textContent = '';
        bottomLeftButton.textContent = '';
        bottomCenterButton.textContent = '';
        bottomRightButton.textContent = '';

}});


const topLeftButton = document.getElementById('top-left'); //Each of the 9 squares are represented by a button, which I have perform a functino when clicked
topLeftButton.addEventListener('click', function(){
    if (topRow[0]===0){ //if no one has gone here yet 
        topRow[0] = 1; //put a "1" in each of the winning arrays applicable 
        leftColumn[0]=1;
        diagonalTopToBottom[0]=1;
        topLeftButton.textContent = 'X';
        topLeftButton.setAttribute('style', "font-size: 80px");
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
        plays++;
        determineWinner(); //before moving on to the computer placing an 0, it will check determine winner, which would print a winning message and basically end the game
        if (winStatus === null){ //if still no one has won
        
            compPosition(); 
            compAssignment(firstArrayNum, secondArrayNum);
            plays++
            determineWinner();
            
        }

    }
         
    else{
        console.log("This space is already taken, please try again");
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
    }
});



const topCenterButton = document.getElementById('top-center');
topCenterButton.addEventListener('click', function(){
    if (topRow[1]===0){
        topRow[1] = 1;
        centerColumn[0]=1;
        topCenterButton.textContent = 'X';
        topCenterButton.setAttribute('style', "font-size: 80px");
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
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
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
    }
});


const middleLeftButton = document.getElementById('middle-left');
middleLeftButton.addEventListener('click', function(){
    if (middleRow[0]===0){
        middleRow[0] = 1;
        leftColumn[1] = 1;
        middleLeftButton.textContent = 'X';
        middleLeftButton.setAttribute('style', "font-size: 80px");
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
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
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
    }
});



const middleRightButton = document.getElementById('middle-right');
middleRightButton.addEventListener('click', function(){
    if (middleRow[2]===0){
        middleRow[2] = 1;
        rightColumn[1] = 1;
        middleRightButton.textContent = 'X';
        middleRightButton.setAttribute('style', "font-size: 80px");
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
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
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
    }
});


const bottomCenterButton = document.getElementById('bottom-center');
bottomCenterButton.addEventListener('click', function(){
    if (bottomRow[1]===0){
        bottomRow[1] = 1;
        centerColumn[2] = 1;
        bottomCenterButton.textContent = 'X';
        bottomCenterButton.setAttribute('style', "font-size: 80px");
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
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
        messageEl.innerText = "On to game number " + (1 + (gamesWonComputer + gamesWonPlayer + tieGames) + "!");
        messageEl.setAttribute("style", "color: black");
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
        messageEl.innerText = "This space is already taken, please try again";
        messageEl.setAttribute("style", "color: red");
    }
});


function compPosition (){ //find the position we should add a 2 ("O" on the board, 2 in the array) at by using randomly generated index numbers and checking if the values at those indicies are 0 (aka haven't been played yet)
        let numOfEmptySpaces = 0; //the number of empty spaces on the board - because we are using an array below (boardArray) which only has nine indicies (3 arrays in an array), this will directly map to the number of free spaces
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
               nextCompMove = boardArray[firstArrayNum][secondArrayNum]; //so in our boardArray, which is basically just an array of the three rows, this is the value at the potential position of the computer's move
    
            while (nextCompMove !== 0){  //while the value at the potential position is NOT 0, the computer will keep generating random integers for the positions
                //until it lands on a combo position where there would be a value of 0, meaning no one has played there yet
                firstArrayNum = Math.floor(Math.random()*3); //these are global variables that will then be passed into compAssignment as arguments fot the row and column position
                secondArrayNum = Math.floor(Math.random()*3);
                nextCompMove = boardArray[firstArrayNum][secondArrayNum]; //This variable is enough for the while loop to keep running until that is not true (aka is equal to 0)
            //eventually this should be 0 and we would have our position of where to put a 2 for the computer generated value and the while loop would end
            }
        }

}

           


function compAssignment(rowPosition, columnPosition){ //now that we have a position that works from our firstArrayNum and secondArrayNums, we will update the logic to include 2's where necessary and update the board to show "O"'s 
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



function determineWinner (){   //The heart of the win logid - this will call a win if a whole one of the eight winning arrays is either 1 or 2
    if (winStatus === null){   //It also predicts a tie at either 7 or 8 turns so the game doesn't have to finish 
        if (!topRow.includes(0)){  //Whether a win, loss, or tie, the game status is updated so the winStatus variable will no longer be null and many of these funcitons will no longer run. It will also increment the number of wins by the player, computer, or tie
            if (!topRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!topRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!middleRow.includes(0)){
            if (!middleRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!middleRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!bottomRow.includes(0)){
            if (!bottomRow.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!bottomRow.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!leftColumn.includes(0)){
            if (!leftColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!leftColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!centerColumn.includes(0)){
            if (!centerColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!centerColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!rightColumn.includes(0)){
            if (!rightColumn.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!rightColumn.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!diagonalTopToBottom.includes(0)){
            if (!diagonalTopToBottom.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!diagonalTopToBottom.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (!diagonalBottomToTop.includes(0)){
            if (!diagonalBottomToTop.includes(2)){
                winStatus = 1;
                console.log("Contracts! You win!");
                messageEl.innerText = "Congrats! You win!";
                messageEl.setAttribute("style", "color: green");
                gamesWonPlayer++;
            }
            else if (!diagonalBottomToTop.includes(1)){
                winStatus = 2;
                console.log("Bummer...the computer won :(");
                messageEl.innerText = "Oh no! The computer won :(";
                messageEl.setAttribute("style", "color: red");
                gamesWonComputer++;
            }
        }
        if (winStatus === null){
            if (((topRow.includes(1) && topRow.includes(2)) && (middleRow.includes(1) && middleRow.includes(2)) && (bottomRow.includes(1) && bottomRow.includes(2)) //Will return a tie if there is a 1 and 2 in every possible win array (all 8 arrays)
            && (leftColumn.includes(1) && leftColumn.includes(2)) && (centerColumn.includes(1) && centerColumn.includes(2)) && (rightColumn.includes(1) && rightColumn.includes(2)) 
            && (diagonalTopToBottom.includes(1) && diagonalTopToBottom.includes(2)) && (diagonalBottomToTop.includes(1) && diagonalBottomToTop.includes(2)))){
                                                                                winStatus = 3;
                                                                                console.log("It's a tie1! Try again!");
                                                                                messageEl.innerText = "It's a Tie!";
                                                                                messageEl.setAttribute("style", "color: purple");
                                                                                tieGames++;
            }
        
        } 

        if(winStatus === null){
            if (plays === 7 || plays === 8){ //Will predict a tie if both the computer and player do not have the potential to win with their last turn (i.e., there are no possible win arrays with either two 1s and 0 or two 2s and a 0 that could be successfully completed)
                let possibleWinsForPlayer = 0;
                let numZeros = 0;
                let numOnes = 0;

                for(let i = 0; i < totalWinningCombos.length; i++){
                    for(let x = 0; x < totalWinningCombos[i].length; x++){  //This loops through all of the 8 arrays and sees if there are any examples of there being two 1s and one zero, meaning player 1 could still win
                        if (totalWinningCombos[i][x] === 0){
                            numZeros++;
                        }
                        if (totalWinningCombos[i][x] === 1){
                            numOnes++;
                        }
                        if (numOnes === 2 && numZeros === 1){
                            possibleWinsForPlayer++;
                        }
                        
                        
                    }
                numZeros = 0;
                numOnes = 0;
                }
                if (possibleWinsForPlayer === 0){ //If player 1 do not have a chace of winning, do the following 
                    let possibleWinsForComputer = 0;
                    let numZerosComp = 0;
                    let numTwosComp = 0;
                    for(let a = 0; a < totalWinningCombos.length; a++){               
                        for(let b = 0; b < totalWinningCombos[a].length; b++){  
                           
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
                    if (possibleWinsForComputer === 0){ //If there is also not a possibility for the computer to win with its last turn, then it will be a tie
                    
                        winStatus = 3;
                        console.log("GOING TO BE A TIE!!");
                        messageEl.innerText = "It's a Tie!";
                        messageEl.setAttribute("style", "color: purple");
                        tieGames++;

                        
                    }
                }

                }

        }
        
        if(winStatus === null){
            if (plays === 8){ //Using the same logic as above, this will return a tie if at turn 8, there is no possible way for the player to win (because the player always goes first they will always have the 9th turn)
                let possibleWinsForPlayerV2 = 0;
                let numZerosV2 = 0;
                let numOnesV2 = 0;
                for(let c = 0; c < totalWinningCombos.length; c++){
                    
                    for(let d = 0; d < totalWinningCombos[c].length; d++){  
                      
                        
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
                if (possibleWinsForPlayerV2 === 0){ //If there is no possible way for player 1 to win, call it a tie before they actually have to go play the 9th square
                    winStatus = 3;
                    console.log("GOING TO BE A TIE! 8Plays!");
                    messageEl.innerText = "It's a Tie!";
                    messageEl.setAttribute("style", "color: purple");
                    tieGames++;
                }  
                }
            }
        }
    
    else{
        console.log("The game is already over!");
        messageEl.innerText = "This game is already over! Hit reset to start over and erase game history or hit next game to continue playing ";
        messageEl.setAttribute("style", "color: orange");
    }
}

