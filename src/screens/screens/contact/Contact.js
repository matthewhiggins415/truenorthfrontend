import React, { useState, useEffect} from 'react';
import { getContact, destroyContact } from '../../../api/contact';
import { getJobs } from '../../../api/job';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactPageContainer, ContactInfoContainer, ContactSectionContainer, BtnContainer, Btn, NotesContainer, DeleteBtn, ContactContainer, CustomerIdWarning, ContactSectionContainerBottom, JobBtn, JobBtnContainer, JobBtnInfoContainer, LoadingContainer } from './Contact.styles';
import AddJobModal from '../../../components/addjobmodal/AddJobModal';
import JobModal from '../../../components/jobmodal/JobModal';
import EditJobModal from '../../../components/editjobmodal/EditJobModal';
import BounceLoader from "react-spinners/BounceLoader";

const Contact = ({ user, notify }) => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({});
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showEditJobModal, setShowEditJobModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobID, setJobID] = useState('');
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const retrieveContact = async () => {
      setLoading(true)
      const res = await getContact(user, id)
      setContact(res.data.contact)

      const response = await getJobs(user, id)
      console.log("get jobs:", response)
      setJobs(response.data.jobs)
      setLoading(false)
    }

    retrieveContact();
  }, [showAddJobModal, showJobModal])

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

  const handleShowJob = (id) => {
    setShowJobModal(!showJobModal)
    setJobID(id)
  }

  const handleShowEditJob = () => {
    setShowJobModal(!showJobModal)
    setShowEditJobModal(!showEditJobModal)
  }

  const handleReverseShowEditModal = () => {
    setShowEditJobModal(!showEditJobModal)
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
      {loading ? 
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      :
      <ContactContainer>
        <ContactSectionContainer>
          <h2>Contact Information</h2>
          <ContactSectionContainerBottom>
            <div>
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
            </div>
            <div>
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
            </div>
          </ContactSectionContainerBottom>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h2>Home Information</h2>
          <ContactInfoContainer>
            <h3>System Type:</h3>
            <p>{contact.systemType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Model Number:</h3>
            <p>{contact.modelNumber}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Serial Number:</h3>
            <p>{contact.serialNumber}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>Fuel Type:</h3>
            <p>{contact.fuelType}</p>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h3>System Size:</h3>
            <p>{contact.systemSize}</p>
          </ContactInfoContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h2>General Notes</h2>
          <NotesContainer>
            <p>{contact.notes}</p>
          </NotesContainer>
        </ContactSectionContainer>
        <ContactSectionContainer>
          <h2>Jobs</h2>
          {jobs.map((job) => (
            <JobBtn 
              key={job._id} 
              onClick={() => handleShowJob(job._id)}>
              <JobBtnContainer>
                <JobBtnInfoContainer>
                  <h3>Date Received:</h3>
                  <p>{job.dateJobReceived}</p>
                </JobBtnInfoContainer>
                {job.amountDue ? 
                  <JobBtnInfoContainer>
                    <h3>Job Amount:</h3>
                    <p>{"$" + job.amountDue}</p>
                  </JobBtnInfoContainer>
                  :
                  <JobBtnInfoContainer>
                    <h3>Job Amount:</h3>
                    <p>no amount added</p>
                  </JobBtnInfoContainer>
                }
                {job.dateJobCompleted ? 
                  <JobBtnInfoContainer>
                    <h3>Date Completed:</h3>
                    <p>{job.dateJobCompleted}</p>
                  </JobBtnInfoContainer> :
                  <JobBtnInfoContainer>
                    <h3>Date Completed:</h3>
                    <p>incomplete</p>
                  </JobBtnInfoContainer>
                }
                <JobBtnInfoContainer>
                  <h3>Service Type:</h3>
                  <p>{job.serviceType}</p>
                </JobBtnInfoContainer>
              </JobBtnContainer>
            </JobBtn>
          ))}
        </ContactSectionContainer>
      </ContactContainer>}
      { showAddJobModal ? <AddJobModal handleAddJob={handleAddJob} notify={notify} user={user} id={id}/> : <></> }
      { showJobModal ? <JobModal jobID={jobID} setJobID={setJobID} showJobModal={showJobModal} setShowJobModal={setShowJobModal} notify={notify} user={user} handleShowEditJob={handleShowEditJob}/> : <></> }
      { showEditJobModal ? <EditJobModal user={user} notify={notify} handleReverseShowEditModal={handleReverseShowEditModal} jobID={jobID} handleShowJob={handleShowJob}/> :  <></>}
    </ContactPageContainer>
  )
}

export default Contact