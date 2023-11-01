import Lottie from 'lottie-react';
import signUpAnimation from '../../../assets/signup.json';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const Reg = () => {

    const {createUser} = useContext(AuthContext);
     const [isLoggedIn, setLoggedIn] = useState(false);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password,name)
        .then(result => {
            const user = result.user;
            
            if(user.uid){
                setLoggedIn(true);
                Swal.fire(
                    'Congratulation',
                    'Registration successful',
                    'success'
                  )
            }
        })
        .then (error => console.log(error));
        form.reset();
    }
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12 hidden lg:block">
                <Lottie  animationData={signUpAnimation} />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl text-center font-bold">Sign up</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className=' my-4 text-center'>Already have account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Reg;