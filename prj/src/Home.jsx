import React, { useState } from 'react';
import { FaChartBar, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import './styles.css';
const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleButtonClick = (content) => {
    setShowDialog(true);
    setDialogContent(content);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setDialogContent('');
  };

  return (
    <div className="home-container">
      <div className="column">
        <div className="icon" onClick={() => handleButtonClick('')}>
          <FaChartBar />
        </div>
        <h2>Analytics avancées</h2>
      </div>
      <div className="column">
        <div className="icon" onClick={() => handleButtonClick('Gestion des événements')}>
          <FaCalendarAlt />
        </div>
        <h2>Gestion des événements</h2>
      </div>
      <div className="column">
        <div className="icon" onClick={() => handleButtonClick('Communication efficace')}>
          <FaEnvelope />
        </div>
        <h2>Communication efficace</h2>
      </div>
      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3>Estimations semaine 18 du 1 au 7 Mai 2023</h3>
            <h4>Visiter ce site </h4>
            <p>https://www.edistat.com/palmares.php</p>
            <p>{dialogContent}</p>
            <button onClick={handleCloseDialog}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
