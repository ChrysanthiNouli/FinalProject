import Product from "../components/product.js";

function ProductList ({products}) {
    return (
        <div>
            <Product products={products}/>
        </div>
    )
}

export default ProductList;