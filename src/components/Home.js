import {Link} from "react-router-dom"
import Menubar from "./Menubar";
import ProductList from "./ProductList";

const Home = () =>{
    return(<div className="container" style={{margin:"8%"}}>
          <ProductList/>       
    </div>)
  }

export default Home;