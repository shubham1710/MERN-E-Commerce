import { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import store from './store';

class App extends Component {
  
  render(){
    return ( 
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
        </div> 
        </Provider> 
    );
  }
}

export default App;
