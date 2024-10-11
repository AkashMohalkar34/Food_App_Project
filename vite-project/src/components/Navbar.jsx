import { Link, useNavigate } from "react-router-dom"
import {useState} from 'react'
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./contextReducer";
export default function Navbar() {

    let data = useCart();

    const [cartView, serCartView] = useState(false);
    let navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-success  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">Gofood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active f-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li>
                                {(localStorage.getItem("authToken")) ?
                                    <li className="nav-item">
                                        <Link className="nav-link active f-5" aria-current="page" to="/myOrder">My Orders</Link>
                                    </li> : ""
                                }

                            </li>
                        </ul>
                        {!(localStorage.getItem("authToken")) ?
                            <div className="d-flex">

                                <Link className="btn bg-white text-success mx-3" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-2" to="/createuser">Signup</Link>
                            </div>
                            :
                            <div>
                                <div className="btn bg-white text-success mx-3" onClick={() => serCartView(true)}>

                                    My Cart{"  "}
                                    <span className='badge rounded-circle bg-danger mx-2'>{data.length}</span>

                                </div>
                                {cartView ? <Modal onClose={() =>  serCartView(false) } ><Cart /></Modal> : null}
                                <div className="btn bg-white text-danger mx-3" onClick={handlelogout}>Logout</div>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}