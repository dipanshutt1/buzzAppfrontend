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

export const resolveUserStatus=(formData)=>dispatch=>{
    console.log(`formmmmms== ${formData.get('googleId')}`);
    axiosInstance({
        method: 'post',
        url:"http://localhost:8080/dashboard/allUser/accountStatus",
        data:formData})
        .then(res=>{
            console.log('reached here');
            const updatedStatus=formData.get('resolve');
            const googleId=formData.get('googleId');
            dispatch(addUserCommit({updatedStatus,googleId}))
            })
        .catch(err=>{
            console.log(err);
        })
    }
const addUserCommit=(data)=>({
    type:'USER_ACTION_COMMIT',
    data
});


