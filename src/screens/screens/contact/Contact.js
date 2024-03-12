import React, { useState, useEffect} from 'react';
import { getContact, destroyContact } from '../../../api/contact';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactPageContainer, ContactInfoContainer, ContactSectionContainer, BtnContainer, Btn, NotesContainer } from './Contact.styles';

const Contact = ({ user, notify }) => {
  const [contact, setContact] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const retrieveContact = async () => {
      const res = await getContact(user, id)
      console.log(res)
      setContact(res.data.contact)
    }

    retrieveContact();
  }, [])

  const handleBack = () => {
    navigate('/contacts')
  }

  const handleEdit = () => {
    navigate(`/updatecontact/${id}`)
  }

  const handleDeleteContact = async () => {
    try {
      let res = await destroyContact(user, id)
      console.log(res)
      if (res.status === 204) {
        notify('contact deleted')
        navigate('/contacts')
      }
    } catch(error) {
      notify('something went wrong', 'danger')
      console.log(error)
    }
  }

  return (
    <ContactPageContainer>
      <BtnContainer>
        <Btn onClick={handleBack}>back</Btn>
        <Btn onClick={handleEdit}>edit</Btn>
        <Btn onClick={handleDeleteContact}>delete</Btn>
      </BtnContainer>
      <div>
        <ContactSectionContainer>
          <h2>Contact Information</h2>
          <ContactInfoContainer>
            <p>Customer ID:</p>
            <p>{contact._id}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Name:</p>
            <p>{contact.firstname + ' ' + contact.lastname}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Email:</p>
            <p>{contact.email}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Cell Phone:</p>
            <p>{contact.cell_phone}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Address:</p>
            <p>{contact.address}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Unit Address:</p>
            <p>{contact.unit}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>City:</p>
            <p>{contact.city}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Zip:</p>
            <p>{contact.zip}</p>
          </ContactInfoContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h2>Home Information</h2>
          <ContactInfoContainer>
            <p>Home Type:</p>
            <p>{contact.homeType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Roof Type:</p>
            <p>{contact.roofType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Num of Chimneys:</p>
            <p>{contact.chimneys}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <p>Chimney Type:</p>
            <p>{contact.chimneyType}</p>
          </ContactInfoContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h2>General Notes</h2>
          <NotesContainer>
            <p>{contact.notes}</p>
          </NotesContainer>
        </ContactSectionContainer>
      </div>
    </ContactPageContainer>
  )
}

export default Contact