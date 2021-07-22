import React from 'react';

interface IProps {
    name: string;
    email: string;
    handleRemove: (email: string) => void;
}

const Contact = ({ name, email, handleRemove }: IProps) => {
    return (
        <div className="contact card">
            <div>
                <h5 className="name">{name}</h5>
                <p className="email">{email}</p>
            </div>
            <button onClick={() => handleRemove(email)} className="btn btn-remove">Remove</button>
        </div>
    );
};

export default Contact;