import React, {Component} from 'react';
import './style.css';
import ttnlogo1 from '../../assets/ttnlogo.png'
import TokenComponent from '../Token';

export default class Login extends Component {
    componentDidMount() {
        localStorage.getItem('token') && this.props.history.push('/dashboard/buzz')
    }

    render() {
        return (
            <div className='container1'>
                <div className='innerContainer'>
                    <img src={ttnlogo1} alt="image"/>
                    <p>Create your own buzz</p>
                    <a className='loginClick' href="http://localhost:8080/auth/google">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>Login with Google
                    </a>
                </div>
            </div>
        )
    }
}
