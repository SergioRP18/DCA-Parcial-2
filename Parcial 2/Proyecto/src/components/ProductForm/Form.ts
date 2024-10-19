class AppForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <h1>Mis Productos</h1>
                <div class="content">
                    <form>
                        <input type="text" id="add" placeholder="Añade el ID de un producto" required>
                        <button type="submit" id="addButton">Add Product</button>
                    </form>
                </div>
            `
        }
    }
}
customElements.define('product-form', AppForm);
export default AppForm;