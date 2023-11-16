import Product from "../components/product.js";

function ProductList ({products, readProducts}) {
    return (
        <div>
            <Product products={products} readProducts={readProducts}/>
        </div>
    )
}

export default ProductList;