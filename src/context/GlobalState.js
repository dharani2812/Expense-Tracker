import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer"

const initialState = {
    transactions: []
};

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    //useReducer is a hook that allows us to manage state in a functional component
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions 
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<globalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </globalContext.Provider>)
}