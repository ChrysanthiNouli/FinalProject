import axios from "axios";
import {useState, useEffect} from "react";
import Form from "./components/productAdditionForm";

function App() {

  const [products, setProducts] = useState([]);

  async function readProducts() {
    try {
      await axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div>
      <div><Form readProducts={readProducts}/></div>
      {/* <div><Product products={products} readProducts={readProducts}/></div> */}
    </div>
  );
}

export default App;
