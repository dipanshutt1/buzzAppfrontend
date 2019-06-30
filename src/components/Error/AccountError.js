import React, {Component} from 'react';
import './error.css';
class AccountError extends Component {
    render() {
        return (
            <div className="error-component">
                <h1>Your Account has been deactivated!!!</h1>
                <h3>Kindly contact to the admin department</h3>
            </div>
        );
    }
}

export default AccountError;