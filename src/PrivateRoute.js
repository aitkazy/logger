import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "./auth";

const PrivateRoute = props => {
    console.log("private route", props);

    const { component: Component, auth, ...rest } = props;
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default withAuth(PrivateRoute);
