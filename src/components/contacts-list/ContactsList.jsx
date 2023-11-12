import { ContactsItem } from "components/contacts-item/ContactsItem"
import css from "./ContactsList.module.css"

export const ContactList = ({filteredContacts, handlerDel})=>{
	return(
		<ul className={css.contactList}>
			{filteredContacts().map(contact => {
				return(<ContactsItem
					key ={contact.id}
			contact={contact}
			del={()=>handlerDel(contact.id)}/>)})}
		</ul>
	)
}