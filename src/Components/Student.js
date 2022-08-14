import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

function Student(props) { //props is an object as a parameter
    const [likedStatus, toggleLike] = useState("Like");

    const switchLike = () => {
        if (likedStatus === "Liked") { toggleLike("Like"); }
        else { toggleLike("Liked"); }
        alert("Fetch call here");
    };
    return (
        
        <div className="card border-dark" style={{ margin: '1%' }}>
            <div className="card-header" align="center">{props.studentName}</div>
            <div className="card-body">
                <label>Email: {props.studentEmail}</label>
            </div>
            <div className="card-footer">
                <button onClick={switchLike} >{likedStatus}</button>
                <Link to={"student/"+props.studentID}><button>View Student</button></Link>
            </div>
        </div>
        
    );
}

export default Student; //necessary to be implemented


//props.studentName object's field
//props.studentEmail object's field