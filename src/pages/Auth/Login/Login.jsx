import Lottie from "lottie-react";
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from '../../../assets/login.json'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    // const [isLoggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email,password);

        signIn(email, password)
            .then(result => {
                navigate(from, { replace: true })
                
                
                if (result.user) {
                    // setLoggedIn(true);
                    Swal.fire(
                        'Login successful',
                        '',
                        'success'
                    )
                }
            })
            .catch(error => console.log(error));
    }
    // if (isLoggedIn) {
    //     return <Navigate to="/" />;
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 mr-12 hidden lg:block">
                    <Lottie animationData={loginAnimation} />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#66ff66]" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className=' my-4 text-center'>New to Fast Send ? <Link className='text-[#ff5757] font-bold' to="/signup">Sign Up</Link></p>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;