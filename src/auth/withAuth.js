import React from "react";
import { AuthConsumer } from "./auth-context";

const withAuth = WrappedComponent => {
    const WithAuth = props => {
        return (
            <AuthConsumer>
                {auth => {
                    return <WrappedComponent {...props} auth={auth} />;
                }}
            </AuthConsumer>
        );
    };
    return WithAuth;
};

export default withAuth;
