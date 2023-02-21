import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { act_edit_topping } from '../../../redux/actions/topping';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export default function UpdateTopping() {
   
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const navigate =useNavigate();
  const dispatch=useDispatch();
  const topping = useLocation().state;
 
  const [name,setName] = useState(topping.name);
  const [image,setImage] = useState(topping.image);
  const [title,setTitle] = useState(topping.title);
  const [creat_date,setCreat_date] = useState(topping.creat_date);
  const [status,setStatus] = useState(topping.status);
  const [price,setPrice] = useState(topping.price);
  const [quantity,setQuantity] = useState(topping.quantity);
  const handleUpdate=()=>{
    let editTopping={name,id:topping.id,title,creat_date,image,price,quantity,status:(status=="true" || status==true)?true:false}
      dispatch(act_edit_topping(editTopping))
      navigate("/admin/Topping")
      console.log(editTopping);
  }

  //upLoad ảnh topping
  const uploadFile = () => {
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
      });
    });
  
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
      <h1>Update Topping</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
      <div className="item">
          <label>Topping ID</label>
          <input type="text" placeholder='ToppingID' value={topping.id}readOnly/>
        </div>
        <div className="item">
          <label>Topping Name</label>
          <input type="text" placeholder='Enter ToppingName' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        {/* <div className="item">
          <label>Image</label>
          <input type="file" placeholder='Enter Image'value={name} onChange={(e)=>setName(e.target.value)} />
        </div> */}
        <div className="item">
          <label>Title</label>
          <input type="text" placeholder='Enter Title'value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="item">
          <label>Quantity</label>
          <input type="text" placeholder='Enter Quantity'value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
        </div>

        <div className="item">
              <label>Image</label>
              <input type="file" placeholder='Enter Image'onChange={(e)=>setImageUpload(e.target.files[0])}/>
          <button onClick={uploadFile}>upload</button>
          <img src={image} style={{width:250,height:250}}></img>
            </div>

        <div className="item">
          <label>Price</label>
          <input type="text" placeholder='Enter Price'value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className="item">
          <label>Creat_date</label>
          <input type="date" placeholder='Enter Price'value={creat_date} onChange={(e)=>setCreat_date(e.target.value)} />
        </div>
        <div className="item activeContainer">
          <label> Status </label>
          <select name='active' id='active' value={status} onChange={(e)=>setStatus(e.target.value)} >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        {/* <div className="item">
          <label>Category</label>
          <input type="text" placeholder='Enter Category'/>
        </div> 
 */}
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  )
}
