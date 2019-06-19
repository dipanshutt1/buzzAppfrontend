import React,{Component} from 'react';
import './style.css';
import ttnlogo from '../../assets/ttnlogo.png'

export default class Login extends Component{
    render(){
        return(
            <div className='container'>
                <div className='innerContainer'>
                    <img src={ttnlogo} alt="image"/>
                    <p>Create your own buzz</p>
                    <a href="http://localhost:8080/auth/google">
                        Login with Google
                    </a>
                </div>
            </div>
        )
    }
}
