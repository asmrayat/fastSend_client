import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googelSignIn} = useContext(AuthContext);
    const handleGoogelSignIn= ()=>{
        googelSignIn()
        .then(result =>{
            // console.log(result.user);
        })
        .catch(error =>console.log(error))
    }
    return (
        <div >

        <div className="divider">OR</div>
        <div className="text-center mb-8">
            <button  onClick={handleGoogelSignIn} className="btn btn-circle btn-outline">
                G
            </button>
        </div>

    </div>
    );
};

export default SocialLogin;