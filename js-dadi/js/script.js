//genero numero random per me
var mynumber = Math.floor( Math.random()*6 );
console.log(mynumber);
//genero numero random per l'avversario
var myenemy = Math.floor( Math.random()*6 );
console.log(myenemy);
//determino le condizioni per vittoria/sconfitta/pareggio
if ( mynumber > myenemy ) {
  alert('You win!!!GG');
} else if ( mynumber < myenemy ) {
  alert('You looose!');
} else if ( mynumber == myenemy ) {
  alert('Draw! Try again');
}
