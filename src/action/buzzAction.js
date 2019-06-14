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
            if(res.data.message='data storage done'){
                console.log(`hehehe ${res.data.data}`);
                dispatch(addBuzzPostToState(res.data.data));
            }
        }).catch((err) => {
            console.error(err);
    })
}
export const addBuzzPostToState=(data)=>{
    return {
        type:'BUZZ_POST',
        data
    }
}
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