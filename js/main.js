let arrGame = [
    '','','', //0,1,2
    '','','', //3,4,5
    '','',''];//6,7,8*/
let end = false;
let counter =0;
let nextTurn = "X";

$("#0, #1, #2, #3, #4, #5, #6, #7, #8").on('click' ,function (event) {
let isPlayed = $(this).html();
let index = $(this).attr('id');
console.log("isPlayed is ", isPlayed)
console.log("index is", index)
if (isPlayed == "") {
console.log("inside isplayed")
if(end==false) {
console.log("inside end === false")

event.target.innerHTML= nextTurn; 
counter ++;
arrGame[index] = nextTurn; 

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
checkWin (2, 4, 6 , "O") ;

if (counter >=9){
  
    swal("Game Tie") ;}

}

console.log(nextTurn)
switch(nextTurn) {
case "X" : nextTurn ="O"
break;
case "O" :nextTurn="X"
break;
}  

console.log(nextTurn)

} 
})

function checkWin (i0, i1, i2, player) {
if (arrGame[i0] == player && arrGame[i1] == player && arrGame[i2] == player ) {
swal("Player" + " " + player + " "+ "wins")
end =true;

}

}   

$('button').on("click",function(){
$('td').empty();
end = false ;
arrGame = [
'','','', //0,1,2
'','','', //3,4,5
'','',''];//6,7,8*/
counter=0;
});









