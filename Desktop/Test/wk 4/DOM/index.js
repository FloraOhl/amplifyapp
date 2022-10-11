`use strict`;

/*console.log(document.querySelector('h1'));
//* document  and window objects
console.log(this)*/
console.log(window);
//* Getting data via window object
//? browser width and height
console.log(window.innerHeight);
console.log(window. innerWidth);

//*Querying or getting the DOM
const body=document.querySelector('body');
const header=document.querySelector('header');
const main=document.querySelector('h2');
const paragraph=document.querySelector('p');

//* QuerySelector() returns the first element matching the condition
console.log (paragraph);

//* querySelectorAll()


const allParagraphs=document.querySelectorAll('p')
console.log(allParagraphs);

//*getElementByTagName()
const.span=document.getElementsByTagName('span')
console.log (span)

//*Getting elements by ID and class using getElements()and getSelecteor()
const h3=getElementByid('heading-3')

console.log (h3Id);
const h3QueryId =document.querySelector('')