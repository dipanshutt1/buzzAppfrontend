import axiosInstance from '../utils/axiosInterceptor';
import {successAlert,errorAlert} from "./actionAlert";
import {BUZZ_URL,DISLIKE_URL, LIKE_URL} from "../constants/actionUrl";

let like=false;
let dislike=false;
export const addBuzz=(formData)=> dispatch=> {
    axiosInstance({
        method:'post',
        url:`${BUZZ_URL}`,
        data:formData,
        config:{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
    })
        .then(res=>{
            if(res.data.message==="Success")
                {
                    console.log(`hehehe` , res.data);
                    dispatch(addBuzzPostToState(res.data.result))
                }
            successAlert("Your buzz is posted successfully!")
        }).catch((err) => {
            console.error(err);
            errorAlert("Unable to post the buzz!")
    })
}
const addBuzzPostToState=(data)=>
    ({
        type:'BUZZ_POST',
        data

});
export const showBuzz=(skip)=> dispatch => {
    axiosInstance({
        method:'get',
        url:`${BUZZ_URL}/${skip}`,
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
        .catch(err=>{
            console.log("some error occured ",err);
            errorAlert("Some Error occured !")
            }
        )
}
export const showBuzzPostToState=(data)  =>{
    return {
        type:'SHOW_POST',
        data
    }
}

const likeFromDB = data => {
    return {
        type: 'PUT_LIKE',
        data
    }
}

export const postLike = buzzId => dispatch => {
    console.log(buzzId.get('buzzId'));
    axiosInstance({
        method: 'patch',
        data: buzzId,
        url:`${LIKE_URL}`
    })
        .then(
            res => {
                dispatch(likeFromDB(res.data))
                if (like === false) {
                    like = !like
                } else {
                    like = !like
                }
            }
        )
        .catch(
            res => {
                console.log("Error occured while liking post", res.err)
                errorAlert("Something went wrong")
            }
        )
}



// FOR DISLIKE

const dislikeFromDB = data => {
    return {
        type: 'PUT_DISLIKE',
        data
    }
}

export const postDislike = buzzId => dispatch => {
    axiosInstance({
        method: 'patch',
        data: buzzId,
        url: `${DISLIKE_URL}`
    })
        .then(
            res => {
                dispatch(dislikeFromDB(res.data))
                if (dislike === false) {
                    dislike = !dislike
                } else {
                    dislike = !dislike
                }
            }
        )
        .catch(
            res => {
                console.log("Error occured while disliking post", res.err)
                errorAlert("something went wrong")
            }
        )
}