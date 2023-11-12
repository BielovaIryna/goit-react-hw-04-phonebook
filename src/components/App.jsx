import { Notify } from 'notiflix';
import css from './App.module.css'
const { Component } = require('react');
const { ContactList } = require('./contacts-list/ContactsList');
const { Filter } = require('./filter/Filter');
const { ContactsForm } = require('./contacts-form/ContactsForm');

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'}],
    filter: '',
  };
  componentDidMount() {
    const stringifyContacts=localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifyContacts)??[];
    this.setState({contacts: parsedContacts});
  }
  componentDidUpdate(prevState){
    if(prevState.contacts!== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact  = (contact) => {
    const hasDuplicates = this.state.contacts.some(cont =>
cont.name === contact.name
    )
    if(hasDuplicates){
      Notify.failure(`${contact.name} already exists`)
      return
    }
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }))
    };

  deleteContact = (id) => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id!== id),
      }));
    };
  filterContacts = (e ) => {
      this.setState({filter: e.target.value})
    };
  handlerFilter =()=>{
      let filteredCondtacts=[];
      if(this.state.filter){
        filteredCondtacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      }else{
        return filteredCondtacts = this.state.contacts
      }
    
    return filteredCondtacts
  }

  render() {
    const {contacts, filter} =this.state
    return (
      <div className={css.section}>
        <h1 className={css.mainTitle}> Phonebook</h1>
        <ContactsForm 
        addContact={this.addContact}
        />

        <h2 className={css.secondaryTitle}>Contacts</h2>
        <Filter 
        filter ={filter}
        filterContacts={this.filterContacts}
        />
        <ContactList
        handlerDel={this.deleteContact}
        filteredContacts={this.handlerFilter}
        filter ={this.filter}
        contacts ={contacts} />
      </div>
    );
  }
}
