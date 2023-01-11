import { useGetContactsQuery } from 'redux/contactsSlice';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {error ? (
        <div style={{ margin: '10px auto' }}>
          Something went wrong... Try reloading the page
        </div>
      ) : (
        <Filter />
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts && <ContactList />}
      <GlobalStyle />
      <Toaster position="top-center" />
    </Layout>
  );
};
