import { heroes } from "../data/heroes"


export const getHeroById = ( id )=>{
    
    return  heroes.find(heroState => heroState.id === id)

    
}