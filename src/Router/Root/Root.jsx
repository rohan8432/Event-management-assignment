import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";




const Root = () => {
    return (
        <div className="mx-2 md:mx-10 lg:mx-14 font-poppins">
   

            <Navbar></Navbar>
          
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;