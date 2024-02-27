import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ContactsContainer, BottomSection, ContactsHeader, Btn, IndividualContact, ContactBtn } from './Contacts.styles';
import { signOut } from '../../../api/user';
import { getContacts } from '../../../api/contact';

const Contacts = ({ user, setUser, notify }) => {
  const[contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const getAllContacts = async () => {
      const res = await getContacts(user);
      setContacts(res.data.contacts);
    }
    
    getAllContacts()
  }, []);

  const handleNew = () => {
    navigate('/newcontact');
  }

  const handleNavigate = (id) => {
    console.log(id)
    navigate(`/contact/${id}`)
  }

  return (
    <ContactsContainer>
      <BottomSection>
        <ContactsHeader>
          <h2>Contacts</h2>
          <Btn onClick={handleNew}>New Contact</Btn>
        </ContactsHeader>
        <div>
          {contacts.map((contact, index) => (
            <IndividualContact key={contact._id}>
              <p>{index + 1}.</p>
              <p>{contact.firstname + ' ' + contact.lastname}</p>
              <p>{contact.email}</p>
              <p>{contact.cell_phone}</p>
              <p>{contact.address}</p>
              <ContactBtn onClick={() => handleNavigate(contact._id)}>...</ContactBtn>
            </IndividualContact>
          ))}
        </div>
      </BottomSection>
    </ContactsContainer>
  )
}

export default Contacts