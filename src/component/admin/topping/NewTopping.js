import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { act_add_topping } from '../../../redux/actions/topping';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export default function NewTopping() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [title,setTitle] = useState("");
  const [creat_date,setCreat_date] = useState("");
  const [status,setStatus] = useState(true);
  const [price,setPrice] = useState("");
  const [quantity,setQuantity] = useState("");
  const handleCreateTopping=()=>{
    if(name==""||image==""||title==""||creat_date==""||status==""||price==""||quantity==""){
      navigate("/admin/Topping")
    }else{
      let newTopping = {
        name,image,title,creat_date,status,price,quantity
      }
      dispatch(act_add_topping(newTopping))
      navigate("/admin/Topping")
    }
  }
//uploat ảnh Topping
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
          <h1>New Topping</h1>
          <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="item">
              <label>Topping Name</label>
              <input type="text" placeholder='Enter ToppingName'onChange={(e)=>setName(e.target.value)}/>
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
              <label>Creat_date</label>
              <input type="date" placeholder='Enter Creat_date'onChange={(e)=>setCreat_date(e.target.value)}/>
            </div>
            <div className="item">
              <label>Quantity</label>
              <input type="text" placeholder='Enter quantity'onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
            <div className="item">
              <label>Price</label>
              <input type="text" placeholder='Enter Price'onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button onClick={handleCreateTopping}>Create</button>
          </form>
        </div>
      )
    }
