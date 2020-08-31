import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Todolist from './todolist';

ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
