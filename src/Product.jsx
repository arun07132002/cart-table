import React, { Fragment } from "react";
import { useState } from "react";
import ShoppingTable  from "./ShoppingTable";
import ProductTable from "./ProductTable";
import  Display  from "./Display";
import "./App.css";

export default function  Product () {
 
  const [addData, setAddData] = useState([]);
  const [totaldiscountPrice, setTotalDiscountPrice] = useState(0);

  


  // Add to Cart
  const addCart = (name, price, vendor, tags, discount) => {
    
    const id = addData.length ? addData[addData.length - 1].id + 1 : 1;
    const addNewItem = { id, name, price, vendor, tags, discount };
    const listItems = [...addData, addNewItem];
    
       setAddData(listItems)
    
    let discountPrice = price - (discount ? discount:0 / 100) * price;
    let discountcount = discountPrice + totaldiscountPrice;
    console.log(discountcount)
    setTotalDiscountPrice(discountcount);
  };

  // Remove To Cart
  const removeCart = (id, price, discount) => {
    let discountPrice = price - (discount ? discount:0 / 100) * price;
    let discountcount = totaldiscountPrice - discountPrice;
    setTotalDiscountPrice(discountcount);
    const listItems = addData.filter((item) => item.id !== id);
    setAddData(listItems);
  };

  

  return (
    <Fragment>
      <div className="divbox">
          <Display/>
          <ProductTable addCart={addCart}   />
          {/* //SHOPPING CART======================================================================== */}
              <ShoppingTable
                addData={addData}
                removeCart={removeCart}
                totaldiscountPrice={totaldiscountPrice}
              />
      </div>                                                           
    </Fragment>
  );
};
