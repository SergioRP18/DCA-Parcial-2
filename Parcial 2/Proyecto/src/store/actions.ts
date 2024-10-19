import { getProducts } from "../services/getProducts";
import { Products } from "../types/products";
import { Actions, GetProductAction } from "../types/store";

export const addProduct = (payload: Products) => {
    return{
        action: Actions.ADD_PRODUCT,
        payload,
    }
};

export const removeProduct = (payload: number) => {
    return{
        action: Actions.REMOVE_PRODUCT,
        payload,
    }
};

export const getProduct = async (): Promise<GetProductAction> => {
	const product = await getProducts();
	return {
		action: Actions.GET_PRODUCT,
		payload: product,
	};
};