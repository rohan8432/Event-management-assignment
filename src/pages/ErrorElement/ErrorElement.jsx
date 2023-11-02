import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="text-center font-bold text-5xl m-60">
            <h1>Oops!</h1>
            <p>404 page (not found page)</p>
            <Link to='/'></Link>
            
        </div>
    );
};

export default ErrorElement;