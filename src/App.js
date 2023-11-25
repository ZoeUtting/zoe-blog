import './App.css';

function App() {
  const title ='Welcome to my blog'  
  const likes = 50
  const link ="https://www.zoeutting.com"
  // const person = {name: 'zoe', age: 26}
  
  return (
    <div className="App">
    <div className="content">
      <h1>{title}</h1>
      {/* {person.name} */}
      {likes}
      <p>{10 * 2}</p>
      <a href={link}>zoe website</a>
    </div>
    </div>
  );
}

export default App;
