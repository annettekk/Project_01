let myName = 'Anna';
console.log(myName);
console.log(typeof myName);
let userName = prompt('Hi! What is your name, please?');
console.log(userName);

while (confirm("Are you 100% sure your name is "+ userName + '?') == false) {
    userName = prompt('Hi! What is your name, please?');
    
}

let welMsg = alert('Welcome to this page, ' + userName + '!');

document.write(userName);

function extraMsg(userColor){
    let msg = ', Yellow is my favourite color too!'
    if (userColor == 'yellow') {
        return document.write(msg)
    }
    
}

function colorChange(){
    let userColor = prompt('Give me a color!')
    extraMsg(userColor)
    //document.write(userColor)
    if (userColor == 'yellow') {
        return  document.body.style.backgroundColor = userColor
    //} else if ( typeof userColor === 'number') {
        //return document.write(' , This color is extraordinary.')
        
    } else {
        return document.body.style.backgroundColor = userColor}    
    } 

