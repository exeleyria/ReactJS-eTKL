import ItemCount from "../Counter/ItemCount";
import './ItemDetail.css'


export const ItemDetail =({item}) =>{
    function onAdd(count){
        console.log(`Se han agregado ${count} productos al carrito`)
    }

    return(
        <article>
            <div className="card-detail">
                <div className="card-detail-left">
                    <h1 className="text-center"> {item.nombre}</h1>
                    <img src={item.img} alt={item.nombre} className="img" />
                </div>
                <div className="card-detail-right">
                    <p>{item.descripcion}</p>
                    <p>Marca: {item.marca}</p>
                    <p>Precio: {item.precio}</p>
                    <p>Stock: {item.stock} </p>
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={1} sum={1} res={1}/>
                </div>
            </div>
        </article>
    )

}