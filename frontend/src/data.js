const barvy = {
	aqua: "#00FFFF",
	Khaki: "#4B5320",
	světlá_královsky_modrá: "#007FFF",
	bílá: "#FFFFFF",
	bronzová: "#CD7F32",
	burgundská: "#900020",
	cyanová: "#00FFFF",
	čokoládově_hnědá: "#7B3F00",
	černá: "#000000",
	červená: "#FF0000",
	egyptská_modř: "#1034A6",
	fialová: "#50007F",
	hnědá: "#964B00",
	indigová: "#00416A",
	indigová: "#4B0082",
	muslimská_zeleň: "#009000",
	jadeová: "#00A86B",
	jantarová: "#FFBF00",
	béžová: "#C3B091",
	světle_žlutá: "#F0E68C",
	kobaltová: "#0047AB",
	korálová: "#FF7F50",
	krémová: "#FFFDD0",
	lasturová: "#FFF5EE",
	lesní_zeleň: "#228B22",
	levandulová: "#E6E6FA",
	levandulová_zčervenalá: "#FFF0F5",
	lněná: "#FAF0E6",
	lososová: "#FA8072",
	magenta: "#FF00FF",
	meruňková: "#FBCEB1",
	mayská_modř: "#73C2FB",
	modrá: "#0000FF",
	nachová: "#D66984",
	navajová_bílá: "#FFDEAD",
	nebesky_modrá: "#87CEEB",
	námořní_modř: "#000080",
	oranžová: "#FF8000",
	orchideová: "#DA70D6",
	půlnoční_modř: "#003366",
	purpurová: "#FF00FF",
	rajčatová: "#FF6347",
	růžová: "#FFC0CB",
	siena: "#882D17",
	středně_zelená: "#008000",
	stříbrná: "#C0C0C0",
	šedá: "#808080",
	tmavě_hnědá: "#654321",
	tmavě_modrá: "#00008B",
	tmavě_zelená: "#008000",
	ultramarínová: "#120A8F",
	rumělková: "#E34234",
	viridianová: "#40826D",
	zelená: "#00FF00",
	zlatá: "#FFD700",
	žlutá: "#FFFF00",
};

export let colorArr = [];

for (const barva in barvy) {
	colorArr.push({ name: barva.split("_").join(" "), hex: barvy[barva] });
}

export const stavOptions = [
	"Nový s visačkou",
	"Nový bez visačky",
	"Velmi dobrý",
	"Dobrý",
	"Uspokojivý",
];

export const velikosti = ["XS", "S", "M", "L", "XL", "XXL"];

