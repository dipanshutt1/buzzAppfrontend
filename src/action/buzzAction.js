import axios from 'axios';

export const addBuzz=(formData)=> dispatch=> {
    axios({
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
                dispatch(addBuzzPostToState(res.data.data));
            }
        })
}

export const addBuzzPostToState=(data)=>{
    return {
        type:'BUZZ_POST',
        data
    }
}