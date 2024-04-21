import React, { useState } from 'react';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer le message ici

    // Afficher la boîte de dialogue de succès
    setShowSuccessMessage(true);

    // Réinitialiser le formulaire
    e.target.reset();

    // Masquer le message après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Nous contacter</h2>
      <p className="contact-description">Remplissez le formulaire ci-dessous </p>
      {showSuccessMessage && <div className="success-message">Message envoyé avec succès</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <tab><tr>
        <td><input type="text" name="name" placeholder="Nom" className="contact-input" /></td></tr>
        <tr><td><input type="email" name="email" placeholder="Adresse e-mail" className="contact-input" /></td></tr>
        <tr><td><textarea name="message" placeholder="Message" className="contact-input" /><br></br></td></tr>
        <tr><td><button type="submit" className="contact-button">Envoyer</button></td></tr>
        </tab>
      </form>
    </div>
  );
};

export default Contact;
