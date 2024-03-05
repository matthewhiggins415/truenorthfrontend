import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ContactsContainer, BottomSection, ContactsHeader, Btn, IndividualContact, ContactBtn, SearchInput, Select, EmailBtn } from './Contacts.styles';
import { getContacts, searchContacts } from '../../../api/contact';
import { CgDetailsMore } from "react-icons/cg";

const Contacts = ({ user, setUser, notify }) => {
  const [allSelected, setAllSelected] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState([])
  const[contacts, setContacts] = useState([]);
  const[search, setSearch] = useState('');
  const[searchType, setSearchType] = useState('zip')
  const navigate = useNavigate();

  console.log("selectedContacts: ", selectedContacts);

  useEffect(() => {
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const getAllContacts = async () => {
      const res = await getContacts(user);
      setContacts(res.data.contacts);
    }
    
    getAllContacts()
  }, []);

  const handleSearch = async ( input, searchType ) => {
    if (search.length > 0) {
      try {
        let response = await searchContacts(input, searchType)
        if (response.status === 500) {
          notify('something went wrong', 'danger');
        } else {
          setContacts(response.data.contacts)
        }
      } catch(error) {
        notify('something went wrong', 'danger')
      }
    } else {
      setSearch("");
      const res = await getContacts(user);
      setContacts(res.data.contacts);
    }
  }

  const handleNew = () => {
    navigate('/newcontact');
  }

  const handleNavigate = (id) => {
    console.log(id)
    navigate(`/contact/${id}`)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await handleSearch(search, searchType);
      setContacts(res.data.contacts)
    } catch(error) {
      notify('something went wrong', 'danger')
    }
  }

  const handleSelect = (contact) => {
    const id = contact._id
    const exists = selectedContacts.some(contact => contact._id === id);

    if (exists) {
      setSelectedContacts(prevArray => prevArray.filter(contact => contact._id !== id));
    } else {
      setSelectedContacts(prevState => [
        ...prevState, 
        contact
      ])
    }
  }

  const handleSelectAll = () => {
    setAllSelected(!allSelected)
    setSelectedContacts(contacts)
  }

  const handleDeselectAll = () => {
    setAllSelected(!allSelected)
    setSelectedContacts([])
  }

  return (
    <ContactsContainer>
      <BottomSection>
        <ContactsHeader>
          <h2>Contacts</h2>
          <form onSubmit={handleSearchSubmit}>
            <Select name="searchType" id="chimneyType" searchType={searchType} onChange={(e) =>{ setSearchType(e.target.value)}} defaultValue='zip'>
              <option value="firstname">first name</option>
              <option value="lastname">last name</option>
              <option value="cell_phone">cell phone</option>
              <option value="homeType">home type</option>
              <option value="roofType">roof type</option>
              <option value="chimneyType">chimney type</option>
              <option value="address">address</option>
              <option value="city">city</option>
              <option value="zip">zip</option>
            </Select>
            <SearchInput 
              name="search" 
              type="text" 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              placeholder={`search ${searchType}`}
            />
            <Btn type="submit">search</Btn>
          </form>
          {  allSelected ?  
            <Btn onClick={handleDeselectAll}>Unselect All</Btn> : 
            <Btn onClick={handleSelectAll}>Select All</Btn>
          }
          <Btn onClick={handleNew}>New Contact</Btn>
        </ContactsHeader>
        { selectedContacts.length > 0 ? 
          <div>
            <EmailBtn>Email</EmailBtn>
          </div> 
          : <></>
        }
        <div>
          {contacts?.map((contact, index) => (
            <IndividualContact 
              isSelected={selectedContacts.some((c) => c._id === contact._id)}
              onClick={() => handleSelect(contact)} 
              key={contact._id}
            >
              <p>{index + 1}.</p>
              <p>{contact.firstname + ' ' + contact.lastname}</p>
              <p>{contact.email}</p>
              <p>{contact.cell_phone}</p>
              <p>{contact.address}</p>
              <ContactBtn onClick={() => handleNavigate(contact._id)}>
                <CgDetailsMore style={{ color: 'black' }}/>
              </ContactBtn>
            </IndividualContact>
          ))}
        </div>
      </BottomSection>
    </ContactsContainer>
  )
}

export default Contacts