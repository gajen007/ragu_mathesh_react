import React, { useState } from "react";

function Student(props) { //props is an object as a parameter

    const [likedStatus, toggleLike] = useState("Like");

    return (
        <div className="card border-dark" style={{ margin: '1%' }}>
            <div className="card-header" align="center">{props.studentName}</div>
            <div className="card-body">
                <label>Email: {props.studentEmail}</label>
            </div>
            <div className="card-footer">
                <button onClick={() => {
                    if (likedStatus === "Liked") {
                        toggleLike("Like");
                    }
                    else {
                        toggleLike("Liked");
                    }
                    alert("Fetch call here");
                }} >{likedStatus}</button>
            </div>
        </div>
    );
}

export default Student; //necessary to be implemented


//props.studentName object's field
//props.studentEmail object's field