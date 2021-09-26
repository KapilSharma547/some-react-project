import React from "react";


const Card = (props) =>{
   
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src=""
                        alt="myPic"
                        className="card_image"
                    />
                    <div className="card_info">
                        <span className="card_category">A Netflix Orignal Serize</span>
                        <h3 className="Card_title">{props.sname
                        }</h3>
                        <a href=""
                            target="_blank"
                            >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;