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
    
    function showContact(contactList, index) {
        if (contactList instanceof Array && index < contactList.length) {
            return `${contactList[index].name} ${contactList[index].phone} ${contactList[index].email}`;
        } else {
            return "Index not found in contacts or array invalid.";
        }
    }
    
    function showAllContacts (contactList) {
        if (contactList instanceof Array) {
            for (let contact of contactList) {
                    for (let field in contact) {
                        console.log(contact[field]); 
                    }
                }
        }
    }
        
    function addNewContact (contactList, newName, newEmail, newPhone) {
        if (contactList instanceof Array && newName && newEmail && newPhone) {
            let newContact = {
                name: newName,
                phone: newPhone, 
                email: newEmail
            }
            contactList.push(newContact);
            return "Contact added.";
        }
    }
    
    
    
console.log(showContact(contacts, 4));
console.log(showAllContacts(contacts));
console.log(addNewContact(contacts, "Pharoah", "pharoah@gmail.com", "646-842-1217"));