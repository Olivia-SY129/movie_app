import React from 'react';

function Dogs({name}) { 
  return <h3>I love {name}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>First App</h1>
      <Dogs 
      name="Leo"
      hungry={true} 
      info = {["male", "8 months old", 'retriever']} />
      <Dogs 
      name="May"
      hungry={false} 
      info = {["female", "2 years old", 'German shepard']} />
      <Dogs 
      name="Jenny"
      hungry={true} 
      info = {["female", "10 years old", 'retriever']} />
    </div>
  );
}



export default App;
