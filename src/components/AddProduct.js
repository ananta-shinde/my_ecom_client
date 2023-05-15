const AddProduct = () => {
    return ( <div className="container p-4">
        <h4 className="text-center">Add New Product Form</h4>
                <form>
                    <div className="form-group my-4">
                    <label>Product Title :</label>
                    <input className="form-control" type="text" placeholder="product title"/>
                    </div>
                    <div className="form-group my-4">
                    <label>Product Description :</label>
                    <textarea className="form-control"  placeholder="product description"/>
                    </div>
                    <div className="form-group my-4">
                    <label>Product Category :</label>
                    <select className="form-control">
                        <option>Men</option>
                        <option>Women</option>
                        <option>Kids</option>
                    </select>
                    </div>
                    <div className="form-group my-4">
                    <label>Upload product image :</label>
                    <input type="file"/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div> 
    );
}
 
export default AddProduct;