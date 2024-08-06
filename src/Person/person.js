import { useState, useEffect } from 'react';
import {char, charcter_head, charcter_plus, charcter_spec} from './person.module.css';



function Person({data, setVisible,visible}) {
console.log(data);

useEffect(() => {
    function changeVisibilitu(evt) {
      if (evt.code === "Escape") {
        setVisible();
      }
    }
    document.addEventListener("keydown", changeVisibilitu);
  }, [setVisible,visible]);

    return (<>
        <section className = {char}>
            <div className = {charcter_head}>
                <h1>{data.name}</h1>
                <h2>{data.birth_year}</h2>
                <h2>{data.gender}</h2>
            </div>
            <div className = {charcter_spec}>
                <h3>{data.eye_color}</h3>
                <h3>{data.height}</h3>
                <h3>{data.mass}</h3>
                <h3>{data.skin_color}</h3>
            </div>
            <div className = {charcter_plus}>
                <p>{data.created}</p>
                <p>{data.edited}</p>
            </div>
        </section>
    </>);
}

export default Person;