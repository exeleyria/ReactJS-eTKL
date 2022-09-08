import React, { useEffect, useState } from 'react';
import { teclados } from '../Item/teclados';
import { ItemList } from './ItemList';

import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [tecladoLista, setTecladoLista] = useState([])
    const {categoria} = useParams()
  
    console.log(categoria)

    const getTeclados = () => new Promise((resolve, reject) => {
      if(categoria) {
        setTimeout(()=> resolve(teclados.filter(item => item.categoria === categoria)), 2000)
      } else {
        setTimeout(()=> resolve(teclados), 2000)
      }
    })
  
    useEffect(() => {
      getTeclados()
      .then(teclados => setTecladoLista(teclados))
      .catch(error => console.error(error))
  
      return () => {
        setTecladoLista([])
      }
  
    }, [categoria])
  
    
  
    return (
      <>
        {
          tecladoLista.length ? <ItemList tecladoLista={tecladoLista} /> : <h1>Cargando...</h1>
        }
        
      </>
    )

  }
  