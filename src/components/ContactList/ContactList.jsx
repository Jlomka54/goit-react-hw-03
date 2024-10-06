import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      <Contact
        className={css.contactItem}
        onDeleteContact={onDeleteContact}
        contacts={contacts}
      />
    </ul>
  );
};

export default ContactList;
