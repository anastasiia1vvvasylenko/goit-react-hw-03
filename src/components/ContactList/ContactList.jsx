import css from './ContactList.module.css';

const ContactList = ({ children }) => {
  return <ul className={css.contactList}>{children}</ul>;
};

export default ContactList;
