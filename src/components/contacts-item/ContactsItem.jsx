import css from './ContactsItem.module.css'
export const ContactsItem = ({contact, del}) =>{
	return(
	<li className={css.contactsItem} >{contact.name}:
	 <span className={css.tel}>{contact.phone}</span>
	 <button type="button" className={css.delButton} onClick={del}>Delete</button>
	 </li>
	
	)
}