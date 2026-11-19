import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
    const {user,loading} = use(AuthContext);

    const location = 
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;