function Mycomponent() {
    
    const fuctionOutput = () => {
        alert("Govindaa..!");
    }

    return (
      <button onClick={fuctionOutput} className="btn bg-success text-white">My Button</button>
    );
}

export default Mycomponent; //necessary to be implemented