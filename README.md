1) Define required constants

    - x and o objects
    -color of those objects
    -player 1 
    -computer
    -winning combinations

2) Define required variables used to track the state of the game

    -The array to track where each person moved
    -The status of the game
    -Whose turn it is

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

    -store each square element 

4) Upon loading the app should:
	4.1) Initialize the state variables
        -Make 8 empty arrays
        -Make the status of the game null to start
        -Make the turn random between either the computer or player (could even make it something where whoever won last goes second saying something like tic tac toe is so much easier for the first person)
	4.2) Render those values to the page
        -loop over the array and display on the board whatever the corresponding index has 
        				4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).  // a little confused by this but we'll see how it goes
        -render whose turn it is as long as the winner is still null
        -render a tie message and direct them to hit restart 
	4.3) Wait for the user to click a square


5) Handle a player clicking a square
    -

6) Handle a player clicking the replay button




Ill want to have an array with 9 slots, and have the first three equal to one row, the second three equal to the next, and the last three to the third. Ill say something like if there are either three  do conditional statements whwere t


Could do this: create a total of 8 arrays, use conditions on where to put either a 1 for player one of 2 for the computer, then if one of those arrays is filled with either all 1s or all 2s, return that the player won

You can do extra things like hints
could keep a total tally of the wins 
could have the background light up when someone wins 
YOU CAN CALL A TIE IN ADVANCE IF ALL OF THE ARRAYS HAVE BOTH A 1 and 2 IN THEM!! 