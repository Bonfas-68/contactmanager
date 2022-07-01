import React, { Component } from 'react';

//Uncontrolled components and refs
class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: 'bone Fast',
    email: 'bonfa@gmail.com',
    phone: '222-2222-222',
  };
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };

    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                className="form-control form-control-lg"
                value={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                className="form-control form-control-lg"
                value={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone..."
                className="form-control form-control-lg"
                value={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContacts;
