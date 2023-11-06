import React, { Fragment } from "react";
import { Table } from "semantic-ui-react";
import "./App.css";


const getFile = [
  {
      id: 1,
      vendor: 'vendor1',
      tradeA:12 ,
      tradeB:12 ,
      tradeC:'N/A' ,
      tradeD :6 
  },
  {
      id: 2,
      vendor: 'vendor2',
      tradeA:10 ,
      tradeB:8 ,
      tradeC:20,
      tradeD :'N/A' 
  },
  {
      id: 3,
      vendor: 'vendor3',
      tradeA:'N/A' ,
      tradeB:25 ,
      tradeC:3 ,
      tradeD :16 
  },
  {
      id: 4,
      vendor: 'vendor4',
      tradeA:9 ,
      tradeB:'N/A' ,
      tradeC:16 ,
      tradeD :30 
  },
  {
      id: 5,
      vendor: 'vendor5',
      tradeA:5 ,
      tradeB:11,
      tradeC:'N/A' ,
      tradeD :30
  }

]

export default function Display(){
  return (
    <Fragment>
      <div className="divbox">
        <h2>DISCOUNT TABLE</h2>
        <Table singleLine className="tablebox">
          <Table.Header>
            <Table.Row className="headerName">
              <Table.HeaderCell>Vendor</Table.HeaderCell>
              <Table.HeaderCell>Trade A</Table.HeaderCell>
              <Table.HeaderCell>Trade B</Table.HeaderCell>
              <Table.HeaderCell>Trade C</Table.HeaderCell>
              <Table.HeaderCell>Trade D</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getFile.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.vendor}</Table.Cell>
                <Table.Cell>{data.tradeA}</Table.Cell>
                <Table.Cell>{data.tradeB}</Table.Cell>
                <Table.Cell>{data.tradeC}</Table.Cell>
                <Table.Cell>{data.tradeD}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Fragment>
  );
};
