(function(){
	angular
	.module('guitaristsQuiz')
	.factory("DataService", DataService);


	function DataService (){
		var dataObj = {
			guitaristsData: guitaristsData,
			quizQuestions: quizQuestions,
			correctAnswers: correctAnswers
		};
		return dataObj;
	}

	var correctAnswers = [2, 3, 1, 3, 1, 2, 2, 0, 2, 1];

	var quizQuestions  = [
	{
		type: "text",
		text: "Which one of these bands Kerry King played in?",
		possibilities: [
		{
			answer: "Metallica"
		},
		{
			answer: "Anthrax"
		},
		{
			answer: "Megadeth"
		},
		{
			answer: "Judas Priest"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "What is country is Alexi Laiho from?",
		possibilities: [
		{
			answer: "United States"
		},
		{
			answer: "England"
		},
		{
			answer: "Canada"
		},
		{
			answer: "Finland"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "image",
		text: "Which of these is KK Downing?",
		possibilities: [
		{
			answer: "http://lukaszhapak.pl/quiz/img/kerry-king.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/kk-downing.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/johnnyramone.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/alexi_laiho.jpg"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "image",
		text: "Which of these is Wojciech Hoffman?",
		possibilities: [
		{
			answer: "http://lukaszhapak.pl/quiz/img/HansenKai.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/jeff-hanneman.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/James_Hetfield.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/wojciech_hoffmann.jpg"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "When Glenn Tipton was born?",
		possibilities: [
		{
			answer: "1945"
		},
		{
			answer: "1947"
		},
		{
			answer: "1953"
		},
		{
			answer: "1961"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "What guitar used Johnny Ramone?",
		possibilities: [
		{
			answer: "Gibson"
		},
		{
			answer: "Hamer"
		},
		{
			answer: "Mosrite"
		},
		{
			answer: "Ibanez"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "Who invented 'spider chord'?",
		possibilities: [
		{
			answer: "Kerry King"
		},
		{
			answer: "Johnny Ramone"
		},
		{
			answer: "Dave Mustaine"
		},
		{
			answer: "KK Downing"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "image",
		text: "Which of these is Kai Hansen?",
		possibilities: [
		{
			answer: "http://lukaszhapak.pl/quiz/img/HansenKai.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/Glenn-Tipton.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/Dave-Mustaine.jpg"
		},
		{
			answer: "http://lukaszhapak.pl/quiz/img/kerry-king.jpg"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "Which one of these bands Dave Mustaine played in?",
		possibilities: [
		{
			answer: "Slayer"
		},
		{
			answer: "Exodus"
		},
		{
			answer: "Metallica"
		},
		{
			answer: "Overkill"
		}
		],
		selected: null,
		correct: null
	},
	{
		type: "text",
		text: "What is genre of Jeff Hanneman?",
		possibilities: [
		{
			answer: "Hard rock"
		},
		{
			answer: "Thrash Metal"
		},
		{
			answer: "Punk rock"
		},
		{
			answer: "Heavy Metal"
		}
		],
		selected: null,
		correct: null
	}
	];
	var guitaristsData = [
	{
		name: "James Hetfield",
		image_url: "http://lukaszhapak.pl/quiz/img/James_Hetfield.jpg",
		bands: "Metallica",
		guitars: "Gibson, Jackson, ESP",
		genre: "Thrash Metal",
		description: "James Alan Hetfield (born August 3, 1963) is an American musician, singer and songwriter known for being the co-founder, lead vocalist, rhythm guitarist and main songwriter for the American heavy metal band Metallica. Hetfield is mainly known for his intricate rhythm playing, but occasionally performs lead guitar duties and solos, both live and in the studio. Hetfield co-founded Metallica in October 1981 after answering a classified advertisement by drummer Lars Ulrich in the Los Angeles newspaper The Recycler. Metallica has won nine Grammy Awards and released nine studio albums, three live albums, four extended plays and 24 singles. In 2009, Hetfield was ranked at no. 8 in Joel McIver's book The 100 Greatest Metal Guitarists,[1] and ranked at no. 24 by Hit Parader on their list of the 100 Greatest Metal Vocalists of All Time. In Guitar World's poll, Hetfield was placed as the 19th greatest guitarist of all time, as well as being placed second (along with Metallica lead guitarist Kirk Hammett) in The 100 Greatest Metal Guitarists poll of the same magazine. Rolling Stone placed Hetfield as the 87th greatest guitarist of all time."
	},
	{
		name: "Dave Mustaine",
		image_url: "http://lukaszhapak.pl/quiz/img/Dave-Mustaine.jpg",
		bands: "Metallica, Megadeth",
		guitars: "B.C Rich, Ibanez, Jackson, ESP, Dean",
		genre: "Thrash Metal",
		description: "David Scott 'Dave' Mustaine (born September 13, 1961) is an American musician, singer, songwriter, actor and author. He is best known as the co-founder, guitarist, and lead singer of the American thrash metal band Megadeth, and the original lead guitarist and co-founder of the American thrash metal band Metallica. He also invented 'spider chord' technique."
	},
	{
		name: "Johnny Ramone",
		image_url: "http://lukaszhapak.pl/quiz/img/johnnyramone.jpg",
		bands: "Ramones",
		guitars: "Fender, Mosrite",
		genre: "Punk Rock",
		description: "John William Cummings (October 8, 1948 – September 15, 2004), better known by his stage name Johnny Ramone, was an American guitarist and songwriter, best known for being the guitarist for the punk rock band the Ramones. He was a founding member of the band, and remained a member throughout the band's entire career. He died from prostate cancer on September 15, 2004."
	},
	{
		name: "Wojciech Hoffman",
		image_url: "http://lukaszhapak.pl/quiz/img/wojciech_hoffmann.jpg",
		bands: "Turbo",
		guitars: "Gibson, Ibanez",
		genre: "Heavy Metal, Hard Rock, Thrash Metal",
		description: "Wojciech Maciej Hoffmann (born February 1, 1955 in Brzeg Dolny) polish rock guitarist member of: Turbo, also played with: Non Iron, Czerwone Gitary."
	},
	{
		name: "Kerry King",
		image_url: "http://lukaszhapak.pl/quiz//img/kerry-king.jpg",
		bands: "Megadeth, Slayer",
		guitars: "B.C Rich",
		genre: "Thrash Metal",
		description: "Kerry Ray King (born June 3, 1964) is an American musician, best known as a guitarist for the American thrash metal band Slayer. He co-founded the band with Jeff Hanneman in 1981 and has been a member ever since. He became lead songwriter for the band after Hanneman's death. King also played as lead guitarist with Dave Mustaine in 1984 with his band Megadeth."
	},
	{
		name: "Jeffrey Hanneman",
		image_url: "http://lukaszhapak.pl/quiz/img/jeff-hanneman.jpg",
		bands: "Slayer",
		guitars: "Gibson, B.C Rich, Jackson, ESP",
		genre: "Thrash Metal",
		description: "Jeffrey John 'Jeff' Hanneman (January 31, 1964 – May 2, 2013) was an American musician, best known as a founding member of the American thrash metal band Slayer. Hanneman contributed both lyrical and musical material to every Slayer album and wrote the songs 'Raining Blood', 'War Ensemble,' 'South of Heaven,' 'Seasons in the Abyss,' and 'Angel of Death,' all of which have been played at almost every live Slayer performance after their respective compositions. He had his own genre guitar, the ESP Jeff Hanneman genre model."
	},
	{
		name: "Kenneth 'K.K.' Downing",
		image_url: "http://lukaszhapak.pl/quiz//img/kk-downing.jpg",
		bands: "Judas Priest",
		guitars: "Gibson, Hamer",
		genre: "Heavy Metal",
		description: "Kenneth 'K. K.' Downing, Jr. (born 27 October 1951) is an English Grammy Award winning guitarist, songwriter and founding member of the British heavy metal band Judas Priest.",
	},
	{
		name: "Glenn Tipton",
		image_url: "http://lukaszhapak.pl/quiz//img/Glenn-Tipton.jpg",
		bands: "Judas Priest",
		guitars: "Fender, Gibson, Hamer, ESP",
		genre: "Heavy Metal",
		description: "Glenn Raymond Tipton (born 25 October 1947) is an English Grammy Award-winning guitar player and songwriter. Often noted for his complex playing style and classically influenced solos, he is best known as one of the lead guitarists for heavy metal band Judas Priest.",
	},
	{
		name: "Kai Hansen",
		image_url: "http://lukaszhapak.pl/quiz/img/HansenKai.jpg",
		bands: "Helloween, Gamma Ray, Unisonic",
		guitars: "Gibson, ESP",
		genre: "Heavy Metal, Power Metal",
		description: "Kai Michael Hansen (born 17 January 1963 in Hamburg, West Germany) is a heavy metal guitarist and vocalist. Hansen is the founder, lead guitarist, and vocalist of power metal band Gamma Ray. He is also the co-founder and former member of German metal band Helloween. He is a prominent figure in power metal and has sold millions of albums worldwide. He is regarded as 'the godfather of power metal', having founded three seminal bands in the genre. In 2011, he joined the band Unisonic featuring former Helloween vocalist Michael Kiske."
	},
	{
		name: "Alexi Laiho",
		image_url: "http://lukaszhapak.pl/quiz/img/alexi_laiho.jpg",
		bands: "Children of Bodom",
		guitars: "ESP",
		genre: "Thrash Metal, Death Metal",
		description: "Alexi 'Wildchild' Laiho (born Markku Uula Aleksi Laiho; 8 April 1979) is a Finnish guitarist, composer, and vocalist. He is best known as the lead guitarist, lead vocalist and founding member of the melodic death metal band Children of Bodom, and is also the guitarist for Sinergy and Kylähullut. He has previously played with Thy Serpent and Impaled Nazarene on occasion, as well as Warmen and Hypocrisy."
	},

	];

})();

