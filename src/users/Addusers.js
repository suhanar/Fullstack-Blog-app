import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Addusers() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    title:"",
    name : "",
    description:"",
    imageLink:""

  });

  const {title,name,description,imageLink} = user;
  const inputChange=(e)=>{
    //e.preventDefault();
    setUser({
      ...user,[e.target.name] :e.target.value
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate('/');
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Blog </h2>
          <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='Name' className='form-label'> Title</label>
            <input type="text" className='form-control' name="title" value={title} placeholder='Enter Title' onChange={(e)=>inputChange(e)} required></input>

          </div>
          <div className='mb-4'>
            <label htmlFor='Name' className='form-label'> Name</label>
            <input type="text" className='form-control' name="name" value={name} placeholder='Enter Your name' onChange={(e)=>inputChange(e)} required></input>
            
          </div>
          <div className='mb-4'>
            <label htmlFor='Name' className='form-label'> Description</label>
            <textarea type="text" rows="6"  className='form-control' name="description" value={description} placeholder='Enter Description' onChange={(e)=>inputChange(e)} required></textarea>
            
          </div>
          <div className='mb-4'>
            <label htmlFor='Name' className='form-label'>Image Link</label>
            <input type="text" className='form-control' name="imageLink" value={imageLink} placeholder='Enter Image Link' onChange={(e)=>inputChange(e)}></input>
            
          </div>

          <button type="submit" className='btn btn-outline-primary'>Submit</button>
          <Link to='/'  className='btn btn-outline-danger mx-2'>Cancel</Link>
        </form>
        </div>
      </div>
      
    </div>
  )
}

export default Addusers