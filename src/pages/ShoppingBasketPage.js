import React, {useState} from 'react';
import './ShoppingBasketPage.css';
import {Box, Button, Flex, Table, Tbody, Td, Text, Tr} from "@chakra-ui/react";
import {decreaseItemQuantity, increaseItemQuantity, useBSMContext} from "../utils/store";

const Sidebar = ({children}) => {
    return <Box
        p={5}
        h="100%"
        bg=""
    >
        {children}
    </Box>;
}

export default function ShoppingBasketPage() {
    const [filtres, setFiltres] = useState({
        Luxury: true,
        Gift: false,
        Essential: true
    })

    const {items, dispatch} = useBSMContext();

    const [listItemBasket, setListItemBasket] = useState([]);

    function addBasket(index) {
        if (items[index].quantity !== 0) {
            dispatch(decreaseItemQuantity(index))
            const itemBasketIndex = listItemBasket.findIndex(item => item.id === items[index].id)

            if (itemBasketIndex !== -1) {
                listItemBasket[itemBasketIndex].quantity += 1
            } else {
                const newItemBasketItem = {...items[index], quantity: 1}
                const newItemBasketList = [newItemBasketItem, ...listItemBasket]
                setListItemBasket(newItemBasketList)
            }
        } else {
            alert(`${items[index].name} is unavailable`)
        }
    }

    const getPrice = {"Luxury": 50, "Gift": 20, "Essential": 30};
    const getVAT = {"Luxury": 20, "Gift": 5, "Essential": 10};
    const [totalBasketCost, setTotalBasketCost] = useState(0)

    function updateFiltre(filtre, value) {
        const newFiltre = {...filtres}
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

    function calculateTotalBasket(e) {
        e.stopPropagation()
        const listOfPrice = listItemBasket.map((item) => (getPrice[item.type] + getPrice[item.type] * getVAT[item.type] / 100) * item.quantity)
        if (listOfPrice.length > 0) {
            setTotalBasketCost(listOfPrice.reduce((acc, value) => acc + value))
        }
    }

    function clearBasket(e) {
        listItemBasket.map((item, itemBasketIndex) => {

            const index = items.findIndex((storeItem) => item.id === storeItem.id);
            const amount = item.quantity;

            listItemBasket.splice(itemBasketIndex, 1);
            console.log(amount)
            dispatch(increaseItemQuantity(index, amount));
        });
        setTotalBasketCost(0);
    }

    return <div style={{display: "flex"}}>
        <Sidebar variant={"sidebar"}>
            <div style={{textAlign: "left"}}>
                <Text fontWeight={"bold"} mb={"10px"}>Shopping Basket</Text>
                <Table variant={"unstyled"}>
                    <Tbody>
                        {listItemBasket.map((item, index) =>
                            <Tr key={index}>
                                <Td>
                                    x{item.quantity}
                                </Td>
                                <Td style={{fontWeight: "bold"}}>
                                    {item.name}
                                </Td>
                                <Td>
                                    {getPrice[item.type] * item.quantity}€
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
                <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
                <Flex>
                    <Text fontWeight={"bold"}>Total Cost:</Text>
                    <Text ml={"2px"}>{totalBasketCost} €</Text>
                </Flex>
                <Button onClick={calculateTotalBasket} bg={"primary.300"} mt={"20px"}>Calculate Total</Button>
                <Button onClick={clearBasket} textColor="white" bg={"primary.900"} mt={"20px"}>Clear Basket</Button>
            </div>
        </Sidebar>
        <div className="conteneur-list-item">
            <div className="filtre-item">
                <label htmlFor="filtre1">Luxury</label><input type="checkbox" defaultChecked={filtres.Luxury}
                                                              onChange={(e) => updateFiltre("Luxury", e.target.checked)}/>
                <label htmlFor="filtre2">Gift</label><input type="checkbox" defaultChecked={filtres.Gift}
                                                            onChange={(e) => updateFiltre("Gift", e.target.checked)}/>
                <label htmlFor="filtre3">Essential</label><input type="checkbox" defaultChecked={filtres.Essential}
                                                                 onChange={(e) => updateFiltre("Essential", e.target.checked)}/>
            </div>
            <ul className="list-item">
                {items.map(function (item, index) {
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
