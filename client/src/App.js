import { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';

class App extends Component {
  
  render(){
    return (
      
        <div className="App">
          <Navbar/>
        </div>
      
    );
  }
}

export default App;
