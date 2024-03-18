import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import DashboardImage from '../assets/images/DashboardYellowBus.svg'
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashboardScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const { t } = useTranslation();
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    useEffect(() => {
        setPageTitle();
        // Update time every minute
        const interval = setInterval(() => setCurrentTime(new Date()), 60000);

        // Fetch weather data from OpenWeatherMap API for Calgary
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${API_KEY}&units=metric`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();

        // Cleanup
        return () => clearInterval(interval);
    },[])
    const iconUrl = weatherData && weatherData.weather && weatherData.weather[0]? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`: null;
    const temperature = weatherData && weatherData.main ? `${Math.round(weatherData.main.temp)}°C`  : "Loading...";
    const feelsLikeTemperature = weatherData && weatherData.main ? `${Math.round(weatherData.main.feels_like)}°C` : "Loading...";
    return (
        <Container className="dashboard-container mt-5">
            {/* Header */}
            <Row className="header-row">
                <Col>
                <h1>{t('Dashboard')}</h1>
                </Col>
            </Row>
            <img src={DashboardImage} alt='Yellow Bus'></img>
            <h4>{t('Current Location: Sankari Junction')}</h4>
            {/* Transit and Weather */}
            <Row className="content-row justify-content-center">
                {/* Transit Details */}
                <Col md={8} className="transit-details">
                <Table striped bordered className="mx-auto">
                        <thead>
                            <tr>
                                <th>{t('Arrival Time')}</th>
                                <th>{t('Route Name')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:10 AM</td>
                                <td>ROUTE S5 - Trichengode</td>
                            </tr>
                            <tr>
                                <td>9:20 AM</td>
                                <td>ROUTE SPBT - Salem</td>
                            </tr>
                            <tr>
                                <td>9:22 AM</td>
                                <td>ROUTE SNR - Erode</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card className="weather-card expanded">
                <Card.Body>
                    <Card.Title>{t('Live Weather and Time')}</Card.Title>
                    {/* Weather information always displayed */}
                    <div className="weather-icon">
                        <img src={iconUrl} alt='Weather Icon' />
                    </div>
                    <div className="weather-temp">
                        <span>{temperature}</span>
                        <p>{t('Feels Like:')} {feelsLikeTemperature}</p>
                    </div>
                    <div className="date-details">
                        <div>{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        <div>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                    </div>
                </Card.Body>
            </Card>
            <Row className="buttons-row">
                <Col>
                    <div className="buttons-group">
                        <Button className="button button-lightblue" block onClick={() => navigate('/tickets')}>{t('Select Tickets')}</Button>
                        <Button className="button button-lightblue" block onClick={() => navigate('/routeInformation')}>{t('Route Information')}</Button>
                    </div>
                </Col>
                <Col className='align-self-end'>
                    <div className="buttons-group-bottom">
                        <Button className="button button-light-orange" block onClick={() => navigate('/refund')}>{t('Refund')}</Button>
                        <Button className="button button-lightcoral" block onClick={() => navigate('/')}>{t('Cancel')}</Button>
                    </div>
                </Col>
            </Row>
        </Container>        
    );
};


export default DashboardScreen