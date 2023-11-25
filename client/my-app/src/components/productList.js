import Product from "../components/product.js";
import "../components/productList.css";

function ProductList ({ products, readProducts }) {
    return (<>
        <div className="intro">
            <p className="introParagraph">
            Where fashion meets sustainability
            <br/><br/>Barter<br/>
            /'bɑ:tə, 'bɑ:tər/<br/>
            exchange (goods or services) for other goods or services without using money.
            </p>
        </div>
        
        <div>
            <Product products={products} readProducts={readProducts}/>
        </div>
        </>
    )
}

export default ProductList;