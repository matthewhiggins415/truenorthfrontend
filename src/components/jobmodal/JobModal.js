import React, { useState, useEffect } from 'react';
import { AddJobModalContainer, ContainerWithForm, TopContainer, CloseBtn, InfoContainer, NotesContainer, BottomContainer, BottomBtnContainer, EditBtn, DeleteBtn, LoadingContainer } from './JobModal.styles';
import { IoMdClose } from "react-icons/io";
import { getJob, destroyJob } from '../../api/job';
import BounceLoader from "react-spinners/BounceLoader";

const JobModal = ({ showJobModal, setShowJobModal, notify, user, jobID, setJobID, handleShowEditJob }) => {
  console.log("jobID:", jobID)
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    setShowJobModal(!showJobModal)
    setJobID('')
  }

  useEffect(() => {
    const getJobDetails = async () => {
      setLoading(true);
      try {
        const response = await getJob(user, jobID);
        console.log(response)
        setJob(response.data.job);
        setLoading(false);
      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger')
      }
    }

    getJobDetails()
  }, [])

  const handleEditBtn = () => {
    handleShowEditJob()
  }

  const handleDeleteJob = async () => {
    try {
      const response = await destroyJob(user, jobID);

      if (response.status === 204) {
        notify('job deleted')
        setShowJobModal(!showJobModal)
      }
    } catch(error) {
      console.log(error)
      setLoading(false)
      notify('job deleted', 'danger')
    }
  }

  return (
    <AddJobModalContainer>
        {loading ? 
          <LoadingContainer>
            <BounceLoader color="#ee1c4a" />
          </LoadingContainer>
        : 
      <ContainerWithForm>
        <TopContainer>    
          <CloseBtn onClick={handleClose}>
            <IoMdClose size={30}/>
          </CloseBtn>
        </TopContainer>
        <BottomContainer>
          <InfoContainer>
            <h4>Job Started</h4>
            <p>{job.dateJobReceived}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Service Type</h4>
            <p>{job.serviceType}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Invoice Link</h4>
            <p>{job.invoiceLink}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Job Completed</h4>
            <p>{job.dateJobCompleted}</p>
          </InfoContainer>
        </BottomContainer>
        <BottomContainer>
          <InfoContainer>
            <h4>Payment Type</h4>
            <p>{job.paymentType}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Amount Due</h4>
            <p>{"$" + job.amountDue}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Amount Paid</h4>
            <p>{"$" + job.amountPaid}</p>
          </InfoContainer>
          <InfoContainer>
            <h4>Date Paid in Full</h4>
            <p>{job.datePaidInFull}</p>
          </InfoContainer>
        </BottomContainer>
        <BottomContainer>
          <NotesContainer>
            <h4>Notes</h4>
            <p>{job.notes}</p>
          </NotesContainer>
        </BottomContainer>
        <BottomBtnContainer>
          <EditBtn onClick={handleEditBtn}>edit</EditBtn>
          <DeleteBtn onClick={handleDeleteJob}>delete</DeleteBtn>
        </BottomBtnContainer>
      </ContainerWithForm>
        }
    </AddJobModalContainer>
  )
}

export default JobModal