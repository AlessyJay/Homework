// Object
// No.1 Build JavaScript Objects
// var myDog = {
//     // Only change code below this line
//       name: 'Best',
//       legs: 4,
//       tails: 1,
//       friends: []
    
//     // Only change code above this line
//     };

// No.2 Accessing Object Properties with Dot Notation
// Setup
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
  
//   // Only change code below this line
  
//   var hatValue = testObj.hat;      // Change this line
//   var shirtValue = testObj.shirt;    // Change this line

// No.3 Accessing Object Properties with Bracket Notation
// Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
  
//   // Only change code below this line
  
//   var entreeValue = testObj['an entree'];   // Change this line
//   var drinkValue = testObj['the drink'];    // Change this line

// No.4 Accessing Object Properties with Variables
// Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
  
//   var playerNumber = 16;       // Change this line
//   var player = testObj[playerNumber];   // Change this line

// No.5 Updating Object Properties
// Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   // Only change code below this line
//   myDog.name = 'Happy Coder';

// No.6 Add New Properties to a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark = 'woof';

// No.7 Delete Properties from a JavaScript Object
// Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
  
//   // Only change code below this line
//   delete myDog.tails;

// No.8 Using Objects for Lookups
// Setup
// function phoneticLookup(val) {
//     var result = "";
  
//     // Only change code below this line
//     var lookup = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//     };
//     result = lookup[val];
  
//     // Only change code above this line
//     return result;
//   }
  
//   phoneticLookup("charlie");

// No.9 Testing Objects for Properties
// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     } else {
//       return "Not Found";
//     }
//     // Only change code above this line
//   }

// No.10 Manipulating Complex Objects
// var myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     },
  
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//     }
//   ];

// No.11 Accessing Nested Objects
// var myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   var gloveBoxContents = myStorage.car.inside['glove box'];

// No.12 Accessing Nested Arrays
// var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
//   var secondTree = myPlants[1].list[1];

// No.13 Record Collection
