// reducer

import { createStore } from "redux"

const cartReducer = (
    state = {
        cart: [],
    },
    action) => {
        switch(action.type) {
            case "ADD_TO_CART":
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            default:
                return state
        }
}

// store
const store = createStore(cartReducer)
console.log(store.getState())

// subscribe
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id:2,
        qty:21,
    }
}
store.dispatch(action1)