import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_edit_catalog, act_eid_catalog } from '../../../redux/actions';

export default function UpdateCatalog() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const catalog=useLocation().state;
  const [name,setName]=useState(catalog.name)
    const [descripttion,setDescripttion]=useState(catalog.descripttion)
    const [creat_date,setCreat_date]=useState(catalog.creat_date)
    const [status,setStatus]=useState(catalog.status)
    const handleUpdate=()=>{
      let editCatalog={name,descripttion,creat_date,id:catalog.id,status:(status=="true" || status==true)?true:false}
        dispatch(act_edit_catalog(editCatalog))
        navigate("/admin/Category")
    }
    return (
      
        <div className='newUserPage1'>
          <h1>Update Category</h1>
          <form onSubmit={(e)=>e.preventDefault()} >
          <div className="item">
              <label>CatagoryId</label>
              <input type="text" placeholder='catalogID' value={catalog.id} readOnly/>
            </div>
            <div className="item">
              <label>CatagoryName</label>
              <input type="text" placeholder='please enter catalogName'value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="item">
              <label>Dcriptions</label>
              <input type="text" placeholder='please enter Description'value={descripttion}  onChange={(e)=>setDescripttion(e.target.value)}/>
            </div>
            <div className="item">
              <label>Date</label>
              <input type="date" value={creat_date}  onChange={(e)=>setCreat_date(e.target.value)}/>
            </div>
            
            <div className="item activeContainer">
              <label> Status </label>
              <select name='active' id='active' value={status}  onChange={(e)=>setStatus(e.target.value)}>
                <option value={true} >Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )
    }
   