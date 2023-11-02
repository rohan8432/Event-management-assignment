import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const {createUser}= useContext(AuthContext);

    
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);


        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Please use at least 6 character password for register')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Please give only one Upper case character');
            return;
        }
     

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            if(result.user){
              setSuccess('Registered has been succeed');
               
            }
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message);
        })
    }
    return (
        <div>
           <div className="hero min-h-screen mb-6">
                <div>

                    <h1 className="text-5xl font-bold my-8 text-center">Register now!</h1>
            
                    
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} name="password"  placeholder="password" className="input input-bordered" required />
                                <span className="absolute right-14 bottom-40" onClick={() => setShowPass(!showPass)}>{
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>

                            }</span>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Register</button>
                            </div>
                            <p className='text-sm'>Already have an Account? Please <span className='text-blue-800 underline'><Link to="/login">Login</Link></span></p>
                            {
                                registerError && <p className="mt-6 text-red-600 text-sm">{registerError}</p>
                            }
                            {
                                success && <p className="mt-6 text-green-600">{success}</p>
                            }
                        </form>
                    </div>
              
                </div>
            </div> 
        </div>
    );
};

export default Register;