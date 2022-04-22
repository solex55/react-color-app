import Square from "./Square";
import  Input from "./Input";
import { useState} from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [darkFont, setDarkFont] = useState(true)

  

  return (
    <div className="App">
      <Square 
        colorValue = {colorValue}
        darkFont = {darkFont}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        darkFont = {darkFont}
        setDarkFont = {setDarkFont}
      />

    </div>
  );
}

export default App;
