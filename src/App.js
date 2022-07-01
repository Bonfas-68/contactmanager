import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/layout/Header';
import Contacts from './Components/contacts/Contacts';
import AddContacts from './Components/contacts/AddContacts';
import EditContacts from './Components/contacts/EditContacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Continued from './Components/continued';
import About from './Components/pages/About';
import Test from './Components/Test/Test';

import { Provider } from './Context';
import NotFound from './Components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContacts}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
