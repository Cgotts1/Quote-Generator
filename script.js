let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("button");

let randomQuoteArray = [
    "That is a canvas sheet—the most versatile object known to man. It can be used to make tents, backpacks, shoes, stretchers, sails, tarpaulins, and I suppose, in the most dire of circumstances, it can be a surface on which to make art.", 
"There is only one bad word: taxes.",
"There's more than one crib tree in a forest. That's not a lesson, by the way, just a comment on lumber availability.",
"When people get too chummy with me, I like to call them by the wrong name to let them know I don’t really care about them.",
"I’ve cried twice in my life. Once when I was 7 and hit by a school bus. And then again when I heard that Li’l Sebastian had passed.",
"Capitalism: God’s way of determining who is smart and who is poor.",
"Crying: Acceptable at funerals and the Grand Canyon.",
"Fishing relaxes me. It’s like yoga, except I still get to kill something.",
"Great job, everyone. The reception will be held in each of our individual houses, alone.",
"History began on July 4, 1776. Everything that happened before that was a mistake.",
"Literally everything is a weapon, son. That folder, in my hands, is far deadlier than this bow of yours.",
"I have a hernia. I’ve had it for a while, and I’ve been ignoring it successfully. But uh, this morning, I made the mistake of sneezing. But as long as I sit still and don’t move my head or torso, I’m good. I got this.",
"Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.",
"Cowardice and weak-willed men… and hazelnuts.",
"Birthdays were invented by Hallmark to sell cards.",
"Any dog under fifty pounds is a cat and cats are useless.",
"I would rather bleed out than sit here and talk about my feelings for 10 minutes.",
"Give 100%. 110% is impossible. Only idiots recommend that.",
"There are only three ways to motivate people: money, fear, and hunger.",
"There are three acceptable haircuts: high and tight, crew cut, buzz cut.",
"Sting like a bee, but do not float like a butterfly. That’s ridiculous.",
"One rage every three months is permitted. Try not to hurt anyone who doesn’t deserve it.",
"Never half-ass two things. Whole-ass one thing.",
"I’d wish you the best of luck, but I believe luck is a concept created by the weak to explain their failures.",
"Don’t start chasing applause and acclaim. That way lies madness.",
"If any of you need anything at all, too bad. Deal with your problems yourselves, like adults.",
"I regret nothing. The end.",
"Give a man a fish and feed him for a day. Don’t teach a man to fish…and feed yourself. He’s a grown man. And fishing’s not that hard.",
"Keep your tears in your eyes—where they belong.",
"I was born ready. I’m Ron F***ing Swanson.",
"Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night if it meant nothing got done.",
"Friends: one to three is sufficient.",
"Fishing is for sport only. Fish meat is practically a vegetable.",
"Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.",
"There has never been a sadness that can’t be cured by breakfast food.",
"You had me at ‘Meat Tornado.",
"Why is everyone else so bad at eating?",
"When I eat, it is the food that is scared.",
"There’s only one thing I hate more than lying: skim milk. Which is water that’s lying about being milk.",
"Strippers do nothing for me… but I will take a free breakfast buffet anytime, anyplace.",
"I’m a simple man. I like pretty, dark-haired women and breakfast food.",
"Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.",
"Clear alcohols are for rich women on diets.",
"Put some alcohol in your mouth to block with words from coming out.",
"Just give me all the bacon and eggs you have. Wait … I worry what you heard was, ‘Give me a lot of bacon and eggs.’ What I said was, give me all the bacon and eggs you have. Do you understand?",
"I call this turf ‘n’ turf. It’s a 16-ounce T-bone and a 24-ounce porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.",
"If there were more food and fewer people, this would be a perfect party.",
"You’ve accidentally given me the food that my food eats.",
"An ideal night out, to me, is stepping onto my porch area and grilling up a thick slab of something’s flesh and then popping in a highlight reel from the WNBA.",
"Barbecues should be about one thing: good shared meat.",
"My first ex-wife’s name is Tammy. My second ex-wife’s name is Tammy. My Mom’s name is Tamara… she goes by Tammy.",
"I’m not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
"On my deathbed, my final wish is to have my ex-wives rush to my side so I can use my dying breath to tell them both to go to hell one last time.",
"I love being a father but there are a few things I miss: Silence. The absence of noise. One single moment undisturbed by the sounds of a children’s program called Doc McStuffins."
  ];


btn.addEventListener("click", function(){


const randomQuote = Math.floor(Math.random() * randomQuoteArray.length);
console.log(randomQuoteArray[randomQuote]);

quote.innerHTML = "<p>" + randomQuoteArray[randomQuote] + "</p>"
console.log(randomQuote)

person.innerHTML = "<p>" + "Ron Swanson" + "</p>"

})

