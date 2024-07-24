//Constructor
"use strict";
function Image(title, artist, date) { //constructor
    this.title = title;
    this.artist = artist;
    this.date = date;
};

//Factory
function getImage(title, artist, date) { //factory
    let obj = {};
    obj.title = title;
    obj.artist = artist;
    obj.date = date;
    
    return obj;
};

let collection1 = [
    new Image("Mona Lisa", "Leondaro da Vinci", 1503), 
    new Image("The Last Supper", "Leondaro da Vinci", 1495),
    new Image("Starry Night", "Vincent van Gogh", 1889),
    new Image("The Scream","Edvard Munch", 1893),
    new Image("Guernica", "Pablo Picasso", 1937),
    new Image("The Kiss","Gustav Klimt", 1907),
    new Image("Girl With a Pearl Earring","Johannes Vermeer", 1665),
    new Image("The Birth of Venus","Sandro Botticelli",1485),
    new Image( "Las Meninas", "Diego Velázquez", 1656),
    new Image("The Creation of Adam","Michelangelo", 1512)
];


let collection2 = [
    getImage("Mona Lisa", "Leondaro da Vinci", 1503), 
    getImage("The Last Supper", "Leondaro da Vinci", 1495),
    getImage("Starry Night", "Vincent van Gogh", 1889),
    getImage("The Scream","Edvard Munch", 1893),
    getImage("Guernica", "Pablo Picasso", 1937),
    getImage("The Kiss","Gustav Klimt", 1907),
    getImage("Girl With a Pearl Earring","Johannes Vermeer", 1665),
    getImage("The Birth of Venus","Sandro Botticelli",1485),
    getImage( "Las Meninas", "Diego Velázquez", 1656),
    getImage("The Creation of Adam","Michelangelo", 1512)
    
];

for (let painting of collection2) {
    console.log(`The painting "${painting.title}" was made by ${painting.artist} in ${painting.date}`);
}