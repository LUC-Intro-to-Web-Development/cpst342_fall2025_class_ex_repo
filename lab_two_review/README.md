# Directions

Listed below is an image of the completed interface for MPLS Dog Boarding website.  Complete the 12 steps below to achieve the desired design and layout of MPLS Dog boarding homepage.  This lab will focus on CSS Layout Methodologies and will include color, graphics and typography concepts. 

![alt text](https://instructorc.github.io/site/home/images/lab_three_interface.png)

Listed below are the  requirements you will need to complete for this lab. 

## Steps:

1. Using git, connect to the remote repository and pull down the contents of repository to your computer. **Hint: Make sure create a folder and initialize git before connecting to repository and pulling contents down**
2. Open the project folder in your text editor and comment your name at the top the home.html page.
3. Include the required meta tags discussed in class within the head of your site. The content attributes for each meta tag should be adjusted to reflect site content.
4. **Implement CSS Grid:** Create a style rule that targets the ```<div id=”container”>``` and add properties that will accomplish the below
    * Create grid items of the children of ```<div id=”container”>``` Hint: use display property
    * Define three grid columns that are equal size
    * Define three grid rows that are 105px auto 15%
    * Make the width of the container 100vw and the height 100vh
5.  **Place items in Grid:** Using either line numbers or area names, place the header, main and footer into the grid with the following dimensions. Make sure to give each grid item a **border**.
    * The header will occupy the all three columns of the first row
    * The main element will occupy all three columns of the second row
    * The footer element will occupy all three columns of the third row. Add 40px of padding to top of footer
6. Target the ```<img>``` with the ```<header>``` element and add the relative path to “mpls_dog_logo.png” from home.html and provide alternative text for the alt attribute 
7. Create a style rule that targets the ```<img>``` tag within the header and provide the following declarations:
    * Add the display: block; declaration
    * Add the width property and set it to 20%;
    * Center the image by adding margin: auto;
8. **Implement CSS Flexbox** Create a style rule that targets the ```<main id=”flexcontainer”>``` and add properties that will accomplish the below
    * **Flex Container Declarations:**
        1.  Create flex items of the children of ```<main id=”flexcontainer”>``` Hint: use display property
        2.  Add **flex-wrap: wrap;** as a declaration to the container
        3.  Add width: 100%;
        4.  Add background image and provide the relative file path to "dog_bg.jpeg"
        5.  Center the background position and add a declaration that changes the background-size to be 100% or cover
    * **Flex Items Declarations - Give each child element:**
        1. flex-grow of 1, flex-shrink of 0, a flex-basis of 325px
        2. A height of 350px, a border of 2px solid purple, and padding of 10px
        3. Add 4% margin to top and bottom and 2% margin to right and left of each box
        4. A background-color of #ffffffcf;
        5. A border-radius of 10px;

9. **Implement Google Font:**
    * Add the following link to the head of your site:
    * ```<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">```
    * Create a style rule that targets the body element and add the two declarations below:
        * font-family: 'Montserrat', sans-serif;
        * margin: 0;
10. Create a style rule that targets the ```<div id=”copyright”>``` tag within the footer and provide the following declarations:
    1. Add a width of 275px;
    2. Center the copyright text by adding margin: auto.
11. Remove all borders, validate and visual inspect site in browser
12. Follow the instructions under the Submission and Publishing guidelines. Make sure you publish your site to GitHup pages and visually inspect your work.  Your remote repository must include at minimum of five commits displaying your incremental progress on the lab.


## Submission and Publishing your lab

Your project folder will need to be submitted to the assigned GitHub repository provided to you by the instructor. In Sakai, you will need to submit the link to your repository by the due date and time listed in the write-up. Make sure you receive confirmation from Sakai that your assignment has been submitted. Submission video instructions [here](https://instructorc.github.io/site/slides/presentation/video/github_upload.mp4) 

## Lab Resources
* My YouTube Playlist the covers Flexbox and CSS Grid - [HTML/CSS Page Layout Strategy using Flexbox and CSS Grid](https://youtube.com/playlist?list=PLvpKGAo_xLN9HhSBx033dXXYndmil61-h&si=ITtQZ4341WYjaDTc)
* A gaming website that helps you understand CSS Flexbox - [CSS Flexbox Froggy](https://flexboxfroggy.com/)
* CSSTricks.com Article on CSS Flexbox - [A guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* A gaming website that helps you understand CSS Grid - [Grid Garden](https://cssgridgarden.com/)
* CSS-Tricks.com Article on CSS Grid - [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

