import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { getHeroById } from "../helpers";


export const HeroPage = () => {
 const navigate = useNavigate()
 
 const hero = useParams()
 const heroImage = `/assets/heroes/${hero.id}.jpg`
 
 const heroToShow = useMemo(() => getHeroById( hero.id ), [hero.id] )

 const onNavigateBack = ()=>{
  
  if (hero.id.includes('dc')){
    navigate('/dc',{
    replace:true
   })
  }else{
    navigate('/',{
      replace:true
    })
  }
    
}

 if (!heroToShow) return <Navigate to='/'/>

 const {alter_ego, characters, first_appearance, id, publisher, superhero}= heroToShow

  return (
    <div className="row mt-5">
   
         <div className="col-4">
            <img src={ heroImage } className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero }/>
         </div>
         <div className="col-8">
            <div className="card-body">
                <h3 className="card-title">{ superhero }</h3>
               <ul className="list-groue list-group-flush">
                 <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                 <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                 <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
               </ul>
               <h5 className="mt-3">Characters: </h5>
               <p>{ characters }</p>
            <button 
                     onClick={onNavigateBack}
                     className="btn btn-outline-primary mt-5" 
                      >volver</button>
            </div>
         </div>
      
      </div>
  )
}
