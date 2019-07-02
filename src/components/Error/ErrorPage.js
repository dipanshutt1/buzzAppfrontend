import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-component">
                <h1>You have encountered wrong page!!! <Link to={'/dashboard/buzz'}>Home Page</Link> </h1>
            </div>
        );
    }
}

export default ErrorPage;