import React from "react";

const TokenComponent = (props) => {
    localStorage.setItem('token', props.location.search.split('?q=')[1]);
    props.history.push('/dashboard/buzz');
    return <div>
        Hello
    </div>
};

export default TokenComponent;