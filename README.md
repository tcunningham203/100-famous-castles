# Castle Journal

In 2006, The Japanese Castle Association released a guide book including the Top 100 Japanese castles to visit. This book enables you to collect stamps from each castle adventure you embark on. However, the guide book is written entirely in Japanese. Our application, Castle Journal, is an English companion app for the guide book. You can use Castle Journal for planning your trip, sharing your experiences, and updating an online version of your stamp book with the stamps you've collected.

<h2 align="left">
    <a href="https://rocky-fortress-11303.herokuapp.com" target="_blank">
    Link to Deployed Application
    </a>
    |
    <a href="https://youtu.be/x7kCOTEZ7GY" target="_blank">
    Link to Promotional Video
    </a>
</h2>

## Table of Contents
- [User Story](#user-story)
- [Visual](#visual)
- [Getting Started](#getting-started)
    - [Technologies](#technologies)
    - [Installing](#installing)
- [Application Usage and Features](#application-usage-and-features)
- [Credits](#credits)
- [Contributors](#contributors) 

## User Story

AS AN English speaker traveling to or living in Japan,

I WANT to be able to understand my Japanese guidebook,

SO THAT I can learn about the castle destinations I want to visit, plan my next trip, and keep track of my stamp collection. 

## Visual

![demo](./public/images/site-demo.GIF)

## Getting Started 

These instructions will help you determine the technologies used for the project as well as get you a copy of the project up and running on your local machine for development and testing purposes.

### Technologies 

- Bootstrap
- MySQL
- Sequelize
- Express
- Express-handlebars
- Node.js
- Animista
- Javascript
- Photoshop

### Installing

1. Clone this repo.
2. Navigate to repo folder.
3. From the command line, run `npm i` to install the packages listed above.
4. Login to mySQL using `mysql -u root -p`
5. Run `node seeds/seed.js` to seed the data. 
4. Run `npm start` to start the application locally.
5. Open a new tab in your browser and navigate to http://localhost:3001

## Application Usage and Features:

This section will walk through the features of each page. All pages are responsive to various screen sizes. Let's start with the login screen instructions. 

When you open the site, you are presented with information about the Castle Stamp Rally. You are prompted to log in. If you have an account, you can enter your credentials and proceed. A toast message will appear indicating whether the login was successful or not. If you do not have an account, you can select the tab to create one. 

Here are the rules for account creation:

- The email field must contain an email, and that email can not be an existing email.
- The password in both fields must be the same.
- Don't worry about capitalizing your name, the first letter will be auto-capitailzed.
- All fields must be filled.

If everything is in order, your account will be created and gain access to the site.

After logging in, you are greeted with the map page. This page can be used to select a castle and learn more about it. The castles are sorted by region. Select a region from the top tab as the instructions suggest, then choose a castle within that tab. 

Each castle page is accessed from the map page. The castle pages themselves have lots of useful information for planning a trip, such as location information, how to get there, castle types, and images of both the castle and its stamp. On the right hand side, there is a bit of history about the castle. If you select the other tab, it takes you to the "Travel Tips" tab. On this tab, you can leave a tip about the castle for other users to see. You can also view tips that other users have left behind. You are able to delete your own tips if you wish, but tips from others cannot be deleted. If you try to do so, a prompt will appear advising you to report bad tips using the Feedback page (more on that page later.)

You can also select the stamp book fro the nav bar. After a lengthy loading animation (which is loading all 100 stamp png files before revealing the page), the front cover of the stamp book is revealed. It displays the user's name, as well as the number of stamps they have collected so far. This number is updated whenever the page is refreshed. Use the arrows at the bottom to turn the pages of the book. There is a delay preventing users from spamming these buttons, so as not to mess up the order of pages for the user.

After turning to the desired page, click on the white square to stamp it. A stamping animation plays, and the stamp is added to that user's collection. If the page is refreshed, the stamp persists. This animation also has a timeout delay on it to prevent spamming and bugs. Lastly, the user can choose to delete a stamp by clicking the desired stamp. The stamp will then fade out, and the entry will be deleted from that user's collection. As with the page turning animation and the stamping animation, the fade out animation also has a cooldown.

The next two links along the nav bar are not primary features, so they are greyed out and smaller as to be less prominently featured. The first of these two buttons is the Feedback page. Upon loading this page, users are presented with a form, followed by a series of existing reviews posted below. Users can post their thoughts here, and read other people's thoughts as well. People can post about the website, their travel experience, and so on. In the field, they put the topic, a rating from 1 to 5 about their feelings, and a description of their issue or comment. These reviews cannot be deleted by users. Additionally, there is currently a short character limit, due to the description field being classified as a string.

The last button on the nav bar is the logout button, which returns the user back to the login page, and signs them out of their current session. 


## Credits

- Educational resources like W3Schools, Stack Overflow, and ChatGPT were used to help our team better understand concepts and fine-tune our vision.
- The book flipping animation was made using a foundation from this site:  https://www.codehim.com/carousel/flipbook-slider-using-javascript/. The animation was then altered to better suit our product- the original code produced problems when the user spammed the page turn buttons, among other things.
- The stamping and fading out animations for the stamps were generated using Animista.
- The foundation for the loading animation came from this site: https://loading.io/css/. It features a variety of animated spinners.
- The book cover featured on the login page is the cover of the actual physical book stamp collectors use as a guide and as a stamp book.
- For the map screen pages, the map of Japan featured in the back of the official stamp book was scanned in by team member Tim. He then used photoshop to create 8 additional map images from the larger map image. Each image features a transparent gradient on the picture's edges and a white shadow around the country.
- The images of the stamps themselves came from this website: https://100castles.zonosite.com/2020/05/06/%E3%80%90%E6%97%A5%E6%9C%AC100%E5%90%8D%E5%9F%8E%E3%80%91%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%97%E7%94%BB%E5%83%8F%E3%83%BB%E8%A8%AD%E7%BD%AE%E5%A0%B4%E6%89%80%E4%B8%80%E8%A6%A7/. However, the images were taken with a camera, and had very different backgrounds and quality among them. To ensure similar quality between each stamp image, team member Tim photoshopped all 100 stamps 1 by 1, aligning the image with the square, ensuring the same resolution between images, correcting skewed orientation, and adding a transparent background to each stamp, so that the animation would look consistant across all stamps.
- The images of the castles themselves, featured on each castle page, were found on Google Images. Priority was given to high resolution images. All 100 images were then scaled down to a universally similar height and width by team member Tim in Photoshop. This was done to ensure a consistent layout when generating each castle page. Consideration was also made to make the image similar to the scene featured on that castle's stamp. 
- Last but not least, the majority of the castle database was populated using the information from this site: https://www.jcastle.info/view/Top_100_Castles. We hope in the future to be able to populate each page with our own write-ups and advice, but we were able to use jcastle for now.

## Contributors 

Castle Journal was originally created for Project 2 by the team "Samurai's Code" consisting of the following four members:

- [Tim Cunningham](https://github.com/tcunningham203)

- [Lauren Sullivan](https://github.com/lnsvn)

- [Frank Olmsted](https://github.com/frankolms)

- [Sudarshan Samaddar](https://github.com/meetsudarshan)
