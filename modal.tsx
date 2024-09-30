import React, { useState } from 'react';
import {country} from "../../country.data.ts"
import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Select your country</button>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        {country.map(country=>(
          <div className={styles.countryItem} key={country.id}>
            <img src={country.flag} alt="" />
            <span>{country.name}</span>
            <span>{country.code}</span>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default App;

