import { Link } from "react-router-dom";

const ProductCard = () =>{
    return(
        <div className="col">
            <Link to="/products/detail">
            <div className="card" style={{width:"18rem"}}>
               <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg"/>
               <div className="card-body">
                    <h5 className="card-title">Product name</h5>
                    <p>Price : 5000</p>
                    <a href="#">Add to cart</a>
               </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard;