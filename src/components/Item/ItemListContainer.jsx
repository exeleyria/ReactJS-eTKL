import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebase';
import { collection, getDocs} from 'firebase/firestore'

export const ItemListContainer = () => {  
    const [tecladoLista, setTecladoLista] = useState([])
    const {categoria} = useParams()

    useEffect(() => { categoria !== undefined ? getDataCategory(): getData()},[categoria]);
    const getData = async () => {
        try {
            const itemsCollection = collection(db, "TECLADOS")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setTecladoLista(result)
        } catch (error) {
            console.log('error', error);
        }
    }
    const getDataCategory = async () => {
        try {
            const itemsCollection = collection(db, "TECLADOS")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setTecladoLista(result.filter(e=>e.categoria === categoria))
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
      <>
        {
        tecladoLista.length ? <ItemList tecladoLista={tecladoLista} /> : <h1>Cargando...</h1>
        }
        
        
      </>
    )
  }
  