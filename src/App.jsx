import React from 'react';
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { ItemDetailContainer } from './/components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Carrito/Cart';
 


const App = () => {
    return (
        <BrowserRouter>
        <div className='App'>
        <Navbar/> 
        <Routes>
            <Route path='/' element={<ItemListContainer/> }/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/> }/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
