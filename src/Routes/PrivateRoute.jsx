import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user?.email){
        
        console.log(user.email);
        return children;
    }
    <Navigate state={{form: location}} to="/login"></Navigate>
};

export default PrivateRoute;