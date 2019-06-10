import React ,{Component} from 'react';
import BuzzComponent from "./Buzz";
import Menu from './Menu';
import Complaint from './Complaint'
import Form from './Form'

export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <header>
                    <h2>header component</h2>
                </header>
                <div>
                    <Menu />
                </div>
                <main>
                    <Form />
                    <Complaint />
                </main>

            </div>
        )
    }
}