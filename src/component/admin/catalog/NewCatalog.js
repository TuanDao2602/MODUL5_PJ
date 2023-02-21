import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { addCatalogAPI } from '../../../api'
import { act_add_catalog } from '../../../redux/actions'

export default function NewCatalog() {
  const dispatch= useDispatch()
  const navigate= useNavigate()
    const [name,setName]=useState("")
    const [descripttion,setDescripttion]=useState("")
    const [creat_date,setCreat_date]=useState("")
    const [status,setStatus]=useState(true)
 const handleCreatCatalog=()=>{
  if(name==""||descripttion==""||creat_date==""){
    navigate("/admin/Category")
  }else{
     let newCatalog= {
    name,descripttion,creat_date,status
   }
   dispatch(act_add_catalog(newCatalog))
    navigate("/admin/Category")
  }
  
 }
    return (
        <div className='newUserPage1'>
          <h1>New Category</h1>
          <form onSubmit={(e)=>{e.preventDefault()}} >
            <div className="item">
              <label>CatagoryName</label>
              <input type="text" placeholder='please enter catalogName' onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div className="item">
              <label>Creat Date</label>
              <input type="date" placeholder='please enter Description'  onChange={(e)=>setCreat_date(e.target.value)} required/>
            </div>
            <div className="item">
              <label>Dcriptions</label>
              <input  type="text" placeholder='please enter Description'  onChange={(e)=>setDescripttion(e.target.value)} required/>
            </div>
            <button onClick={handleCreatCatalog}>Create</button>
            </form>
        </div>
      )
    }
 