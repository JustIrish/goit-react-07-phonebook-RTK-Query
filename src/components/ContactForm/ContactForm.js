import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { Loader } from 'components/Loader/Loader';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from './ContactForm.styled';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.trim().toLowerCase()
      )
    )
      return toast.error(`${name} is already in contacts.`);

    if (contacts.some(contact => contact.number === number.trim()))
      return toast.error(`${number} is already in contacts.`);

    const contact = { name, number };
    addContact(contact)
      .then(() => {
        toast.success('Contact added!');
        reset();
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor={nameInputId}>Name</LabelStyled>
      <InputStyled
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <LabelStyled htmlFor={numberInputId}>Number</LabelStyled>
      <InputStyled
        type="tel"
        name="number"
        id={numberInputId}
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <BtnStyled type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Add contact'}
      </BtnStyled>
    </FormStyled>
  );
};
