import swal from 'sweetalert';

export const successAlert=title=>{
    swal({
        title,
        icon: "success",
        button: "Okay!",
    })
}

export const errorAlert=title=>{
    swal({
        title,
        icon: "error",
        button: "Okay!",
        }

    )
}

export const warningAlert=title=>{
    swal({
        title,
        icon: "warning",
        button: "Okay!"
    })
}




