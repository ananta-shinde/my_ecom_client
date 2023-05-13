import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menubar from "./Menubar";

const AppTheme = () => {
    return ( <>
        <Menubar/>
        <Outlet/>
        <Footer/>
        </>
     );
}
 
export default AppTheme;