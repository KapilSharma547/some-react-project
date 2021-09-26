import React from "react";
import './Slote.css'

const SlotM = (props) => {
    // let x = "😄";
    // let y = "😄";
    // let z = "🎅";

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let { x, y, z} = props;
 

    if ( (props.x === props.y) && (props.y === props.x) ) {
        return (
            <>
                <div className='slot_inner'>
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Matching</h1>
                    <hr />
                </div>
            </>
        );
    }else{
        return (
            <>
                <div className='slot_inner'>
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Not Matching</h1>
                    <hr />
                </div>
            </>
        );
    }
};

const Slote = () => {
    return (
        <>
            <h1 className="heading_style">
                🎰 Welcome to <span style={{ fontWeight: 'bold' }}> Slote machine game</span> 🎰
            </h1>
            <div className="slotmachine">
                <SlotM x='😄' y='😄' z='😄' />
                <SlotM x='😃' y='😏' z='❤️' />
                <SlotM x='❤️' y='😍' z='😏' />
                <SlotM x='💋' y='💋' z='💋' />
                
            </div>

        </>
    );
}

export default Slote;