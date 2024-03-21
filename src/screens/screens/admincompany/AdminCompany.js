import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ProfileScreen, ProfileContainer, ProfImage, EditBtn, InfoContainer, Img, ProfileHeaderContainer } from './AdminCompany.styles'
import { getCompany } from '../../../api/company';
import apiUrl from '../../../apiConfig';

const AdminCompany = ({ user, notify }) => {
  const [companyData, setCompanyData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const retrieveCompany = async () => {
      try {
        console.log("retrieve company data")
        const res = await getCompany();
        console.log(res)
        setCompanyData(res?.data.company[0]);
      } catch (err) {
        console.log(err)
      }
    }

    retrieveCompany()
  }, []);

  const handleEditNavigate = () => {
    navigate(`/admin/edit-company/${companyData._id}`)
  }

  return (
    <ProfileScreen>
      <ProfileHeaderContainer>
        <h2>Company Profile</h2>
        <EditBtn onClick={handleEditNavigate}>edit</EditBtn>
      </ProfileHeaderContainer>
      <div>
        <ProfileContainer>
          <InfoContainer>
            <h3>Company Image:</h3>
            <Img src={apiUrl + "/uploads/" + companyData?.companyImage} />
          </InfoContainer>
          <InfoContainer>
            <h3>Company Name:</h3>
            <p>{companyData?.companyName}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company Website:</h3>
            <p>{companyData?.companyWebsite}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company Email:</h3>
            <p>{companyData?.companyEmail}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company Phone:</h3>
            <p>{companyData?.companyPhone}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company Address:</h3>
            <p>{companyData?.companyAddress}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company City:</h3>
            <p>{companyData?.companyCity}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Company Yelp:</h3>
            <p>{companyData?.companyYelp}</p>
            </InfoContainer>
          <InfoContainer>
            <h3>Instagram:</h3>
            <p>{companyData?.companyInstagram}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Facebook:</h3>
            <p>{companyData?.companyFacebook}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Twitter:</h3>
            <p>{companyData?.companyTwitter}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Tiktok:</h3>
            <p>{companyData?.companyTikTok}</p>
          </InfoContainer>                
        </ProfileContainer>
      </div>
    </ProfileScreen>
  )
}

export default AdminCompany