import React from 'react';
import logo from './logo.svg';
import './App.css';
import CV from './components/CV/CV';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
  <Provider store={store}>
      <div className="App">
      <CV></CV>
    </div>
  </Provider>
  );
}

export default App;
