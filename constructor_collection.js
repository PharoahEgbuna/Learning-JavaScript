
"use strict";

function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
    this.show = function() {
        console.log(`The painting "${this.title}" was made by ${this.artist} in ${this.date}`);
    }
};

let images = {
    list: [],
    
    add: function(title, artist, date) {
        let obj = new Image(title, artist, date);
        this.list.push(obj);
    },
    
    contains: function(title) {
        for (let painting of this.list) {
            if (title == painting.title) {
                console.log("True");
                break;
            }
        }
    },

    show: function() {
        for ( let painting of this.list) {
            painting.show();
        }
    },

    clear: function() {
        this.list.length = 0;
    },

    edit: function(title, artist, date) {
        for (let painting of this.list) {
            if (title == painting.title) {
                painting.artist = artist;
                painting.date = date;
            }
        }
    },

    delete: function(title) {
        let i = 0;
        for (let painting of this.list) {
            if (title == painting.title) {
                this.list.splice(i, 1);
            }
            i += 1
        }
    }


}

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.show();

images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);

images.delete('The Last Supper');

images.show();

