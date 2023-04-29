import css from '../css/Phonebook.module.css';
import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAdd = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const number = form.elements.number.value;
      dispatch(addContact({ name, number }));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleAdd} className={css.phonebook_container}>
      <label className={css.phonebook_item}>
        Name
        <input
          className={css.phonebook_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebook_item}>
        Number
        <input
          className={css.phonebook_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.add_contact_btn}>
        Add contact
      </button>
    </form>
  );
};
