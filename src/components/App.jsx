import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";
import PokemonLogo from "../pokemon-logo.png"

function App(props) {

    let [pokeArr, setpokeArr] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then(data => {
                setpokeArr(data.results);
            })
    }, [])


    return (
        <>
            <div className="main">

            <img src={PokemonLogo} alt="" className="pokemon-logo" />

                <div className="container">
                    {pokeArr.map(obj => {
                        return (
                            <Pokemon key={obj.name} obj={obj} />
                        )
                    })}
                </div>
            </div>


        </>

    )
}

export default App;