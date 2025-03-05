import { useState, useEffect } from "react";

export default function HomeCards() {
  const [apparts, setApparts] = useState([]);

  useEffect(() => {
    const fetchApparts = async () => {
      try {
        const response = await fetch("/public/apparts.json");
        const data = await response.json();
        setApparts(data);
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      }
    };
  
    fetchApparts();
  }, []);

  return (
    <>
      <div className="banner" style={{ backgroundImage: `url("/sea.webp")` }}>
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