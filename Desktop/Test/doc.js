document.querySelector('.btn').addEventListener("click", clickDemo)
function clickDemo(){
 console.log("Hi there")
}
document.querySelector('.btn').addEventListener("dblclick", dblclickDemo)
function dblclickDemo(){
 alert("This is a demonstration of how to create a double-click event")
}
let greetings = document.querySelector('p');
document.querySelector('input').addEventListener("keyup", captureInput)
function captureInput(e){
 greetings.innerText = (`Hello ${e.target.value}, welcome to my website.`)
}