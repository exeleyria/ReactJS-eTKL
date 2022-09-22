import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
//import { teclados } from '../Item/teclados';
import {useParams} from 'react-router-dom';

import db from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {
    const {id}= useParams()
    const [item, setItem] = useState()
    const [count, setCount] = useState(1)
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
    



    
    /*const GetProduct = () => new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(teclados.find(teclado=> teclado.id === Number(id))), 2000)
    })
    
    /*
    useEffect(() =>{
        GetProduct()
        .then(response => setItem(response))
    },[])
    */

    useEffect(() => {     getItem();
    },[id]);


    const getItem = async () => {
        try {
            const prod = doc(db, "TECLADOS", id)
            const resp = await getDoc(prod)
            const result = {id:resp.id, ...resp.data()};
            setItem(result);
        } catch (error) {
            console.log('error', error);
        }
    }                                                                                                                                                       
        


    return (
      <div>  
        {!item ? <p>Cargando...</p> : <>{<ItemDetail    item={item} sumaCant={sumaCant}  restaCant={restaCant} count={count} agregaCarrito={agregaCarrito}  visibleCount={visibleCount}/>}</>}
      </div>
  )
}