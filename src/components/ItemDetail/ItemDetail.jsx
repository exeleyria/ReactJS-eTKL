import ItemCount from "../Counter/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom"
import React, {useContext} from 'react';
import { CarritoContext } from '../../context/carritoContext';



const ItemDetail =({item,sumaCant, restaCant, count, agregaCarrito, visibleCount}) =>{
    const {id, nombre, descripcion, precio, stock, img} = item
    const {addItem} = useContext(CarritoContext);

    return(
        
        <>
        {
        id 
        ?  
        <div>
            <div>
                <h2>{nombre}</h2>
                <img src={img} alt={nombre}/>
                <div>
                    <p>{descripcion}</p>
                    <h2>${Intl.NumberFormat("de-DE").format(precio)}</h2>                    
                    <h4>{stock} disponibles</h4>
                    {
                        visibleCount ?
                        <>
                        
                        <ItemCount stock={item.stock} sumaCant={sumaCant} restaCant={restaCant} count={count}/>
                        <button disabled={count === 0} onClick={()=>{addItem(item, count); agregaCarrito()}} >Agregar</button>
                        </>
                        :
                        <>
                        <p >Se han agregado {count} unidades al carrito.</p>
                        <Link to={"/cart"}><button>Finalizar compra</button></Link>
                        </>
                    }   
                </div>
            </div>
        </div>
        :
        <img className='loading' src='https://firebasestorage.googleapis.com/v0/b/libreria-studenta.appspot.com/o/img%2Floading.gif?alt=media&token=cd9e0cdf-dc55-42fe-8ce4-9e346847875d' alt='Loading'/>
        }
        </>
    )

}
export default ItemDetail