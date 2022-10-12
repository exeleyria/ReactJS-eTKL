import {FaCartPlus} from 'react-icons/fa';
import { Link } from "react-router-dom"
import React, {useContext} from 'react';
import { CarritoContext } from '../../context/carritoContext';

const CartWidget = () =>{
    const {qCart} = useContext(CarritoContext);
    return(
        <Link to={"/cart"}>
            <button type="button" className="btn btn-primary">
                <FaCartPlus/>
                <span>{qCart}</span>
            </button>
        </Link>
    )
}

export default CartWidget