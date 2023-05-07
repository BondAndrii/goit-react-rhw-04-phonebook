import React from "react";

import PropTypes from "prop-types";

import styles from "./ContactList.module.css"

export const ContactList = ({ contacts, onDelete }) => (
    <ul className={styles.ContactList}>
        {contacts.map((contact) => <li className={styles.ContactList__element} key={contact.id} id={contact.id}>
            <p className={styles.Text}>{contact.name}: {contact.number}</p>
            <button className={styles.Button__element} type="button" onClick={()=> onDelete(contact.id)}>Видали!</button>
        </li>
        )}
    </ul>
);



ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}