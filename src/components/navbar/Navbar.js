import React, { useState } from 'react'
import { NavbarContainer, AvailabilityContainer, LogoContainer, Img, AdminNavBarSection, AdminBtn, LogoutBtn, DropDownMenu, CallUsContainer, CallContainer, PaymentLink, AdminLink } from './Navbar.styles'
import { CiClock2 } from "react-icons/ci";
import logo from '../../images/truenorthlogo.png';
import { useNavigate } from "react-router-dom";
import { signOut } from '../../api/user';
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ user, notify, setUser, company }) => {
  const googleAnalyticsLink = process.env.REACT_APP_GOOGLE_ANALYTICS_LINK;
  const invoiceLink = process.env.REACT_APP_INVOICE_LINK
  console.log("google analytics link:", googleAnalyticsLink)

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      //sign out
      const res = await signOut(user);
      console.log(res)

      if (res.status === 204) {
        setUser({})
        navigate('/')
        setShowMenu(!showMenu)
        notify('logged out')
      }
    } catch(e) {
      notify('something went wrong', 'danger')
      console.log('something went wrong')
    }
  }

  const handleContactNavigate = () => {
    navigate('/contacts')
    setShowMenu(!showMenu)
  }

  const handleBlogNavigate = () => {
    navigate('/adminblogs')
    setShowMenu(!showMenu)
  }

  const handleServiceNavigate = () => {
    navigate('/admin/services')
    setShowMenu(!showMenu)
  }

  const handleCompanyNavigate = () => {
    navigate('/admin/company');
    setShowMenu(!showMenu);
  }

  const handleImagesNavigate = () => {
    navigate('/admin/images');
    setShowMenu(!showMenu);
  }

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  console.log(user)
  return (
    <NavbarContainer>
      <LogoContainer to="/">
        <Img src={logo} alt="company logo"/>
      </LogoContainer>
      {Object.keys(user).length === 0 && 
        <CallUsContainer>
          <AvailabilityContainer>
            <CiClock2 size={30} />
            <p>Available 24/7</p>
          </AvailabilityContainer>
          <CallContainer>
            <a href="tel:+14156866219">Call {company?.companyPhone}</a>
          </CallContainer>
        </CallUsContainer>
      }
      {user.isAdmin && 
        <>
          <IoIosMenu onClick={handleToggleMenu} style={{ backgroundColor: "white", fontSize: "40px", cursor: "pointer", border: "none", outline: "none" }} />
          <DropDownMenu showMenu={showMenu}>
            <AdminBtn onClick={handleCompanyNavigate}>Company</AdminBtn>
            <AdminLink to={invoiceLink} target="_blank">Invoice</AdminLink>
            <AdminBtn onClick={handleServiceNavigate}>Services</AdminBtn>
            <AdminBtn onClick={handleContactNavigate}>Contacts</AdminBtn>
            <AdminBtn onClick={handleBlogNavigate}>Blogs</AdminBtn>
            <AdminBtn onClick={handleImagesNavigate}>Images</AdminBtn>
            <AdminLink to={googleAnalyticsLink} target="_blank">Analytics</AdminLink>
            <LogoutBtn onClick={handleSignOut}>Logout</LogoutBtn>
          </DropDownMenu>
        </>
      }
    </NavbarContainer>
  )
}

export default Navbar