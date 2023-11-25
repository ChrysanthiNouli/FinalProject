import axios from "axios";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { FaEdit, FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
import { Cart } from "../components/cart.js"
import "../components/product.css";
//import { Firebase } from "../components/firebaseImages.js";

function Product({ products, readProducts }) {
    const [productCreatorIds, setProductCreatorIds] = useState([]); 
    const [cartItems, setCartItems] = useState([]);
  
    let token = localStorage.getItem("token");
    let decoded;
    let userId;
    if (token) {
      decoded = jwtDecode(token);
      userId = decoded.id;
    }

      const filterUser = () => {
      try {
        let productCreatorIds = products
        .filter((product) => product.creator._id === decoded.id)
        .map((product) => product._id);
        setProductCreatorIds(productCreatorIds);
      } catch (err) {
        console.log(err)
      }
    };

    useEffect (() => {
      filterUser();
    }, [token, userId]);

    const [newProduct, setNewProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
        category: "",
        creator: "",
    })

    const [editProduct, setEditProduct] = useState({
        title: "",
        description:"",
        image:"",
        status:"",
        category: "",
    })

    let handleCancel = () => {
      setEditProduct("");
    }

    let categoryOptions = [
      { value: "Dresses", label: "Dresses"},
      { value: "Tops", label: "Tops"},
      { value: "Pants", label: "Pants"},
      { value: "Skirts", label: "Skirts"},
      { value: "Shirts", label: "Shirts"},
      { value: "Knitwear", label: "Knitwear"},
      { value: "Jackets", label: "Jackets"},
      { value: "Coats", label: "Coats"},
      { value: "Shoes", label: "Shoes"},
      { value: "Bags", label: "Bags"},
  ];

    async function addProduct() {
        try {
            await axios
            .post("http://localhost:8000/products/create", newProduct);
            setNewProduct({
                title:"",
                description:"",
                image:"",
                status:"",
                category: "",
            })
            .then(() => readProducts());
        } catch(err) {
            console.log("Cannot add product, ", err);
        }
    }

    async function updateProduct(id) {
        try {
            await axios
            .put(`http://localhost:8080/${editProduct.id}`, {
                title: editProduct.title,
                description: editProduct.description,
                image: editProduct.image,
                status: editProduct.status,
                category: editProduct.category,
            });
            setEditProduct({
                id: id,
                title:"",
                description:"",
                image:"",
                status:"",
                category: "",
            })
            readProducts();
        } catch(err) {
            console.log("Cannot update product, ", err);
        }
    }

    async function deleteProduct(id) {
      if (window.confirm("Do you want to delete this product?")) {
        try {
            let res = await axios
            .delete(`http://localhost:8080/${id}`);
            alert(res.data.msg);
            readProducts();
        } catch(err) {
            console.log("Cannot delete product, ", err);
        }
    } else {
      return;
    };

  }
    return (
        <div class="productContainer">
            {products.map((product) => (
               <div key={product._id} class="col">
               <div class="productCard">
                 <span className="image">{/*{<img src={url}/>} */}</span><br/>
                 <span className="title">{product.title}</span>
                 <span className="description">{product.description}</span>
                 <span className="productStatus">Condition: {product.status}</span>
                 {/* <span>{product.category}</span> */}
                 {/* <span>{product.creator.username}</span> */}
                 <div className="btnContainer">
                  <button className="formBtn" onClick={(product) => {  console.log("clicked")}}>Add <FaShoppingCart /></button>
                  {token && productCreatorIds.includes(product._id) ? (  <>
                  <button className="formBtn" onClick={() => deleteProduct(product._id)}><FaRegTrashAlt /></button>
                  <button className="formBtn" onClick={() => setEditProduct({id: product._id})}><FaEdit /></button>
                    </>
                  ) : (
                    ""
                  )}               
                 </div>
               </div>
     
               {/* editing form */}
               {editProduct.id === product._id && (
                 <div>
                   <input
                     type="text"
                     value={product.title}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, title: e.target.value })
                     }
                   />
                   <input
                     type="text"
                     value={product.description}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, description: e.target.value })
                     }
                   />
                   {/* <input
                     type="text"
                     value={product.image}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, image: e.target.value })
                     }
                   /> */} 
                   {/* firebase here */}
                    
                    <select
                     name="status"
                     value={product.status}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, status: e.target.value })
                     }>
                      <option value="new">New</option>  
                      <option value="used">Used</option> 
                   </select>

                   <select
                     name="category"
                     value={product.category}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, category: e.target.value })
                     }>
                     {categoryOptions.map(options => <option value={options.value}>{options.label}</option>)}
                   </select>

                   <button onClick={updateProduct}>Save</button>
                   <button onClick={handleCancel}>Cancel</button>
                 </div>
               )}
             </div> 
            ))}
        </div>
    );
 }

 export default Product;