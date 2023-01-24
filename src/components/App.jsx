


import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {

  return (
    <section className={css.phonebook}>
      <div className={css.container}>
        <h1>PhoneBook</h1>
      </div>
      <div className={css.container}>
        <Form />
        <Filter  />
        <ContactList />
      </div>
    </section>
  );
};
