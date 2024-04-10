import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ContactsContainer, BottomSection, ContactsHeader, Btn, IndividualContact, ContactBtn, SearchInput, Select, EmailBtn, SearchForm, LoadingContainer } from './Contacts.styles';
import { getContacts, searchContacts } from '../../../api/contact';
import { CgDetailsMore } from "react-icons/cg";
import { getContactsCSV } from '../../../api/csv';
import BounceLoader from "react-spinners/BounceLoader";

const Contacts = ({ user, setUser, notify }) => {
  const [isLoading, setIsLoading] = useState(false)
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

    setIsLoading(true)

    const getAllContacts = async () => {
      const res = await getContacts(user);
      setContacts(res.data.contacts);
      setIsLoading(false)
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

  const handleCSVDownload = async () => {
    console.log('download')

    try {
      const res = await getContactsCSV(user)
      
      // Check if the response is successful
      if (res.status !== 200) {
        throw new Error('Network response was not ok');
      }
      // Convert the binary string to a Uint8Array
      const uint8Array = new Uint8Array([...res.data].map(c => c.charCodeAt(0)));

      // Create a Blob object from the Uint8Array
      const blob = new Blob([uint8Array], { type: 'text/csv' });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const a = document.createElement('a');

      // Set the href attribute to the URL
      a.href = url;

      // Set the download attribute to specify the filename
      a.download = 'contact-data.csv';

      // Append the link to the document body
      document.body.appendChild(a);

      // Click the link to trigger the download
      a.click();

      // Remove the link from the document body
      document.body.removeChild(a);

    } catch (error) {
      console.log(error)
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
          <SearchForm onSubmit={handleSearchSubmit}>
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
          </SearchForm>
          {  allSelected ?  
            <Btn onClick={handleDeselectAll}>Unselect All</Btn> : 
            <Btn onClick={handleSelectAll}>Select All</Btn>
          }
          <Btn onClick={handleCSVDownload}>CSV Download</Btn>
          <Btn onClick={handleNew}>New Contact</Btn>
        </ContactsHeader>
        { isLoading ?
          <LoadingContainer>
            <BounceLoader color="#ee1c4a" />
          </LoadingContainer>
        : 
        <>
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
                <CgDetailsMore style={{ color: 'white' }}/>
              </ContactBtn>
            </IndividualContact>
          ))}
        </div>
        </>
        }
      </BottomSection>
    </ContactsContainer>
  )
}

export default Contacts