# EgyFwd-WeatherApp
Weather Web App.  Project of Udacity EgyFWD professional Track

- SERVER SIDE:
  - Local server = 8000
  - The endpoint starts as an empty object named projectData
  - Using express, CORS and Body Parser as middleware.
  - Two Routes are created:
    - Post Route: where the end point stores data given by the user or from API to the End point
      and this is at the URL'/post'
    - Get Route: where the user can get info from the endpoint Using
      and this is at URL '/all'
      
      
- ClIENT SIDE:
   - Variables are created for the key, base url Got from the weather API.
   - an event listener is added to the "Generate" button:
   
     1- it checks if there is info entered in the ZIP code text area,
       - if yes > it continue with the chain function
       - if no > it prompts and asks for a city then use this in the chain function.
       - 
     2- Chain function is a chain of FETCH>POST>GET&CHANGE functions using.then method:
       - Fetch info from API using City entered.
       - uses data got from function above to get temperature in this city, feeling entered by user and today's date.. then posts info to end point (serverside)
       - Get function that fetchs data from the local server endpoint, then changes user interface.
       
  

