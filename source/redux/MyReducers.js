import { combineReducers, createStore } from 'redux';
// import { addToCart, deleteCartItem } from './cartHandler';
import ReducersConstants from './ReducersConstants';

const initialcartState = {
	cart: { Data: [], Total: 0 }
};
const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ReducersConstants.UPDATE_CART:
			return [ ...state, { cartData: action.cart } ];
		// return { cart: addToCart(state, action.cart) };
		case ReducersConstants.UPDATE_CART_INDEX:
			return { cart: action.cart };

		case ReducersConstants.RESET_CART:
			return { cart: initialcartState };

		case ReducersConstants.DELETE_CART_ITEM:
			state.splice(action.cart, 1);
			return [ ...state ];
		// return { cart: deleteCartItem(state, action.cart) };
	}
	return state;
};

const reducers = combineReducers({ cartReducer });
const store = createStore(reducers);
export default store;
