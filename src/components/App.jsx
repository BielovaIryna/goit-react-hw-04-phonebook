import { Notify } from 'notiflix';
import css from './App.module.css'
import { useEffect, useState } from 'react';

const { ContactList } = require('./contacts-list/ContactsList');
const { Filter } = require('./filter/Filter');
const { ContactsForm } = require('./contacts-form/ContactsForm');

const contactsList = [
  {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'}
]
export const App = () =>{
  const [contacts, setContacts] =useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList)

  const [filter, setFilter] = useState('');
    
useEffect (()=>{
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

  const addContact  = (contact) => {
    const hasDuplicates = contacts.some(cont =>
cont.name.toLowerCase() === contact.name.toLowerCase()
    )
    if(hasDuplicates){
      Notify.failure(`${contact.name} already exists`)
      return
    }
      setContacts((prevState) => [...prevState, contact])
    };

  const deleteContact = (id) => {
      setContacts(prevState => prevState.filter((contact) => contact.id!== id),
      );
    };
  const filterContacts = (e) => {
      setFilter(e.target.value)
    };
  const handlerFilter =()=>{
      let filteredCondtacts=[];
      if(filter){
        filteredCondtacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
      }else{
        return filteredCondtacts = contacts
      }
   
    return filteredCondtacts
  }



    return (
      <div className={css.section}>
        <h1 className={css.mainTitle}> Phonebook</h1>
        <ContactsForm 
        addContact={addContact}
        />

        <h2 className={css.secondaryTitle}>Contacts</h2>
        <Filter 
        filter ={filter}
        filterContacts={filterContacts}
        />
        <ContactList
        handlerDel={deleteContact}
        filteredContacts={handlerFilter}
        />
      </div>
    );
  
}
