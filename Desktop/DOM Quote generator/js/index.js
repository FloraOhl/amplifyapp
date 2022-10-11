`use strict`

let quotes = [
    "You miss 100% of the shots you don't take",
    'One must have chaos in oneself to give birth to a dancing star',
    "We're all travelling through time together, everyday of our lives. All we can do is do our best to relish this remarkable ride.",
    "If you think you can do a thing or think you can't do a thing, you're right.",
    'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.',
    'Advance confidently in the direction of  your dreams, and success will meet you unexpected common hours.',
    'If everything happens by chance, the result is inevitable.',
    "There's something wrong with this yogurt.' Ah, that's not yogurt, that's mayonnaise...' 'ah, right-o then.",
    'The axe forgets, but the tree remembers!',
    'Be yourself; everyone else is already taken.',
  ];

  return getRandomArrayItem(quotes)
  //console.log( quotes.length);
 // console.log(quotes[2]);
 let randomNumber= Math.floor(Math.random()* quotes.lenght);
  console.log(randomNumber);
  console.log(quotes[randomNumber]);

  
function getRandomIndex( array){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()* (max-min+1)-min);

}
function getRandomArrayItem(array)(
    let index = getRandom(0,array.length-1)
    console.log(index);
    return.array(index);
)
console.log(getRandomQuotes));
  

