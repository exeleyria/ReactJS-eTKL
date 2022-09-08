import React from "react";
import {Link} from 'react-router-dom';

const Item = ({teclados}) => {
  const {nombre,img,id}= teclados

  return (
    <div className="card-container">
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
};

export default Item;