import axiosInstance from '../utils/axiosInterceptor';
import {USER_PROFILE_URL} from "../constants/actionUrl";

export const userProfile=()=>dispatch=>{
    axiosInstance({
        method:'get',
        url:`${USER_PROFILE_URL}`
    })
        .then(res=>{
            dispatch(userProfileToState(res.data))
        })
        .catch((err)=>{
        })
}

export const userProfileToState=(data)=>{
    return{
        type:'USER_PROFILE',
        data
    }
}
