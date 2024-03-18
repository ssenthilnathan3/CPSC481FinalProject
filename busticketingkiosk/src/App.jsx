import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/Home';
import CityOfCalgary from "./assets/images/CityOfCalgary.svg"
import WelcomeScreen from './screens/Welcome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DashboardScreen from './screens/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectTicketsScreen from './screens/SelectTickets';
import MakePaymentScreen from './screens/MakePayment';
import SuccessfulPurchaseScreen from './screens/successfulPurchaseScreen';
import RouteInformation from './screens/routeInformation';
import RefundScreen from './screens/refund';
import RefundSuccessScreen from './screens/RefundSuccess';
import HelpModal from './components/HelpModal';
import HomeButton from './components/HomeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DetailedBusSchedule from './screens/detailedBusSchedule';
import { useTranslation } from 'react-i18next';
import UnsuccessfulPurchaseScreen from './screens/UnsuccessfulPurchaseScreen';
export const TicketCountContext = React.createContext();

function App() {
  const [ticketCounts, setTicketCounts] = React.useState({ Senior: 0, Adult: 0, Youth: 0, Child: 0 });
  const [pageTitle, setPageTitle] = useState("");
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const handleLanguageSwitch = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <Router>
      <div className='parent-container'>
        <div className="svg-container">
          {/* <img className='svg-left' src={CityOfCalgary} alt='City Of Calgary'/>  */}
          <div>{pageTitle}</div>
          <div className='svg-right'>
            <HomeButton/>
            <Button onClick={() => handleLanguageSwitch('en')} className={`navbar-buttons ${currentLanguage === 'en' ? 'selected-language' : ''}`}>{t('EN')}</Button>
            <Button onClick={() => handleLanguageSwitch('fr')} className={`navbar-buttons ${currentLanguage === 'fr' ? 'selected-language' : ''}`}>{t('FR')}</Button>
            <HelpModal/>
          </div>
        </div>
        
        <TicketCountContext.Provider value={{ ticketCounts, setTicketCounts }}>
          <Routes>
            <Route path="/" element={<HomeScreen><WelcomeScreen setPageTitle={setPageTitle} /></HomeScreen>} />
            <Route path="/dashboard" element={<DashboardScreen setPageTitle={setPageTitle} />} />
            <Route path="/tickets" element={<SelectTicketsScreen setPageTitle={setPageTitle} />} />
            <Route path="/payment" element={<MakePaymentScreen setPageTitle={setPageTitle} />} />
            <Route path='/paymentSuccessful' element={<SuccessfulPurchaseScreen setPageTitle={setPageTitle}/>}/>
            <Route path='/routeInformation' element={<RouteInformation setPageTitle={setPageTitle}/>}/>
            <Route path='/refund' element={<RefundScreen setPageTitle={setPageTitle}/>}/>
            <Route path='/refundConfirmation' element={<RefundSuccessScreen setPageTitle={setPageTitle}/>}/>
            <Route path='/detailedBusSchedule' element={<DetailedBusSchedule setPageTitle={setPageTitle}/>} />
            <Route path='/paymentUnsuccessful' element={<UnsuccessfulPurchaseScreen setPageTitle={setPageTitle}/>}/>
          </Routes>
        </TicketCountContext.Provider>
        <footer className="footer mt-auto py-3 bg-none">
          <div>
            <p className="text-muted text-center">{t('If you\'re facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.')}</p>
           
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;