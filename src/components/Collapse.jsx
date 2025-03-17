import { useState } from "react";
import { ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`collapse__arrow ${isOpen ? "rotated" : ""}`}>
          <ChevronUp size={24} />
        </span>
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element, 
  ]).isRequired,
};

export default Collapse;
