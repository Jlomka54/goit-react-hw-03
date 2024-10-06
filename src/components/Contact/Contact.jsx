import css from "./Contact.module.css";

const Contact = ({ contacts, onDeleteContact }) => {
  return contacts.map((contact) => (
    <li className={css.contactItem} key={contact.id}>
      <div className={css.box}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
};

export default Contact;
