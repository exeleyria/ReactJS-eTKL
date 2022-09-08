import React, { useState } from "react";
import Item from "./Item/Item";

const ItemList = ({ teclados }) => {
    return (
        
      <div style={{display: 'flex', gap:'2rem'}}>
        {
          teclados.map(teclados => <Item key={teclados.id} teclados={teclados}/>)
        }

      </div>
      
      
      
      
      
      
      
      /*<div className="row">
        {teclados.map((teclados) => {
          return (
            <Item
              key={teclados.id}
              nombre={teclados.nombre}
              img={teclados.img}
              precio={teclados.precio}
            />
          );  
        })}
      </div>*/
    );
  };
  
  export default ItemList;

