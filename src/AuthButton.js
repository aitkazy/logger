import React from "react";
import { withRouter } from "react-router-dom";
import { withAuth } from "./auth";

const AuthButton = props => {
    const { history, auth } = props;
    if (auth.isAuth) {
        return (
            <div>
                <div>Welcome</div>
                <div>
                    <button onClick={auth.signout}>sign out</button>
                </div>
            </div>
        );
    } else {
        return <div>you are not logged in.</div>;
    }
};

export default withAuth(withRouter(AuthButton));
