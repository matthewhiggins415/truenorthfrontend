import React, { useState, useEffect} from 'react';
import { getContact, destroyContact } from '../../../api/contact';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactPageContainer, ContactInfoContainer, ContactSectionContainer, BtnContainer, Btn, NotesContainer, DeleteBtn } from './Contact.styles';

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
        <div>
          <Btn onClick={handleEdit}>edit</Btn>
          <DeleteBtn onClick={handleDeleteContact}>delete</DeleteBtn>
        </div>
      </BtnContainer>
      <div>
        <ContactSectionContainer>
          <h2>Contact Information</h2>
          <ContactInfoContainer>
            <h3>Customer ID:</h3>
            <p>{contact._id}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Name:</h3>
            <p>{contact.firstname + ' ' + contact.lastname}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Email:</h3>
            <p>{contact.email}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Cell Phone:</h3>
            <p>{contact.cell_phone}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Address:</h3>
            <p>{contact.address}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Unit Address:</h3>
            <p>{contact.unit}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>City:</h3>
            <p>{contact.city}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Zip:</h3>
            <p>{contact.zip}</p>
          </ContactInfoContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h3>Home Information</h3>
          <ContactInfoContainer>
            <h3>Home Type:</h3>
            <p>{contact.homeType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Roof Type:</h3>
            <p>{contact.roofType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Num of Chimneys:</h3>
            <p>{contact.chimneys}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Chimney Type:</h3>
            <p>{contact.chimneyType}</p>
          </ContactInfoContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h3>General Notes</h3>
          <NotesContainer>
            <p>{contact.notes}</p>
          </NotesContainer>
        </ContactSectionContainer>
      </div>
    </ContactPageContainer>
  )
}

export default Contact