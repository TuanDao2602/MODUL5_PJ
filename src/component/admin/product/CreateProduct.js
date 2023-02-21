import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCatalogAPI } from '../../../api';
import { act_add_product, act_get_all_catalog } from '../../../redux/actions';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


export default function CreateProduct() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const[name,setName]=useState("")
 const[image,setImage]=useState(null)
 const[title,setTitle]=useState("")
 const[quantity,setQuantity]=useState("")
 const[price,setPrice]=useState("")
 const[status,setStatus]=useState(true)
 const[categoryId,setCategoryId]=useState()
 const[creat_date,setCreat_date]=useState("")
 const listCatalog=useSelector(state=>state.listCatalog)
 useEffect(()=>{
  getCatalogAPI().then((res)=>{
    dispatch(act_get_all_catalog(res.data))
  })
},[]);
  const handleCreatProduct=()=>{
    let catalog=listCatalog?.filter(cat=>cat.id==categoryId)
    if(name ==""||image==""||title==""||quantity==""||price==""||catalog ==""||creat_date ==""){
      navigate("/admin/Product")
    }else{
      let newProduct= {
     name,image,title,quantity,price,status,catalog:catalog[0],creat_date
    }
   
    dispatch(act_add_product(newProduct))
     navigate("/admin/Product")
    }
    
  }
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
    console.log("kkk");
  };


    useEffect(() => {
      listAll(imagesListRef).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  

  return (
    
    <div className='newUserPage1'>
      <h1>New Product</h1>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="item">
          <label>Product Name</label>
          <input type="text" placeholder='Enter ProductName'onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="item">
          <label>Image</label>
          <input type="file" placeholder='Enter Image'onChange={(e)=>setImageUpload(e.target.files[0])}/>
          <button onClick={uploadFile}>upload</button>
          <img src={image} style={{width:250,height:250}}></img>
        </div>
        <div className="item">
          <label>Title</label>
          <input type="text" placeholder='Enter Title'onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="item">
          <label>Quantity</label>
          <input type="text" placeholder='Enter Quantity'onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <div className="item">
          <label>Price</label>
          <input type="text" placeholder='Enter Price'onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="item">
          <label>Creat_date</label>
          <input type="date" placeholder='Enter Price'onChange={(e)=>setCreat_date(e.target.value)}/>
        </div>
        
        <div className="item activeContainer">
          <label>Category</label>
          <select  type="text" placeholder='Enter Category'onChange={(e)=>setCategoryId(e.target.value)}>
            {listCatalog?.map((catalog)=>{
              if(catalog.status==true){
                return <option key={catalog.id} value={catalog.id}  > {catalog.name}</option>
              }
              
            })}
            
          </select>
        </div> 

        <button onClick={handleCreatProduct}>Create</button>
      </form>
    </div>
  )
}


