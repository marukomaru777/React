import React from 'react'
//import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import BButton from 'react-bootstrap/Button';
import { useTable } from 'react-table';

function App() {
  // Use the state and functions returned from useTable to build your UI
  const data = React.useMemo(
    () => [
      {
        col1: '標的',
        col2: '2330.TW',
      },
      {
        col1: '起始時間',
        col2: '2022-01-01',
      }
    ],[]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '表頭1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: '表頭2',
        accessor: 'col2',
      }
    ],[]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  // const tableInstance = useTable({ columns, data })  // Render the UI for your table
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = tableInstance

  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}  
            style={{ 
              width: '20%',
              marginTop: '30px',
              marginLeft: '20px'
            }}>
      {/* <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead> */}
      
      <tbody {...getTableBodyProps()} >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
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

export default App