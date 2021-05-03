import React from 'react';

function Dogs({name, image}) { 
  return <div>
    <h3>I love {name}</h3> 
    <img src = {image} ></img> 
    </div>
}

const foodILike = [
  {
    name: "Jenny",
    image: 
      "https://www.gannett-cdn.com/presto/2020/02/03/PROC/23928de8-75f4-4cbd-aa93-a6f68ad330f7-20200201-_MS_0622.jpg",
  },
  {
    name: "Roy",
    image: 
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/06/21195710/German-Shepherd-Dog-laying-down-in-the-backyard-500x487.jpeg",
  },
  {
    name: "Coco",
    image: 
      "https://i.pinimg.com/originals/a1/5d/02/a15d02fee3f126527b8fe44853bc1932.png",
  },
  {
    name: "Gabriel",
    image: 
      "https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle-900x500.jpg",
  },
]

function App() {
  return (
    <div className="App">
      <h1>First App</h1>
      {foodILike.map(dog =>
        <Dogs 
          name={dog.name} image = {dog.image} />
        )}
    </div>
  );
}



export default App;
