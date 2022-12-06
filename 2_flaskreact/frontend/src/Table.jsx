import React from 'react'
//import {useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import BButton from 'react-bootstrap/Button';
import $ from 'jquery';

function Table() {
  let getStockData =function(e){
    $.ajax({
      url:"http://192.168.168.14:8080",
      type: "GET",
      data:{
        stock: $('#stock').val,
        dateStr: $('#dateStr').val,
      },
      success: function(result){
        debugger
        console.log(result);
      },
      error: function(error){
        debugger
        console.log(error)
      }
    });
  }
  return (
    <BTable striped bordered hover size="sm">
      <tbody>
        <tr>
            <td>標的</td>
            <td><input type="text" id="stock" name="stock" value="2330.TW"></input></td>
        </tr>
        <tr>
            <td>起始時間</td>
            <td><input type="text" id="dateStr" name="dateStr" value="2022-01-01"></input></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='2' align='center'>
          <BButton class="btn btn-primary" onClick={getStockData}>查詢</BButton>
          </td>
        </tr>
      </tfoot>
    </BTable>
  )
}

export default Table