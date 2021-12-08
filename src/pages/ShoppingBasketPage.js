import React, { useState } from 'react';
import './ShoppingBasketPage.css';


export default function ShoppingBasketPage() {
    const listItem = [
        {
            name: "A",
            quantity: 3,
            dimensions: {
                height: .300,
                length: .400,
                width: .100
            },
            type: "Gift",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "B",
            quantity: 5,
            dimensions: {
                height: .300,
                length: .400,
                width: .100

            },
            type: "Luxury",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "C",
            quantity: 10,
            dimensions: {
                height: .300,
                length: .400,
                width: .100

            },
            type: "Luxury",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "D",
            quantity: 2,
            dimensions: {
                height: .300,
                length: .400,
                width: .100

            },
            type: "Essential",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "E",
            quantity: 1,
            dimensions: {
                height: .300,
                length: .400,
                width: .100

            },
            type: "Essential",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "F",
            quantity: 6,
            dimensions: {
                height: .300,
                length: .400,
                width: .100
            },
            type: "Gift",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
    ]
    return <div>
        <div className="conteneur-list-item">
            <ul className="list-item">
                {listItem.map(
                    (item) =>
                        <li className="item">
                            <span className="type-item">{item.type}</span>
                            <div className="conteneur-item">
                                <span className="description">Name: </span>
                                <span className="info">{item.name}</span>
                            </div>
                            
                            <div className="conteneur-item">
                                <span className="description">Quantity available:</span>
                                <span className="info">{item.quantity}</span>
                            </div>
                            <div className="conteneur-item">
                                <span className="description">Dimensions:</span>
                                <span className="info">({item.dimensions.length}/{item.dimensions.width}/{item.dimensions.height})</span>
                            </div>
                        </li>
                )}
            </ul>
        </div>
    </div>;
}