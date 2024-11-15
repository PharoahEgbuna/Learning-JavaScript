"use strict";

let collection = [ 
    {title: "Mona Lisa", artist: "Leondaro da Vinci", date: 1503},
    {title: "The Last Supper", artist: "Leondaro da Vinci", date: 1495},
    {title: "Starry Night", artist: "Vincent van Gogh", date: 1889},
    {title: "The Scream", artist: "Edvard Munch", date: 1893},
    {title: "Guernica", artist: "Pablo Picasso", date: 1937},
    {title: "The Kiss", artist: "Gustav Klimt", date: 1907},
    {title: "Girl With a Pearl Earring", artist: "Johannes Vermeer", date: 1665},
    {title: "The Birth of Venus", artist: "Sandro Botticelli", date: 1485},
    {title: "Las Meninas", artist: "Diego Velázquez", date: 1656},
    {title: "The Creation of Adam", artist: "Michelangelo", date: 1512} ]
    

for (let painting of collection) {
    console.log(`The painting "${painting.title}" was made by ${painting.artist} in ${painting.date}`);
};