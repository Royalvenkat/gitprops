import React from 'react';
import Table from 'react-bootstrap/Table';
import "./Listcmp.css"
// const array =["venkat","Sai","royal"];
const array=["venkat123","royal123"]

const Listcmp = () => {
  return (
    <div className='header'>
      <h1>Table creating using Array</h1>
      <Table striped   variant="dark" size="sm" >
        <thead>
          <th>
            <td>
              Sno number
            </td>
            <td>Name</td>
          </th>
        </thead>
        <tbody>
           {array.map((value,index)=> (
            <tr key={value}>
              <td>{index+1}</td>
              <td>{value}</td>
            </tr>
           ))}
         
        </tbody>
      </Table>
    </div>
  );
};

export default Listcmp