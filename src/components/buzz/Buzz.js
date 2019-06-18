import React,{Component} from "react";
import Form from "./buzz/buzzForm";
import BuzzPost from "./buzz/buzzPost";

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