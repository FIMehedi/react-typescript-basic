import React, { useState } from 'react';
import { IContact } from './Contacts';

interface IProps {
    contacts: IContact[];
    setContacts: (contacts: IContact[]) => void;
}

const AddContact = ({ contacts, setContacts }: IProps) => {

    const [contact, setContact] = useState<IContact>({
        name: '',
        email: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        setContacts([...contacts, contact]);
        setContact({
            name: '',
            email: ''
        });
    };

    return (
        <div>
            <input onChange={handleChange} value={contact.name} name="name" type="text" placeholder="Name" />
            <input onChange={handleChange} value={contact.email} name="email" type="email"placeholder="Email" />
            <input onClick={handleSubmit} className="btn" type="submit" value="Submit" />
        </div>
    );
};

export default AddContact;