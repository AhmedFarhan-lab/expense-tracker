import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        
        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
            (negative - expense, positive - income)
            </label>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
