import React, { Component } from "react"; 

import {ContactForm} from "./ContactForm/ContactForm";

import {Filter} from './Filter/Filter'


import {ContactList} from "./ContactList/ContactList";

import {users} from "../assets/defaultUsers"

import styles from "./App.module.css"

export class App extends Component {
  state = {
    contacts: [],
    filter:'',
  }  
  
  componentDidMount() {  
    const contacts = JSON.parse(localStorage.getItem("contacts")) || users;
    this.setState({ contacts });      
  }
  componentDidUpdate(_, prevState) {    
     const { contacts } = this.state;
    if (
      prevState.contacts.length !== 0 &&
      prevState.contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      console.log("in componentDidUpdate");
    }
  }  
  formSubmitHandler = data => {
    const { contacts } = this.state;
      if (contacts.find(contact => contact.name === data.name)) {
      const message = `Абонент ${data.name} вже є в книзі`;
      alert(message);  
    }
    else {
      this.setState(({  contacts }) => ({
        contacts: [...contacts, data],
        }));
    }  
  }
  doFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });       
  }
  doClear = () => {
    this.setState({ filter: '' })
  }
  toFoundAbonent = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(abon => abon.name.toLocaleLowerCase().includes(normalizedFilter));
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter} = this.state;
    const foundAbonent = this.toFoundAbonent();
    return (
    <div className={styles.Container}>
      <h1 className={styles.Tittle}>Записник контактів</h1>
      <ContactForm priSubmit={this.formSubmitHandler} />      
      <div>
        <h2 className={styles.SecondTittle}>Контакти</h2>
        <Filter value={filter} onChange={this.doFilter} onDelete={this.doClear } />
        <ContactList contacts={foundAbonent} onDelete={this.deleteContact} />
      </div>
    </div>
  );
};
};
 