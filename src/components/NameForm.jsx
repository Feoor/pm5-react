import {useState} from "react";

function NameForm() {
  const [name, setName] = useState('');

  function handleChange( event ) {
    setName( event.target.value );
  }

  return (
    <div className="nameForm">
      <input value={name} onChange={handleChange} />
      <p>Привет, {name}</p>
    </div>
  )
}

export default NameForm;