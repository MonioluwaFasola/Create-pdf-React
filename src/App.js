import logo from './sunset1.svg';
import Text from './LoremIpsumText.js'
import NativeBrowserPDF from './NativeBrowserPDF/NativeBrowserPDF';
import './App.css';
import DOMPDF from './DOMPDF'
import JavascriptLibrary from './JavascriptLibrary';



function App() {
  return (
    <div className="App">
       <div id = "App" className="App">
        <img src={logo} className="header-pic" alt="sunset" />
        <h1>Lorem Ipsum</h1>
        <div className='texts'>
          <Text></Text>
          <NativeBrowserPDF/>
          <Text></Text>
          <DOMPDF/>
          <Text></Text>
          <JavascriptLibrary/>
          <Text></Text>
          
        </div>
        </div>
       </div>
        
  );
}

export default App;
