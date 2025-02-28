import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import BannerApropos from "../components/BannerApropos";


const AproposPage = () => {
  const items = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <BannerApropos /> {/* 🔥 Ajout de la bannière ici 🔥 */}

      {items.map((item, index) => (
        <div key={index} className="collapse">
          <button className="collapse__header" onClick={() => toggleCollapse(index)}>
            <span>{item.title}</span>
            {openIndex === index ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
          </button>
          {openIndex === index && <div className="collapse__content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default AproposPage;