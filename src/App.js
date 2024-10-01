
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/navbar"
import Shop from "./pages/Shop"
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';

import Footer from './components/Footer/Footer';
import kidsbanner from "./components/Assets/kidsbanner.jpeg"
import manbanner from "./components/Assets/manbanner.jpeg"
import womenbanner from "./components/Assets/womenbanner.webp"
import Search from './pages/Search';
import Payment from './pages/Payment';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={manbanner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={womenbanner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kidsbanner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/payment' element={<Payment/>}/>
      
        
        
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
