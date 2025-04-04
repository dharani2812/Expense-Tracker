import React, {useState} from 'react'
import { useContext } from 'react';
import {globalContext} from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(globalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, 
            amount: +amount //convert string to number
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </div>
    )
}

