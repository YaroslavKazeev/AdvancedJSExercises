// Rewrite if..else using multiple ternary operators '?'.
// JAVASCRIPT
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let login=''
let message;
login=='Employee' ? message='Hello' : login=='Director' ? message='Greetings' : login=='' ? message='No login' : message=''