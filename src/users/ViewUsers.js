import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewUsers() {

  const {id} = useParams();

  const [user,setUser] = useState({
    title:"",
    name : "",
    description:"",
    imageLink:""
  })

  const {title,name,description,imageLink} = user;
  useEffect(() => {
   loadUser();
  }, []);

  const loadUser= async()=>{
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(res.data);
   //console.log(res);
  }
  return (
    <div>
       <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
          
          <div className='card m-4 '>
            <div className='card-header'>
              <h1>{title}</h1>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  {user.imageLink? 
                  <img src={user.imageLink} />
                   :  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ322y5cp_L60d7_wAiK5hYDSIloUiFI9rvzA&usqp=CAU" height="100px" width="150px" />}
                </li>
                <li className='list-group-item'>
                  {user.name}
                </li>
                <li className='list-group-item'>
                  {user.description}
                </li>

              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/">Back to Home</Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ViewUsers