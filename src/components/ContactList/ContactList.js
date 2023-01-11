import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const value = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
