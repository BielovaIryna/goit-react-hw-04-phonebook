import { nanoid } from 'nanoid'
import css from './ContactsForm.module.css'
import { useState } from 'react'
export const ContactsForm =({addContact})=> {
	const [name, setName]= useState('');
	const [phone, setPhone]= useState('');
	
const handlerSubmit =(e) =>{
	e.preventDefault();

    const newContact = {name, phone, id: nanoid(5)};
	addContact(newContact);
	setName("");
	setPhone("")
	
	
}
    const handleChange = (e) =>{
		const {name, value} = e.target;
		switch (name) {
			case "name": setName (value); 
			break;
			case "phone": setPhone (value);
			break;
			default:return;

		}
        
    }
  
	return (
	  <form className={css.contactForm} onSubmit ={handlerSubmit}>
		<label className={css.contactFormLabel} >
			Name: <input type ="text" className={css.contactFormInput} name ="name" 
			value = {name} onChange={handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required></input>
		</label>
		<label className={css.contactFormLabel}>
			Phone: <input type="tel" className={css.contactFormInput} name = "phone" value = {phone} onChange={handleChange} pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" required ></input>
		</label>
		<button type='submit' className={css.submitButton}>Submit</button>
	  </form>
	)
  
}
