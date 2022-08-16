const addToCart = (state, Data) => {
	
	return { ...state.cart, Data: [ Data, ...state.cart.Data ] };
};

const deleteCartItem = (state, Data) => {
	const products = state.cart.Data;
	const itemIndex = isProductExist(products, Data);
	if (itemIndex == -1) {
		products.splice(itemIndex, 1);
		return { ...state.cart, Data: [ ...Data ] };
	}
};

const isProductExist = (products, Data) => {
	const itemIndex =  products.findIndex((x) => x.id === Data.id);
	alert(JSON.stringify(itemIndex))
	return itemIndex;
};

export { addToCart, deleteCartItem, isProductExist };
