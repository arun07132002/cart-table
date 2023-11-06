import React, { Fragment } from "react";
import { Button, Label, Table } from "semantic-ui-react";

export default  function ShoppingTable({addData,removeCart,totaldiscountPrice}){



  return (
    
    <Fragment>
      <h4>SHOPPING CART</h4>

      <Table singleLine className="shoppingCart">
        <Table.Header>
          <Table.Row className="headerName">
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>ProdectName</Table.HeaderCell>
            <Table.HeaderCell>Org Price</Table.HeaderCell>
            <Table.HeaderCell>Discount percentage</Table.HeaderCell>
            <Table.HeaderCell>Discount price</Table.HeaderCell>
            <Table.HeaderCell>vendor</Table.HeaderCell>
            <Table.HeaderCell>Remove to cart</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {addData.map(({ id, name, price, vendor, discount }) => (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{price}</Table.Cell>
              {/* //DICOUNT  calculation */}
              <Table.Cell>{discount ? discount : 0}%</Table.Cell>
              <Table.Cell>{price - (discount / 100) * price}</Table.Cell>
              <Table.Cell>{vendor}</Table.Cell>
              <Table.Cell>
                <Button
                  className="deletebtn"
                  onClick={() => removeCart(id, price, discount)}
                >
                  Remove cart
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Label className="Totalprice">
        Total Discount Price : Rs.{totaldiscountPrice}
      </Label>
    </Fragment>
  );
};
