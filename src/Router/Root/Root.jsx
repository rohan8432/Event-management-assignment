import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";




const Root = () => {
    return (
        <div className="mx-2 md:mx-10 lg:mx-14 font-poppins">
   

            <Navbar></Navbar>
          
           <Outlet></Outlet>
        </div>
    );
};

export default Root;