import axios from "axios";
import { useState, useEffect } from "react";
import { storage } from "../firebase.js";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"; 
import { v4 } from "uuid";

function Form({ readProducts }) {
    // firebase
    const [imageUpload, setImageUpload] = useState(null);
    const imageListRef = ref(storage, "images/");
    const [imageList, setImageList] = useState([]);
     // firebase
    let token = localStorage.getItem("token");
    const [product, setProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
        category:"",
    });
        
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

    function handleInputChange(e) {
        const value = e.target.value;
        setProduct({
          ...product, [e.target.name]: value,
        });
    };
    
     // firebase 
    const uploadImage = () => {
        if (imageUpload == null) {
            return;
        };
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((currentValue) => [...currentValue, url]);
            });
        });
    };
     // firebase 
    // useEffect(() => {
    //     listAll(imageListRef).then((res) => {
    //         res.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageList((currentValue) => [...currentValue, url]);
    //             });
    //         });
    //     });
    // }, []);
     // firebase
    const addProduct = (e) => {
        e.preventDefault();
        try {
            axios
            .post("http://localhost:8080/products/create", product, {headers:{Authorization:`Bearer ${token}`}})
            .then((res) => {
                alert(res.data.msg);
                readProducts();
            })
        } catch (err) {
            console.log(err);
        }
    };
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

        <label>Image<br/>
        <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
        <br/>
        

        {/* <input type="text" name="image" onChange={handleInputChange} value={product.image} placeholder="image"/><br/> */}
        </label>
        <label> Status<br/>
        <select name="status" onChange={handleInputChange} value={product.status}>
            <option value="new">New</option>  
            <option value="used">Used</option>   
        </select><br/>
        </label>
        <label> Category<br/>
        <select name="category" onChange={handleInputChange} value={product.category}>
            {categoryOptions.map(options => <option value={options.value}>{options.label}</option>)}
        </select>   
        <br/>
        </label>
        <br/>
        <button type="submit" onClick={(e) => {addProduct(e); uploadImage(e);}}>Submit</button>

    </form>
    </div>
    </div>
    );
  } 

  export default Form;