import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "./auth";

class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        const { auth } = this.props;
        auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || {
            from: { pathname: "/" }
        };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>you must login in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default withAuth(Login);
