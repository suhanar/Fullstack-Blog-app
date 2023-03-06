import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
  const {id} = useParams();
  

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:8080/users");
        //console.log(result);
        setUsers(result.data);
    }
    const deleteUser=async (id)=>{
       const result=await axios.delete(`http://localhost:8080/user/${id}`);
       //setUsers(result.data);
       loadUsers();
    }
  return (
    <div className='container'>
        <div className='py-4'>

       




        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titel</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
    {
        users.map((el,i)=>(

            <tr>
      <th scope="row" key={i}>{i+1}</th>
      <td>{el.title}</td>
      <td>{el.name}</td>
      <td>{el.description.slice(0,40)}</td>
      {/* <td>{el.imageLink}</td> */}

      {
        el.imageLink && el.imageLink.startsWith('http')   ? <img src={el.imageLink} height="100px" width="150px" /> 
        : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ322y5cp_L60d7_wAiK5hYDSIloUiFI9rvzA&usqp=CAU" height="100px" width="150px" />
      }
      <td>
        <Link to={`/viewuser/${el.id}`} className='btn btn-primary mx-2'>View</Link>
        <Link to={`/edituser/${el.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(el.id)}>Delete</button>
      </td>
      
    </tr>

        ))
    }
    
   
    
  </tbody>
</table>
        </div>

    </div>
  )
}

export default Home