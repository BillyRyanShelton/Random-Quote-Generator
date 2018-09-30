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
{quote:"Just because someone stumbles and loses their path, doesn't mean they're lost forever. Sometimes, we all need a little help.", source: "Professor X", citation: "X-Men: Days of Future Past", year:"2014"},
{quote:"Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can't do it.  If you want something, go get it.  Period.", source: "Chris Gardner", citation: "The Pursuit of Happiness", year:"2006"},
{quote:"All we have to decide is what to do with the time that is given to us.", source: "Gandalf", citation: "Lord of the Rings: The Fellowship of the Ring", year:"2001"},
{quote:"Nobody is gonna hit as hard as life, but it ain't about how hard you can hit.  It's how hard can you get hit and keep moving forward.  It's how much can you take, and keep moving forward.  That's how winning is done.", source: "Rocky", citation: "Rocky Balboa", year:"2006"},
{quote:"In this life time, you don't have to prove nothing to nobody, except yourself.  And after what you've been through, if you haven't done that by now, it ain't gonna never happen.", source: "Fortune", citation: "Rudy", year:"1993"},
{quote:"Oh yes, the past can hurt.  But you can either run from it, or learn from it.", source: "Rafiki", citation: "The Lion King", year:"1994"},
{quote:"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.", source: "Jordan Belfort", citation: "The Wolf of Wall Stree", year:"2013"},
{quote:"I've missed more than 9000 shots in my career.  I've lost almost 300 games.  26 times I've been trusted to take the game winning shot and missed.  I've failed over and over and over again in my life.  And that is why I succeed.", source: "Michael Jordan"},
{quote:"Twenty year from now you will be more disappointed by the things that you didn't do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", source: "Mark Twain"},
{quote:"It does not matter how slowly you go as long as you do not stop.", source: "Confucius"},
{quote:"The only way to do great work is to love what you do.", source: "Steve Jobs"},
{quote:"In my walks, every man I meet is my superior in some way, and in that I learn from him.", source: "Ralph Waldo Emerson"},
{quote:"Big things have small beginnings.", source: "David", citation: "Prometheus", year:"2012"},
{quote:"Don't count the days, make the days count.", source: "Muhammad Ali"},
//{quote:"", source: "", citation: "", year:""}
];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
	return array[Math.floor(Math.random()*array.length)]
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
	var quoteObj = getRandomQuote(quotes);
	//var quote = quoteObj.quote;
	var string = "";
	string = '<p class="quote"> ' + quoteObj.quote + '</p>';
	string += '<p class="source">' + quoteObj.source;
	if(quoteObj.hasOwnProperty('citation')) {
		string += '<span class="citation">' + quoteObj.citation + '</span>';
	} if(quoteObj.hasOwnProperty('year')) {
		string += '<span class="year">' + quoteObj.year + '</span>';
	} string += '</p>';
	document.getElementById('quote-box').innerHTML = string;
}

//a random initial quote is populated to the page
printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

