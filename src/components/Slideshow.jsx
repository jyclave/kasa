import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Slideshow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appart, setAppart] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);

  useEffect(() => {
    const fetchAppart = async () => {
      try {
        const response = await fetch("/public/apparts.json");
        const data = await response.json();
        const foundAppart = data.find((a) => a.id === id);
        
        if (foundAppart) {
          setAppart(foundAppart);
        } else {
          navigate("*");
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      }
    };
  
    fetchAppart();
  }, [id, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") navigate(-1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigate]);

  const nextSlide = () => {
    if (!appart) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % appart.pictures.length);
  };

  const prevSlide = () => {
    if (!appart) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? appart.pictures.length - 1 : prevIndex - 1
    );
  };

  if (!appart) return <p>Chargement...</p>;

  return (
    <div className="slideshow">
      <div className="slideshow__content">
        <img
          src={appart.pictures[currentIndex]}
          className="slideshow__image"
          alt={`Vue ${currentIndex + 1} de ${appart.title}`}
        />
        {appart.pictures.length > 1 && (
          <>
            <button className="slideshow__prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="slideshow__next" onClick={nextSlide}>
              &#10095;
            </button>
            <div className="slideshow__counter">
              {currentIndex + 1} / {appart.pictures.length}
            </div>
          </>
        )}
      </div>
      <div className="slideshow__info">
        <div>
          <h2 className="slideshow__title">{appart.title}</h2>
          <p className="slideshow__location">{appart.location}</p>
        </div>
        <div className="slideshow__host">
          <span className="slideshow__host-name">{appart.host.name}</span>
          <img 
            src={appart.host.picture} 
            alt={appart.host.name} 
            className="slideshow__host-picture" 
          />
        </div>
      </div>
      <div className="slideshow__tags-rating">
        <div className="slideshow__tags">
          {appart.tags && appart.tags.map((tag, index) => (
            <span key={index} className="slideshow__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="slideshow__rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`slideshow__star ${
                index < parseInt(appart.rating) ? "filled" : ""
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="slideshow__collapses">
        {/* Section Description */}
        <div className="slideshow__collapse">
          <div 
            className="slideshow__collapse-header" 
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          >
            <span className="slideshow__collapse-title">Description</span>
            <span className="slideshow__collapse-arrow">
              {isDescriptionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </span>
          </div>
          {isDescriptionOpen && (
            <div className="slideshow__collapse-content">
              <p>{appart.description}</p>
            </div>
          )}
        </div>
        
        {/* Section Équipements */}
        <div className="slideshow__collapse">
          <div 
            className="slideshow__collapse-header" 
            onClick={() => setIsEquipementsOpen(!isEquipementsOpen)}
          >
            <span className="slideshow__collapse-title">Équipements</span>
            <span className="slideshow__collapse-arrow">
              {isEquipementsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </span>
          </div>
          {isEquipementsOpen && (
            <div className="slideshow__collapse-content">
              <ul className="slideshow__equipements-list">
                {appart.equipments && appart.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}