import React, { useState } from 'react';
import './StockPage.css'
import { useBSMContext } from '../utils/store';
import { Flex } from '@chakra-ui/react'
import AddItem from '../components/AddItem'
import {Link} from "react-router-dom";

function StockPage() {
  const data = useBSMContext();

  const [items, ] = useState(data ? data.items.items : []);
  const getPrice = {"Luxury": 50, "Gift": 20, "Essential": 30};

  return (
    <div id="stock-page-container">
      <div id="stock-item-go-back">
        <Link to="/">Go back to Home Page</Link>
      </div>

      <div className="stock-elements-container">
        <div className="stock-item-element" id="stock-page-titles">
          <div className="stock-page-item-info">Name</div>
          <div className="stock-page-item-info">Quantity</div>
          <div className="stock-page-item-info">Dimensions</div>
          <div className="stock-page-item-info">Type</div>
          <div className="stock-page-item-info">Price</div>
          <div className="stock-page-item-info">Expiration</div>
          <div className="stock-page-item-info"></div>
        </div>
        {items && items.length !== 0 ? items.map((item, index) => {
          return (
            <div key={index} className="stock-item-element">
              <div className="stock-page-item-info">{item.name}</div>
              <div className="stock-page-item-info">{item.quantity}</div>
              <div className="stock-page-item-info">{item.dimensions.height}x{item.dimensions.width}x{item.dimensions.length}cm</div>
              <div className="stock-page-item-info">{item.type}</div>
              <div className="stock-page-item-info">€{getPrice[item.type]}</div>
              <div className="stock-page-item-info">{new Date(item.expiration_date).toDateString()}</div>
              <div className="stock-page-item-info">
                <button className="stock-page-delete-button">Delete</button>
              </div>
            </div>
          )
        }) :
          <div>No items to display!</div>
        }
      </div>
      <Flex w="100%" justifyContent="center">
        <AddItem marginTop="8%"/>
      </Flex>
    </div>
  );
}

export default StockPage;
