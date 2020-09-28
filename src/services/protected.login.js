import React from 'react'
import { Route, Redirect } from "react-router-dom"
import auth from "./auth"

const ProtectedLogin = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => auth.isAuthenticated() ? (<Redirect to="/dashboard" />) : (<Component {...props} />)
            }

        />
    );
};

export default ProtectedLogin;
