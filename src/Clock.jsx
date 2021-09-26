import React, { useState } from "react";

const Clock = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(newTime);

    const UpdateTime = () => {
     let newCTime = new Date().toLocaleTimeString();
       setCtime(newCTime);
    };


    return (
        <>
            <h3> {ctime} </h3>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );
}
export default Clock;