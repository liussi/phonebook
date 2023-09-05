export const ContactList = ({filteredContacts, onDeleteContact}) => {
    return (
        <div>
             <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.number}
              <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
              </li>
              
          ))}
            </ul>
        </div>
    )
}