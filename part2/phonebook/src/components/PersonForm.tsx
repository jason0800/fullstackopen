const PersonForm = ({onSubmit, nameValue, numberValue, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      Name: <input value={nameValue} onChange={onNameChange}/>
    </div>
    <div>
      Number: <input value={numberValue} onChange={onNumberChange}/>
    </div>
    <div>
      <button type="submit">Add Person</button>
    </div>
  </form>
)

export default PersonForm
