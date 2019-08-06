import React, { Component } from "react";
import { AuthProvider } from "./auth";
import AuthExample from "./AuthExample";

export class App extends Component {
    render() {
        return (
            <AuthProvider>
                <div>
                    <AuthExample />
                </div>
            </AuthProvider>
        );
    }
}

export default App;
