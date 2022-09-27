import { Link } from 'react-router-dom'; 
import React, {useContext, useState} from 'react';
import { CarritoContext } from '../../context/carritoContext';
import Swal from 'sweetalert2'
import { generateOrder } from '../../utils/firebase';

const initialBuyer = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: ""
}


export default function Cart() {
    const {qCart, cart, removeItem, clearCart} = useContext(CarritoContext);
    const [buyer, setBuyer] = useState(initialBuyer)

    const handlerChange = (e)=> {
        setBuyer({... buyer, [e.target.name]: e.target.value})
    }

    const handlerSubmit = (e)=>{
        e.preventDefault();
        if(buyer.nombre !== "" && buyer.apellido !== "" && buyer.telefono !== "" && buyer.email !== ""){
            generateOrder(orden)
            .then((res)=>{
                new Swal({
                    title: `Felicitaciones ${buyer.nombre}! Tu orden fue enviada con exito.`,
                    text: `Numero de identificador de orden es: ${res.id}`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(clearCart())
            })
        }else {
            new Swal({
                title: 'Atencion!',
                text: 'Debe completar todos los campos',
                icon: 'error'
            })}
    }

    
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum += cart[i].cant * cart[i].precio;
    }

    const orden = {
        buyer,
        cart,
        sum
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
                {/*<td className="tb-c"><button className='btn btn-danger' onClick={()=>clearCart()}>Vaciar Carrito</button></td>*/}
                </tr>
                    </tbody>
                    </table>
                <form onSubmit={handlerSubmit} onChange={handlerChange} className='formulario'>
                    <div>
                        <div>
                            <label>Nombre: </label><input type="text" name="nombre"/>
                        </div>
                        <div>
                            <label>Apellido: </label><input type="text" name="apellido"/>
                        </div>
                    </div>
                    <div>
                        <div >
                            <label>Teléfono: </label><input type="number" name="telefono"/>
                        </div>
                        <div>
                            <label>Email: </label><input type="text" name="email"/>
                        </div>
                    </div>
                    <div>
                    <div><button className='btn'>Enviar Orden</button></div>
                    <div><button className='btn' onClick={()=>clearCart()}>Vaciar Carrito</button></div>
                    </div>
                </form>    
        
        </>}
        </div>);
}