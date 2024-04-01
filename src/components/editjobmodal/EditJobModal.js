import React, { useState, useEffect } from 'react';
import { AddJobModalContainer, Form, ContainerWithForm, TopContainer, CloseBtn, Input, FormBtn, TextArea, Label, FormInputsContainer, InputContainer, FormTop, FormInputTextArea, Select, LoadingContainer } from './EditJobModal.styles';
import { IoMdClose } from "react-icons/io";
import { getAllServices } from '../../api/services';
import { getJob, updateAJob } from '../../api/job';
import BounceLoader from "react-spinners/BounceLoader";

const EditJobModal = ({ user, notify, handleReverseShowEditModal, jobID, handleShowJob }) => {
  const [services, setServices] = useState([]);
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    // contact_id: id,
    dateJobReceived: '', 
    serviceType: '',
    invoiceLink: '',
    dateJobCompleted: '',
    paymentType: '',
    amountDue: 0, 
    amountPaid: 0,
    datePaidInFull: '',
    notes: ''
  })

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true)
        const response = await getAllServices();
        const titles = response.data.services.map((service) => service.title);
        setServices(titles)

        const jobResponse = await getJob(user, jobID);
        console.log("jobResponse: ", jobResponse)
        setJob(jobResponse.data.job);

        setFormData({
          dateJobReceived: jobResponse.data.job.dateJobReceived, 
          serviceType: jobResponse.data.job.serviceType,
          invoiceLink: jobResponse.data.job.invoiceLink,
          dateJobCompleted: jobResponse.data.job.dateJobCompleted,
          paymentType: jobResponse.data.job.paymentType,
          amountDue: jobResponse.data.job.amountDue, 
          amountPaid: jobResponse.data.job.amountPaid,
          datePaidInFull: jobResponse.data.job.datePaidInFull,
          notes: jobResponse.data.job.notes
        })
        setLoading(false)
      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger')
      }
    }

    getServices()
  }, [])

  const closeEditJobModal = () => {
    handleReverseShowEditModal()
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      setLoading(true) 
      const response = await updateAJob(formData, user, jobID);
      console.log(response);
        
      if (response.status === 201) {
        notify('job updated');
        setLoading(false);
        handleReverseShowEditModal()
        handleShowJob(jobID)
      }

    } catch(error) {
      console.log(error);
      notify('error', 'danger');
    }
  }

  return (
    <AddJobModalContainer>
      <ContainerWithForm>
        {loading ? 
          <LoadingContainer>
            <BounceLoader color="#ee1c4a" />
          </LoadingContainer>
          : 
        <><TopContainer>
          <h2>Edit Your Job</h2>
          <CloseBtn onClick={closeEditJobModal}>
          <IoMdClose size={30}/>
          </CloseBtn>
        </TopContainer>
        <Form onSubmit={handleSubmit}>
          <FormTop>
            <FormInputsContainer>
              <InputContainer>
                <Label>Date Job Received*</Label>
                <Input 
                  type="date" 
                  name="dateJobReceived" 
                  value={formData.dateJobReceived} 
                  onChange={onChange} 
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="serviceType">Service Type*</Label>            
                <Select 
                  name="serviceType" 
                  id="serviceType" 
                  value={formData.serviceType} 
                  onChange={onChange}
                >
                  {services.map((service, index) => (
                    <option key={index + 1} value={service}>{service}</option>
                  ))}  
                </Select>    
              </InputContainer>
              <InputContainer>
                <Label>Invoice Link</Label>          
                <Input 
                  name="invoiceLink" 
                  placeholder="https://docs.google.com/example"
                  type="text" 
                  value={formData.invoiceLink} 
                  onChange={onChange}
                />    
              </InputContainer>
              <InputContainer>
                <Label>Date Job Completed</Label>
                <Input 
                  name="dateJobCompleted"
                  type="date"
                  value={formData.dateJobCompleted} 
                  onChange={onChange}
                />
              </InputContainer>
            </FormInputsContainer>
            <FormInputsContainer>
              <InputContainer>
                <Label htmlFor="paymentType">Payment Type</Label>
                <Select 
                  name="paymentType" 
                  id="paymentType" 
                  value={formData.paymentType} 
                  onChange={onChange}
                >
                  <option value="card">card</option>  
                  <option value="cash">cash</option>  
                  <option value="venmo">venmo</option> 
                  <option value="check">check</option> 
                </Select>    
              </InputContainer>
              <InputContainer>
                <Label>Amount Due</Label>
                <Input 
                  type="number"
                  min="0"
                  name="amountDue" 
                  id="amountDue" 
                  value={formData.amountDue} 
                  onChange={onChange}
                />    
              </InputContainer>
              <InputContainer>
                <Label>Amount Paid</Label>
                <Input 
                  type="number"
                  min="0"
                  name="amountPaid" 
                  id="amountPaid" 
                  value={formData.amountPaid} 
                  onChange={onChange}
                />    
              </InputContainer>
              <InputContainer>
                <Label>Date Paid In Full</Label>
                <Input 
                  name="datePaidInFull"
                  type="date"
                  value={formData.datePaidInFull} 
                  onChange={onChange}
                />
              </InputContainer>
            </FormInputsContainer>
          </FormTop>
          <FormInputTextArea>
            <Label>Additional Notes</Label>
            <TextArea
              name="notes" 
              type="textarea"
              value={formData.notes} 
              onChange={onChange}
            ></TextArea>
          </FormInputTextArea>
          <FormBtn type="submit">Submit</FormBtn> 
        </Form></>}
      </ContainerWithForm>
    </AddJobModalContainer>
  )
}

export default EditJobModal