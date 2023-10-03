import React, {useEffect, useState} from "react";
import axios from 'axios';



function App() {
const [name, setName] = useState("");
const [bebe, setBebe] = useState("");

useEffect(() => {
    axios.get("http://localhost:5555/bebe").then (function (res) {
        setBebe(res.data)
    })
}, [])

async function postName(e) {
    e.preventDefault();

    try{
        await axios.post("http://localhost:5555/bebe", {name})

    } catch (error) {
        console.log(error)
    }
}


    return (
        <div>
            <form onSubmit={postName}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <button type='submit'>Send Name</button>
            </form>
            {bebe}
        </div>
    )
}


export default App