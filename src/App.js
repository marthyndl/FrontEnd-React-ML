import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import history from './history';
import './App.scss';

class App extends Component {
  onTermSubmit = (term) => {
    history.push({
        pathname: '/items',
        search: `?search=${term}`
    });
  }
  
  render() {
    return (
      <div className="app vh-100">
          <Router history={history}>
              <div className="content">
                  <SearchBar onFormSubmit={this.onTermSubmit} />
                  <Switch>
                      <Route path="/" exact component={ProductList}></Route>
                      <Route path="/items" exact component={ProductList}></Route>
                      <Route path="/items/:id" component={ProductDetail}></Route>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
