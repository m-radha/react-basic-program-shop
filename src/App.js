
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shopping from './component/Shopping';
import Home from './component/Home';



function App() {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='shopping' element={<Shopping/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
