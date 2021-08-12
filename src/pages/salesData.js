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

        <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Location</th>
        <th>Min / Cus</th>
        <th>Max / Cust</th>
        <th>Avg Cookie Sale</th>
      </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>{importLoc[0].location}</td>
        <td>{importLoc[0].min}</td>
        <td>{importLoc[0].max}</td>
        <td>{randCustNum(importLoc[0].min,importLoc[0].max)}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>{importLoc[1].location}</td>
        <td>{importLoc[1].min}</td>
        <td>{importLoc[1].max}</td>
        <td>{randCustNum(importLoc[1].min,importLoc[1].max)}</td>
      </tr>
      <tr>
      <td>3</td>
        <td>{importLoc[2].location}</td>
        <td>{importLoc[2].min}</td>
        <td>{importLoc[2].max}</td>
        <td>{randCustNum(importLoc[2].min,importLoc[2].max)}</td>
      </tr>
      <tr>
      <td>4</td>
        <td>{importLoc[3].location}</td>
        <td>{importLoc[3].min}</td>
        <td>{importLoc[3].max}</td>
        <td>{randCustNum(importLoc[3].min,importLoc[3].max)}</td>
      </tr>
    </tbody>
  </Table>
        </>

    )
}
export default SalesData;
