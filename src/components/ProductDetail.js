import { useEffect, useState } from 'react';
import axios from "axios"
import {Star} from 'react-bootstrap-icons'; 
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductTab from './ProductTab';
const ProductDetail = ()=>{
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${id}`)
        .then(res=>{
             setProduct(res.data);
             console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>{id}</p>
                <img src={product.image}/>
                </div>
                <div className="col" style={{paddingTop:"100px"}}>
                    <h2>{product.title}</h2>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <Star size={30}/>
                     <h4>MRP : {product.price}</h4>
                     <p className='py-4' style={{fontSize:"20px"}}> {product.description}</p>
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