
import { useLocation, useNavigate,  } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
 const navigate = useNavigate()
 const location = useLocation()

 const { q = ''} = queryString.parse( location.search )
 const heroesToShow = getHeroesByName(q)

 const showSearch = (q.length === 0);
 const showError =( q.length > 0 && heroesToShow.length === 0 );


  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

const onSearchSubmit = (e) =>{
  e.preventDefault()
  
  navigate(`?q=${ searchText.toLowerCase().trim() }`)
  
} 

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/*//! ejemplo de mostrar un elemento con una clase condicional */}

          <div className="alert alert-primary animate__animated animate__fadeInRight" style={{display: showSearch ? '' : 'none'}}>Search a hero</div>

          <div className="alert alert-danger animate__animated animate__fadeInRight" 
               style ={{display: showError ? '' : 'none' }}
               
               >No hero with <b>{ q }</b></div>

      
          
           {
            heroesToShow.map( hero => (

               <HeroCard key={hero.id} {...hero}/>
            ))
           }
        </div>
      </div>
    </>
  );
};
