const ItemCount= ({stock, sumaCant,restaCant,count}) =>{
    return(
        <div className="d-flex flex-row">
            <button disabled={count === 0} onClick={restaCant} className='btn btn-success'>-</button>
            <button className='btn'>{count}</button>
            <button disabled={count === stock} onClick={sumaCant} className='btn btn-success'>+</button>
        </div> 
    )
}

export default ItemCount
