import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="">
           <div>
            <div className="text-center">
                <button className="pr-2 pb-4">
                    <FaFacebook className="text-blue-500 h-7 w-7"></FaFacebook>
                </button>
                <button className="pr-2">
                    <FaTwitter className="text-blue-400 h-7 w-7"></FaTwitter>
                </button>
                <button>
                    <FaLinkedin className="text-blue-700 h-7 w-7"></FaLinkedin>
                </button>

            </div>
             <h1 className="text-center p-2 font-openSans text-gray-400 text-sm"> &copy; 2023 Event socio. All rights reserved.</h1>
           </div>
        </div>
    );
};

export default Footer;