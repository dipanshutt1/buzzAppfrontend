import axiosInstance from '../utils/axiosInterceptor';

export const showAllComplaint=()=> dispatch=>{
    axiosInstance({
        method:'get',
        url:'http://localhost:8080/dashboard/resolve',
        config:{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            console.log('res data is',res.data)
            dispatch(showAllComplaintToState(res.data))
        })
}

export const showAllComplaintToState=(data) =>{
    return{
        type:'SHOW_ALL_COMPLAINT',
        data
    }
}