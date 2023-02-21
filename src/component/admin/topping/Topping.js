import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { act_delete_topping } from '../../../redux/actions/topping';

export default function Topping(props) {
  let {topping}=props;
  const dispatch =useDispatch();
  const navigate = useNavigate();
  let handleUpdate =()=>{{
    navigate("/admin/updateTopping",{state:topping})
  }}
 let handleDeleteTopping=()=>{
  dispatch(act_delete_topping(topping.id))
  navigate("/admin/Topping")
    
  }
 
  return (
    
    <tr>
    <td>
      {topping.id}
    </td>
    <td>
    {topping.name}
    </td>
    <td>
      <img
        style={{ width: 100, height: 100 }}
        src={topping.image}
      />
    </td>
    <td>
     {topping.title}
    </td>
    <td>
      {topping.creat_date}
    </td>
    <td>
     {topping.quantity} xuất
    </td>
    <td>
     {topping.price}k
    </td>
    <td>
     {topping.status?"Còn Hàng":"Hết Hàng"}
    </td>
    {/* <td>
    <Link to ="/admin/DetailTopping" >
                    <button type="button" className="btn btn-warning">
                      Detail
                    </button>
    </Link>
    </td> */}
    <td>
      <a>
      <button type="button" className="btn btn-warning" onClick={handleUpdate}>
        Edit
      </button>
      </a>
    </td>
    <td>
      <button type="button" className="btn btn-danger" onClick={handleDeleteTopping}>
        Delete
      </button>
    </td>
   
  </tr>
  )
}