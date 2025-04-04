export default (state, action) => {
    switch (action.type) {

        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "DELETE_TRANSACTION":
            return {
                ...state, // spread operator to copy the state
                //filter out the transaction with the id that is being deleted
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}