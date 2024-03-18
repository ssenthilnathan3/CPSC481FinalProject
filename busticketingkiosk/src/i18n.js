import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      //Screens
      "WELCOME": "WELCOME",
      "Get Started": "Get Started",
      "Help": "Help",
      "Dashboard": "Dashboard",
      "Current Location: Brentwood Station": "Current Location: Brentwood Station",
      "Live Weather and Time": "Live Weather and Time",
      "Arrival Time": "Arrival Time", 
      "Route Name": "Route Name",
      "Terminal Station Gate": "Terminal Station Gate",
      "Feels Like:": "Feels Like:",
      "ROUTE 1 - BOWNESS": "ROUTE 1 - BOWNESS",
      "ROUTE 82 - NOLAN HILL": "ROUTE 82 - NOLAN HILL",
      "ROUTE 8 - NORTH POINTE": "ROUTE 8 - NORTH POINTE",
      "Purchase Ticket": "Purchase Ticket",
      "Route Information": "Route Information",
      "Refund": "Refund",
      "Select Tickets": "Select Tickets",
      "Cancel": "Cancel",
      "Payment": "Payment",
      "Please insert the card on the kiosk station to the right": "Please insert the card on the kiosk station to the right",
      "Accepted Card Types": "Accepted Card Types",
      "Summary": "Summary",
      "Total Tickets:": "Total Tickets:",
      "Back": "Back",
      "Processing...": "Processing...",
      "Purchase Tickets": "Purchase Tickets",
      "Increase count": "Increase count",
      "Decrease count": "Decrease count",
      "Please collect your tickets from the dispenser below": "Please collect your tickets from the dispenser below",
      "Tickets are valid for 90 minutes from the time of purchase.": "Tickets are valid for 90 minutes from the time of purchase.",
      "Select Route:": "Select Route:",
      "Next Departure:": "Next Departure:",
      "Route Number:": "Route Number:",
      "Duration: ": "Duration: ",
      "Next": "Next",
      "Return to Dashboard": "Return to Dashboard",
      "Number of Stops:": "Number of Stops:",
      "More Info": "More Info",
      "Route Map": "Route Map",
      "Refund": "Refund",
      "Reference Number": "Reference Number",
      "Please find the reference number on the ticket. Example format: BOW145": "Please find the reference number on the ticket. Example format: BOW145",
      "Enter reference Number": "Enter reference Number",
      "Dashboard": "Dashboard",
      "Enter reference Number": "Enter reference Number",
      "More Information": "More Information",
      "Next Departures": "Next Departures",
      "Upcoming Bus Type: ": "Upcoming Bus Type: ",
      "Buses offering accessibility are identified with this icon": "Buses offering accessibility are identified with this icon",
      "Return to Route Information": "Return to Route Information",
      "Please wait, your refund is being processed...": "Please wait, your refund is being processed...",
      "Refund Success": "Refund Success",
      "You have entered an incorrect reference number. Please use a format like BOW145": "You have entered an incorrect reference number. Please use a format like BOW145",
      "Your refund has been initiated.": "Your refund has been initiated.",
      "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.": "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.",
      "Please find your tickets below": "Please find your tickets below",
      "Purchase Successful": "Purchase Successful",
      "Please wait, your payment is being processed...": "Please wait, your payment is being processed...",
      "Refunds can be processed within 1 hour with reference code on ticket": "Refunds can be processed within 1 hour with reference code on ticket",
      'The schedules are valid from Monday to Sunday.': 'The schedules are valid from Monday to Sunday.',
      "Payment failed, please go back to the payment screen and try again":"Payment failed, please go back to the payment screen and try again",
      //Components
      "Confirmation": "Confirmation",
      "Are you sure you want to go back to the bus ticketing kiosk homepage?": "Are you sure you want to go back to the bus ticketing kiosk homepage?",
      "Confirm": "Confirm",
      "Calgary Transit Office": "Calgary Transit Office",
      "Address:": "Address:",
      "Phone:": "Phone:",
      "Email:": "Email",
      "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.": "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.",
      "Close": "Close",
      "Adult": "Adult",
      "Youth": "Youth",
      "Child": "Child"

    }
  },
  fr: {
    translation: {
        "WELCOME": "BIENVENUE",
        "Get Started": "Commencer",
        "Help": "Aide",
        "Dashboard": "Tableau de bord",
        "Select Tickets": "Sélectionnez les billets",
        "Current Location: Brentwood Station": "Emplacement actuel: Gare de Brentwood",
        "Live Weather and Time": "Météo et heure en direct",
        "Arrival Time": "Heure d'arrivée", 
        "Route Name": "Nom de l'itinéraire",
        "Terminal Station Gate": "Porte de la station terminale",
        "Feels Like:": "Ressenti:",
        "ROUTE 1 - BOWNESS": "ROUTE 1 - BOWNESS",
        "ROUTE 82 - NOLAN HILL": "ROUTE 82 - NOLAN HILL",
        "ROUTE 8 - NORTH POINTE": "ROUTE 8 - NORTH POINTE",
        "Purchase Ticket": "Acheter un billet",
        "Increase count": "Augmenter le nombre",
        "Decrease count": "Diminuer le nombre",
        "Tickets are valid for 90 minutes from the time of purchase.": "Les billets sont valables 90 minutes à partir du moment de l'achat.",
        "Route Information": "Informations sur l'itinéraire",
        "Refund": "Remboursement",
        "Cancel": "Annuler",
        "Payment": "Paiement",
        "Please insert the card on the kiosk station to the right": "Veuillez insérer la carte sur la station kiosque à droite",
        "Accepted Card Types": "Types de cartes acceptées",
        "Summary": "Résumé",
        "Total Tickets:": "Total des billets:",
        "Back": "Retour",
        "Processing...": "Traitement...",
        "Please wait, your payment is being processed...": "Veuillez patienter, votre paiement est en cours de traitement...",
        "Purchase Tickets": "Acheter un billets",
        "Select Route:": "Sélectionnez l'itinéraire:",
        "Next Departure:": "Prochain départ:",
        "Route Number:": "Numéro de l'itinéraire:",
        "Duration: ": "Durée:",
        "Next": "Suivant",
        "Return to Dashboard": "Retour au tableau de bord",
        "Number of Stops:": "Nombre d'arrêts:",
        "More Info": "Plus d'infos",
        "Route Map": "Carte de l'itinéraire",
        "Refund": "Remboursement",
        "Reference Number": "Numéro de référence",
        "You have entered an incorrect reference number. Please use a format like BOW145": "Vous avez saisi un numéro de référence incorrect. Veuillez utiliser un format tel que BOW145",
        "Enter reference Number": "Enter reference Number",
        "Dashboard": "Tableau de bord",
        "Enter reference Number": "Entrez le numéro de référence",
        "More Information": "Plus d'informations",
        "Next Departures": "Prochains départs",
        "Upcoming Bus Type: ": "Type de bus à venir: ",
        "Buses offering accessibility are identified with this icon": "Les bus offrant l'accessibilité sont identifiés par cette icône",
        "Return to Route Information": "Retour aux informations de l'itinéraire",
        "Please wait, your refund is being processed...": "Veuillez patienter, votre remboursement est en cours de traitement...",
        "Refund Success": "Remboursement réussi",
        "Incorrect format. Please use a format like BOW145": "Format incorrect. Veuillez utiliser un format tel que BOW145",
        "Your refund has been initiated.": "Votre remboursement a été initié.",
        "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.": "Veuillez nous contacter par 📧 email ou téléphone 📞+1-(403)-262-1000 dans les 24 heures si votre remboursement n'est pas traité sur votre méthode de paiement originale.",
        "Please find your tickets below": "Veuillez trouver vos billets ci-dessous",
        "Purchase Successful": "Achat réussi",
        "Please collect your tickets from the dispenser below": "Merci de récupérer vos billets au distributeur ci-dessous",
        "Refunds can be processed within 1 hour with reference code on ticket": "Les remboursements peuvent être traités dans l'heure avec le code de référence sur le billet",
        'The schedules are valid from Monday to Sunday.':"Les horaires sont valables du lundi au dimanche.",
        "Payment failed, please go back to the payment screen and try again": "Le paiement a échoué, veuillez revenir à l'écran de paiement et réessayer",
        //Components
        "Confirmation": "Confirmation",
        "Are you sure you want to go back to the bus ticketing kiosk homepage?": "Êtes-vous sûr de vouloir retourner à la page d'accueil du kiosque de billetterie de bus ?",
        "Confirm": "Confirmer",
        "Calgary Transit Office": "Bureau de Transit de Calgary",
        "Address:": "Adresse:",
        "Phone:": "Téléphone:",
        "Email:": "Email:",
        "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.": "Si vous rencontrez des problèmes immédiats au kiosque, appuyez sur le bouton d'urgence situé à côté du kiosque. L'assistance est en route.",
        "Close": "Fermer",
        "Adult": "Adulte",
        "Youth": "Jeunesse",
        "Child": "Enfant"
    }
  }
};

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: "en", // Use English if the detected language is not available
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;