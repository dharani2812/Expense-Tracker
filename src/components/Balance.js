import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalState'

const Balance = () => {
    const {transactions} = useContext(globalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    // console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(total);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>₹{total}</h1>
        </>
    )
}

export default Balance
