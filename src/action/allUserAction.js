import axiosInstance from '../utils/axiosInterceptor';

export const allUser=()=>dispatch=>{
    axiosInstance({
        method:'get',
        url:'http://localhost:8080/dashboard/allUser'
    })
        .then(res=>{
            dispatch(allUserToState(res.data))
        })
        .catch((err)=>{
            console.log(err);
        })
}

export const allUserToState=(data)=>{
    return{
        type:'ALL_USER',
        data
    }
}
