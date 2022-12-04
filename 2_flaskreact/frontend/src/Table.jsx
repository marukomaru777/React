import React from 'react'
//import {useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import BButton from 'react-bootstrap/Button';

function Table() {
  return (
    <form  method="get" action="result">
      <BTable striped bordered hover size="sm">
        <tbody>
          <tr>
              <td>標的</td>
              <td><input type="text" name="stock" value="2330.TW"></input></td>
          </tr>
          <tr>
              <td>起始時間</td>
              <td><input type="text" name="dateStr" value="2022-01-01"></input></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='2' align='center'>
            <input class="btn btn-primary" type="submit" value="查詢"></input>
            </td>
          </tr>
        </tfoot>
      </BTable>
    </form>
  )
}

export default Table