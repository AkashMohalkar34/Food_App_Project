import Home from './screens/Home.jsx'
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
import { CartProvider } from './components/contextReducer.jsx';
import Myorder from './screens/Myorder.jsx';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<Myorder />} />
        </Routes>
      </div>

    </Router>
    </CartProvider >

  )
}

export default App
