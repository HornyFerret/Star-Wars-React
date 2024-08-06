import { useState, useEffect } from 'react';
import {char, chars, charcter_head, charcter_plus, charcter_spec} from './characters.module.css';
import Person from '../Person/person'

function Charcters() {
    const [characters, setCharacter] = useState([]);
    const [char, setChar] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then(res => res.json())
        .then(res => res.results)
        .then(res => {
            setCharacter(res);
        })
        .catch((error) => console.log(error));
    }, [])
    
    function handleCharClick (e) {
        characters.forEach(i => {
            if(e.target.textContent == i.name) {
                setChar(i);
            }
        })
        setOpen(!open);
    }

    return (<>
    <section className = {chars}>
        {
            characters.map(character => {
                return (
                <button className = {chars} onClick={handleCharClick}>{character.name}</button>
                );
            })
        }
        {
            open && (
                <Person data ={char} setVisible={setOpen} visible={open}/>
            )
        }
    </section>
    </>)
}


export default Charcters;