import React, { useEffect, useState, useContext } from 'react';
import { Button, Dropdown, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DurationLogo from '../assets/images/DurationLogo.png';
import "../styles/SelectTickets.css"
import TicketCounter from '../components/TicketCounter';
import { TicketCountContext } from '../App';
import { useTranslation } from 'react-i18next';
import ProgressBarComponent from '../components/ProgressBar';

const SelectTicketsScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [routeNumber, setRouteNumber] = useState("");
    const [nextDeparture, setNextDeparture] = useState('');
    const [duration, setDuration] = useState('');
    const { ticketCounts, setTicketCounts } = useContext(TicketCountContext);
    const { t } = useTranslation();
    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleCancel = () => {
        setShowCancelModal(true);
    };

    const handleConfirmCancel = () => {
        navigate('/dashboard');
    };

    const routeData = {
        "Trichegode": { routeNumber: "1", nextDeparture: "10:15 AM", duration: "30 minutes", numberOfStops: 20, lastDeparture: "11:15 PM"},
        "Sankari": { routeNumber: "8", nextDeparture: "11:45 AM", duration: "35 minutes", numberOfStops: 42, lastDeparture: "10:20 PM" },
        "Salem": { routeNumber: "82", nextDeparture: "1:00 PM", duration: "30 minutes" , numberOfStops: 35, lastDeparture: "11:00 PM"},
        "Erode": { routeNumber: "2", nextDeparture: "10:30 AM", duration: "1 hour", numberOfStops: 70, lastDeparture: "11:30 PM"},
        "Namakkal": { routeNumber: "3", nextDeparture: "10:45 AM", duration: "2 hours", numberOfStops: 80, lastDeparture: "11:15 PM" },
        "Pallipalayam": { routeNumber: "4", nextDeparture: "11:00 AM", duration: "2 hours 50 minutes", numberOfStops: 75, lastDeparture: "11:15 PM" },
        "Ottamethai": { routeNumber: "6", nextDeparture: "11:15 AM", duration: "35 minutes", numberOfStops: 34, lastDeparture: "11:10 PM" },
        "Veppadai": { routeNumber: "7", nextDeparture: "11:30 AM", duration: "30 minutes", numberOfStops: 38, lastDeparture: "10:15 PM" },
    };
    const handleRouteChange = (route) => { setSelectedRoute(route); setRouteNumber(routeData[route].routeNumber); setNextDeparture(routeData[route].nextDeparture); setDuration(routeData[route].duration); };
    useEffect(() => {
        setPageTitle()
    },[]);
    return (
        <TicketCountContext.Provider value={ticketCounts}>
            <Container className="mt-5">
            <ProgressBarComponent currentStep={1} />
            <Row className="justify-content-center">
                <div className="text-center mb-4">
                    <h1>{t('Select Tickets')}</h1>
                </div>
                <Col xs={12}>
                        <p className="ticket-validity-note">
                            {t('Tickets are valid for 90 minutes from the time of purchase.')}
                        </p>
                    </Col>
                <Col md={5}>
                <div className="mb-5 d-flex align-items-center">
                <span className="label-text-select-route mr-3"><b>{t('Select Route:')}</b></span> 
                    <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedRoute || "Select a Route"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                                {Object.keys(routeData).map(route => {
                                    const isEmphasized = ["Bowness", "Nolan Hill", "North Pointe"].includes(route);
                                    const itemClass = isEmphasized ? 'emphasize-route' : '';

                                    return (
                                    <Dropdown.Item 
                                        key={route} 
                                        onClick={() => handleRouteChange(route)}
                                        className={itemClass}
                                    >
                                        {route}
                                    </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-departure mr-3"><b>{t('Next Departure:')}</b> {nextDeparture}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-duration mr-3"><b>{t('Route Number:')}</b> {routeNumber}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-duration  mr-3"><b>{t('Duration: ')}</b> {duration}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <img src={DurationLogo} className='duration-logo' alt='Duration Logo'></img>
                </div>
                
                </Col>
                <Col md={5}>
                    <div className="ticket-counter">
                        <TicketCounter label="Senior" minAge={65} maxAge={""} ticketPrice={"$3.00"} currentCount={ticketCounts.Senior}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Senior: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Adult" minAge={18} maxAge={64} ticketPrice={"$3.60"} currentCount={ticketCounts.Adult}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Adult: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Youth" minAge={13} maxAge={17} ticketPrice={"$2.45"} currentCount={ticketCounts.Youth}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Youth: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Child" minAge={0} maxAge={12} ticketPrice={"Free"} currentCount={ticketCounts.Child}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Child: count }))}/>
                    </div>
                </Col>
            </Row>
            <Row className="buttons-row">
                    <Col>
                        <Button className="button button-light-red" block onClick={handleCancel}>{t('Back')}</Button>
                        <Button className="button button-light-green" block onClick={() => navigate('/payment', {  state: { selectedRoute, routeNumber } })} disabled={!selectedRoute}>{t('Next')}</Button>
                    </Col>
            </Row>
            <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Confirmation')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('Are you sure you want to go back to dashboard?')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
                        {t('Close')}
                    </Button>
                    <Button variant="danger" onClick={handleConfirmCancel}>
                        {t('Confirm')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </TicketCountContext.Provider>
      );
};

export default SelectTicketsScreen