import React, { useContext } from 'react';

import AuthContext from '../auth-context';

const Auth = ( ) => {
    const Auth = useContext(AuthContext);
    return <button onClick={Auth.login}>Log in!</button>
};

export default Auth;