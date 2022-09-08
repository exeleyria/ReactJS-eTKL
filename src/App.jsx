import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './/components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 


const App = () => {
    return (
        <BrowserRouter>
        <div className='App'>
        <Navbar/> 
        <Routes>
            <Route path='/' element={<ItemListContainer/> }/>
            <Route path='/category/:categoria' element={<ItemListContainer/> }/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
         {/*   <Route path='/' element={}/>
            <Route path='/' element={}/>

        
        
        
        
        
        
        
        
        
        <>
          
         <div className='container'>
          
         </div>
         <div className='container'>
         <ItemDetailContainer/>  
         </div>


        </>*/}
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
