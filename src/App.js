import React, { useState } from 'react';
import '../src/design/design.css';

const App = () => {
  const [notupdatedname, setupdatename] = useState('Coding with Zair');
  const [inputText, setinputText] = useState('');

  function handleInputChange(e) {
    setinputText(e.target.value);
  }

  function handleChangeText() {
    setupdatename(inputText);
    alert('your text is updated to ' + inputText)
    setinputText(''); 
  }

  return (
    <div>
      <div id='HelloTag'>Hello {notupdatedname}</div>
      <div id='design'>
        <div>
          <input
            type="text"
            placeholder='enter text'
            value={inputText}  
            onChange={handleInputChange} 
          />
        </div>
        <button onClick={handleChangeText}>  
          Change text
        </button>
      </div>
    </div>
  );
};

export default App;
