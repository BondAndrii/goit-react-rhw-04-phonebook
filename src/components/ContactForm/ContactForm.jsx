import React, { Component } from "react";

import { nanoid } from "nanoid";

import styles from "./ContactForm.module.css"

import PropTypes from "prop-types";



export class ContactForm extends Component {
    state = {
        id:'',
        name: '',
        number:'',
        
    }
    nameId = nanoid();
    numberId = nanoid();
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            id: nanoid(),  
            [name]: value,
                      
        });        
        
    }
    handleSubmit = e => {
    e.preventDefault();
        
        this.props.priSubmit(this.state);        
        console.log("in form after", this.state);
        this.reset();
        
        
    
    }
    reset = () => {
        this.setState({ id:'', name: '', number:'', });
    };
    render() {
    const { name, number } = this.state;
        return (
            
            <form className={styles.Form} onSubmit={this.handleSubmit}>
                <label className="Label" htmlFor={this.nameId}>
                    <p className={styles.Text}>Iм'я:</p>
                    <input
                        type="text"
                        name="name"
                        className={styles.Input}
                        id={this.nameId}
                        value={name}
                        onChange={this.handleChange}
                        placeholder="введи ім'я"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
               
                <label className="Label" htmlFor={this.numberId}>
                    <p className={styles.Text}>Номер:</p>
                    <input
                        type="tel"
                        name="number"
                        className={styles.Input}
                        value={number}
                        id={this.numberId}
                        onChange={this.handleChange}
                        placeholder="введи номер телефону"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                
                <button className={styles.Button} type="submit">Запиши!</button>
            </form>
            
                
        );
    }
}


ContactForm.propTypes= {
    priSubmit: PropTypes.func.isRequired,
}