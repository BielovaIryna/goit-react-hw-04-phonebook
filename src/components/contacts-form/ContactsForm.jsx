import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import css from './ContactsForm.module.css'
export class ContactsForm extends Component {
	state ={
		name: '',
        phone: ''
	}
handlerSubmit =(e) =>{
	e.preventDefault()
    const newContact = {...this.state, id: nanoid(5)};
	this.props.addContact(newContact);
	this.setState({
        name: '',
        phone: ''
    })
	
}
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
	return (
	  <form className={css.contactForm} onSubmit ={this.handlerSubmit}>
		<label className={css.contactFormLabel} >
			Name: <input type ="text" className={css.contactFormInput} name ="name" 
			value = {this.state.name} onChange={this.handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required></input>
		</label>
		<label className={css.contactFormLabel}>
			Phone: <input type="tel" className={css.contactFormInput} name = "phone" value = {this.state.phone} onChange={this.handleChange} pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" required ></input>
		</label>
		<button type='submit' className={css.submitButton}>Submit</button>
	  </form>
	)
  }
}
