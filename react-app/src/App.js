import './App.css';

function App() {

  {/* Declaring variable  */}
  let name = 'react app'  
  return (
    <div className="App">
     <div className="App-header"> {/* css added */}
      Hello React
     <div className="App-header"> 
      {name}      {/* It will return name = react app*/}
      {/* Using variables inside return */}  
      <Demo></Demo>
      {/* Attach other functions by using tags inside parent function and 
      declaring the new function after the parent function */}
    </div>
    </div>
    </div>
  );
}
function Demo() {
  return (
    <div className="App">
      Demo
    </div>
  );
}
export default App;