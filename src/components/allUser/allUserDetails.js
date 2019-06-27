import React, {Component} from 'react';
import{connect} from "react-redux";
import AllUserThread from './allUserThread';
import {allUser} from "../../action/allUserAction";

class AllUserDetails extends Component {
    componentDidMount() {
        this.props.allUser();
    }

    render() {
        // console.log('jerry',this.props.allUserData)
        return (
            <div className="">
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
                        {this.props.allUserData.map((data)=>{
                            console.log('jjjjjj',data)
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