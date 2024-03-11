import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AdminEditScreen, ProfileEditContainer, BackBtn, InputContainer, Input, SubmitBtn } from './AdminEditCompany.styles';
import { updateCompany, getCompany } from '../../../api/company';
import { useParams } from "react-router-dom";

const AdminEditCompany = ({ user, notify }) => {
  const [formData, setFormData] = useState({
    companyImage: '',
    companyName: '',
    companyPhone: '', 
    companyEmail: '',
    companyWebsite: '',
    companyAddress: '',
    companyCity: '',
    companyZip: '',
    companyYelp: '',
    companyInstagram: '',
    companyFacebook: '',
    companyTwitter: '',
    companyTikTok: ''
  })

  const { id } = useParams()
  console.log("id:", id)

  useEffect(() => {
    const requestData = async () => {
      try {
        const res = await getCompany();
        console.log('res', res)

        if (res.status === 200) {
          setFormData({
            companyImage: res.data.company[0].companyImage,
            companyCity: res.data.company[0].companyCity,
            companyEmail: res.data.company[0].companyEmail,
            companyFacebook: res.data.company[0].companyFacebook,
            companyAddress: res.data.company[0].companyAddress,
            companyInstagram: res.data.company[0].companyInstagram,
            companyName: res.data.company[0].companyName,
            companyPhone: res.data.company[0].companyPhone,
            companyTikTok: res.data.company[0].companyTikTok,
            companyTwitter: res.data.company[0].companyTwittier,
            companyWebsite: res.data.company[0].companyWebsite,
            companyYelp: res.data.company[0].companyYelp,
            companyZip: res.data.company[0].companyZip
          })
        }
      } catch(err) {
        console.log(err)
      }
    }

    requestData()
  }, [])

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleEditNavigate = () => {
    navigate(`/admin/company`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log("submit")
      const res = await updateCompany(user, formData, id)
      console.log("response from update", res)

      if (res.status === 200) {
        setFormData({
          companyImage: res.data.newCompany.companyImage,
          companyCity: res.data.newCompany.companyCity,
          companyEmail: res.data.newCompany.companyEmail,
          companyFacebook: res.data.newCompany.companyFacebook,
          companyAddress: res.data.newCompany.companyAddress,
          companyInstagram: res.data.newCompany.companyInstagram,
          companyName: res.data.newCompany.companyName,
          companyPhone: res.data.newCompany.companyPhone,
          companyTikTok: res.data.newCompany.companyTikTok,
          companyTwitter: res.data.newCompany.companyTwittier,
          companyWebsite: res.data.newCompany.companyWebsite,
          companyYelp: res.data.newCompany.companyYelp,
          companyZip: res.data.newCompany.companyZip
        }) 

        notify('company info updated')
      } else {
        notify('something went wrong', 'danger')
      }
    } catch(e) {
      console.log(e)
      notify('something went wrong', 'danger')
    }
  }
  
  return (
    <AdminEditScreen>
      <BackBtn onClick={handleEditNavigate}>Back</BackBtn>
      <div>
        <ProfileEditContainer>      
          <h1>Edit Company</h1>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <label>Company Image</label>
              <Input 
                name="companyImage" 
                type="text" 
                value={formData.companyImage} 
                placeholder='Company Image' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Company Name</label>
              <Input 
                name="companyName" 
                type="text" 
                value={formData.companyName} 
                placeholder='Company Name' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Company Phone</label>
              <Input 
                name="companyPhone" 
                type="text" 
                value={formData.companyPhone} 
                placeholder='Company Phone' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Company Email</label>
              <Input 
                name="companyEmail" 
                type="text" 
                value={formData.companyEmail} 
                placeholder='Company Email' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Website</label>
              <Input 
                name="companyWebsite" 
                type="text" 
                value={formData.companyWebsite} 
                placeholder='Company Website' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Address</label>
              <Input 
                name="companyAddress" 
                type="text" 
                value={formData.companyAddress} 
                placeholder='Company Address' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>City</label>
              <Input 
                name="companyCity" 
                type="text" 
                value={formData.companyCity} 
                placeholder='Company City' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Zip</label>
              <Input 
                name="companyZip" 
                type="text" 
                value={formData.companyZip} 
                placeholder='Company Zip' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Yelp</label>
              <Input 
                name="companyYelp" 
                type="text" 
                value={formData.companyYelp} 
                placeholder='Company Yelp' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Instagram</label>
              <Input 
                name="companyInstagram" 
                type="text" 
                value={formData.companyInstagram} 
                placeholder='Company Instagram' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Facebook</label>
              <Input 
                name="companyFacebook" 
                type="text" 
                value={formData.companyFacebook} 
                placeholder='Company Facebook' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Twitter</label>
              <Input 
                name="companyTwitter" 
                type="text" 
                value={formData.companyTwitter} 
                placeholder='Company Twitter' 
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Tik Tok</label>
              <Input 
                name="companyTikTok" 
                type="text" 
                value={formData.companyTikTok} 
                placeholder='Company TikTok' 
                onChange={onChange}
              />
            </InputContainer>
            <SubmitBtn type="submit">complete</SubmitBtn>
          </form>
        </ProfileEditContainer>
      </div>
  </AdminEditScreen>
  )
}

export default AdminEditCompany