import React, { useState } from "react";

const ClockUPdate = () => {
let time = new Date().toLocaleTimeString();

const [ctime , setCtime] = useState(time);

let UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
};

    setInterval(UpdateTime,1000);


    return( 
        <>
        <h1>{ctime} </h1>

        </>
    );
};

export default ClockUPdate;