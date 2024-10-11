
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

export default function Login() {

 
    const [credential, setCredential] = useState({  email: "", password: ""});
    let navagate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify({  email: credential.email, password: credential.password }))
        const response = await fetch("http://localhost:8000/api/loginuser", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })


        });
        const json = await response.json();
    //    console.log(json);  

        if (!json.success) {
            alert("Enter Valid Credential");
        }

        if (json.success) {
            alert("success");
            localStorage.setItem("userEmail", credential.email);
       

            localStorage.setItem("authToken", json.authToken);
            // console.log(localStorage.getItem("authToken"))
            navagate("/");
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credential.email} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onChange} />
                    </div>

                   
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/createuser" className="m-3 btn btn-danger">new user</Link>
                </form>
            </div >

        </>
    )
}