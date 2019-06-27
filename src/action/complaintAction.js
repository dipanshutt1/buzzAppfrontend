import axiosInstance from '../utils/axiosInterceptor';

export const addComplaint=(complaintData)=>dispatch=>{
    axiosInstance({
        method:'post',
        url:'http://localhost:8080/dashboard/complaint',
        data:complaintData
        // config:{
        //     header:{
        //         'Content-Type':'multipart/form-data'
        //     }
        // }
    })
        .then(res=>{
            console.log(`response ${Object.keys(res)}`)
            if(res.data.message='data storage done'){
                console.log(`hehehe ${JSON.stringify(res.data.data)}`);
                dispatch(addComplaintToState(res.data.data))
            }
        }).catch((err)=>{
            console.log(err);
    })
}

export const addComplaintToState=(data)=>{
    console.log(`hello ${JSON.stringify(data)}`)
    return {
        type:'COMPLAINT_POST',
        data
    }
}

export const showComplaint=()=> dispatch => {
    axiosInstance({
        method:'get',
        url:'http://localhost:8080/dashboard/complaint',
    })
        .then(res=>{
            console.log("res data",res.data);
            dispatch(showComplaintPostToState(res.data))
        }).catch((err) => {
            console.error(err);
    })
}
export const showComplaintPostToState=(data)  =>{
    return {
        type:'COMPLAINT_SHOW',
        data
    }
}