import React from "react";
import { Link } from 'gatsby';
import importLoc from './Locations.js';

import Table from 'react-bootstrap/Table';

console.log(importLoc);



  function randCustNum(min, max)  {
    return  Math.floor(Math.random() * (max - min + 1) + min); 
  }



const SalesData = () => {
    return(
        <>
        <Link to="/">Home</Link>
        <h1>Sales Data</h1>

        {/* <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Location</th>
        <th>Min / Cust</th>
        <th>Max / Cust</th>
        <th>Avg Cookie Sale</th>
      </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table> */}
        </>

    )
}
export default SalesData;