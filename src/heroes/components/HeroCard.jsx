import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
 }) => {


    const heroImage = `/heroes/${id}.jpg`
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
         <div className="col-4">
            <img src={ heroImage } className="card-img" alt={ superhero }/>
         </div>
         <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{alter_ego}</p>
                <p>{characters !== alter_ego ? characters : null}</p>
                <p className="card-text">
                    <small className="text-muted">{ first_appearance }</small>
                </p>
            <Link to={`/hero/${id}`}>Ver más...</Link>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};
