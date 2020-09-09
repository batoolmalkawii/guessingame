'use strict';

var score = 0;
function getUserName() {
  var userName = prompt('Welcome to my game! What is your name?');
  alert('Hey ' + userName + ', Let\'s see how much you secretly know me! :D');
  return (userName);
}
function inputName() {
  return (prompt('Do you think my name starts with the letter B?'));
}
function inputAge() {
  return (prompt('Do you think my age is under 22?'));
}
function inputSkating() {
  return (prompt('Do you think I am a Skating fan?'));
}
function inputIntro() {
  return (prompt('Do you think I am an an Introvert?'));
}
function inputFriend() {
  return (prompt('Do you think I\'ll be a good friend?'));
}

function checkName(isName, userName) {
  switch (isName.toLocaleLowerCase()) {
    case ('y'):
    case ('yes'):
      alert('Wow ' + userName + '! my name is Batool, such an impressive start :D');
      score = score + 1;
      //console.log('Correct.'); 
      break;
    case ('n'):
    case ('no'):
      alert('Ops! ' + userName + ' :( my name is Batool, it\'s okay we\'ll get to know each other better next time :D');
      //console.log('Wrong.');
      break;
  }
}
function checkAge(isAge, userName) {
  switch (isAge.toLocaleLowerCase()) {
    case ('y'):
    case ('yes'):
      alert('Ops! ' + userName + ', I am 24 years old :D');
      //console.log('Wrong.');
      break;
    case ('n'):
    case ('no'):
      alert('Correct ' + userName + '! I am 24 years old :D');
      score = score + 1;
      //console.log('Correct.');
      break;
  }
}
function checkSkating(isSkating, userName) {
  switch (isSkating.toLocaleLowerCase()) {
    case ('y'):
    case ('yes'):
      alert('Cool ' + userName + '! I Love skating, I hope you do too :D');
      score = score + 1;
      //console.log('Correct.');
      break;
    case ('n'):
    case ('no'):
      alert('Nope ' + userName + '! I should show you some moves to prove it :D');
      //console.log('Wrong.');
      break;
  }
}
function checkIntro(isIntro, userName) {
  switch (isIntro.toLocaleLowerCase()) {
    case ('y'):
    case ('yes'):
      alert('Yes ' + userName + '! Inner-self is out best friend :D');
      score = score + 1;
      //console.log('Correct.');
      break;
    case ('n'):
    case ('no'):
      alert('You\'re wrong ' + userName + ' :( but I\'m flexible to change to an extrovert if you offered some ice-cream on the go :D');
      //console.log('Wrong.');
      break;
  }
}
function checkFriend(isFriend, userName) {
  switch (isFriend.toLocaleLowerCase()) {
    case ('y'):
    case ('yes'):
      alert('Indeed ' + userName + '! Indeed :D');
      score = score + 1;
      //console.log('Correct.');
      break;
    case ('n'):
    case ('no'):
      alert('You don\'t have to be so cruel ' + userName + ':( I think I deserve a little tiny chance to re-make a good impression  :D');
      //console.log('Wrong.');
      break;
  }
}
function checkGuessNum(randomNum, userName) {
  for (var i = 0; i < 4; i++) {
    var guessNum = prompt('Trial No. ' + (i + 1) + '. Think of a number and write it down, I\'ll do the same and let\'s see how our brains match!');
    if (guessNum > randomNum) {
      alert('Ops! ' + guessNum + ' is too high for ' + randomNum + '.');
      //console.log('Wrong.');
    }
    else {
      if (guessNum < randomNum) {
        alert('Ops! ' + guessNum + ' is too low for ' + randomNum + '.');
        //console.log('Wrong.');

      }
      else {
        alert('Looks like we\'re on the same page ' + userName + '! ' + randomNum + ' it is.');
        score = score + 1;
        //console.log('Correct.');
        break;
      }
    }
  }
}
function checkFood(food, userName) {
  for (var i = 0; i < 6; i++) {
    var userFood = prompt('Trial No. ' + (i + 1) + '. Since we\'re getting closer to each other ' + userName + ', guess one of my favorite foods :D')
    for (var j = 0; j < food.length; j++) {
      if (userFood.toLocaleLowerCase() === food[j].toLocaleLowerCase()) {
        alert('Yes! You\'re invited to a ' + food[j] + ' dinner tonight :D');
        var isCorrectFood = true;
        score = score + 1;
        //console.log('Correct.');
        break;
      }
    }
    if (isCorrectFood) {
      break;
    }
  }
}
function getName(userName) {
  // question about my name
  var isName = inputName();
  checkName(isName, userName);
}
function getAge(userName) {
  // question about my age
  var isAge = inputAge();
  checkAge(isAge, userName);
}
function getSkating(userName) {
  // question about skating
  var isSkating = inputSkating();
  checkSkating(isSkating, userName);
}
function getIntro(userName) {
  // question about personality
  var isIntro = inputIntro();
  checkIntro(isIntro, userName);
}
function getFriend(userName) {
  // question about friendship
  var isFriend = inputFriend();
  checkFriend(isFriend, userName);
}
function getGuessNum(userName) {
  // question about guessing a number
  checkGuessNum(Math.ceil(Math.random()), userName);
}
function getUserFood(userName) {
  // question about arrays
  var food = ['Grape Leaves', 'Makhshi', 'Mexican Salad', 'Burger', 'Stuffed Chicken'];
  checkFood(food, userName);
  alert('My favorite foods are ' + food + '.');
}
function printScore(score) {
  document.writeln(userName + ', your total Score is: ' + score + ' out of 7.');
}

// calling functions 
var userName=getUserName();
getName(userName);
getAge(userName);
getSkating(userName);
getIntro(userName);
getFriend(userName);
getGuessNum(userName);
getUserFood(userName);
printScore(score);