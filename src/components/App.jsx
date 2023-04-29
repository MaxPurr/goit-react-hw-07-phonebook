import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from '../css/Container.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          {isLoading && <b>Request in progress...</b>}
          <ContactList />
        </>
      )}
    </div>
  );
};
