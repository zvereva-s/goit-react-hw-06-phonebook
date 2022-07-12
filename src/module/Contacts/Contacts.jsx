import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/items/items-actions';
import { makeFilter } from 'redux/contacts/filter/filter-actions';
import { getContacts } from 'redux/contacts/contacts-selector';

import ContactForm from 'shared/components/ContactForm';
import Filter from 'module/Filter';
import ContactList from 'module/ContactList';

function Contacts() {
    const contacts = useSelector(getContacts);
    const { items, filter } = contacts;  
        
    const dispatch = useDispatch();

    function onAddContact(data) {
        const sameName = items.some(el => el.name === data.name);
        sameName
        ? alert(`${data.name} you already have in the contacts`)
        : dispatch(addContact(data));
    }
    function onRemoveContact(id) {
        dispatch(removeContact(id));
    }
    function onFilter(e) {
        const { value } = e.target;
        dispatch(makeFilter(value));
    }
    function getFilteredContacts(filter) {
        if (!filter) {
        return items;
        }
        return items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
        );
    }
            
    const filteredContacts = getFilteredContacts(filter);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter filter={onFilter} />
      <ContactList items={filteredContacts} onClick={onRemoveContact} />
    </>
  );
}
export default Contacts;
