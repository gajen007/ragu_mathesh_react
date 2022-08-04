function Student(props) { //props is an object as a parameter
    return (
      <div className="card border-dark" style={{margin:'1%'}}>
<div className="card-header" align="center">{props.studentName}</div>
	<div className="card-body">
      <label>Email: {props.studentEmail}</label>
	</div>
	<div className="card-footer">
	</div>
</div>
    );
}

export default Student; //necessary to be implemented


//props.studentName object's field
//props.studentEmail object's field