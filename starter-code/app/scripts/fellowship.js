console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id","middle-earth");

  for(i = 0; i < lands.length; i++){
    var landElement = document.createElement("article");
    var landText = document.createElement("h1");
    landText.textContent = lands[i];
    var id = lands[i].replace(/\s/g, '');
    landElement.setAttribute("id",id);
    landElement.appendChild(landText);
    middleEarth.appendChild(landElement);
  }

  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement("ul");

  for(i = 0; i < hobbits.length; i++){
    var individualHobbitElement = document.createElement("li");
    individualHobbitElement.textContent = hobbits[i];
    individualHobbitElement.setAttribute("class","hobbit");
    unorderedList.appendChild(individualHobbitElement);
  }
  var theShire = document.getElementById("TheShire");
  theShire.appendChild(unorderedList);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement("div");
  theRing.setAttribute("id","the-ring");
  theRing.setAttribute("class","magic-imbued-jewelry");
  theRing.addEventListener("click",nazgulScreech);

  var frodo = document.getElementsByTagName("li")[0];
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var aside = document.createElement("aside");
  var unorderedList = document.createElement("ul");

  for(i = 0; i < buddies.length; i++){
    var newBuddyElement = document.createElement("li");
    newBuddyElement.textContent = buddies[i];
    newBuddyElement.setAttribute("class","buddy");
    unorderedList.appendChild(newBuddyElement);
  }
  aside.appendChild(unorderedList);
  var rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(aside);

}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementsByTagName("li")[7];
  strider.textContent = 'Aragorn';
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitList = document.getElementsByTagName("li");
  var unorderedList = document.getElementsByTagName("ul")[1];
  for(i = 3; i >= 0; i--){
    unorderedList.appendChild(hobbitList[i]);
  }
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowShip = document.createElement("div");
  theFellowShip.className = "the-fellowship";
  var fellowshipList = document.getElementsByTagName("li");

  for (i = fellowshipList.length - 1; i >= 0; i--){
    alert(fellowshipList[i].textContent + " has joined the party!");
    theFellowShip.appendChild(fellowshipList[i]);
  }

  var rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(theFellowShip);
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementsByTagName("li")[8];
  gandalf.textContent = "Gandalf the White";
  gandalf.style.background = "white"
  gandalf.style.border = "thick solid gray"
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('the horn of Gondor has been blown! Boromir has been killed by the Uruk-hai!');
  var boromir = document.getElementsByTagName("li")[4];
  boromir.style["text-decoration"] = "line-through";

  var theFellowShip = document.getElementsByClassName("the-fellowship")[0];
  theFellowShip.removeChild(boromir);
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  //var theFellowShip = document.getElementsByClassName("the-fellowship")[0];
  var frodo = document.getElementsByTagName("li")[0];
  var sam = document.getElementsByTagName("li")[1];
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id","mount-doom");
  mountDoom.appendChild(frodo);
  mountDoom.appendChild(sam);
  var mordor = document.getElementById("Mordor");
  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  gollum.setAttribute("id","gollum");
  var theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);
}
weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var mountDoom = document.getElementById("mount-doom");
  var gollum = document.getElementById("gollum");
  mountDoom.removeChild(gollum);

  var hobbitList = document.getElementsByClassName("hobbit");
  var theShire = document.getElementById("TheShire");
  for(i = 0; i < hobbitList.length ; i++ ){
    theShire.appendChild(hobbitList[i]);
  }
  var buddyList = document.getElementsByClassName("buddy");
  var theFellowShip = document.getElementsByClassName("the-fellowship")[0];
  for(i = buddyList.length - 1; i >= 0 ; i-- ){
    theFellowShip.removeChild(buddyList[i]);
  }
}
