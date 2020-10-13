// How to fetch pokemon data using API in React JS (Using async await).

import Axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {

    // Handeling staates here...!
    const [num, setNum] = useState(25);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    // This hook will run on every update of state...!
    useEffect(() => {
        async function getData() {
            try {
                let response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                setName(response.data.name);
                setMoves(response.data.moves.length);
                // console.log(response.data.moves[21].move.name);
            }
            
            catch (error) {
                console.error(`Error is: ${error}`);
            }
        }

        getData();
    });

    return (
        <div>
            <h1> Fetch pokemon data using API in React JS </h1>
            <hr />
            <h3> {`You choose: ${num} value.`} </h3>
            <h3> {`You choose: ${name}.`} </h3>
            <h3> {`${name} has ${moves} moves.`} </h3>

            <select value={num} onChange={(event) => { setNum(event.target.value) }}>
                <option value="25"> 25 </option>
                <option value="6"> 6 </option>
                <option value="3"> 3 </option>
                <option value="9"> 9 </option>
                <option value="150"> 150 </option>
            </select>
        </div>
    );
}

export default Pokemon;