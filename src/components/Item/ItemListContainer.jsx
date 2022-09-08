import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import teclados from '../Item/teclados';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [teclado, setTeclados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoria} = useParams()
  

    const getTeclados = () => new Promise((resolve, reject) => {
      if(categoria) {
        setTimeout(()=> resolve(teclado.filter(item => item.categoria === categoria)), 2000)
      } else {
        setTimeout(()=> resolve(teclado), 2000)
      }
    })
  
    useEffect(() => {
      getTeclados()
      .then(teclado => setTeclados(teclado))
      .catch(error => console.error(error))
  
      return () => {
        setTeclados([])
      }
  
    }, [categoria])
  
    
  
    return (
      <>
        {
          teclados.length ? <ItemList teclados={teclados} /> : <h1>Cargando...</h1>
        }
        
      </>
    )




    {/*
    useEffect(() => {
      const getTeclados = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(teclado);        }, 2000);
      });
  
      getTeclados
        .then((response) => setTeclados(response))
        .finally(() => setIsLoading(false));
    }, []);
  
    return isLoading ? <h2>Cargando...</h2> : <ItemList teclados={teclados} />;
  */}
  };
  
  export default ItemListContainer;
  