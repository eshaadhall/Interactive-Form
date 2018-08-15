     Interactive Form

In this project I have used JavaScript to enhance an interactive registration form for a fictional conference
   called "FullStack Conf."
   
   This form is made user-friendly by adding features like
   1. customized and conditional behaviour and interactivity
   2. validating user input and providing helpful error messages when the user enters invalid information into form fields.
   
   /* ---- Extra Credit ---- */
   
  1. T Shirt Section : The "Color" label and select menu is hidden until a T-Shirt design is selected from the "Design" menu. So, select a T-shirt design to see the Color menu and select a color.
  
  2. Conditional Error Message: Some of the form validation have error messages so that more information is provided depending on the error. For example:
    
	Error Message when entered an invalid email : "Email: Please enter a valid email address"
    Error Message when Card Number field is blank : "Card Number: Enter a card number"
    Error Message when Card Number field has entered characters (like abcd#$@!) instead of digits:  "Card Number: Enter only Digits"
    Error Message when Card Number is less than 13 or greater than 16 : "Enter a number between 13 and 16 digits"
    Error Message when Zipcode field is blank : "Enter Zip Code"
    Error Message when Zipcode is not 5 digits long or when the entered zipcode has any characters other than number : "Zip Code: Enter 5 digits"
    Error Message when CVV is not 3 digits long or when the entered CVV has any characters other than number : "CVV: Enter 3 digits"
  
  3. Real-time Error Messages: For some of the validation text input fields we have real-time error messages. So, rather than providing an error message on submit, the form checks for errors and displays messages as the user begins typing inside a text field. 
  For example, if the user enters an invalid email address, the error appears as the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address.
    
	Error Message when entered an invalid email : "Email: Please enter a valid email address"
    Error Message when Card Number field is blank : "Card Number: Enter a card number"
    Error Message when Card Number field has entered characters (like abcd#$@!) instead of digits:  "Card Number: Enter only Digits"
    Error Message when Card Number is less than 13 or greater than 16 : "Enter a number between 13 and 16 digits"
    Error Message when Zipcode field is blank : "Enter Zip Code"
    Error Message when Zipcode is not 5 digits long or when the entered zipcode has any characters other than number : "Zip Code: Enter 5 digits"
    Error Message when CVV is not 3 digits long or when the entered CVV has any characters other than number : "CVV: Enter 3 digits"