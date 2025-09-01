import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  type = "alert", 
  size = "md",
  children,
  onConfirm,
  confirmText = "Yes",
  cancelText = "No",
  imageSrc,
}) => {
  if (!isOpen) return null;

  const widthStyle =
    size === "sm" ? { width: "300px" } : size === "lg" ? { width: "600px" } : { width: "400px" };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content modal-${type}`} style={widthStyle} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {title && type !== "image" && <h2>{title}</h2>}

        {type === "alert" && <div className="modal-body">{children}</div>}

        {type === "confirm" && (
          <div className="modal-body">
            <p>{children}</p>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={onConfirm}>
                {confirmText}
              </button>
              <button className="btn btn-secondary" onClick={onClose}>
                {cancelText}
              </button>
            </div>
          </div>
        )}

        {type === "form" && <div className="modal-body">{children}</div>}

        {type === "image" && (
          <div className="modal-body">
            <img src={imageSrc} alt={title || "Preview"} className="modal-image" />
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(["alert", "confirm", "form", "image"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node,
  onConfirm: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Modal;
