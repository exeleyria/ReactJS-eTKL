const ItemCount= ({stock, sum,rest,count}) =>{
    return(
        <div>
            <button disabled={count === 0} onClick={rest}>-</button>
            <div>{count}</div>
            <button disabled={count === stock} onClick={sum}>+</button>
        </div>
        
    )
}

export default ItemCount
