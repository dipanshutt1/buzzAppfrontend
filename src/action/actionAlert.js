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
        text: "You want to Deactivate this user?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("You have successfully deactivated this user!", {
                    icon: "success",
                });
            } else {
                swal("You haven't changed the status of the user");
            }
        })
        .catch(err=>{
            errorAlert("Some error occured!")
        })
}

