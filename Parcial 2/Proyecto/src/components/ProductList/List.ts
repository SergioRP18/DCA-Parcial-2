import { Products } from "../../types/products";
import { AttributesProduct } from "../ProductItem/Item";
import { ProductItem } from "../indexPadre";
import { appState } from "../../store/store";

class AppList extends HTMLElement {
    ProductosItems: ProductItem[]=[]
    constructor(){
        super();
        this.attachShadow({mode: "open"})

        appState.products.forEach((element: Products) => {
            const Item = this.ownerDocument.createElement('product-item') as ProductItem;
            Item.setAttribute(AttributesProduct.image, String(element.image));
            Item.setAttribute(AttributesProduct.name, element.name);
            Item.setAttribute(AttributesProduct.description, element.description);
            Item.setAttribute(AttributesProduct.category, element.category);
            Item.setAttribute(AttributesProduct.price, String(element.price));
            this.ProductosItems.push(Item)
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
			this.ProductosItems.forEach((productItem) => {
				this.shadowRoot?.appendChild(productItem)
			})
		}
    }
}

customElements.define('task-list', AppList);
export default AppList;