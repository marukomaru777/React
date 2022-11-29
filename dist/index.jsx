import React from 'react';
import * as ReactDOM from 'react-dom';
import Table from '../src/Table.jsx';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

 ReactDOM.render(
   <React.StrictMode>
     <Table />
   </React.StrictMode>,
   document.getElementById('root'),
 );