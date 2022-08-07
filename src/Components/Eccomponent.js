
const Eccomponent = (props) => {
    
    const fuctionOutput = () => {
        alert("Allelooya..!");
    }

    return (
      <button onClick={fuctionOutput} className="btn bg-danger text-white">{props.buttonText}</button>
    );
}

export default Eccomponent; //necessary to be implemented