import React, { useState } from 'react';
import AddContact from './AddContact';
import Contact from './Contact';

export interface IContact {
    name: string;
    email: string;
}

const Contacts = () => {

    const [contacts, setContacts] = useState<IContact[]>([]);

    const handleRemove = (email: string) => {
        setContacts(contacts.filter(c => c.email !== email));
    };

    return (
        <div>
            <AddContact contacts={contacts} setContacts={setContacts} />
            {
                contacts.map((contact, index) => (
                    <Contact
                        key={index}
                        name={contact.name}
                        email={contact.email}
                        handleRemove={handleRemove} />
                ))
            }
        </div>
    );
};

export default Contacts;