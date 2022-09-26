// import './App.css';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Form from './components/Form.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
