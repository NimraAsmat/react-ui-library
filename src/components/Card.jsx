import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const Card = ({
  header,
  footer,
  children,
  image,
  imagePosition = "top",
  backgroundImage,
  shadow = "md",
  bordered = true,
  expandable = false,
  clickable = false,
  borderRadius,
  onClick,
  link,
}) => {
  const [expanded, setExpanded] = useState(!expandable);
  const shadowClass =
    shadow === "sm" ? "card-shadow-sm" : shadow === "lg" ? "card-shadow-lg" : "card-shadow-md";

  const handleCardClick = () => {
    if (expandable) setExpanded(!expanded);
    if (clickable && onClick) onClick();
  };

  const handleImageClick = (e) => {
    if (link) window.open(link, "_blank");
    e.stopPropagation();
  };

  const cardStyle = {
    border: bordered ? "1px solid #ddd" : "none",
    borderRadius: borderRadius || undefined,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: backgroundImage ? "cover" : undefined,
    backgroundPosition: backgroundImage ? "center" : undefined,
    color: backgroundImage ? "white" : undefined,
  };

  const cardClassNames = [
    "card",
    shadowClass,
    expandable ? "card-expandable" : "",
    expanded ? "expanded" : "",
    clickable ? "card-clickable" : "",
    backgroundImage ? "card-background" : "",
  ].join(" ");

  return (
    <div className={cardClassNames} style={cardStyle} onClick={handleCardClick}>
      {image && imagePosition === "top" && !backgroundImage && (
        <img src={image} alt="Card" className="card-image-top" onClick={handleImageClick} />
      )}
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">

        {React.Children.map(children, (child) => (child?.type === "button" ? null : child))}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(["top", "background"]),
  backgroundImage: PropTypes.string,
  shadow: PropTypes.oneOf(["sm", "md", "lg"]),
  bordered: PropTypes.bool,
  expandable: PropTypes.bool,
  clickable: PropTypes.bool,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default Card;




