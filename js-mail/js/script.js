//Chiedere all'utente la Mail
var mail = prompt('Qual è la sua e-mail?');
//Creo array con le e-mail
var email = ['gianluca.forgia@gmail.com', 'mario.rossi@gmail.com', 'laura.mancini@gmail.com', 'antonio.bianchi@hotmail.it']
//Verifico che la mail sia nella lista
for (var i = 0; i < email.length; i++) {
  console.log( email[i]);
  if ( mail == email[i] ) {
    alert('e-mail inserita correttamente');
  } else {
    alert('la tua email non risulta nella lista');
  }
}
