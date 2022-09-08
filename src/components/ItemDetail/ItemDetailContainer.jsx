import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import teclados from '../Item/teclados';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [item, setItem] = useState([]);

    const GetProduct = () => new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(teclados.find(teclado => teclado.id === Number(id))), 2000)
    })
   
    useEffect(() =>{
        GetProduct()
        .then(response => setItem(response))
    },[])

    return(
        <ItemDetail item={item} />
    )

  };
  
  export default ItemDetailContainer;
   