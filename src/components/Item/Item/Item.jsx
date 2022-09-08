import React from "react";
import {Link} from 'react-router-dom';

export const Item = ({teclado}) => {
  const {nombre,img,id}= teclado

  return (
    <div className="">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2" >
        <h4 className="card-title">{nombre}</h4>
          <div className="card-body">
            <img
              src={img}
              className="img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div className="">
            <Link to={`/item/${id}`}>
            <button className="btn btn-primary">Ver mas detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}