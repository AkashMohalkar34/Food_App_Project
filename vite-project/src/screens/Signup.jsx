
import { Link } from "react-router-dom";

import { useState } from "react"
export default function Signup() {
  const [credential, setCredential] = useState({ name: "", email: "", password: "", geolocation: "" });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credential.name, email: credential.email, password: credential.password, location: credential.geolocation }))
    const response = await fetch("http://localhost:8000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password, location: credential.geolocation })
      
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credential");
    }
   
   
  }
  const onChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  }


  return (
    <>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name = 'name' value={credential.name} onChange ={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credential.email} onChange={onChange} />
         
        </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onChange} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={credential.geolocation} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/login" className="m-3 btn btn-danger">Already Login</Link>
      </form>
      </div >

      </>
      
  )
}
