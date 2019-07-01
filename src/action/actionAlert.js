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
    return swal({
        title,
        text: "You want to Deactivate this user?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })

}

