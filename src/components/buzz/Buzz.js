import React,{Component} from "react";
import Form from "./buzzForm";
import BuzzPost from "./buzzPost";

export default class BuzzComponent extends Component{

    render() {
        return (
            <div>
                <Form/>
                <BuzzPost />
            </div>
        )
    }
}