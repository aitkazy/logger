import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

const Public = () => <div>Public</div>;
const Protected = () => <div>Protected</div>;

const AuthExample = props => {
    return (
        <Router>
            <div>
                <div>
                    <AuthButton />
                </div>
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
};

export default AuthExample;
