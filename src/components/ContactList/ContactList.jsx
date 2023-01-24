
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItems } from 'redux/ContactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactUser}>
          <span className={css.user}>{contact.name} : </span>
          <span>{contact.number} </span>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteItems(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

