import React, { useState } from 'react';
import './ShoppingBasketPage.css';


export default function ShoppingBasketPage() {
    const [filtres, setFiltres] = useState({
        Luxury: true,
        Gift: false,
        Essential: true
    })
    const [listItem, setListItem] = useState([
        {
            name: "A",
            quantity: 3,
            dimensions: {
                height: 300,
                length: 400,
                width: 100
            },
            type: "Gift",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "B",
            quantity: 5,
            dimensions: {
                height: 300,
                length: 400,
                width: 100

            },
            type: "Luxury",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "C",
            quantity: 10,
            dimensions: {
                height: 300,
                length: 400,
                width: 100

            },
            type: "Luxury",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "D",
            quantity: 2,
            dimensions: {
                height: 300,
                length: 400,
                width: 100

            },
            type: "Essential",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "E",
            quantity: 1,
            dimensions: {
                height: 300,
                length: 400,
                width: 100

            },
            type: "Essential",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
        {
            name: "F",
            quantity: 6,
            dimensions: {
                height: 300,
                length: 400,
                width: 100
            },
            type: "Gift",
            expiration_date: "2021-12-08T11:13:03.203Z"
        },
    ]);
    const [listItemBasket, setListItemBasket] = useState({});

    function addBasket(index) {
        if (typeof listItemBasket.index === "undefined") {
            listItemBasket.index = 1;
        } else {
            listItemBasket.index++;
        }
        listItem[index].quantity--;
        const newItem = [...listItem];
        newItem[ index ].quantity = listItem[index].quantity
        setListItem( newItem )
    }

    function updateFiltre(filtre, value) {
        const newFiltre = {... filtres}
        switch (filtre) {
            case "Luxury":
                newFiltre.Luxury = value
                break
            case "Gift":
                newFiltre.Gift = value
                break
            case "Essential":
                newFiltre.Essential = value
                break
        }
        setFiltres(newFiltre);
    }
    return <div>
        <div className="conteneur-list-item">
            <div className="filtre-item">
                <label htmlFor="filtre1">Luxury</label><input type="checkbox" defaultChecked={filtres.Luxury} onChange={(e) => updateFiltre("Luxury", e.target.checked)}></input>
                <label htmlFor="filtre2">Gift</label><input type="checkbox" defaultChecked={filtres.Gift} onChange={(e) => updateFiltre("Gift", e.target.checked)}></input>
                <label htmlFor="filtre3">Essential</label><input type="checkbox" defaultChecked={filtres.Essential} onChange={(e) => updateFiltre("Essential", e.target.checked)}></input>
            </div>
            <ul className="list-item">
                {listItem.map(function (item, index) {
                    return (filtres[item.type] ?
                        <li className="item" key={index}>
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
                                <span
                                    className="info">({item.dimensions.length}/{item.dimensions.width}/{item.dimensions.height})</span>
                            </div>
                            <button className="button" onClick={() => addBasket(index)}>Add to basket</button>
                        </li> : ''
                    )
                })
                }
            </ul>
        </div>
    </div>;
}
