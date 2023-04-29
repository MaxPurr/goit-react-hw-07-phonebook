import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';
import css from '../css/ContactList.module.css';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts_container}>
      {contacts.map(contact => (
        <li className={css.contacts_item} key={contact.id} htmlFor={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
