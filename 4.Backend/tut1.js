// console.log('Aman modi');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:url" content="http://aman.india"/>
      <title>Best Online Food Delivery Services in India | Myonlinemeals.com</title>
      <link rel="stylesheet" href="modi.css">
      <link rel="stylesheet" media="screen and (max-width: 1170px)" href="phone.css">
      <link rel="stylesheet" media="screen and (max-width: 1654px)" href="Tab.css">
      <link href='https://fonts.googleapis.com/css?family=Baloo Bhai' rel='stylesheet'>
  
  </head>
  <body>
      <nav id="navbar">
          <div class="logo">
              <img src="1.logo.png" alt="Myonlinemeals.com">
          </div>
              <ul>
                  <li class="item"><a href="#">Home</a></li>
                  <li class="item"><a href="#">Services</a></li>
                  <li class="item"><a href="#">About Us</a></li>
                  <li class="item"><a href="#">Contact Us</a></li>
              </ul>
      </nav>
      
      <section id="Home"> 
          <h1 class="h-primary">Welcme To Modi Resturant</h1> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis. Sunt </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <button class="btn">Oder now</button>
     </section>
  
     <section class="services">
      <hr>
      <h1 class="h-primary center">Our Services</h1>
      <hr>
      <div id="services">
          <div class="box">
              <img src="10.logo.png" alt="">
              <h2 class="h-secondary center">Food Odering</h2>
              <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo, corporis quos commodi, doloremque excepturi dolorum cupiditate minus ab consectetur vitae. facere ea explicabo nam ratione?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil in facilis cum iure, magni a, labore odio numquam aperiam hic necessitatibus maxime sequi sit omnis porro quis, ullam dicta!
              </p>
          </div>
          <div class="box">
              <img src="9.logo.png" alt="">
              <h2 class="h-secondary center">Food Catering</h2>
              <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo, corporis quos commodi, doloremque excepturi dolorum cupiditate minus ab consectetur vitae.  facere ea explicabo nam ratione?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur dignissimos distinctio at dicta et dolor voluptate similique! Dolor minima qui fugiat temporibus provident nisi voluptas! Ab illum esse quo.    
              </p>
          </div>
          <div class="box">
              <img src="7.logo.png" alt="">
              <h2 class="h-secondary center">Bulk Odering</h2>
              <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo, corporis quos commodi, doloremque excepturi dolorum cupiditate minus ab consectetur vitae.  facere ea explictione?
              Lorem ipsum dolor sit amet consectetur, adipisicilestias ng elit. Moporro explicabo distinctio ducimus autem consectetur commodi molestiae officiis, alias 
          </div>
      </div>
     </section>
  
     <section id="client-section">
      <h1 class="h-primary center">Our clients</h1>
      <div id="clients">
          <div class="client-item">
              <img src="3.logo.png" alt="Our Client">
          </div>
          <div class="client-item">
              <img src="4.logo.png" alt="Our Client">
          </div>
          <div class="client-item">
              <img src="6.logo.png" alt="Our Client">
          </div>
          <div class="client-item">
              <img src="5.logo.png" alt="Our Client">
          </div>
      </div>
     </section>
  
     <section id="contact">
      <h1 class="h-primary center">Contact Us</h1>
      <div id="contact-box">
          <form action="">
              <div class="form-group">
                  <label for="Name">Name: </label>
                  <input type="text" name="Name" id="Name" placeholder="Enter your name">
              </div>
              <div class="form-group">
                  <label for="Email">Email: </label>
                  <input type="email" name="Email" id="Email" placeholder="Enter your email">
              </div>
              <div class="form-group">
                  <label for="Phone">Phone: </label>
                  <input type="phone" name="Phone" id="Phone" placeholder="Enter your phone">
              </div>
              <div class="form-group">
                  <label for="message">Message: </label>
                  <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Enter your message"></textarea>
              </div>
          </form>
      </div>
     </section>
  
     <footer class="center">
      copyright &copy; www.myonlinemeal.com. All right reserved.
     </footer>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});