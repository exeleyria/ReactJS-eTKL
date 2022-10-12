import React, {createContext, useState} from 'react'
import { collection, updateDoc,getFirestore, doc } from "firebase/firestore";


export const CarritoContext = createContext();


export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qCart, setQCart] = useState(0);
    const clearCart = ()=> {
        setCart([]);
        setQCart(0);
    }

    const removeItem = (id, cant)=>{
        setQCart(qCart - cant)
        const aux = cart.filter(product=>product.id !== id)
        setCart(aux);
    }


    const addItem = (producto, cant) =>{
        setQCart(qCart + cant);
        if (cart.some(product=>product.id === producto.id)){
            const aux = [...cart];
            const indice = cart.findIndex(product => product.id === producto.id);
            aux[indice] = {...aux[indice], cant: aux[indice].cant + cant}
            setCart(aux);
        }else {
            setCart([...cart, {...producto, cant}]);
        }
    };


    const db = getFirestore();
    
    const updateStock = async(stock)=>{
        await   updateDoc(doc(db, "TECLADOS", stock))
        console(stock)


    }
    
    return (
        <CarritoContext.Provider value={{cart, qCart, addItem, removeItem, clearCart, updateStock}}>{children}</CarritoContext.Provider>
    )   
}