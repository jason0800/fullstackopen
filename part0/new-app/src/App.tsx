const App = () => {
  const handleClick = (id) => {
      console.log(`The id is ${id}`)
  }

  return (
    <div>
    <button onClick={()=>handleClick(2)}>Click Me</button>
    </div>
  );
};

export default App;
