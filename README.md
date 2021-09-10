# Füçion

Füçion is a fictional restaurant with accompanying webpage. This code will solve your problem of making a functional website for your restaurant, by providing solutions for basic functionality of handling bookings.

The website is constructed with react, using typescript, for front end and nodejs, express and mongoDB for back end. 

Bookingpage info:
A customer can choose time and date and then search for available time slots (6pm and 9pm). Maximum persons per table is 6 persons which can be changed in the variable MAXIMUM_PER_TABLE. The capacity of the restaurant is 15 tables per time slot. The app sends a request to back end and a response if the time is available or not. Thereafter the customer fills in their contact information and a confirmation e-mail is sent via nodemailer. You can put your own e-mail in the .env file.For the project we are using validation so the customer can’t write an incorrect email etc.

Cancelbooking info:
The customer can cancel their booking by copying and paste the confirmationnumber they get in the confirmation email. Front end sends a request to back end and compare it with the booking in the DB and then deletes it. 

Code example: 

  ```
  const cancelBooking = (e: FormEvent) => {
   e.preventDefault();
 
   deleteData();
   async function deleteData() {
     try {
	// CHECK IF CONFIRMATIONNUMBER EXISTS
       if (!confirmationNumber) {
           alert('Fyll i konfirmationsnummer.')
       } else{
	// IF SO, SEND THE CONFIRMATIONNUMBER TO SERVER
       const sendData = {
         confirmationNumber,
       };
	// POST REQUEST WITH AXIOS TO SERVER
       axios
         .post("http://localhost:9000/cancelBooking", sendData)
         .then(() => SetShowComponent(false))
       // IF NO MATCHING CONFIRMATION NUMBER ALERT ERROR MESSAGE
.catch((err) => {
           console.log(err);
           alert('Fyll i ditt konfirmationsnummer')
          
         }); }
     } catch (err) {
       console.log(err);
     }
   }
 };
 ```


Used packages:
"@testing-library/jest-dom": "^5.14.1",
   "@testing-library/react": "^11.2.7",
   "@testing-library/user-event": "^12.8.3",
   "@types/jest": "^26.0.24",
   "@types/node": "^12.20.19",
   "@types/react": "^17.0.19",
   "@types/react-dom": "^17.0.9",
   "@types/styled-components": "^5.1.12",
   "axios": "^0.21.1",
   "js-cookie": "^3.0.1",
   "moment": "^2.29.1",
   "react": "^17.0.2",
   "react-calendar": "^3.4.0",
   "react-dom": "^17.0.2",
   "react-moment": "^1.1.1",
   "react-router-dom": "^5.2.0",
   "react-scripts": "4.0.3",
   "react-select": "^4.3.1",
   "styled-components": "^5.3.1",
   "typescript": "^4.3.5",
   "web-vitals": "^1.1.2"



$fucion 
========

$project will solve your problem of making a functional website for your restaurant, by providing solutions for basic functionality of handling bookings.

Look how easy it is to use:

    Clone project from github
    # Customize for your needs
    

Features
--------

- booking, edit booking and cancel booking
- confirmation e-mail
- admin-page 

Installation
------------

Install all used packages by running:

```    
$npm i
```
$npm i

Contribute
----------

- Issue Tracker: https://github.com/cornelialundell/deutchlandfrancais/issues
- Source Code: https://github.com/cornelialundell/deutchlandfrancais

Support
-------

If you are having issues, sorry, you cannot reach us.

License
-------

The project does not have one.

