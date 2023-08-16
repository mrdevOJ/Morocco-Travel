import React from 'react';


import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './create.css'

const api = "http://localhost:3001";



function Create() {
const [name,setName]=useState("");
const [description,setDescription]=useState("");
const userID = localStorage.getItem('userID')
const LIKE =0;
const Heart =0
const navigate = useNavigate()

const [fileName,setFileName]=useState("")
const onChangeFile = e =>{
  setFileName(e.target.files[0])
}

const HundelSubmit  =  (e) =>{
  e.preventDefault();


  const formData = new FormData();

  formData.append("description",description)  
  formData.append("articleImage",fileName)  
  formData.append("userID",userID)  
  formData.append("Heart",Heart)  
  formData.append("LIKE",LIKE)  
  formData.append("name",name)  
  setName("")
  setDescription("")
  
  Axios.post(`${api}/createPost`,formData).then(res=> console.log(res.data));

 navigate("/ExploreContry")

}




  return (
   <div className='body'>
    <div class="container p-2">
    <div class="card ">
      <div class="card-image">	
        <h2 class="card-heading">
          <small>Create your Post</small>
        </h2>
      </div>
      <form class="card-form" onSubmit={HundelSubmit} encType='multipart/form-data'>
        <div class="input">       
        
        <select class="input-field" value={name}  onChange={e=>setName(e.target.value)} >
  <option selected>Select the City</option>
  <option value="Rabat">Rabat</option>
  <option value="Casa">Casa</option>
  <option value="Marakkech">Marakkech</option>
  <option value="Tanger">Tanger</option>
  <option value="Fes">Fes</option>
  <option value="Dakhla">Dakhla</option>
  <option value="Agadir">Agadir</option>
</select>      <label class="input-label">City</label> </div> 
          <div class="input">   
          <input type="text" value={description}  onChange={e=>setDescription(e.target.value)} class="input-field"  required/>
          <label class="input-label">description</label>
        </div>
             <div class="input">            

             <input type="file"  filename="articleImage" onChange={onChangeFile} class="input-field"  required/>
             <label class="input-label">Image Source</label>

        </div>
             
        <div class="action">
          <button type="submit" class="action-button">Send</button>
        </div>
      </form>
    
    </div>
  </div>
  </div> 
  

  );
}
export default Create;
