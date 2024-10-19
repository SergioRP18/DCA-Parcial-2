import { removeProduct } from "../../store/actions";
import { dispatch } from "../../store/store";

export enum AttributesProduct {
    "uid"="uid",
    "name"="name",
    "price"="price",
    "category"="category",
    "description"="description",
    "image"="image",
}

class AppItem extends HTMLElement {
    uid?: number;
    name?: string;
    price?: number;
    category? :string;
    description?: string;
    image?: string;

    static get observedAttributes(){
        return Object.keys(AttributesProduct);
    }

    attributeChangedCallback(propName:AttributesProduct, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
            case AttributesProduct.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            case AttributesProduct.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        }
        this.render();        
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
                <section>
                    <div class="container">
                        <div class="card">
                            <img src="${this.image}" alt="">
                            <h1>${this.name}</h1>
                            <p>${this.description}</p>
                            <h3>${this.category}</h3>
                            <span>${this.price}</span>
                            <button id="delete">Eliminar</button>
                            <button id="edit">Editar</button>
                        </div>
                    </div>
                </section>
        `;

        const btnDelete = this.shadowRoot?.querySelector('.delete')
        btnDelete?.addEventListener('click', () => {
            dispatch(removeProduct(this.uid!))
        })
    }
}
customElements.define('product-item', AppItem);
export default AppItem;