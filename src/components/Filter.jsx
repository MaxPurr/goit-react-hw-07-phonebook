import css from '../css/Filter.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleUpdate = filter => dispatch(updateFilter(filter));

  return (
    <div className={css.filter_container}>
      <p className={css.filter_text}>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        onChange={evt => handleUpdate(evt.target.value)}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
