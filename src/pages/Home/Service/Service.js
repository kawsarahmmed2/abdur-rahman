import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, id, description, img, price } = service;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: ${price}</p>
          <p className="card-text">{description}</p>
          <button
            className="btn service-button"
            onClick={() => handleNavigate(id)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
