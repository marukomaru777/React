import React from 'react';
import * as ReactDOM from 'react-dom';
import Table from '../src/Table.jsx';
import Line from '../src/Line.jsx';
import Button from '../src/Button.jsx';
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
ReactDOM.render(
  <React.StrictMode>
    <Button />
     <Table />
  </React.StrictMode>,
  document.getElementById('query'),
);

 ReactDOM.render(
   <React.StrictMode>
     <Line />
   </React.StrictMode>,
   document.getElementById('root'),
 );