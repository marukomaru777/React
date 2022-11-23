/* Add JavaScript code here! */
//console.log('Hello World! You did it! Welcome to Snowpack :D');
import React from 'react';
import ReactDOM from 'react-dom';
//ReactDOM.render(<div>"HELLO REACT"</div>, document.getElementById('root'));
import App from '../src/App.jsx';
 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root'),
 );