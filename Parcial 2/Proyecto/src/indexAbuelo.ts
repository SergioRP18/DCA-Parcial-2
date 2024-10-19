import "./components/indexPadre"
import AppItem, { AttributesProduct } from "./components/ProductItem/Item";
import { getProducts } from "./services/getProducts";
import { Products } from "./types/products";
import { addObserver, appState, dispatch } from "./store/store";
console.log('holaa');

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    async connectedCallback() {
		const action = await getProducts();
		dispatch(action)
        this.render();
	}

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = '';

            this.shadowRoot.innerHTML += `
                <product-form></product-form>
            `

            const section = this.ownerDocument.createElement('section');
            section.classList.add('products-container');
            
            const productSection = this.ownerDocument.createElement('section');
            productSection.classList.add('products');

            appState.products?.forEach((element: Products) => {
                const card = this.ownerDocument.createElement('product-item') as AppItem;
                    card.setAttribute(AttributesProduct.image, element.image);
                    card.setAttribute(AttributesProduct.name, element.name);
                    card.setAttribute(AttributesProduct.description, element.description);
                    card.setAttribute(AttributesProduct.category, element.category);
                    card.setAttribute(AttributesProduct.price, String(element.price));
                    console.log(card)
                    productSection.appendChild(card);
            });

            section.appendChild(productSection);
            this.shadowRoot.appendChild(section)
        }
}
}
customElements.define('app-container', AppContainer);