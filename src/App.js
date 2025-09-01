import React, { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/ThemeProvider";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showImage, setShowImage] = useState(false);


  const handleSuccess = () => alert("Success! Action completed successfully.");
  const handleWarning = () => alert("Warning! Please be careful.");
  const handleDanger = () => alert("Danger! This action is irreversible.");
  const handleInfo = () => alert("ℹInfo: Here is some useful information.");


  const showcaseCards = [
    {
      id: 1,
      header: "Expandable Card",
      footer: "Footer content",
      image: "https://picsum.photos/400/200",
      shadow: "lg",
      expandable: true,
      clickable: true,
      body: "Expandable card with header, footer, and top image.",
      
    },
    {
      id: 2,
      header: "Card with Top Image",
      image: "https://picsum.photos/400/150",
      shadow: "lg",
      clickable: true,
      link: "https://picsum.photos",
      body: "Clicking the image opens a link.",
    
    },
    {
      id: 3,
      header: "Card with Background Image",
      backgroundImage: "https://picsum.photos/800/400",
      shadow: "md",
      clickable: true,
      body: "This card has a background image with overlay.",
     
    },
  ];

  return (
    <div className="container">
      <h1 className="main-heading">React App Library</h1>

   
      <h2 className="section-heading">Buttons Section</h2>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </Button>
        <Button variant="success" onClick={handleSuccess}>Success</Button>
        <Button variant="warning" onClick={handleWarning}>Warning</Button>
        <Button variant="danger" onClick={handleDanger}>Danger</Button>
        <Button variant="info" onClick={handleInfo}>Info</Button>
      </div>

     
      <h2 className="section-heading">Cards Section</h2>
      <div className="card-gallery">
        {showcaseCards.map((card) => (
          <Card
            key={card.id}
            header={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {card.header}
              
                {card.status && (
                  <span className={`badge badge-${card.status}`}>
                    {card.status.toUpperCase()}
                  </span>
                )}
              </div>
            }
            footer={card.footer}
            image={card.image}
            backgroundImage={card.backgroundImage}
            shadow={card.shadow}
            expandable={card.expandable}
            clickable={card.clickable}
            link={card.link}
          >
            <p>{card.body}</p>
          </Card>
        ))}
      </div>

    
      <h2 className="section-heading">Modals Section</h2>
      <Button variant="secondary" onClick={() => setShowAlert(true)}>Open Alert</Button>
      <Button variant="secondary" onClick={() => setShowConfirm(true)}>Open Confirm</Button>
      <Button variant="secondary" onClick={() => setShowForm(true)}>Open Form</Button>
      <Button variant="secondary" onClick={() => setShowImage(true)}>Open Image</Button>


      <Modal isOpen={showAlert} onClose={() => setShowAlert(false)} title="Alert">
        This is an alert message.
      </Modal>

      
      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => alert("Confirmed!")}
        type="confirm"
        title="Confirm Delete"
      >
        Are you sure you want to delete this item?
      </Modal>

      
      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        type="form"
        title="Login"
      >
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Button variant="primary" type="submit">Submit</Button>
        </form>
      </Modal>

    
      <Modal
        isOpen={showImage}
        onClose={() => setShowImage(false)}
        type="image"
        imageSrc="https://picsum.photos/600/400"
      />

     
      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px 0",
          color: "var(--color-secondary)",
        }}
      >
        © {new Date().getFullYear()} All Rights Reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
