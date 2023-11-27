import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { v4 } from "uuid";
import "../components/productAdditionForm.css";

function Form({ readProducts }) {
    let token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    //const [imageUrls, setImageUrls] = useState([]);
    
    const [product, setProduct] = useState({
        title:"",
        description:"",
        image:"",
        status:"",
        category:"",
    });
        
    const [newProduct, setNewProduct] = useState({
      title:"",
      description:"",
      image:"",
      status:"",
      category: "",
      creator: "",
  })

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
     const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        // Check if the selected file is an image (JPEG, PNG, or GIF)
        if (file ) {
          setSelectedFile(file);
        } else {
          alert("Please select a valid image file (JPEG, PNG, or GIF).");
        }
       };
    
      // const isImageFile = (file) => {
      //   const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];
      //   return acceptedTypes.includes(file.type);
      // };
      
     // firebase
    async function addProduct (e) {
        e.preventDefault();
        if (!selectedFile) {
            alert("Please select a valid image file (JPEG, PNG, or GIF).");
            return;
          }
        try {
            const fileRef = ref(storage, `${v4()}`);
            await uploadBytes(fileRef, selectedFile);
            const fileURL = await getDownloadURL(fileRef);
           // console.log(fileRef);
            const product = { ...newProduct, image: fileURL };
                await axios
                    .post("http://localhost:8080/products/create", product, {headers:{Authorization:`Bearer ${token}`}});
                  //   setProduct({
                  //     title:"",
                  //     description:"",
                  //     image:"",
                  //     status:"",
                  //     category: "",
                  // })
                  // // .then(() => readProducts());
                  //   .then((res) => {
                  //       alert(res.data.msg);
                  await  readProducts();
                  navigate("/");
                    // })
        } catch (err) {
            console.log(err);
        }
    }

    return (
    <div>
    <div className="formContainer">
        <form className="form" onSubmit={(e) => {addProduct (e);}}>
          <h2>The product you wish to exchange</h2>
        <label><br/>
        <input type="text" name="title" onChange={handleInputChange} value={product.title} placeholder="Title"/><br/>
        </label>
        <label><br/>
        <input type="text" name="description" onChange={handleInputChange} value={product.description} placeholder="Description"/><br/>
        </label>
        <br/>

        <div className="status">
        <label> Condition &nbsp;&nbsp;&nbsp;
        <select name="status" onChange={handleInputChange} value={product.status}>
            <option value="new">New</option>  
            <option value="used">Used</option>   
        </select><br/> 
        </label>
        </div>
        <br/>

       <div className="category">
        <label> Category &nbsp;&nbsp;&nbsp;
        <select name="category" onChange={handleInputChange} value={product.category}>
            {categoryOptions.map(options => <option value={options.value}>{options.label}</option>)}
        </select>   
        <br/>
        </label>
        </div>
        <br/>
        
        <label className="custom-file-upload"> Click to add an Image
        <input type="file" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif"/>
        {/* <input type="text" name="image" onChange={handleFileChange} placeholder="image"/><br/> */}
        </label>
        
        <br/>
        <button className="submitBtn" type="submit" onClick={addProduct}>Submit</button>

    </form>
    </div>
    </div>
    );
  } 

  export default Form;