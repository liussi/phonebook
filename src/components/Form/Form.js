
import React, { Component } from "react";
import { nanoid } from 'nanoid';


export default class ContactForm extends Component {
    state = {
    name: "",
    number: "",  
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formHandleSubmit = (e) => {
  e.preventDefault();
  const { name, number } = this.state;

  if (name.trim() === ''&& number.trim() === '') {
    return;
  }

  const newContact = {
    id: nanoid(),
    name: name,
    number:number,
  };

   this.props.onAddContact(newContact); 
  this.reset();
 
};

reset = () => {this.setState( { name: "",number: ""})};
  

render() {
 const { name, number } = this.state;

    return (
        <div>
               <form onSubmit={this.formHandleSubmit}>
                <label>
                    Name
                    <input
                        value={name}
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label>
                    Number
                    <input
                        value={number}
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <button  type="submit">Add contact</button>
            </form>
              </div>  
    )
}
};