import { useState } from 'react';

const Display = ({ value }) => <p>Value: {value}</p>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
      console.log("Clicked")
      const newValue = value + 1;
      setValue(newValue);
      setTotal(newValue);
  }

  return (
    <div>
      <Display value={value} />
      <Display value={total} />
      <Button onClick={handleClick} text="Increment" />
    </div>
  );
};

export default App;
