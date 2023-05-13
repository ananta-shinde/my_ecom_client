import { BrowserRouter,Route, Routes,Link} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Menubar from './components/Menubar';
import ProductList from './components/ProductList';
import AppTheme from './components/AppTheme';
import Cart from './components/Cart';
const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<AppTheme/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="products">
                        <Route path="" element={<ProductList/>}/>
                        <Route path=":id" element={<ProductDetail/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;