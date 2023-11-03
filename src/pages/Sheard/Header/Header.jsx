import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import blogo from '../../../assets/blogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then(()=>{
           
        })
        .catch(error =>console.log(error))
    }

    const navItem =
        <>
            <Link to="/"><li><a className='hover:bg-[#ea5a53] hover:text-white' >Home</a></li></Link>
            
            {user?.email? 
            <>
            <Link to="/mybookings"><li><a className='hover:bg-[#ea5a53] hover:text-white'>My Bookings</a></li></Link>
            <Link to="/"> <li><a onClick={handleLogout} className='hover:bg-[#ea5a53] hover:text-white'>Logout</a></li></Link>
            </>:<Link to="/login"><li><a className='hover:bg-[#ea5a53] hover:text-white'>Login</a></li></Link>
           }
        
        </>
    return (
        <div className="navbar bg-base-100 drop-shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <Link to="/"><img  className='h-[70px]' src={logo} alt="" /></Link>
                </div>

            </div>
            <div>
                <img data-aos="fade-right" className='lg:h-[70px] hidden lg:block' src={blogo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItem}
                </ul>
            </div>
            <div className='lg:hidden navbar-end'>
                <Link to="/"><img className='h-[70px]' src={logo} alt="" /></Link>
            </div>

        </div>
    );
};

export default Header;