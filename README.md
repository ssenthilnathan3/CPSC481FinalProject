# CPSC 481 - Human Computer Interaction I - Fall 2023 Final Project
Group 01 - Tutorial 01
Bus Ticketing Kiosk System - A design interface for self-service bus ticketing kiosk
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Deployed Links
Dimash these links are for the deployed project: 
- https://cpsc-481-final-project.vercel.app/
- https://cpsc-481-final-project-abhay-khoslas-projects.vercel.app/ 
- https://cpsc-481-final-project-git-main-abhay-khoslas-projects.vercel.app/ 

## Project Description
The bus ticketing system will cater to a diverse user base, spanning various ages, ethnicities, and backgrounds. Given this diversity, the system is designed to be intuitive, user-friendly, and accessible even to those unfamiliar with such interfaces. Emphasis is placed on simplicity, ensuring the system is usable even by non-English speakers.

## Deliverables
- Readme.md: Can be found in the root level of the project 
- CPSC 481 Bus Ticketing Kiosk Final Portfolio-Group 01.pdf: Can also be found in the root level of the project
- All other previous written deliverables: Can be found in the Reports folder in the root level of the project
- CPSC 481 Final Project Video Demo-Group 01.mp4: The demo video can also be found in the root level of the project. 

## Recommneded Screen Size/Resolution
The recommended screen size is 24 inch monitor screen size and the screen resolution is 1920 x 1080. The application is intended not be responsive for smaller screen sizes.

## Group Members
- Abhay Khosla 
- Adam Abouelhassan 
- Aminreza Tavakoli Khorassani 
- Hesham Elkaliouby 
- Jay Gurjar 

## How to run the project
1. Clone the repository to your local machine ```git clone https://github.com/Abhay2412/CPSC481FinalProject.git```
2. Using a command line interface, navigate to the project directory ```cd CPSC481FinalProject```
3. Run ```npm install``` to install all the dependencies
4. Run ```npm start``` to start the project
5. Open http://localhost:5173 to view it in the browser.

## Functionality Walkthrough Steps
**Purchasing tickets**: 
![Purchasing tickets](./busticketingkiosk/Readme%20Gifs/PurchaseTickets.gif)
1. Click on Get Started Button on Home Screen
2. Click on the Select Tickets Button in Dashboard screen
3. Select the route ```Bowness``` from the Select Route dropdown 
4. Increment the number of tickets to ```2 for Seniors, Adult, Youth and Child```
5. Click Next button in the Select Tickets Screen 
6. Click Purchase Tickets button in the Make Payment Screen 
7. The user here would tap their card onto the machine at the kiosk and the payment would be processed.
8. Purchase Successful screen appears and the user can collect their ticket from the kiosk slot below. 

**Refunding tickets successfully**:
![Refunding tickets successfully](./busticketingkiosk/Readme%20Gifs/RefundTicketsSuccess.gif)
1. Click on Get Started Button on Home Screen
2. Click on the Refund Tickets Button in Dashboard screen
3. Enter a valid reference number ```BER545``` to see the refund success screen


**Refund tickets error handling**: 
![Refunding tickets error](./busticketingkiosk/Readme%20Gifs/RefundTicketsError.gif)
1. Click on Get Started Button on Home Screen
2. Click on the Refund Tickets Button in Dashboard screen
3. Enter an invalid reference number ```JKK9888``` to see the refund error notifications
    
**Route Information and Bus Schedule**: 
![Route Info Bus Schedule](./busticketingkiosk/Readme%20Gifs/RouteInfoBusSchedule.gif)
1. Click on Get Started Button on Home Screen
2. Click on the Route Information Button in Dashboard screen
3. Select the route ```Bowness``` from the Select Route dropdown
4. Click on ```View Bus Schedule``` button to see the bus schedule for the selected route
5. Click on the ```Return to Route Information``` button to go back to the Route Information Screen
6. Click on the ```Back``` button to go back to the Dashboard Screen
      
**Changing language/Help Modal**:
![Language Feat Help Modal](./busticketingkiosk/Readme%20Gifs/LangFeatHelpModal.gif)   
1. For changing the language, click on the ```EN``` button for the English language or ```FR``` button for the French language not this can be done on any of the application screens/
2. Click on the ```Help``` button to see the Help Modal this can be done on any of the application screens.