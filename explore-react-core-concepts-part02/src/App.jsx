import './App.css'
import Users from './users';

function App() {

  // create an normal function
  function handleClick() {
    alert('btn clicked');
  }

  // create an arrow function

  const handleClick2 = () => {
    alert('btn 2 is clicked');
  }

  // parameterized function

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts</h3>

      {/* import user */}

      <Users></Users>

      {/* auto import */}

      {/* <Counter> </Counter> */}
      <counter></counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={addToFive(2)}>Click Me 3</button>

      {/* create an arrow function inside event handler */}

      <button onClick={() => addToFive(3)}>click me 4</button>
    </>
  )
}

export default App
