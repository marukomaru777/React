import React from 'react'
//import {useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import BButton from 'react-bootstrap/Button';

function Table() {
  return (
    <BTable striped bordered hover size="sm">
      <tbody>
        <tr>
            <td>標的</td>
            <td>2330.TW</td>
        </tr>
        <tr>
            <td>起始時間</td>
            <td>2022-01-01</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='2' align='center'>
            <BButton>查詢</BButton>
          </td>
        </tr>
      </tfoot>
    </BTable>
  )
}

export default Table