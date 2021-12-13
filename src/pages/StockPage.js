import React, {useState} from 'react';
import './StockPage.css'
import {useBSMContext} from '../utils/store';
import {Link} from "react-router-dom";
import {Button, Flex} from "@chakra-ui/react";

function StockPage() {
    const {items,} = useBSMContext();
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

    const getPrice = {"Luxury": 50, "Gift": 20, "Essential": 30};

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
                                <div
                                    className="stock-page-item-info">{item.dimensions.height}x{item.dimensions.width}x{item.dimensions.length}cm
                                </div>
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
        </div>
    );
}

export default StockPage;
