import { NavLink } from "react-router-dom";
import logo from "../../assets/Card imge/Event socio.png"

const Navbar = () => {



    return (
       <nav className="sticky top-0 z-10 bg-white">
         <div className=" flex justify-between items-center">
            <div>
                <img height={150} width={150} src={logo} alt="" />
            </div>
            <div className="flex gap-7">
                <NavLink to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                    }
                >Home</NavLink>
                <NavLink to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                    }
                >About</NavLink>
                <NavLink to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                    }
                >Services</NavLink>
            </div>
            <div>
                <button className="btn btn-primary mr-1">login</button>
                <button className="btn btn-secondary">Register</button>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;