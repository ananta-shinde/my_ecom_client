import { Link, Outlet } from "react-router-dom";

const AdminTheme = () => {
    return ( <>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">My shop ( Admin Panel )</a>
                </div>
            </nav>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 bg-dark" style={{height:"100vh"}}>
                    <ul class="list-group ">
                        <li class="list-group-item bg-dark text-white " aria-disabled="true"><Link to="add">Add Product</Link></li>
                        <li class="list-group-item bg-dark text-white">Products</li>
                        <li class="list-group-item bg-dark text-white">Customers</li>
                        <li class="list-group-item bg-dark text-white">Orders</li>
                        <li class="list-group-item bg-dark text-white">Reviews</li>
                    </ul>
                </div>
                <div className="col">
                    <Outlet/>
                </div>
            </div>

        </div>
        </> 
     );
}
 
export default AdminTheme;