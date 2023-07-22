import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  return (
    <>
        <h1>Generated password</h1>
        <input type="text" value={password} />
        <button type='button'>Copy password</button>
        <br />
        <input type="range" id="slider" max="40" min="4" step="1" value="13" class="ui-components-61pwxs"></input>
        <br />
        <label htmlFor="">Letters</label>
        <input type="checkbox" name="letters" id="letters"/>

        <label htmlFor="">Digits</label>
        <input type="checkbox" name="digits" id="digits"/>

        <label htmlFor="">Symbols</label>
        <input type="checkbox" name="symbols" id="symbols"/>

        <label htmlFor="">Special Characters</label>
        <input type="checkbox" name="special" id="special"/>
    </>
  )
}

export default App
