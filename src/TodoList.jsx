import React, { useState } from "react";
import { MdDeleteSweep } from 'react-icons/md'
import { RiAddLine } from 'react-icons/ri'

const TodoList = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("You reached highest Limit");
            setNum(0);
        }

    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum}
                            className="btn_green">
                            <RiAddLine />
                        </button>
                        <button onClick={decNum} className="btn_red">
                            <MdDeleteSweep  />
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
}

export default TodoList;