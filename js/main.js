let arrGame = [
    '','','', //0,1,2
    '','','', //3,4,5
    '','',''];//6,7,8*/
let end = false; // at first of new game, the game has not ended
let counter =0;
let nextTurn = "X"; // first turn is player X.

$("td").on('click' ,function (event) {
let isPlayed = $(this).html();
let index = $(this).attr('id'); //take attribute id of td of table to store in same place of array game

if (isPlayed == "") { //if there is empty place of td no one played there which td =="" 

if(end==false) {


event.target.innerHTML= nextTurn; //draw X or O in table of HTML
counter ++;
arrGame[index] = nextTurn; //place  X or O in array arrGame
//check all possible winning places horizontally, vertically and diagonally
                checkWin (0, 1, 2 , "X");
                checkWin (3, 4, 5 , "X");
                checkWin (6, 7, 8 , "X");
                checkWin (0, 3, 6 , "X");
                checkWin (1, 4, 7 , "X");
                checkWin (2, 5, 8 , "X");
                checkWin (0, 4, 8 , "X");
                checkWin (2, 4, 6 , "X");

                checkWin (0, 1, 2 , "O");
                checkWin (3, 4, 5 , "O");
                checkWin (6, 7, 8 , "O");
                checkWin (0, 3, 6 , "O");
                checkWin (1, 4, 7 , "O");
                checkWin (2, 5, 8 , "O");
                checkWin (0, 4, 8 , "O");
                checkWin (2, 4, 6 , "O");

if (counter >=9){
  
    swal("Game Tie") ;}

}

//console.log(nextTurn)
switch(nextTurn) { //switch between X and O for next turn
case "X" : nextTurn ="O"
break;
case "O" :nextTurn="X"
break;
}  

//console.log(nextTurn)

} 
})

function checkWin (i0, i1, i2, player) { //check who wins whith three indexes of array and player X or O
if (arrGame[i0] == player && arrGame[i1] == player && arrGame[i2] == player ) {
swal("Player" + " " + player + " "+ "wins")
end =true; 

}

}   

$('button').on("click",function(){
$('td').empty(); //clear all table td cell
end = false ;
arrGame = [
'','','', //0,1,2
'','','', //3,4,5
'','',''];//6,7,8*/ //clear arrGame for new game
counter=0; //reset counter
});









