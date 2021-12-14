import React, {createContext, useContext, useReducer} from "react";

export const BSMContext = createContext(null);
// Initial state
 const initialState = [{
    id: 1,
    name: "TOTO",
    quantity: 5,
    dimensions: {
        height: .0,
        length: .0,
        width: .0
    },
    type: "Essential",
    expiration_date: "2021-12-08T11:13:03.203Z"
},
    {
        id: 2,
        name: "Tata",
        quantity: 2,
        dimensions: {
            height: .0,
            length: .0,
            width: .0
        },
        type: "Luxury",
        expiration_date: "2021-12-08T11:13:03.203Z"
    },
    {
        id: 3,
        name: "B",
        quantity: 8,
        dimensions: {
            height: .0,
            length: .0,
            width: .0
        },
        type: "Gift",
        expiration_date: "2021-12-08T11:13:03.203Z"
    },
    {
        id: 4,
        name: "A",
        quantity: 10,
        dimensions: {
            height: .0,
            length: .0,
            width: .0
        },
        type: "Luxury",
        expiration_date: "2021-12-08T11:13:03.203Z"
    }
];

// Actions
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_TODO";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";

// Action creators
export function addItem(item) {
    return {type: ADD_ITEM, item};
}

export function removeItem(index) {
    return {type: REMOVE_ITEM, index};
}

export function increaseItemQuantity(index, amount = 1) {
    return {type: INCREASE_ITEM_QUANTITY, index, amount}
}

export function decreaseItemQuantity(index) {
    return {type: DECREASE_ITEM_QUANTITY, index}
}

// Reducer
export function bsmReducer(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            state = [...state, action.item]
            return state
        case REMOVE_ITEM:
            const copy = [...state];
            copy.splice(copy.findIndex(item => item.id === action.index), 1);
            state = copy
            return state;
        case INCREASE_ITEM_QUANTITY:
            state[action.index].quantity += action.amount
            state = [...state]
            return state;
        case DECREASE_ITEM_QUANTITY:
            state[action.index].quantity -= 1
            state = [...state]
            return state;
        default:
            return state;
    }
}

function BSMProvider(props) {
    const [items, dispatch] = useReducer(bsmReducer, initialState);

    const bsmData = {items, dispatch};

    return <BSMContext.Provider value={bsmData} {...props} />;
}

function useBSMContext() {
    return useContext(BSMContext);
}

export {BSMProvider, useBSMContext};
