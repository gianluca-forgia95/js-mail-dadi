 //Chiedere all'utente la Mail
 var mail = prompt('Qual è la sua e-mail?');
//Creo array con le e-mail
 var email = ['gianluca.forgia@gmail.com', 'mario.rossi@gmail.com', 'laura.mancini@gmail.com', 'antonio.bianchi@hotmail.it']
 //Creo la variabile emailValida
 var emailValida = 0;
 //Identifico il mio array
 for (var i = 0; i < email.length; i++) {
   console.log( email[i]);
  if ( mail == email[i] ) {
    emailValida = 1;
  }
 }
//Pongo le condizioni per emailValida
if ( emailValida == 1) {
  alert('E-mail inserita correttamente!!');
} else {
  alert('Non risulta nella lista la mail che hai inserito.. ci dispiace.');
}
