import React, { useState, useContext } from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { TicketCountContext } from '../App';
import { useTranslation } from 'react-i18next';
import TicketDispenserPaymentIcon from "../assets/images/TicketDispenserPayment.jpg"
import ProgressBarComponent from '../components/ProgressBar';
import "../styles/MakePayment.css"

const MakePaymentScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { ticketCounts } = useContext(TicketCountContext);
    const ticketPrices = { Senior: 3.00, Adult: 3.60, Youth: 2.45, Child: 0.00  };
    const { t } = useTranslation();
    const [showCancelModal, setShowCancelModal] = useState(false);
    const { selectedRoute, routeNumber } = location.state || {};
    const [processingPayment, setProcessingPayment] = useState(false);

    const handleCancel = () => {
        setShowCancelModal(true);
    };

    const handleConfirmCancel = () => {
        navigate('/tickets');
    };

    const handlePayment = () => {
        setProcessingPayment(true);
        setTimeout(() => {
            setProcessingPayment(false);
            navigate('/paymentSuccessful'); 
        }, 3000); 
    };

    const computeTotal = () => {
        let total = 0;
        for (const ticketType in ticketCounts) {
            total += (ticketCounts[ticketType] || 0) * (ticketPrices[ticketType] || 0);
        }
        return total.toFixed(2);
    };
    const computeTotalTickets = () => {
        let totalTickets = 0;
        for (const ticketType in ticketCounts) {
            totalTickets += ticketCounts[ticketType] || 0;
        }
        return totalTickets;
    };
    return (
        <Container className='mt-5'>
            <ProgressBarComponent currentStep={2} />
        <Row className="justify-content-center mb-4">
            <h1>{t('Payment')}</h1>
        </Row>
        <Row>
            <Col md={6} className="text-center">
                
                <p><b>{t('Please insert the card on the kiosk station to the right')}</b></p>
                <img src={TicketDispenserPaymentIcon} width="400px" alt='Ticket Kiosk' />
            </Col>
            <Col md={6} style={{ backgroundColor: '#eef', padding: 20, borderRadius: 10 }}>
                <h3>{t('Summary')}</h3>
                <p>{selectedRoute && routeNumber ? `${selectedRoute} (#${routeNumber})` : 'Not selected'}</p>
                {Object.keys(ticketCounts).map(ticketType => (
                    ticketCounts[ticketType] > 0 && (
                        <p key={ticketType}>
                            {ticketType} x {ticketCounts[ticketType]} = ${(ticketPrices[ticketType] * ticketCounts[ticketType]).toFixed(2)}
                        </p>
                    )
                ))}
                <p><b>{t('Total Tickets:')}</b> {computeTotalTickets()}</p>
                <div style={{ marginTop: 20, borderTop: '1px solid #aaa', paddingTop: 10 }}>
                    <h4>Total</h4>
                    <p>${computeTotal()}</p>
                </div>
            </Col>
        </Row>
        <Row className="buttons-row">
            <Col>
                <Button className="button button-light-red" block onClick={handleCancel}>{t('Back')}</Button>
                <Button className="button button-light-green" block onClick={handlePayment} disabled={processingPayment}> {processingPayment ? t('Processing...') : t('Purchase Tickets')}</Button>
            </Col>
        </Row>
        <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Confirmation')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('Are you sure you want to go back and select tickets?')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
                        {t('Close')}
                    </Button>
                    <Button variant="danger" onClick={handleConfirmCancel}>
                        {t('Confirm')}
                    </Button>
                </Modal.Footer>
            </Modal>
            {processingPayment && (
            <div className="processing-overlay">
                <div>
                    <div className="spinner"></div>
                    <div className="processing-text">{t('Please wait, your payment is being processed...')}</div>
                </div>
            </div>
        )}
        </Container>
    );
}

export default MakePaymentScreen;