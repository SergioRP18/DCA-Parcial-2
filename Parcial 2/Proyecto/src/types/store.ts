import { Products } from "./products";

export type AppState = {
	products: [];
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	"ADD_PRODUCT" = "ADD_PRODUCT",
	"GET_PRODUCT" = "GET_PRODUCT",
    "REMOVE_PRODUCT" = "REMOVE_PRODUCT",
    
}

export interface GetProductAction {
	action: Actions.GET_PRODUCT;
	payload: Products[];
}


export type actions = GetProductAction;