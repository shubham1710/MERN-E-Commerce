import { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import store from './store';
import {loadUser} from './actions/authActions';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
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
