import {useState} from 'react'

const ItemCount = ({stock, onAdd , initial, sum ,res  }) => {
    const [count, setCount] = useState(initial)
    const [disabledAdd, setDisabledAdd] = useState(false)
    const [disabledRest, setDisabledRest] = useState(false)

    function add(){
        if(count < stock){
            setCount(count + sum)
            setDisabledAdd(false)
            setDisabledRest(false)
        }
        if(count === (stock - 1 )){
            setDisabledAdd(true)
        } 
    }

    function substract(){
            if(count > initial){
                setCount(count - res)
                setDisabledRest(false)
                setDisabledAdd(false)
            }
            if(count === (initial+ 1) ){
                setDisabledRest(true)
            }
        }
    

    function reset(){
        setCount(initial)
    }

    console.log(count)

  return (
    <div>
         <div className="counter-box">
            <div >
                <p className="text-center">Cantidad: {count} </p>
                <button className="btn" onClick={substract} disabled={disabledRest} > - </button>
                <button className="btn" onClick={reset} > Reset </button>
                <button className="btn" onClick={add} disabled={disabledAdd}> + </button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
  }

export default ItemCount;