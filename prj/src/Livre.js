import React, { useState } from 'react';
import './styles.css';

const Livre = () => {
  const [livres, setLivres] = useState([]);

  const ajouterLivre = (nouveauLivre) => {
    setLivres((prevLivres) => [...prevLivres, nouveauLivre]);
  };

  const supprimerLivre = (id) => {
    setLivres((prevLivres) => prevLivres.filter((livre) => livre.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const titre = e.target.titre.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const nouveauLivre = {
      id: Date.now(),
      titre,
      description,
      image,
    };
    ajouterLivre(nouveauLivre);
    e.target.reset();
  };

  return (
    <div className="container">
      <h2>Description des livres</h2>
      <ul>
        {livres.map((livre) => (
          <li key={livre.id} className="element">
            <h3 className="element-title">{livre.titre}</h3>
            <p className="element-description">{livre.description}</p>
            <img src={livre.image} alt={livre.titre} className="element-image" />
            <button onClick={() => supprimerLivre(livre.id)} className="element-button">
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" placeholder="Titre du livre" required />
        <input type="text" name="description" placeholder="Description du livre" required />
        <input type="text" name="image" placeholder="URL de l'image" required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Livre;
