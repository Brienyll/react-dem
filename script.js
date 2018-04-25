function Person (props) {
    return (
      <div className="person">
      <h1>{props.name}</h1>
      <p>Number is: {props.number}</p>
    </div>
    );
  }
  
  ReactDOM.render(<Person name="Brix" number="9"/>, document.querySelector("#p1"));
  
  ReactDOM.render(<Person name="Brielle" number="17"/>, document.querySelector("#p2"));