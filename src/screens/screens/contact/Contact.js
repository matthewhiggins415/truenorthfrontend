import React, { useState, useEffect} from 'react';
import { getContact, destroyContact } from '../../../api/contact';
import { getJobs } from '../../../api/job';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactPageContainer, ContactInfoContainer, ContactSectionContainer, BtnContainer, Btn, NotesContainer, DeleteBtn, ContactContainer, CustomerIdWarning } from './Contact.styles';
import AddJobModal from '../../../components/addjobmodal/AddJobModal';

const Contact = ({ user, notify }) => {
  const [contact, setContact] = useState({});
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const retrieveContact = async () => {
      const res = await getContact(user, id)
      setContact(res.data.contact)

      const response = await getJobs(user, id)
      console.log("get jobs:", response)
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

  const handleAddJob = () => {
    setShowAddJobModal(!showAddJobModal)
  }

  return (
    <ContactPageContainer>
      <BtnContainer>
        <Btn onClick={handleBack}>Back</Btn>
        <div>
          <Btn onClick={handleAddJob}>Add Job</Btn>
          <Btn onClick={handleEdit}>Edit</Btn>
          <DeleteBtn onClick={handleDeleteContact}>Delete</DeleteBtn>
        </div>
      </BtnContainer>
      <ContactContainer>
        <ContactSectionContainer>
          <h2>Contact Information</h2>
          <ContactInfoContainer>
            <CustomerIdWarning>*id value is only used for database</CustomerIdWarning>
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
          <h2>Home Information</h2>
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
          <h2>General Notes</h2>
          <NotesContainer>
            <p>{contact.notes}</p>
          </NotesContainer>
        </ContactSectionContainer>
      </ContactContainer>
      { showAddJobModal ? <AddJobModal handleAddJob={handleAddJob} notify={notify} user={user} id={id}/> : <></> }
    </ContactPageContainer>
  )
}

export default Contact