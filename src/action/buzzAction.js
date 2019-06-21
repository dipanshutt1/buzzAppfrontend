import axiosInstance from '../utils/axiosInterceptor';

export const addBuzz=(formData)=> dispatch=> {
    axiosInstance({
        method:'post',
        url:"http://localhost:8080/dashboard/buzz",
        data:formData,
        config:{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            // if(res.data.message='data storage done'){
                if(res.data.message==="Success")
                {
                    console.log(`hehehe` , res.data);
                    dispatch(addBuzzPostToState(res.data.result))
                }
            // }
        }).catch((err) => {
            console.error(err);
    })
}
const addBuzzPostToState=(data)=>
    ({
        type:'BUZZ_POST',
        data

});
export const showBuzz=()=> dispatch => {
    axiosInstance({
        method:'get',
        url:'http://localhost:8080/dashboard/buzz',
        config: {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            console.log("res.data",res.data)
            dispatch(showBuzzPostToState(res.data))
        })
}
export const showBuzzPostToState=(data)  =>{
    return {
        type:'SHOW_POST',
        data
    }
}