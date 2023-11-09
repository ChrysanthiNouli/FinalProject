import axios from "axios";
import {useState} from "react";

function Product({readProducts, products}) {
    const [newProduct, setNewProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
    })

    const [editProduct, setEditProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
    })

    async function addProduct() {
        try {
            await axios.post("http://localhost:8000/products/", newProduct);
            setNewProduct({
                title:"",
                description:"",
                image:"",
                status:"",
            })
            readProducts();
        } catch(err) {
            console.log("Cannot add product, ", err);
        }
    }

    async function updateProduct() {
        try {
            await axios.put(`http://localhost:8000/products/${setEditProduct.id}`, {
                title: editProduct.title,
                description: editProduct.description,
                image: editProduct.image,
                status: editProduct.status,
            });
            setEditProduct({
                title:"",
                description:"",
                image:"",
                status:"",
            })
            readProducts();
        } catch(err) {
            console.log("Cannot update product, ", err);
        }
    }

    async function deleteProduct() {
        try {
            await axios.delete(`http://localhost:8000/products/${id}`);
        } catch(err) {
            console.log("Cannot delete product, ", err);
        }
    }

    return (
        <div>
            {products.map((product) => (
               <div key={product._id}>
               <div>
                 <span>{product.title}</span>
                 <span>{product.description}</span>
                 <span>{product.image}</span>
                 <span>{product.status}</span>
                 <div>
                 <button onClick={() => deleteProduct(product._id)}>Delete
                 </button>
                 <button
                   onClick={() => setEditProduct()}>Edit
                 </button>
                 </div>
               </div>
     
               {/* Render the text as editable input if currently being edited */}
               {editProduct.id === product._id && (
                 <div>
                   <input
                     type="text"
                     value={editProduct.title}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, title: e.target.value })
                     }
                   />
                   <input
                     type="text"
                     value={editProduct.description}
                     onChange={(e) =>
                       setEditProduct({
                         ...editProduct,
                         description: e.target.value
                       })
                     }
                   />
                   <input
                     type="text"
                     value={editProduct.image}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, image: e.target.value })
                     }
                   />
                    <input
                     type="text"
                     value={editProduct.status}
                     onChange={(e) =>
                       setEditProduct({ ...editProduct, status: e.target.value })
                     }
                   />
                   <button onClick={updateProduct}>Save</button>
                 </div>
               )}
             </div> 
            ))}
        </div>
    );
 }

 export default Product;