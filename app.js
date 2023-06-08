let myName = 'Anna';
console.log(myName);
console.log(typeof myName);
let userName = prompt('Hi! What is your name, please?');
console.log(userName);
//confirm("Are you 100% sure your name is " + userName + '?');
while (confirm("Are you 100% sure your name is "+ userName + '?') == false) {
    userName = prompt('Hi! What is your name, please?');
    
}

let welMsg = alert('Welcome to this page, ' + userName);

document.write(userName);
let userColor = prompt('Give me a color!')
document.body.style.backgroundColor = userColor
if (userColor === 'yellow') {
    document.write(' Yellow is my favourite color too!');
} else {
    document.write(' ')
}
