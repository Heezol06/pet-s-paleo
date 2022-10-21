import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import app from "../Authentication/Firebase/Firebase.init"

const auth = getAuth(app)

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    if (!user) {
        <Navigate to="/login" state={{from: location}}></Navigate>
    }
    return children;
};

export default RequireAuth;