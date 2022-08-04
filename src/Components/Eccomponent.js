
const Eccomponent = () => {
    
    const fuctionOutput = () => {
        alert("Allelooya..!");
    }

    return (
      <button onClick={fuctionOutput} className="btn bg-danger text-white">My Button</button>
    );
}

export default Eccomponent; //necessary to be implemented