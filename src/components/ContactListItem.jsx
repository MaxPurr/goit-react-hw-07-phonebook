import css from '../css/ContactListItem.module.css';
import { deleteContact } from '../redux/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button
        className={css.contacts_delete_btn}
        type="button"
        onClick={evt => {
          handleDelete(evt.target.parentNode.getAttribute('for'));
        }}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
