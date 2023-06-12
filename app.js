let myName = 'Anna';
console.log(myName);
console.log(typeof myName);
let userName = prompt('Hi! What is your name, please?');
console.log(userName);

function confirmName(){
    let nameCheck = confirm("Are you 100% sure your name is "+ userName + '?')
while (!nameCheck) {
    userName = prompt('Hi! What is your name, please?');
    
} }

confirmName()

let welMsg = alert('Welcome to this page, ' + userName + '!');

document.write(userName);

function extraMsg(userColor){
    let msg = ', AAAAa! Yellow is my favourite color too!'
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

//let n=0
//let x=0
//while (n<3){
    //n++
    //x+=n
    //console.log(n)
    //console.log(x)

    //if (x>3) {
        //break
    //}
//}
function cats(){
    let output = '';
    let catCount = prompt("How many cats do you want?");
    let printedNumber = 1
    for (let i=0; i<catCount; i++) {
        output = '<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRzvY7IfpAyTea5ScaZblBonRjA-mxc4zAg&usqp=CAU" alt="superCat">'
        document.write(output + printedNumber)
        printedNumber += 1
    }
    

    //let catCount = prompt("How many cats do you want?");
    //let catImage = '<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRzvY7IfpAyTea5ScaZblBonRjA-mxc4zAg&usqp=CAU" alt="superCat">'
    //return document.write(catCount*catImage)
 }
