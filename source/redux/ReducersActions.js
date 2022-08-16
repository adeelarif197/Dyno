import ReducersConstants from './ReducersConstants';
const ReducersActions = (dispatch) => {
	return {
		updateCart: (Data) => dispatch({ type: ReducersConstants.UPDATE_CART, cart: Data }),
		updateCartIndex: (Data) => dispatch({ type: ReducersConstants.UPDATE_CART_INDEX, cart: Data }),
		deleteCartItem: (Data) => dispatch({ type: ReducersConstants.DELETE_CART_ITEM, cart: Data }),
		resetCart: () => dispatch({ type: ReducersConstants.RESET_CART })
	};
};

export default ReducersActions;
