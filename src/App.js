import React, { useState } from 'react';
import './App.css'; // Moved the CSS import to the top
import ReactGA from 'react-ga4';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Screens 
import Landing from "./screens/screens/landing/Landing";
import Login from "./screens/screens/login/Login";
import Contacts from './screens/screens/contacts/Contacts';
import NewContact from './screens/screens/newcontact/NewContact';
import Contact from './screens/screens/contact/Contact';
import UpdateContact from './screens/screens/updatecontact/UpdateContact';
import AdminBlogs from './screens/screens/adminblogs/AdminBlogs';
import AdminBlog from './screens/screens/adminblog/AdminBlog';
import CreateBlog from './screens/screens/createblog/CreateBlog';
import AdminEditBlog from './screens/screens/admineditblog/AdminEditBlog';
import PublicBlogs from './screens/screens/publicblogs/PublicBlogs';
import PublicBlog from './screens/screens/publicblog/PublicBlog';
import AdminAnalytics from './screens/screens/adminanalytics/AdminAnalytics';
import AdminServices from './screens/screens/adminservices/AdminServices';
import AdminCreateService from './screens/screens/admincreateservice/AdminCreateService';
import AdminEditService from './screens/screens/admineditservice/AdminEditService';
import PublicService from './screens/screens/publicservice/PublicService'

// Components
import Navbar from './components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer'

const App = () => {
  const [user, setUser] = useState({});

  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`);
    }
  }

  const gtagID = process.env.REACT_APP_GTAG_TRACKING_ID
  ReactGA.initialize(gtagID)
  ReactGA.send({ hitType: 'pageview', page: '/' })

  return (
    <Router>
      <Navbar user={user} setUser={setUser} notify={notify}/>
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>
      <Routes>
        <Route path='/' element={<Landing user={user} notify={notify}/>} />
        <Route path='/login' element={<Login user={user} setUser={setUser} notify={notify}/>} />
        <Route path='/contacts' element={<Contacts user={user} setUser={setUser} notify={notify}/>} />
        <Route path='/newcontact' element={<NewContact user={user} notify={notify}/>} />
        <Route path='/contact/:id' element={<Contact user={user} notify={notify}/>} />
        <Route path='/updatecontact/:id' element={<UpdateContact user={user} notify={notify}/>} />
        <Route path='/adminblogs' element={<AdminBlogs user={user} notify={notify}/>} />
        <Route path='/adminblog/:id' element={<AdminBlog user={user} notify={notify}/>} />
        <Route path='/adminnewblog' element={<CreateBlog user={user} notify={notify}/>} />
        <Route path='/adminblogedit/:id' element={<AdminEditBlog user={user} notify={notify}/>} />
        <Route path='/blogs' element={<PublicBlogs />} />
        <Route path='/blogs/:id' element={<PublicBlog />} />
        <Route path='/analytics' element={<AdminAnalytics />} />
        <Route path='/admin/services' element={<AdminServices />} />
        <Route path='/admin/create-service' element={<AdminCreateService user={user} notify={notify} />} />
        <Route path='/admin/services/:id' element={<AdminEditService user={user} notify={notify} />} />
        <Route path='/services/:id' element={<PublicService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;