import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sea from "../images/sea.webp";

export default function HomeCardsIndex() {
  const [apparts, setApparts] = useState([]);
  const navigate = useNavigate();

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
      <div className="banner" style={{ backgroundImage: `url(${sea})` }}>
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home-cards">
        {apparts.map((appart) => (
          <div 
            key={appart.id} 
            className="card" 
            onClick={() => navigate(`/slideshow/${appart.id}`)}
          >
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
