import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;