import React, { useState, useEffect } from 'react';
import { AddJobModalContainer, Form, ContainerWithForm, TopContainer, CloseBtn, Input, FormBtn, TextArea, Label, FormInputsContainer, InputContainer, FormTop, FormInputTextArea, Select } from './AddJobModal.styles';
import { IoMdClose } from "react-icons/io";
import { getAllServices } from '../../api/services';
import { createJob } from '../../api/job';

const AddJobModal = ({ handleAddJob, notify, user, id }) => {
  const [services, setServices] = useState([]);

  console.log("id:", id)

  const [formData, setFormData] = useState({
    contact_id: id,
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
        const response = await getAllServices();
        const titles = response.data.services.map((service) => service.title);
        setServices(titles)
      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger')
      }
    }

    getServices()
  }, [])

  const closeJobModal = () => {
    handleAddJob()
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('submit');

    try {
      // make sure to send off with contact id involved here. 
      const response = await createJob(user, formData);
      console.log(response);
        
      if (response.status === 201) {
        notify('new job created');
        handleAddJob();
      }

    } catch(error) {
      console.log(error);
      notify('error', 'danger');
    }
  }

  return (
    <AddJobModalContainer>
      <ContainerWithForm>
        <TopContainer>
          <h2>Add a New Job</h2>
          <CloseBtn onClick={closeJobModal}>
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
                  required 
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="serviceType">Service Type*</Label>            
                <Select 
                  name="serviceType" 
                  id="serviceType" 
                  value={formData.serviceType} 
                  onChange={onChange}
                  required
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
        </Form>
      </ContainerWithForm>
    </AddJobModalContainer>
  )
}

export default AddJobModal