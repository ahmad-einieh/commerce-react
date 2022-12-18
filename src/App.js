import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Slider from './component/Slider';
import {Route,Routes } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<>
        <Slider/>
     <ProductList/>
      </>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/ProductDetails/:productid" element={<ProductDetails/>}/>

     </Routes>
     
    </div>
  );
}

export default App;
