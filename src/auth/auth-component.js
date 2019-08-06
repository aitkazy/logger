import React, { Component } from "react";
import { AuthProvider } from "./auth-context";

class AuthComponent extends Component {
    state = {
        isAuth: false
    };

    authenticate = callback => {
        setTimeout(() => {
            this.setState({ isAuth: true }, callback);
        }, 1000);
    };

    signout = callback => {
        console.log("callback", typeof callback);

        setTimeout(() => {
            this.setState({ isAuth: false });
        }, 1000);
    };

    render() {
        const { isAuth } = this.state;
        const { children } = this.props;
        return (
            <AuthProvider
                value={{
                    isAuth,
                    authenticate: this.authenticate,
                    signout: this.signout
                }}
            >
                {children}
            </AuthProvider>
        );
    }
}

export default AuthComponent;
