const infoMap = {

"asteroid_belt":{
"name":"Asteroid Belt",
"category":"Solar System Region",
"description":"Region between Mars and Jupiter containing rocky bodies.",
"history":{
"coined_by":"Alexander von Humboldt",
"year_named":"1808",
"discovered_by":"Giuseppe Piazzi",
"year_discovered":"1801",
"first_major_observation":"Discovery of Ceres"
},
"key_facts":{
"location":"Between Mars and Jupiter",
"largest_object":"Ceres"
},
"scientific_significance":[
"Planet formation",
"Primitive material"
],
"major_missions":["Dawn"],
"notable_events":["Ceres discovery"],
"fun_fact":"Asteroids are far apart."
},

"asteroids":{
"name":"Asteroids",
"category":"Small Solar System Bodies",
"description":"Rocky remnants from early solar system formation.",
"history":{
"coined_by":"William Herschel",
"year_named":"1802",
"discovered_by":"Giuseppe Piazzi",
"year_discovered":"1801",
"first_major_observation":"Ceres discovery"
},
"key_facts":{
"composition":"Rock and metal"
},
"scientific_significance":[
"Solar system formation"
],
"major_missions":["Dawn","OSIRIS-REx"],
"notable_events":["Asteroid impacts"],
"fun_fact":"Millions exist."
},

"comets":{
"name":"Comets",
"category":"Small Solar System Bodies",
"description":"Icy objects forming tails near the Sun.",
"history":{
"coined_by":"Ancient Greeks",
"year_named":"Ancient",
"discovered_by":"Ancient observers",
"year_discovered":"Prehistoric",
"first_major_observation":"Halley orbit prediction"
},
"key_facts":{
"composition":"Ice and dust"
},
"scientific_significance":[
"Organic molecules"
],
"major_missions":["Rosetta"],
"notable_events":["Rosetta landing"],
"fun_fact":"Tails point away from Sun."
},

"kuiper_belt":{
"name":"Kuiper Belt",
"category":"Solar System Region",
"description":"Region beyond Neptune containing icy objects.",
"history":{
"coined_by":"Gerard Kuiper",
"year_named":"1951",
"discovered_by":"Jewitt and Luu",
"year_discovered":"1992",
"first_major_observation":"First Kuiper object"
},
"key_facts":{
"location":"Beyond Neptune"
},
"scientific_significance":[
"Solar system origin"
],
"major_missions":["New Horizons"],
"notable_events":["Pluto flyby"],
"fun_fact":"Contains dwarf planets."
},

"intermediate_black_holes":{
"name":"Intermediate Black Hole",
"category":"Black Hole",
"description":"Black holes between stellar and supermassive sizes.",
"history":{
"coined_by":"Astrophysicists",
"year_named":"1970s",
"discovered_by":"Indirect detection",
"year_discovered":"2000s",
"first_major_observation":"HLX-1"
},
"key_facts":{
"mass":"100–10000 Suns"
},
"scientific_significance":[
"Galaxy evolution"
],
"major_missions":["Chandra"],
"notable_events":["HLX-1 detection"],
"fun_fact":"Very rare."
},

"stellar_black_holes":{
"name":"Stellar Black Hole",
"category":"Black Hole",
"description":"Formed from collapsing stars.",
"history":{
"coined_by":"John Wheeler",
"year_named":"1967",
"discovered_by":"Cygnus X-1",
"year_discovered":"1971",
"first_major_observation":"Cygnus X-1"
},
"key_facts":{
"mass":"5-50 Suns"
},
"scientific_significance":[
"Relativity studies"
],
"major_missions":["X-ray observatories"],
"notable_events":["First candidate 1971"],
"fun_fact":"Light cannot escape."
},

"supermassive_black_holes":{
"name":"Supermassive Black Hole",
"category":"Black Hole",
"description":"Black holes at galaxy centers.",
"history":{
"coined_by":"John Wheeler",
"year_named":"1967",
"discovered_by":"Sagittarius A",
"year_discovered":"1974",
"first_major_observation":"Sagittarius A"
},
"key_facts":{
"mass":"Millions Suns"
},
"scientific_significance":[
"Galaxy formation"
],
"major_missions":["Event Horizon Telescope"],
"notable_events":["First image 2019"],
"fun_fact":"Exists in most galaxies."
},

"spiral_galaxies":{
"name":"Spiral Galaxy",
"category":"Galaxy",
"description":"Galaxies with spiral arms.",
"history":{
"coined_by":"Edwin Hubble",
"year_named":"1926",
"discovered_by":"William Parsons",
"year_discovered":"1845",
"first_major_observation":"Andromeda spiral"
},
"key_facts":{
"example":"Milky Way"
},
"scientific_significance":[
"Star formation"
],
"major_missions":["Hubble"],
"notable_events":["Deep field"],
"fun_fact":"Our galaxy is spiral."
},

"elliptical_galaxies":{
"name":"Elliptical Galaxy",
"category":"Galaxy",
"description":"Smooth oval galaxies.",
"history":{
"coined_by":"Edwin Hubble",
"year_named":"1926",
"discovered_by":"Astronomers",
"year_discovered":"1900s",
"first_major_observation":"Galaxy surveys"
},
"key_facts":{
"shape":"Elliptical"
},
"scientific_significance":[
"Old stars"
],
"major_missions":["Hubble"],
"notable_events":["Galaxy classification"],
"fun_fact":"Few new stars."
},

"irregular_galaxies":{
"name":"Irregular Galaxy",
"category":"Galaxy",
"description":"Galaxies without defined shape.",
"history":{
"coined_by":"Edwin Hubble",
"year_named":"1926",
"discovered_by":"Astronomers",
"year_discovered":"1900s",
"first_major_observation":"Galaxy surveys"
},
"key_facts":{
"shape":"Irregular"
},
"scientific_significance":[
"Galaxy interactions"
],
"major_missions":["Hubble"],
"notable_events":["Magellanic Clouds"],
"fun_fact":"Often distorted."
},

"moon":{
"name":"Moon",
"category":"Natural Satellite",
"description":"Earth's natural satellite.",
"history":{
"coined_by":"Ancient",
"year_named":"Ancient",
"discovered_by":"Known since antiquity",
"year_discovered":"Prehistoric",
"first_major_observation":"Galileo 1609"
},
"key_facts":{
"distance":"384000 km"
},
"scientific_significance":["Tidal effects"],
"major_missions":["Apollo"],
"notable_events":["Moon landing 1969"],
"fun_fact":"Shows one face."
},

"titan":{
"name":"Titan",
"category":"Natural Satellite",
"description":"Largest moon of Saturn.",
"history":{
"coined_by":"John Herschel",
"year_named":"1847",
"discovered_by":"Huygens",
"year_discovered":"1655",
"first_major_observation":"Voyager"
},
"key_facts":{
"distance":"1.2 billion km"
},
"scientific_significance":[
"Methane lakes"
],
"major_missions":["Cassini"],
"notable_events":["Huygens landing"],
"fun_fact":"Methane rain exists."
},

"earth":{
"name":"Earth",
"category":"Planet",
"description":"Planet supporting life.",
"history":{
"coined_by":"Ancient",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Apollo photos"
},
"key_facts":{
"diameter":"12742 km"
},
"scientific_significance":[
"Life studies"
],
"major_missions":["ISS"],
"notable_events":["First Earth photo"],
"fun_fact":"71% water."
},

"mercury":{
"name":"Mercury",
"category":"Planet",
"description":"Closest planet to Sun.",
"history":{
"coined_by":"Romans",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Telescopes"
},
"key_facts":{
"distance":"58 million km"
},
"scientific_significance":[
"Solar physics"
],
"major_missions":["Messenger"],
"notable_events":["Messenger orbit"],
"fun_fact":"Year = 88 days."
},

"venus":{
"name":"Venus",
"category":"Planet",
"description":"Hottest planet.",
"history":{
"coined_by":"Romans",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Telescopes"
},
"key_facts":{
"distance":"108 million km"
},
"scientific_significance":[
"Greenhouse effect"
],
"major_missions":["Magellan"],
"notable_events":["Radar mapping"],
"fun_fact":"Rotates backward."
},

"mars":{
"name":"Mars",
"category":"Planet",
"description":"Red planet.",
"history":{
"coined_by":"Romans",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Galileo"
},
"key_facts":{
"moons":"2"
},
"scientific_significance":[
"Search for life"
],
"major_missions":["Perseverance"],
"notable_events":["Water evidence"],
"fun_fact":"Has Olympus Mons."
},

"jupiter":{
"name":"Jupiter",
"category":"Planet",
"description":"Largest planet.",
"history":{
"coined_by":"Ancient",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Galileo"
},
"key_facts":{
"distance":"778 million km"
},
"scientific_significance":[
"Gas giant"
],
"major_missions":["Juno"],
"notable_events":["Great Red Spot"],
"fun_fact":"Many moons."
},

"saturn":{
"name":"Saturn",
"category":"Planet",
"description":"Ringed planet.",
"history":{
"coined_by":"Romans",
"year_named":"Ancient",
"discovered_by":"Ancient",
"year_discovered":"Prehistoric",
"first_major_observation":"Galileo"
},
"key_facts":{
"distance":"1.4 billion km"
},
"scientific_significance":[
"Ring structure"
],
"major_missions":["Cassini"],
"notable_events":["Ring imaging"],
"fun_fact":"Could float."
},

"uranus":{
"name":"Uranus",
"category":"Planet",
"description":"Ice giant planet.",
"history":{
"coined_by":"Herschel",
"year_named":"1781",
"discovered_by":"Herschel",
"year_discovered":"1781",
"first_major_observation":"Telescopes"
},
"key_facts":{
"distance":"2.8 billion km"
},
"scientific_significance":[
"Ice giant"
],
"major_missions":["Voyager 2"],
"notable_events":["Flyby"],
"fun_fact":"Rotates sideways."
},

"neptune":{
"name":"Neptune",
"category":"Planet",
"description":"Farthest planet.",
"history":{
"coined_by":"Le Verrier",
"year_named":"1846",
"discovered_by":"Galle",
"year_discovered":"1846",
"first_major_observation":"Voyager 2"
},
"key_facts":{
"distance":"4.5 billion km"
},
"scientific_significance":[
"Atmospheric winds"
],
"major_missions":["Voyager 2"],
"notable_events":["Flyby"],
"fun_fact":"Fast winds."
},

"rockets":{
"name":"Rockets",
"category":"Spacecraft",
"description":"Vehicles used to reach space.",
"history":{
"coined_by":"Early engineers",
"year_named":"1900s",
"discovered_by":"Engineers",
"year_discovered":"1900s",
"first_major_observation":"V2 rocket"
},
"key_facts":{
"use":"Launch payloads"
},
"scientific_significance":[
"Space exploration"
],
"major_missions":["Apollo"],
"notable_events":["Moon missions"],
"fun_fact":"Escape gravity."
},

"satellites":{
"name":"Satellites",
"category":"Spacecraft",
"description":"Objects orbiting Earth.",
"history":{
"coined_by":"Modern science",
"year_named":"1957",
"discovered_by":"Humans",
"year_discovered":"1957",
"first_major_observation":"Sputnik"
},
"key_facts":{
"orbit":"Earth orbit"
},
"scientific_significance":[
"Communication"
],
"major_missions":["GPS"],
"notable_events":["Sputnik launch"],
"fun_fact":"Thousands orbit Earth."
},

"space_debris":{
"name":"Space Debris",
"category":"Space Objects",
"description":"Defunct objects in orbit.",
"history":{
"coined_by":"Space agencies",
"year_named":"1960s",
"discovered_by":"Tracking systems",
"year_discovered":"1960s",
"first_major_observation":"Radar tracking"
},
"key_facts":{
"orbit":"Earth orbit"
},
"scientific_significance":[
"Collision risk"
],
"major_missions":["Tracking missions"],
"notable_events":["Debris collisions"],
"fun_fact":"Travels fast."
},

"international_space_station":{
"name":"International Space Station",
"category":"Space Station",
"description":"Orbiting laboratory.",
"history":{
"coined_by":"NASA",
"year_named":"1998",
"discovered_by":"Humans",
"year_discovered":"1998",
"first_major_observation":"Crew 2000"
},
"key_facts":{
"altitude":"400 km"
},
"scientific_significance":[
"Microgravity research"
],
"major_missions":["Expeditions"],
"notable_events":["Continuous habitation"],
"fun_fact":"Visible from Earth."
},

"rovers":{
"name":"Rovers",
"category":"Spacecraft",
"description":"Robotic surface explorers.",
"history":{
"coined_by":"NASA",
"year_named":"1970",
"discovered_by":"Humans",
"year_discovered":"1970",
"first_major_observation":"Lunokhod"
},
"key_facts":{
"distance":"Varies"
},
"scientific_significance":[
"Planet exploration"
],
"major_missions":["Mars rovers"],
"notable_events":["Curiosity landing"],
"fun_fact":"Remote controlled."
}

};