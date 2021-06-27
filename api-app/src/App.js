import React, {useState} from 'react';
import NavBarMenu from './components/dom/NavBarMenu';
import RenderComponent from './RenderComponent';
import './index.css';

function App() {

  const [selector, setSelector] = useState(0);

  const renderApiComponent = (component) => {
    setSelector(component);
  }

  return (
    <div id="main" className="App">
      <><NavBarMenu renderApiComponent={renderApiComponent}/></>
      <><RenderComponent selector={selector}/></>
    </div>
  );
}

export default App;
