import { ContactForm } from './Form/Form';
import { Application, FormTitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Application>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm></ContactForm>
      <hr />
      <FormTitle>Contacts</FormTitle>
      <Filter />
      <ContactList />
    </Application>
  );
};