import './App.css'

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
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={addToFive(2)}>Click Me 2</button>
    </>
  )
}

export default App
