import React, { Component } from 'react';
import Contact from './contacts/Contact';

class Continued extends Component {
  state = {
    contacts: [
      {
        id: 1,
        names: 'bonn',
        emails: 'bonn@gmail.com',
        phones: '222-2222-222',
      },
      {
        id: 2,
        names: 'jonny',
        emails: 'jonny@gmail.com',
        phones: '333-333-3333',
      },
      {
        id: 3,
        names: 'Dronny',
        emails: 'dronny@gmail.com',
        phones: '293-444-3212',
      },
    ],
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contacters) => (
          <div className="card card-body mb-3">
            <h3>{contacters.names}</h3>
            <ul className="list-group">
              <li className="list-group-item">{contacters.emails}</li>
              <li className="list-group-item">{contacters.phones}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
export default Continued;
