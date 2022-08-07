function Mycomponent(props) {
    
    const fuctionOutput = () => {
        alert("Govindaa..!");
    }

    return (
      <button onClick={fuctionOutput} className="btn bg-success text-white">{props.buttonText}</button>
    );
}

export default Mycomponent; //necessary to be implemented