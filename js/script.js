// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [{quote:"Adapt what is useful, reject what is useless, and add what is specifically your own.", source: "Bruce Lee"}, 
{quote:"For me life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.", source: "Arnold Schwarzenegger"},
{quote:"A man can change his stars. I won't spend the rest of my life as nothing.", source: "Heath Ledger", citation: "A Knight's Tale", year: "2001"},
{quote:"Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water my friend.", source: "Bruce Lee"},
{quote:"Until you start believing in yourself, you ain't gonna have a life!", source: "Rocky", citation: "Rocky Balboa", year:"2006"},
{quote:"Do, or do not. There is no 'try'.", source: "Master Yoda", citation: "The Empire Strikes Back", year: "1980"},
{quote:"The problem is not the problem.  The problem is your attitude about the problem.", source: "Captain Jack Sparrow", citation: "Pirates of the Caribbean:  The Curse of the Black Pearl", year:"2003"},
{quote:"Nothing in the world can take the place of persistance.  Talent will not; Nothing is more common than" +
" unsuccessful men with talent.  Genius will not; unrewarded genius almost a proverb.  Education will not;"  +
" The world is full of educated derelicts.  Persistance and determination alone are omnipotent.", source: "unknown"},
{quote:"Never tell me the odds.", source: "Han Solo", citation: "Star Wars", year: "1977"},
{quote:"Just because someone stumbles and loses their path, doesn't mean they're lost forever. Sometimes, we all need a little help.", source: "Professor X", citation: "X-Men: Days of Future Past", year:"2014"}
];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
	return array[Math.floor(Math.random()*array.length)]
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
	var quoteObj = getRandomQuote(quotes);
	var quote = quoteObj.quote;
	var string = "";
	string = '<p class="quote"> ' + quote + '</p>';
	document.getElementById('quote-box').innerHTML = string;

	// var quoteText = quoteObj.quote;
	// var quoteAuthor = quoteObj.source;
	// if(quoteObj.hasOwnProperty('citation'){
	// 	var quoteCitation = quoteObj.citation;
	// } else { var quoteCitation = '';}
	// if(quoteObj.hasOwnProperty('year'){
	// 	var quoteYear = quoteObj.year;
	// } else {var quoteYear = '';}
	
}

//printQuote(quotes);
//a random initial quote is populated to the page
printQuote();

//note to self: The () causes the function to be executed immediately and 
//the return result is passed to addEventListener(). That is not what you want. 
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

