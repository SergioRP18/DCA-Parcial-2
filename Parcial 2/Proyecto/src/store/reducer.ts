import { Actions, AppState, GetProductAction } from '../types/store';
import { Products } from '../types/products';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.ADD_PRODUCT:
			return {
				...currentState,
				products: [...currentState.products, payload]
			};

		case Actions.REMOVE_PRODUCT:
			return {
				...currentState,
				products: [currentState.products.filter((product: Products) => product.id !== payload)]
			};

		default:
			return currentState;
	}
};
