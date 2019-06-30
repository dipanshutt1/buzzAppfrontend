import axiosInstance from '../utils/axiosInterceptor';
import {successAlert,errorAlert} from "./actionAlert";
import {RESOLVE_MY_COMPLAINT_URL, RESOLVE_URL} from "../constants/actionUrl";

export const showAllComplaint=()=> dispatch=>{
    axiosInstance({
        method:'get',
        url:`${RESOLVE_URL}`,
        config:{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            console.log('res data is',res.data)
            dispatch(showComplaintToState(res.data))
        })
        .catch(err=>{
            console.log("some error occured",err);
            errorAlert("Some error occured !")
        })
};

export const showComplaintToState=(data) =>{
    return{
        type:'SHOW_COMPLAINT',
        data
    }
};

export const showMyComplaint=()=> dispatch=>{
    console.log('hello');
    axiosInstance({
        method:'get',
        url:`${RESOLVE_MY_COMPLAINT_URL}`,
        config:{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            console.log('res data is',res.data);
            dispatch(showComplaintToState(res.data))
        })
        .catch(err=>{
            errorAlert("Some error occured !")
        })
};

export const resolveCommit=(formData)=>dispatch=>{
    axiosInstance({
        method:'post',
        url:`${RESOLVE_MY_COMPLAINT_URL}`,
        data:formData})
            .then(res=>{
                const updatedStatus = formData.get('statusList');
                const issue_id = formData.get('issue_id');
                dispatch(addCommitToState({updatedStatus, issue_id}))
                successAlert('The status of your complaint has been changed!')
            })
            .catch((err)=>{
                console.log(err);
                errorAlert("Unable to update your complaint status. Please try after sometime!")
            })
}

const addCommitToState=(data)=>
    ({
        type:'RESOLVE_COMMIT',
        data
});
