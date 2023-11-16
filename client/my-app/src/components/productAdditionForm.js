import axios from "axios";
import {useState} from "react";

function Form({ readProducts }) {
    let token = localStorage.getItem("token");
    const [product, setProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
        category:"",
    });
        
    function handleInputChange(e) {
        const value = e.target.value;
        setProduct({
          ...product, [e.target.name]: value,
        });
    }

    const addProduct = (e) => {
        e.preventDefault();
        try {
            axios
            .post("http://localhost:8080/products/create", product, {headers:{Authorization:`Bearer ${token}`}})
            .then(() => {
                readProducts();
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <div>
    <div className="formContainer">
        <form className="form">
        <label> Title <br/>
        <input type="text" name="title" onChange={handleInputChange} value={product.title} placeholder="Title"/><br/>
        </label>
        <label> Description<br/>
        <input type="text" name="description" onChange={handleInputChange} value={product.description} placeholder="description"/><br/>
        </label>
        <label> Image<br/>
        <input type="text" name="image" onChange={handleInputChange} value={product.image} placeholder="image"/><br/>
        </label>
        <label> Status<br/>
        <input type="text" name="status" onChange={handleInputChange} value={product.status} placeholder="status"/><br/>
        </label>
        <label> Category<br/>
        <input type="text" name="category" onChange={handleInputChange} value={product.category} placeholder="category"/><br/>
        </label>
        
        <button type="submit" onClick={(e) => {addProduct(e)}}>Submit</button>

    </form>
    </div>
    </div>
    );
  } 

  export default Form;