'use strict'

var userName = prompt('Welcome to my game! What is your name?');
alert ('Hey '+userName+', Let\'s see how much you secretly know me! :D');
//
var isName = prompt('Do you think my name starts with the letter B?');
if ((isName.toLocaleLowerCase() === 'y') || (isName.toLocaleLowerCase() === 'yes')){
    alert ('Wow '+userName+'! my name is Batool, such an impressive start :D');
    //console.log('Correct.');
}
else
    if ((isName.toLocaleLowerCase() === 'n') || (isName.toLocaleLowerCase() === 'no')){
    alert ('Ops! '+userName+' :( my name is Batool, it\'s okay we\'ll get to know each other better next time :D');
    //console.log('Wrong.');
}
//
var isAge = prompt('Do you think my age is under 22?');
if ((isAge.toLocaleLowerCase() === 'y') || (isAge.toLocaleLowerCase() === 'yes')){
    alert ('Ops! '+userName+', I am 24 years old :D');
    //console.log('Wrong.');
}
else
    if ((isAge.toLocaleLowerCase()) === 'n' || (isAge.toLocaleLowerCase() === 'no')) {
    alert ('Correct '+userName+'! I am 24 years old :D');
    //console.log('Correct.');
}
//
var isSkating = prompt('Do you think I am a Skating fan?')          
if ((isSkating.toLocaleLowerCase() === 'y') || (isSkating.toLocaleLowerCase() === 'yes')){
    alert ('Cool '+userName+'! I Love skating, I hope you do too :D');
    //console.log('Correct.');
}
else
    if ((isSkating.toLocaleLowerCase()) === 'n' || (isSkating.toLocaleLowerCase() === 'no')) {
    alert ('Nope '+userName+'! I should show you some moves to prove it :D');
    //console.log('Wrong.');
}
//
var isIntro = prompt('Do you think I am an an Introvert?')          
if ((isIntro.toLocaleLowerCase() === 'y') || (isIntro.toLocaleLowerCase() === 'yes')){
    alert ('Yes '+userName+'! Inner-self is out best friend :D');
    //console.log('Correct.');
}
else
    if ((isIntro.toLocaleLowerCase()) === 'n' || (isIntro.toLocaleLowerCase() === 'no')) {
    alert ('You\'re wrong ' +userName+ ' :( but I\'m flexible to change to an extrovert if you offered some ice-cream on the go :D');
    //console.log('Wrong.');
}
//
var isFriend = prompt('Do you think I\'ll be a good friend?')          
if ((isFriend.toLocaleLowerCase() === 'y') || (isFriend.toLocaleLowerCase() === 'yes')){
    alert ('Indeed '+userName+'! Indeed :D');
   //console.log('Correct.');
}
else
    if ((isFriend.toLocaleLowerCase()) === 'n' || (isFriend.toLocaleLowerCase() === 'no')) {
    alert ('You don\'t have to be so cruel ' +userName+ ':( I think I deserve a little tiny chance to re-make a good impression  :D');
    //console.log('Wrong.');
} 