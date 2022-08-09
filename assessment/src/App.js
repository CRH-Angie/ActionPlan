import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="country container">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
