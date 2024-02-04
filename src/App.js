import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sage from './Pages/Sage/Sage';
import Home from './Components/Home/Home';
import BlueFlower from './Pages/BlueFlower/BlueFlower';
import BCU from './Pages/Bengaluru/BCU';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Swiftpay from './Pages/Swiftpay/Swiftpay';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='sage' element={<Sage/>}/>
    <Route path='blueflower' element={<BlueFlower/>}/>
    <Route path='bcu' element={<BCU/>}/>
    <Route path='swiftpay' element={<Swiftpay/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
