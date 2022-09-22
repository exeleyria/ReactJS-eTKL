import React from "react";
import { Item } from "./Item/Item";


export const ItemList = ({ tecladoLista }) => {
    return (
        
      <div style={{display: 'flex', gap:'2rem'}}>
        {
          tecladoLista.map(teclado => <Item key={teclado.id} teclado={teclado}/>)
        }

      </div>
      
      );
  }

