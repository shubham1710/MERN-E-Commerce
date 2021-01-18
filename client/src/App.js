import { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import store from './store';
import {loadUser} from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return ( 
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div> 
        </BrowserRouter>
        </Provider> 
    );
  }
}

export default App;
