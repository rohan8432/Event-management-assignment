import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
     
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('Successfully login')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })


    }
  
    return (
        <div>
            <div className="hero min-h-screen">
                <div>

                    <h1 className="text-5xl font-bold my-8 text-center">Login now!</h1>

                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <span className="absolute right-14 bottom-[365px]" onClick={() => setShowPass(!showPass)}>{
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>

                            }</span>

                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-outline">Login</button>
                            </div>
                            <p className='text-sm'>New to Event Socio? Please <span className='text-blue-800 underline'><Link to="/register">Register</Link></span></p>
                            <p className='mt-10 text-center text-gray-400 text-sm'>---------- or -----------</p>
                            <div className='mt-5'>
                                <button className="btn btn-outline w-full">
                                    <FaGoogle></FaGoogle>
                                   Continue with Google
                                </button>
                                <button className="btn btn-outline w-full mt-3">
                                    <FaGithub></FaGithub>
                                  Continue with GitHub

                                </button>

                            </div>
                            {
                                registerError && <p className="mt-6 text-red-600">{registerError}</p>
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

export default Login;