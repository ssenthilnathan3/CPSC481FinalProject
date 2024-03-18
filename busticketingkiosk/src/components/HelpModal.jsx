// HelpModal.jsx
import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import TransitOfficeImage from '../assets/images/CalgaryTransitCustomerServiceOffice.jpg';
import { useTranslation } from 'react-i18next'; 
import "../styles/HelpModal.css"

const HelpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();

  return (
    <>
      <Button onClick={handleShow} show={show} onHide={handleClose} centered backdrop="static" keyboard={false} className='btn-help'>
      <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> {t('Help')}
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{t('Calgary Transit Office')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={TransitOfficeImage} thumbnail fluid className="mb-3" alt='Calgary Transit Customer Service Office'/>
          
          <hr />
          <p className="text-danger">{t('If you\'re facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('Close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpModal;
