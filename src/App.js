import Inicio from './components/Inicio';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Orden from './components/Orden';
import { useState } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { Toggle } from 'react-daisyui';



function App(props) {
  //Edit <code>src/App.js</code> and save to reload.

  const [clase, setClase] = useState('App-main')

function onClick(e){
  if(e.target.checked)
    setClase('App-main2')
  else
    setClase('App-main')
 }


  return (
    <>
    <BrowserRouter> 
      <CartProvider>
      <div className="App">
      <header className="App-header"> 
      <NavBar></NavBar>  
      </header>

      <main className={clase}> 
        <Routes>
         <Route exact path="/" element={<ItemListContainer/>}/>  
         <Route exact path="/inicio" element={<Inicio/>}/>  
         <Route exact path="/productos" element={<ItemListContainer/>}/>  
         <Route exact path="/productos/:categoryId" element={<ItemListContainer/>}/>  
         <Route exact path="/nosotros" element={<Nosotros/>}/>  
         <Route exact path="/contacto" element={<Contacto/>}/>  
         <Route exact path="/cart" element={<Cart/>}/>  
         <Route exact path="/item/:slug" element={<ItemDetailContainer/>}/>  
         <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>  
         <Route exact path="/orden" element={<Orden/>}/>  
      </Routes>
      <Toggle onClick={onClick} className="toggle"></Toggle>
      <br></br>
     </main>
    </div>
    </CartProvider>
    <footer className="App-footer">
       <h5>Cueva Martin © 2022 </h5>  
   </footer>

   </BrowserRouter>
      </>
    
  );
}

export default App;
