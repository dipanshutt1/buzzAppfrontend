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
            dispatch(showComplaintToState(res.data))
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
        url:'http://localhost:8080/dashboard/resolve/myComplaint',
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
};

export const resolveCommit=(formData)=>dispatch=>{
    axiosInstance({
        method:'post',
        url:"http://localhost:8080/dashboard/resolve/myComplaint",
        data:formData})
            .then(res=>{
                const updatedStatus = formData.get('statusList');
                const issue_id = formData.get('issue_id');
                dispatch(addCommitToState({updatedStatus, issue_id}))
            })
            .catch((err)=>{
                console.log(err);
            })
}

const addCommitToState=(data)=>
    ({
        type:'RESOLVE_COMMIT',
        data
});
