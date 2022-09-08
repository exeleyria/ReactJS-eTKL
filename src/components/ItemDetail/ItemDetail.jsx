import ItemCount from "../Counter/ItemCount";


export const ItemDetail =({item}) =>{
    function onAdd(count){
        console.log(`Se han agregado ${count} productos al carrito`)
    }

    return(
        <article>
            <h1>{item.nombre}</h1>
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={item.img} alt={item.nombre} className="img" />
                </div>
                <div className="card-detail-right">
                    <p>{item.nombre}</p>
                    <p>{item.precio}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={1} sum={1} res={1}/>
                </div>
            </div>
        </article>
    )

}