import { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <h1>E Commerce MERN App</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
