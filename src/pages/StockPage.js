import React, { useState } from 'react';
import './StockPage.css'
import { addItem, useBSMContext } from '../utils/store';
import { Button, Divider, Flex } from '@chakra-ui/react'
import AddItem from '../components/AddItem'
import { Link } from "react-router-dom";

function StockPage() {
  const { items, dispatch } = useBSMContext();
  const [onlyExpired, setOnlyExpired] = useState(false)
  const [displayedItems, setDisplayedItems] = useState(items)

  function toggleFilter() {
    if (onlyExpired) {
      setDisplayedItems(items)
    } else {
      setDisplayedItems(items.filter(item => new Date().getTime() <= new Date(item.expiration_date).getTime()))
    }
    setOnlyExpired(!onlyExpired)
  }

  const getPrice = { "Luxury": 50, "Gift": 20, "Essential": 30 };

  const onAddItem = (name, type, quantity, expirationDate, height, length, width, weight) => {
    const newItem = {
      id: items ? items.length : 0,
      name: name,
      quantity: quantity,
      dimensions: {
        height: height,
        length: length,
        width: width,
      },
      type: type,
      expirationDate: expirationDate
    }
    console.log("Add item with id " + newItem.id)
    dispatch(addItem(newItem));
  }

  return (
    <div id="stock-page-container">
      <Flex>
        <div id="stock-item-go-back">
          <Link to="/">Go back to Home Page</Link>
        </div>
        <div id="stock-item-go-back">
          <Button onClick={toggleFilter} h={"50%"} bg={"white"} border={"none"}
            variant={"unstyled"}>{onlyExpired ? 'Show all items' : 'Show only expired'}</Button>
        </div>
      </Flex>

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
        {displayedItems.length !== 0 ? displayedItems.map((item, index) => {
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
      <Divider marginTop="4%" />
      <Flex w="100%" justifyContent="center">
        <AddItem marginTop="4%" onAddItem={onAddItem} />
      </Flex>
    </div>
  );
}

export default StockPage;
