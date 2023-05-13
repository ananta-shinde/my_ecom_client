import CartProduct from "./CartProduct";

const Cart = () => {
    return (  
        <div className="container">
           <div className="row m-4">
             <div className="col-6">
                <CartProduct/>
             </div>
             <div className="col">
                <div className="card p-4">
                    <h4>Summary</h4>
                    <h6>Sub total : 4000</h6>
                    <h6>Tax : 14%</h6>
                    <h6>Grand Total : 6000</h6>
                    <button class="btn btn-dark">Checkout</button>
                </div>
             </div>
           </div>
        </div>
     );
}
 
export default Cart;