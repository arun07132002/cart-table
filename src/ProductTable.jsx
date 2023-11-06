import React, { Fragment } from "react";
import { Button, Table } from "semantic-ui-react";
import "./App.css";
import alldata from './db.json';

export default function ProductTable({addCart}){
  return (
    <Fragment>
      <h2>PRODUCT TABLE</h2>
      <Table singleLine className="prodectTable">
        <Table.Header>
          <Table.Row className="headerName">
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>ProductName</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>vendor</Table.HeaderCell>
            <Table.HeaderCell>Add to cart</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alldata.map(({ id, name, price, vendor, tags, discount }) => (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{price}</Table.Cell>
              <Table.Cell>{tags}</Table.Cell>
              <Table.Cell>{vendor}</Table.Cell>
              <Table.Cell>
                <Button
                  className="buttonAdd"
                  onClick={() => addCart(name, price, vendor, tags, discount)}
                >
                  Add to cart
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

