import React, { createContext, useReducer, useContext } from "react";

export const BSMContext = createContext(null);

// Initial state
const initialState = {
    items: [],
};

// Actions
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_TODO";

// Action creators
export function addItem(item) {
    return { type: ADD_ITEM, item };
}

export function removeItem(index) {
    return { type: REMOVE_ITEM, index };
}

// Reducer
export function bsmReducer(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            state.items = [...state.items, action.item]
            return state
        case REMOVE_ITEM:
            const copy = [...state.items];
            copy.splice(action.index, 1);
            state.items = copy
            return state;
        default:
            return state;
    }
}

function BSMProvider(props) {
    const [items, dispatch] = useReducer(bsmReducer, initialState);

    const bsmData = { items, dispatch };

    return <BSMContext.Provider value={bsmData} {...props} />;
}

function useBSMContext() {
    return useContext(BSMContext);
}

export { BSMProvider, useBSMContext };