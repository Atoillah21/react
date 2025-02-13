import * as toolkit from '@reduxjs/toolkit'

const {configureStore, createAction, createReducer} = toolkit



const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION")

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
})

store.subscribe(() => {
    console.log(store.getState())
})
const action1 = addToCart({id: 1, qty: 1})
store.dispatch(action1)
store.dispatch(login())