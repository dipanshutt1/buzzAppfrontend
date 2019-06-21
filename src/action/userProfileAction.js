import axiosInstance from '../utils/axiosInterceptor';

export const userProfile=()=>dispatch=>{
    axiosInstance({
        method:'get',
        url:'http://localhost:8080/dashboard/userProfile'
    })
        .then(res=>{
            dispatch(userProfileToState(res.data))
        })
        .catch((err)=>{
            console.log(err);
        })
}

export const userProfileToState=(data)=>{
    return{
        type:'USER_PROFILE',
        data
    }
}
