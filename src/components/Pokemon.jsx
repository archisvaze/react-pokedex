import { useState, useEffect } from "react";

function Pokemon(props) {
    let colors = {
        bug: "#a8b820",
        dark: "#705848",
        dragon: "#7038f8",
        electric: "#f8d030",
        fairy: "#f8a0e0",
        fighting: "#903028",
        fire: "#f05030",
        flying: "#a890f0",
        ghost: "#705898",
        grass: "#78c850",
        ground: "#e0c068",
        ice: "#98d8d8",
        normal: "#a8a878",
        poison: "#a040a0",
        psychic: "#f85888",
        rock: "#b8a038",
        shadow: "#403246",
        steel: "#403246",
        unknown: "#68a090",
        water: "#6890f0",

    }
    let obj = props.obj;
    let pokemon = obj.name;
    console.log(pokemon)
    let [url, setUrl] = useState();
    let [type, setType] = useState();
    let [id, setId] = useState();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(data => {
                setUrl(data.sprites.front_default)
                setType(data.types[0].type.name)
                setId(data.id)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ background: `${colors[type]}` }} className="pokemon">
            <div className="circle"></div>
            <img src={url} alt="" className="pokemon-img" />
            <div className="id">{"# " + id}</div>
            <div className="title">{pokemon}</div>
            <div className="type">{"Type: " + type}</div>
        </div>
    )
}

export default Pokemon;