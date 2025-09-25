import { useState, useEffect } from "react"
import PokeCard from "./PokeCard"

//https://pokeapi.co/api/v2/pokemon/pikachu

const Pokemon = () => {
    const [poke, setPoke] = useState('')
    const [pokeName, setPokeName] = useState('')
    const [error, setError] = useState('') //able to set errors and display them to the user
    const [pokemon, setPokemon] = useState(null)
    //Sending API requests
    
    //Send the request on form submit
    const handleSubmit = (event) =>{
        event.preventDefault()// so the page doesn't reload on submit
        setPokeName(poke)
    }

    //Send the request using useEffect <--
    useEffect(()=>{

        const fetchPoke = async () =>{
            if (pokeName != ''){ //When it trys to run on-mount we need to make sure if the pokeName == '' we do not make the call
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
                const data = await response.json();

                if (response.ok){
                const pokeData = {
                    name: data.name,
                    type: data['types'][0]['type']['name'],
                    sprite: data['sprites']['other']['dream_world']['front_default'],
                    ability: data['abilities'][0]['ability']['name']
                    
                };
                setPokemon({...pokeData})// setting our Pokemon from the data we got from the API
            }
                
            } catch (error) {
                console.error('ERROR:', error)
                setError('Error fetching pokemon')
            }
            }
        }

        fetchPoke();

    }, [pokeName]); //Will run on mount, and whenever the pokeName is updated

  return (
    <>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input type="text" placeholder='Pokemon' onChange={(event)=>setPoke(event.target.value)} value={poke} />
            <button type='submit'>Submit</button>
        </form>
        { error && <p style={{color: 'red'}}>{error}</p>}
        { pokeName && <h2>I'm searching for {pokeName}!</h2>} 
        { pokemon && <PokeCard name={pokemon.name} sprite={pokemon.sprite} ability={pokemon.ability} type={pokemon.type}/>}
    </>
  )
}

export default Pokemon