export const brands = [
	"LUGGI",
	"Only",
	"Roxy",
	"Debenhams",
	"Wrangler & Lee",
	"ECCO shoes",
	"Sofia",
	"TIME OUT",
	"Chita",
	"Leontína",
	"UAX",
	"Wrangler",
	"Skechers",
	"Ed Hardy",
	"O'Neill",
	"Coach",
	"Max Mara",
	"Orsay",
	"Silveria",
	"TOPMAN",
	"Steilmann",
	"Optika Observer",
	"Intersport",
	"Casio",
	"Camel Active",
	"Nautica",
	"Magenta",
	"Elegance",
	"Cube",
	"House",
	"Nugget",
	"Camaieu",
	"SIX",
	"New Balance",
	"DaKine",
	"Adio",
	"G-Star RAW",
	"Timex",
	"Domani",
	"Zara Woman",
	"Alberto Fermani",
	"Bershka",
	"Penny Black",
	"Coccinelle",
	"Goldenpoint",
	"Modavi",
	"Klenoty TREND",
	"Armani",
	"Gatta",
	"Mulberry",
	"Comtessa",
	"Adidas",
	"Guess",
	"Lagerfeld",
	"Vagabond",
	"Chita kids",
	"Milavitsa",
	"Oxalis Dessous",
	"Bepon",
	"Perfect Fashion",
	"pietro filipi",
	"A3 Sport",
	"Etnies",
	"TAG Heuer",
	"Suunto",
	"Nixon",
	"Gas",
	"PLANEO Quick time",
	"Vigoss Jeans",
	"Kara",
	"F&F Móda",
	"Carpisa",
	"Esprit",
	"Savolis",
	"Levi's",
	"Hermès",
	"Marionnaud",
	"Baldinini",
	"Superdry",
	"Fokus optik",
	"Watch de luxe",
	"Tailor Made",
	"Peek & Cloppenburg",
	"Mothercare",
	"Yves Rocher",
	"Everlast",
	"Agent Provocateur",
	"Gap",
	"Chantall",
	"L'Occitane",
	"Errore",
	"Lambert",
	"KappAhl",
	"Burton",
	"Mondo",
	"Celio",
	"Peek&Cloppenburg",
	"Daniel Hechter",
	"Yaya",
	"New Yorker",
	"Botas",
	"Fornarina",
	"Dolce & Gabbana",
	"Quiksilver",
	"Sothys Paris",
	"Gaudí",
	"W Linie",
	"Springfield",
	"Primark",
	"Lara bags",
	"Retro Jeans",
	"Balenciaga",
	"Marc Jacobs",
	"Tom Tailor",
	"Time",
	"Jennyfer",
	"Zara kids",
	"ECOZZ",
	"Zlatolux",
	"Gucci",
	"Banana Republic",
	"Zara",
	"M-Original",
	"Affliction",
	"Anne Klein",
	"Swarovski",
	"Wojas",
	"Stones",
	"Foot Locker",
	"Tamaris",
	"Tosca Blu",
	"Latoya",
	"Famon",
	"Klenoty Aurum",
	"Crocs",
	"Europa juwel",
	"Michell",
	"Momon Fashion",
	"Sinéquanone",
	"Geox respira",
	"Mango",
	"Private Member",
	"Betsey Johnson",
	"Azzaro",
	"STORM",
	"Mixer",
	"Sensor",
	"Napapijri",
	"Festina",
	"Bijou Brigitte",
	"Dunlop",
	"Little Foot",
	"Ramsey London",
	"MCS",
	"Stefanel",
	"Umbro",
	"Kappa",
	"Billabong",
	"Loap",
	"Spleen",
	"Weidler",
	"DC Shoes",
	"Bluemarine",
	"Salamander",
	"Denim",
	"Aldo",
	"Calvin Klein",
	"Rum Jungle",
	"Takko",
	"Converse",
	"Bagger",
	"Marks & Spencer",
	"Stradivarius",
	"Marks and Spencer",
	"Junk Food",
	"Maxima",
	"Etam Lingerie",
	"Marella",
	"SportsDirect",
	"Carambola",
	"Ben Sherman",
	"Massimo Dutti",
	"Neo",
	"Scandinavia",
	"Prolook",
	"Promod",
	"Pako Lorente",
	"K2 Sports",
	"Rip Curl",
	"Oodji",
	"Paul Frank",
	"Hannah",
	"Lureka",
	"Baby Phat",
	"OILILY",
	"Trollbeads",
	"Miss Sixty",
	"STYX Mania",
	"Koton",
	"And?l Skateshop",
	"Garmin",
	"SASSOFONO",
	"Rieker",
	"Alpine Pro",
	"Carhartt",
	"Etam",
	"WeSC",
	"Lacoste",
	"Westige",
	"Salewa",
	"John Garfield",
	"Gabor",
	"Original Marines",
	"Yves Saint Laurent",
	"Domi",
	"Roces",
	"iDO",
	"Zlatokov",
	"d´Fashion",
	"Crystal Bijou",
	"Mexx",
	"Deichmann",
	"Hudy Sport",
	"Rina Mode",
	"Overnight",
	"JACK&JONES",
	"Police",
	"Delmas",
	"Topgal",
	"Infinite",
	"Présence",
	"Tommy Hilfiger",
	"Magic Child",
	"Meatfly",
	"Zara Home",
	"Gino Rossi",
	"Bugatti",
	"Ragazza",
	"Pupa",
	"Uncle Sam",
	"NORDBLANC",
	"TALLY WEiJL",
	"Gratiae",
	"Tatuum",
	"Pandora",
	"Sempre",
	"Saxoo London",
	"Le temps des cerises",
	"Optika Siloe",
	"Corial",
	"Louis Vuitton",
	"Vero moda",
	"éS",
	"Liška",
	"Hervis",
	"Terranova",
	"Estée Lauder",
	"Electric Visual",
	"Ba?a",
	"Pimkie",
	"Halens",
	"Jack Wolfskin",
	"Iron Fist",
	"Christian Lacroix",
	"Reebok",
	"Ecco",
	"Manufaktura",
	"Olip",
	"Versace jeans",
	"Alexander McQueen",
	"Moletka",
	"Brooks Brothers",
	"Samsonite",
	"Slovenka",
	"Ralph Lauren",
	"Cipo & Baxx",
	"Reporter",
	"Vans",
	"Sugarbird",
	"The One",
	"Shana",
	"Attrattivo",
	"Armani jeans",
	"Cesare Paciotti",
	"Robel",
	"La Martina",
	"Högl",
	"T.M. Lewin",
	"Pinko",
	"Envy",
	"Puma",
	"More&More",
	"Big star",
	"Horsefeathers",
	"Decalthon",
	"Septwolves",
	"Hackett London",
	"Segue",
	"Lintea",
	"Cottonfield",
	"Black Cube",
	"Theron",
	"Gate",
	"Represent",
	"Bushman",
	"Samdex",
	"Next",
	"Power",
	"C&A",
	"Loake",
	"Karen Millen",
	"Cropp Town",
	"Mohito",
	"Versace",
	"Calliope",
	"Humanic",
	"Concrete",
	"Blažek",
	"Emily the Strange",
	"Harvie & Hudson",
	"CAMP DAVID",
	"I AM",
	"Motivi",
	"Sofie & Jane",
	"Replay",
	"The North Face",
	"Pierre Cardin",
	"Bvlgari",
	"Superga",
	"Reserved",
	"Ermenegildo Zegna",
	"Volcom",
	"Intimissimi",
	"Nina Ricci",
	"Northwave",
	"Sizeer",
	"Fashion Couture",
	"G-Star",
	"MANIA",
	"Hello Kitty",
	"Nike",
	"Longchamp",
	"Victoria's Secret",
	"Prada",
	"Guru",
	"Litex",
	"Lush",
	"Vivienne Westwood",
	"Zoo York",
	"Otto Berg",
	"Swatch",
	"TATIANA",
	"Takko Fashion",
	"Devold",
	"Fox",
	"Campomaggi",
	"Chrono",
	"Met",
	"Chanel",
	"Aeronautica Militare",
	"Marlboro Classics",
	"Ulla Popken",
	"Happy Socks",
	"Danea",
	"Pepe Jeans",
	"Circa",
	"Lamarc",
	"Independent",
	"Gant Woman",
	"Rich & Royal",
	"Gant kids",
	"Benetton",
	"Montre",
	"Reef",
	"Gold Point",
	"Frederick's of Hollywood",
	"7camicie",
	"Link.",
	"Office shoes",
	"Peak Performance",
	"Favab",
	"Arc'teryx",
	"Abercrombie & Fitch",
	"Forum",
	"Icebreaker",
	"Church",
	"Pull & Bear",
	"Escada",
	"Wildcat",
	"Bagland",
	"OZETA",
	"Lonsdale",
	"Crystal skies",
	"Alo Diamonds",
	"Tezenis",
	"Smartwool",
	"Looke",
	"Cropp",
	"Junior fashion club",
	"Mustang",
	"Exisport",
	"Fugu",
	"Progress",
	"Heelys",
	"Diesel",
	"Adamis",
	"Grand Optical",
	"Bench",
	"Lindex",
	"Sir Joseph",
	"Tuzzi",
	"Warmpeace",
	"DF",
	"Deuter",
	"Cerruti",
	"DVS Shoes",
	"Michael Kors",
	"Gant",
	"Jackpot",
	"Reno",
	"Protest",
	"Corner",
	"CCC",
	"EXE Unltd.",
	"DEFAKTO",
	"Marína Rinaldi",
	"Sofia Silver Jewelry",
	"Von Dutch",
	"Paco Romano",
	"Christian Dior",
	"Marc O'Polo",
	"Nara Camicie",
	"s.Oliver",
	"Sportalm",
	"Rockino",
	"Desigual",
	"Burberry",
	"Rejoice",
	"Luciano Barachini",
	"Apanage",
	"Calzedonia",
	"Alain Delon",
	"Cielo Venezia 1270",
	"Killtec",
	"BiBA",
	"H&M",
	"Giorgio Armani",
	"Geox",
	"Liu Jo",
	"Thomas Sabo",
	"Kara Trutnov",
	"Funstorm",
	"Fallen",
	"Stiefelkönig",
	"Mirror",
	"Sweety",
	"Italgold",
	"Ecko unltd.",
	"CHIBS",
	"Tornado",
	"French Connection",
	"Eastpak",
	"Victorinox",
	"Allea",
	"Gold Point Diamonds",
	"DKNY",
	"MOLOKO",
	"Orchestra",
	"Tilak",
	"So?a shoes",
	"Triola",
	"Bandolera",
	"Danae",
	"U.S. Polo",
	"Beltissimo",
	"Vega",
	"Local B",
	"Ann Christine",
	"Gerry Weber",
	"Hilditch & Key",
	"Salomon",
	"F&F",
	"Topshop",
	"Skiny",
	"Hugo Boss",
	"Triumph",
	"Chica & Chico",
	"Supremebeing",
	"Viktor & Rolf",
	"Pull&Bear",
	"Sea to Summit",
	"Schiesser",
];
