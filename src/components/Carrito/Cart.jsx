import { Link } from 'react-router-dom'; 
import React, {useContext, useState} from 'react';
import { CarritoContext } from '../../context/carritoContext';



export default function Cart() {
    const {qCart, cart, removeItem, clearCart} = useContext(CarritoContext);
  
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum += cart[i].cant * cart[i].precio;
    }

   

    return (
        <div >
            
            {cart.length === 0 ? (
                <>
                <h1>El carrito se encuentra vacío.</h1>
                <Link to={"/"}><button className='btn btn-primary'>Volver al inicio</button></Link>
                </>)
                :
                <>
                <h2>Carrito de compras</h2>
                <table className="table">
                <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th className="tb-c" scope="col">Precio</th>
                    <th className="tb-c" scope="col">Cantidad</th>
                    <th className="tb-c" scope="col">Total</th>
                    <th className="tb-r" scope="col">Eliminar producto</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((i) => {
            return (
                <tr>
                <td><img src={i.img} alt={i.nombre}/></td>
                <td>{i.id}</td>
                <td><Link to ={`/item/${i.id}`}><spam >{i.nombre}</spam></Link></td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio)}</td>
                <td className="tb-c">{i.cant}</td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio * i.cant)}</td>
                <td className="tb-c"><button className='btn btn-danger' onClick={()=>removeItem(i.id, i.cant)}>X</button></td>
                </tr>
                )})}
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="tb-c">Total compra:</td>
                <td className="tb-c">{qCart}</td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(sum)}</td>
                <td className="tb-c"><button className='btn btn-danger' onClick={()=>clearCart()}>Vaciar Carrito</button></td>
                </tr>
                    </tbody>
                    </table>
        
        </>}
        </div>);
}