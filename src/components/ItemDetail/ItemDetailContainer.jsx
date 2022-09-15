import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { teclados } from '../Item/teclados';
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {
    const {id}= useParams()
    const [item, setItem] = useState()
    const [count, setCount] = useState(0)
    const [visibleCount, setVisibleCount] = useState(true)
   


    const agregaCarrito =()=>{
        setVisibleCount(false);
    }
const sumaCant =() => {
        setCount(count + 1);
    }
    const restaCant =() => {
        setCount(count - 1);
    }
    




    const GetProduct = () => new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(teclados.find(teclado=> teclado.id === Number(id))), 2000)
    })
   
    useEffect(() =>{
        GetProduct()
        .then(response => setItem(response))
    },[])
    

    return (
      <div>  
        {!item ? <p>Cargando...</p> : <>{<ItemDetail    item={item} sum={sumaCant}  rest={restaCant} count={count} agregaCarrito={agregaCarrito}  visibleCount={visibleCount}/>}</>}
      </div>
  )
}