import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Style/Primer_basico.css";
import "./Style/Basico.css";
import { useParams } from "react-router-dom";

const Primer_Basico = () => {
  let userobj = localStorage.getItem("usuario");
  if (!userobj) {
    window.location.href = "/login";
  }

  const [ex, setEx] = useState(null);
  const [item, setItem] = useState(null);

  let match = useParams();
  const [id, i, len] = match.idRoutine.split("=");
  console.log(id, i, len);

  useEffect(() => {
    return fetch(`http://localhost:4000/api/routine/${id}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setEx(data);
          console.log(ex);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    if (ex !== null) {
      return fetch(`http://localhost:4000/api/exercise/${ex.exerciseIds[i]}`, {
        crossDomain: true,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            console.log(data);
            setItem(data);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [ex, i]);

    return (
        <div>
        <div className="GymVirtual">
          <h1>GYM VIRTUAL</h1>
        </div>

      <h1 className="primero">{item && item.tittle}</h1>

      <div className="box_random">
        <img src={item && item.exercisePhoto} alt='Deporte'/>
      </div>

      <div>
        <button className="boton">INICIAR</button>
      </div>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
};

export default Primer_Basico;
