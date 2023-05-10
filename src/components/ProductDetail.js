import {Star} from 'react-bootstrap-icons'; 
import ProductList from './ProductList';
import ProductTab from './ProductTab';
const ProductDetail = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg"/>
                </div>
                <div className="col" style={{paddingTop:"100px"}}>
                    <h2>My sample Product</h2>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <p className='py-4' style={{fontSize:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                     <button className='btn btn-primary w-50'>Buy Now</button>
                     <button className='btn btn-secondary w-50'>Add to Cart</button>
                </div>
            </div>
            <div className='row'>
                <ProductTab/>
            </div>
            <div className="row">
                <ProductList/>
            </div>
        </div>
    )
}

export default ProductDetail;