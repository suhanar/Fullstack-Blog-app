import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home';
import axios from 'axios';

function Navbar() {
  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
      loadUsers();
  },[]);

  const loadUsers = async()=>{
      const result = await axios.get("http://localhost:8080/users");
      //console.log(result);
      setUsers(result.data);
  }

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#"><h4 style={{fontFamily:"cursive"}}>My Blog</h4></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
       
        <Link to="/adduser" className="btn btn-primary btn-outline-light">Add Blog</Link>
        
      </ul>

      {/* {users.filter((val)=>{
      if(search == ''){
        return val
      }else if( val.title.toLowerCase().includes(search.toLowerCase())){
        return val;
      }
     }).map((el,key)=>{
      return (<Home />)
})} */}





      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={()=>handleChange} value={search} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar