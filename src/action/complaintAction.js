import axiosInstance from '../utils/axiosInterceptor';
import {successAlert,errorAlert} from "./actionAlert";
import {COMPLAINT_URL} from "../constants/actionUrl";

export const addComplaint=(complaintData)=>dispatch=>{
    axiosInstance({
        method:'post',
        url:`${COMPLAINT_URL}`,
        data:complaintData
    })
        .then(res=>{
            console.log(`response ${Object.keys(res)}`)
            if(res.data.message='data storage done'){
                console.log(`hehehe ${JSON.stringify(res.data.data)}`);
                dispatch(addComplaintToState(res.data.data))
                successAlert("Your complaint has been locked!!")
            }
        }).catch(err=>{
            errorAlert("Some error occured while registering the complaint!!")
        }
    )
}

export const addComplaintToState=(data)=>{
    return {
        type:'COMPLAINT_POST',
        data
    }
}

export const showComplaint=()=> dispatch => {
    axiosInstance({
        method:'get',
        url:`${COMPLAINT_URL}`,
    })
        .then(res=>{
            dispatch(showComplaintPostToState(res.data))

        }).catch(res=>{
            errorAlert("Some error occured. Please try after some time!")
        }
    )
}
export const showComplaintPostToState=(data)  =>{
    return {
        type:'COMPLAINT_SHOW',
        data
    }
}