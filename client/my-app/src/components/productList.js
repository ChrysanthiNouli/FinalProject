import Product from "../components/product.js";
import "../components/productList.css";

function ProductList ({ products, readProducts }) {
    return (<>
        <div className="intro">
            <p className="introParagraph">
            Where fashion meets sustainability
                        
            </p>
        </div>
        
        <div>
            <Product products={products} readProducts={readProducts}/>
        </div>
        </>
    )
}

export default ProductList;