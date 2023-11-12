import css from './Filter.module.css'
export const Filter = ({filterContacts}) => { return(

	<label className={css.filter}>
        Find contacts by name:
        <input className={css.filterInput} type="text" placeholder="Search" onChange={filterContacts}/>
    </label>
)

}