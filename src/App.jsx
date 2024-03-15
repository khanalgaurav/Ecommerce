import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import IsLoggedIn from './components/IsLoggedIn/IsLoggedIn'
// userloggedin status

const user=false; 
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womens' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route
            path="/cart"
            element={
              <IsLoggedIn user={!user} redirect="/login">
                <Cart />
              </IsLoggedIn>
            }
          />
          
          {/* <Route element={<IsLoggedIn user={user}/>}>
            <Route path='/cart' element={<Cart/>}/>
          </Route> */}

          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
