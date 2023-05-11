import { BrowserRouter,Route, Routes,Link} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;