import React from 'react'
import { useContext } from 'react';
import { globalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(globalContext);
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
