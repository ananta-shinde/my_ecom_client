import ProductCard from "./ProductCard";

const ProductList = () =>{
    return( 
    <div className="container">
      <div className="row" style={{height:"50vh"}}>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
    </div>)
}

export default ProductList;