import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

 
const ProductList = () =>{
  const [products,setProducts] = useState([]);
// starter code
  useEffect(()=>{
     axios.get("http://localhost:4000/products")
     .then(res => {
         setProducts(res.data)
         console.log(res)
     }).catch(err=>{
      console.log(err)
     }) 
  },[]);


    return( 
    <div className="container" style={{margin:"8%"}}>
      <div className="row" style={{height:"50vh"}}>
      { products.map(p =>(<ProductCard data={p}/>))}    
      </div>
    </div>)
}

export default ProductList;