import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
class Contact extends Component {
  //State
  state = {
    showContactInfo: false,
  };
  // onShowClick = (e) => {
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  //Render
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  style={{ cursor: 'pointer' }}
                  className="icon"
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                >
                  🔽
                </i>
                <i
                  className="icon"
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  ❌
                </i>
                <Link
                  to={`contact/edit/${id}`}
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem',
                  }}
                >
                  <i>🖊</i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
