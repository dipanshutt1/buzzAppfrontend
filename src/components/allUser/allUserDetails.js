import React, {Component} from 'react';
import{connect} from "react-redux";
import AllUserThread from './allUserThread';
import {allUser} from "../../action/allUserAction";

class AllUserDetails extends Component {
    componentDidMount() {
        this.props.allUser();
    }

    render() {
        return (
            <div className="form-component">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allUserData
                            .filter((data) => data.email !== 'deepanshu@tothenew.com')
                            .map((data)=>{
                            return (
                                <AllUserThread user={data}/>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
        return {
            allUserData:state.allUserReducer.allUser
        }
}
const mapDispatchToProps={
        allUser
}
export default connect(mapStateToProps,mapDispatchToProps)(AllUserDetails);