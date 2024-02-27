import React from 'react'
import { NavbarContainer, AvailabilityContainer, LogoContainer, Img, AdminNavBarSection, AdminBtn, LogoutBtn } from './Navbar.styles'
import { CiClock2 } from "react-icons/ci";
import logo from '../../images/fscc.jpg';
import { useNavigate } from "react-router-dom";
import { signOut } from '../../api/user';

const Navbar = ({ user, notify, setUser }) => {
  const navigate = useNavigate();

  const handleContactNavigate = () => {
    navigate('/contacts')
  }

  const handleBlogNavigate = () => {
    navigate('/adminblogs')
  }

  const handleSignOut = async () => {
    try {
      //sign out
      const res = await signOut(user);
      console.log(res)

      if (res.status === 204) {
        setUser({})
        navigate('/')
        notify('logged out')
      }
    } catch(e) {
      notify('something went wrong', 'danger')
      console.log('something went wrong')
    }
  }

  console.log(user)
  return (
    <NavbarContainer>
      <LogoContainer>
        <Img src={logo}/>
        <h3>FireSafe Chimney Sweeping & Repairs</h3>
      </LogoContainer>
      {Object.keys(user).length === 0 && 
        <AvailabilityContainer>
          <CiClock2 size={30} />
          <p>Monday-Friday 8am-6pm</p>
        </AvailabilityContainer>
      }
      {user.isAdmin && 
        <AdminNavBarSection>
          <p>{user.email}</p>
          <AdminBtn onClick={handleContactNavigate}>Contacts</AdminBtn>
          <AdminBtn onClick={handleBlogNavigate}>Blogs</AdminBtn>
          <LogoutBtn onClick={handleSignOut}>Logout</LogoutBtn>
        </AdminNavBarSection>
      }
    </NavbarContainer>
  )
}

export default Navbar