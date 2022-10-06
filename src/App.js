// import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form.js'
// import Gallery from './components/Gallery.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
