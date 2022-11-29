/* Add JavaScript code here! */
//console.log('Hello World! You did it! Welcome to Snowpack :D');
import React from 'react';
import * as ReactDOM from 'react-dom';
//ReactDOM.render(<div>"HELLO REACT"</div>, document.getElementById('root'));
import App from '../src/App.jsx';
import Table from '../src/Table.jsx';

 ReactDOM.render(
  // <h1>hello, world!!!!!!</h1>,
   <React.StrictMode>
     <App />
     <Table />
   </React.StrictMode>,
   document.getElementById('root'),
 );