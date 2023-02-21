import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { act_delete_product } from '../../../redux/actions';
// import { act_delete_product } from '../../../redux/actions';

export default function Product(props) {
  let {product}= props;
  const dispatch =useDispatch();
  const navigate = useNavigate();
  // console.log("props",catalog);
  let handleUpdate =()=>{{
    navigate("/admin/UpdateProduct",{state:product})
  }}
  const handleDelete=()=>{
    dispatch(act_delete_product(product.id))
    navigate("/admin/Product")
  }

  return (
    
    <tr>
                  <td>
                   {product.id}
                  </td>
                  <td>
                  {product.name}
                  </td>
                  <td>
                   <img src={product.image} style={{width:100,height:100}}>

                   </img >
                  </td>
                  <td>
                    {product.title}
                  </td>
                  <td>
                    {product.quantity} xuất
                  </td>
                  <td>
                   {product.price}k
                  </td>
                  <td>
                   {product.status?"Còn hàng":"Hết hàng"}
                  </td>
                  <td>
                    {product.catalog.name}
                  </td>
                  <td>
                    {product.creat_date}
                  </td>
                  {/* <td>
                    <Link to ="/admin/DetailProduct" >
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
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>
                      Delete
                    </button>
                  </td>
                 
                </tr>
  )
}