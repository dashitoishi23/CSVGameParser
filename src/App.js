import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard'
import Header from './components/header'
import Sorted from './components/sorted'
import Search from './components/search'
import Details from './components/details'

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/sort" component={Sorted} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/details" component={Details} />
      </div>
      </Router>  
    );
  }
}

export default App;
