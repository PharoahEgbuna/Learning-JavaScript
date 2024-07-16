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
    
    let userNum; 
    
    let quitProg = false;
    
    while (quitProg === false) {
        
        userNum = Number(prompt("Enter the number for the following optoins (1-5): display first contact, display second contact, display all contacts, add contact, exit program."));
        
        if (userNum === 1) {
            console.log(`${contacts[0].name} ${contacts[0].phone} ${contacts[0].phone}`);
        } else if (userNum === 2) {
            console.log(`${contacts[contacts.length - 1].name} ${contacts[contacts.length - 1].phone} ${contacts[contacts.length - 1].email}`)
        } else if (userNum === 3) {
            for (let contact of contacts) {
                for (let field in contact) {
                    console.log(contact[field]); 
                }
            }
        } else if (userNum === 4) {
            let newContact = {};
            
            newContact.name = prompt("Enter name.");
            newContact.phone = prompt("Enter phone number.");
            newContact.email = prompt("Enter email.");
            
            if (newContact.name && newContact.phone && newContact.email) {
                contacts[contacts.length] = newContact;
                console.log("Contact entered");
            }
        } else if (userNum === 5) {
            quitProg = true;
        }
    }