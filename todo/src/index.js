import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers';
import Todo from './components/Todo';

//Redux store

const store = createStore(todos);



ReactDOM.render(
<Provider store={store}>
  <Todo />  
</Provider>, 
document.getElementById('root'));

