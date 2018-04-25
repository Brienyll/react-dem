function Person (props) {
  return (
    <div className="person">
    <h1>{props.name}</h1>
    <p>Number is: {props.number}</p>
  </div>
  );
}

let app = (
  <div>
    <Person name="Brix" number="9"/>
    <Person name="Brielle" number="17"/>
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
