import sea from "../images/sea.webp"
import { useState, useEffect } from "react";

export default function HomeCards() {
  const [apparts, setApparts] = useState([]);

  useEffect(() => {
    fetch("/public/apparts.json") 
      .then((response) => response.json())
      .then((data) => setApparts(data))
      .catch((error) => console.error("Erreur lors du chargement:", error));
  }, []);

  return (
    <>
     <div className="banner" style={{ backgroundImage: `url(${sea})` }}>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
     </div>
    <div className="home-cards">
      {apparts.map((appart) => (
        <div key={appart.id} className="card">
          <img src={appart.cover} alt={appart.title} className="card__image" />
          <div className="card__title-container">
            <h3 className="card__title">{appart.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </>  
  );
}