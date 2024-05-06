import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/contactlist/ContactList";
import ContactForm from "../../components/contactform/ContactForm";
import SearchBox from "../../components/searchbox/SearchBox";
import { fetchContacts } from "../../redux/contactsOps";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </>
  );
}
