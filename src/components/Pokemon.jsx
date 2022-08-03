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
    let [url, setUrl] = useState();
    let [type, setType] = useState();
    let [id, setId] = useState();
    let [flip, setflip] = useState(false);
    let [hp, setHp] = useState()
    let [attack, setAttack] = useState()
    let [defence, setDefence] = useState()
    let [backUrl, setBackUrl] = useState()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(data => {
                setUrl(data.sprites.other["official-artwork"].front_default)
                setBackUrl(data.sprites.back_default)
                setType(data.types[0].type.name)
                setId(data.id)
                setHp(data.stats[0].base_stat)
                setAttack(data.stats[1].base_stat)
                setDefence(data.stats[2].base_stat)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div onClick={() => {
            setflip(!flip);
        }} className="pokemon card">
            <div style={{ transform: flip === true ? "rotateY(180deg)" : "rotateY(0deg)", background: `${colors[type]}` }} className="card-flip">
                <div className="front">
                    <div className="circle"></div>
                    <img src={url} alt="" className="pokemon-img" />
                    <div className="id">{"# " + id}</div>
                    <div className="title">{pokemon}</div>
                    <div className="type">{"Type: " + type}</div>
                </div>
                <div className="back">
                    <img className="back-img" src={backUrl} alt="" />
                    <div className="stats-container">
                        <div className="stat">
                            <p className="stat-num">{hp}</p>
                            <p className="stat-type">HP</p>
                        </div>
                        <div className="stat">
                            <p className="stat-num">{attack}</p>
                            <p className="stat-type">ATTACK</p>
                        </div>
                        <div className="stat">
                            <p className="stat-num">{defence}</p>
                            <p className="stat-type">DEFENCE</p>
                        </div>
                    </div>
                    <div className="abilites-container">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pokemon;