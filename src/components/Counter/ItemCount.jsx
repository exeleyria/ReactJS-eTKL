const ItemCount= ({stock, sumaCant,restaCant,count}) =>{
    return(
        <div>
            <button disabled={count === 0} onClick={restaCant} className='btn btn-success'>-</button>
            <div>{count}</div>
            <button disabled={count === stock} onClick={sumaCant} className='btn btn-success'>+</button>
        </div> 
    )
}

export default ItemCount
