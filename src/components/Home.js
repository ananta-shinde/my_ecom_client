import {Link} from "react-router-dom"
import ProductList from "./ProductList";

const Home = () =>{
    return(<>
        <h2>Welcome to myCart</h2>
        <Link to="/login">Please login here</Link> 
        <Link to="/signup">Please signup here</Link>
        <ProductList/>
    </>)
  }

export default Home;