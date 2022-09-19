const ItemCount= ({stock, sumaCant,restaCant,count}) =>{
    console.log(stock, sumaCant,restaCant,count);
    return(

        <div>
            <button disabled={count === 0} onClick={restaCant}>-</button>
            <div>{count}</div>
            <button disabled={count === stock} onClick={sumaCant}>+</button>
        </div>
        
    )
}

export default ItemCount
