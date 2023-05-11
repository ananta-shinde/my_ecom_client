import { Link } from "react-router-dom";

const ProductCard = (props) =>{
    const productUrl = "/products/"+ props.data._id;
    return(
        <div className="col">
            <Link to={productUrl}>
            <div className="card" style={{width:"18rem"}}>
               <img src={props.data.image}/>
               <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p>Price : {props.data.mrp}</p>
                    <a href="#">Add to cart</a>
               </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard;