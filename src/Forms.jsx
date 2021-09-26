import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,

            };
        });
    };
    const onSubmit = (Event) => {
        Event.preventDefault();
        alert("form submitted")
    };
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>
                            Hello {fullName.fname} {fullName.lname}
                        </h1>
                        <p> {fullName.email} </p>
                        <p> {fullName.phone} </p>
                        <input
                            type="text"
                            placeholder='Enter your Name'
                            name="fname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />
                        <input
                            type='text'
                            placeholder='Enter your Name'
                            name="lname"
                            onChange={inputEvent}
                            value={fullName.lname}
                        />
                        <input
                            type='text'
                            placeholder='Enter your email'
                            name="email"
                            onChange={inputEvent}
                            value={fullName.email}
                        />
                        <input
                            type='number'
                            placeholder='Enter your Name'
                            name="phone"
                            onChange={inputEvent}
                            value={fullName.phone}
                        />
                        <button type="submit">Click me 👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;





