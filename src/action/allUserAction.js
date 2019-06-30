import axiosInstance from '../utils/axiosInterceptor';
import {errorAlert,warningAlert} from "./actionAlert";
import {ACCOUNT_STATUS_URL, ALL_USER_URL} from "../constants/actionUrl";

export const allUser=()=>dispatch=>{
    axiosInstance({
        method:'get',
        url:`${ALL_USER_URL}`
    })
        .then(res=>{
            dispatch(allUserToState(res.data))
        })
        .catch((err)=>{
            console.log(err);
            errorAlert("Some error occcured while fetching user details!")
        })
}

export const allUserToState=(data)=>{
    return{
        type:'ALL_USER',
        data
    }
}

export const resolveUserStatus=(formData)=>dispatch=>{
    console.log(`formmmmms== ${formData.get('googleId')}`);
    axiosInstance({
        method: 'post',
        url:`${ACCOUNT_STATUS_URL}`,
        data:formData})
        .then(res=>{
            console.log('reached here');
            const updatedStatus=formData.get('resolve');
            const googleId=formData.get('googleId');
            dispatch(addUserCommit({updatedStatus,googleId}))
            warningAlert("Are your sure?")
        })
        .catch(err=>{
            console.log(err);
            errorAlert("Some error occured while changing the status of the user!")
        })
    }
const addUserCommit=(data)=>({
    type:'USER_ACTION_COMMIT',
    data
});


