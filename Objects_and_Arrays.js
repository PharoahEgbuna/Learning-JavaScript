let obj1 = {
    from: "North Carolina",
    to: "Chicago",
    price: 489
};

console.log(obj1.from);

let customer = {
    name: "John",
    surname: "Doe"
};

console.log(`${customer.name} ${customer.surname}`);

let library =[
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
]

let newBook = {
    title: "Learning JavasScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};

library.push(newBook);

console.log(library.length);
console.log(library[0].title)
console.log(library[1].title)
console.log(library[2].title)
console.log(library[3].title)

let selectedBooks = library.slice(-2);

library.shift();

console.log(library.length);
console.log(library[0].pages + library[1].pages + library[2].pages);


let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

let nextContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisqque@urna.ca"
};

contacts.push(nextContact);

console.log(contacts.length);
