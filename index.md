## Overview

[Find our project source code here.](https://github.com/myuh-club/myuh-club-source)

[Find our project application here.](http://myuhclub.meteorapp.com)

[Find our project milestone 1 here.](https://github.com/myuh-club/myuh-club-source/projects/1)

[Find our project milestone 2 here.](https://github.com/myuh-club/myuh-club-source/projects/2)

[Find our project milestone 3 here.](https://github.com/myuh-club/myuh-club-source/projects/3)


The main goal of this project is to use software engineering to create a platform of effective communication for the University of Hawaii's various extra curriculur activities. [There are over 200 RIOs (Registered Indepedent Organizations) affiliated with UH Manoa](http://www.manoa.hawaii.edu/studentlife/studentorg/rio.php), which can be overwhelming to students attempting to determine which clubs to join. If we are able to gather and present information about the RIOS on campus in a simple but effective manner, as this may increase a student's opportunity to find a RIO that matches their interests.
This application should:
- Provide a master list of all clubs
- Provide filters for users to search for clubs based on certain interests or majors
- allow users to add clubs they are interested in to their favorites
- allow club organizers to edit their club's information

## User Guide

<h3> Basic User Guide </h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Fo6W-OmDLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3>Administrator User Guide </h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/k331oOxse8k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
## Coming Soon...
- Organizer Guide

## Developer Guide
<iframe width="560" height="315" src="https://www.youtube.com/embed/NgFiNuusjdc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h4>Downloading</h4>
Download a copy of the source code. There are a many ways to do this but the most convienient way is to [go to our github project page](https://github.com/myuh-club/myuh-club-source) and click the green button that says "clone or download". Select the option to download ZIP. Next, decompress the zip file with your method of choice.

<h4>Installing</h4>
Depending on your OS, the instructions for installing the application may differ.
<h5>Instructions for MAC OS or Linux based systems</h5>
For Mac or Linux systems, navigate to the directory holding the application. Open up the command line and use the following: 

```
cd myuh-club-source
```

Then, navigate to the "app" directory.

```
cd app
```

Now that you are in the app directory, run the following command to install meteor:

```
meteor npm install
```

Congratulations, you have installed meteor!

<h4>Running</h4>
To run the application, navigate to the app directory inside the myuh-club-source directory and enter the following command:

```
meteor run
```

or you can use the short hand:

```
meteor
```

This process will allow you to run the application locally on your machine. After running the command in the appropriate directory, open a web browser and in the address bar, enter "http://localhost:3000/" and you should be taken to your local application.

<h4>Modifying</h4>
You are able to modify your local source code as much as you wish. 


## The Application in All Its Glory
Below are screen shots from our site that is being hosted by Galaxy. The group has produced the landing page, a Dashboard page, an About Us page, a Report a Problem page, an Add/Delete page and an Edit page. Moving forward we are discussing issues and concerns each of us have with the functionality of certain pages.

<p align="center">
<img src='https://myuh-club.github.io/images/unsignedLanding.png' width='700' height='400'/>
</p>

<h5>Landing Page</h5>

Above is a screenshot of the landing page, which is the first thing you'd see when you load the site. 

[Find our landing page here.](http://myuhclub.meteorapp.com/#/)

<p align="center">
<img src='https://myuh-club.github.io/images/LandingPage.png' width='900' height='400'/>
</p>

Above is a visual comparison of the difference in the navigation bar between signed in administrators(top navigation bar) and regular users (bottom navigation bar). As of this image the view report page and edit club page are still under maintenance. The navigation bar components are seen conditionally based on who is logged in. 

[Find our landing page here.](http://myuhclub.meteorapp.com/#/) However, be advised that if the user is not logged in, they will not be able to see these components. Even when a user is logged in, the navigation bar will change based on what role that user has. 

<p align="center">
<img src='https://myuh-club.github.io/images/homepage.png' width='700' height='400' centered>
</p>

<h5>Dashboard</h5>

Above is the "Dashboard" page that will be used to direct users to the three main features for signed in user (favorites, search, and reports) and serve as a notification center as well.

[Find the dashboard here.](http://myuhclub.meteorapp.com/#/add) Be advised the user will not be able to see the dashboard if they are not logged in. The user will be redirected to the sign in page.

<p align="center">
<img src='https://myuh-club.github.io/images/about.png' width='700' height='400' centered>
</p>

<h5>About Us</h5> 

Above is the "About Us" page that all users will have access to if they needed to get in contact with any of us in regards to the site. The card components link to each developer's proffesional portfolio.

[Find the About Us page here.](http://myuhclub.meteorapp.com/#/list) Be advised the user will not be able to see this page if they are not logged in. The user will be redirected to the sign in page.

<p align="center">
<img src='https://myuh-club.github.io/images/report.png' width='700' height='400' centered>
</p>

<h5>Report a Problem</h5>

Above is a screenshot of the "Report a Problem" page. This page is accessible to logged in users who wish to report any technical bugs, such as 404 errors, or innapropriate content. There are two text areas that users can edit: the title text area and the message text area. There is also a submit button. By clicking the submit button, a follow up message will appear on the screen. If the report has text in both the title and message areas, the user will recieve a notification of success that temporarily covers the navigation bar. If the report does not have text in either the title and/or message areas and clicks the submit button, the user will recieve a notification under the submit button that details either a title and or message is required.

[Find the Report a Problem page here.](http://myuhclub.meteorapp.com/#/reportproblem)  Be advised the user will not be able to see this page if they are not logged in. The user will be redirected to the sign in page.

<h5>Edit Clubs</h5>

<p align="center">
<img src='https://myuh-club.github.io/images/edit.png' width='700' height='400' centered>
</p>

Above is a screenshot of the "Edit Clubs" page. This page is accesible to logged in administrators. Administrators can view and edit all of the clubs that have been added. If the administrator selects the "Edit Stuff" link, they will be redirected to a page (seen below) where the administrator can input a name, a quantity and a condition. If any of the inputs are left blank, the administrator will recieve a notification under the submit button that details the input that is required. 

<p align="center">
<img src='https://myuh-club.github.io/images/editor.png' width='700' height='400' centered>
</p>


[Find the "Edit Clubs" page here.](http://myuhclub.meteorapp.com/#/aE)  Be advised the user will not be able to see this page if they are not logged in. The user will be redirected to the sign in page.

<p align="center">
<img src='https://myuh-club.github.io/images/addClubs.png' width='700' height='400' centered>
<img src='https://myuh-club.github.io/images/deleteClubs.png' width='300' height='100' centered>
</p>

<h5>Add/Delete Clubs page</h5>

Above is a screenshot of the "Add/Delete Clubs" page. This page is accesible to logged in administrators. This page is very similar in functionality to the "Report a Problem" page. The main difference is that once the administrator clicks the submit button (with all the appropriate fields filled out), the entry appears in the "Delete" segment at the bottom of the page. If the administrator clicks the delete button, the entry dissapears. In the screenshot of the "Delete" segment (as seen above), there are 2 example clubs that have been made, based off the user input taken from the "Add" segment.

[Find the Add/Delete Clubs page here.](http://myuhclub.meteorapp.com/#/aD) Be advised the user will not be able to see this page if they are not logged in as an admin. The user will be redirected to the sign in page.


## Developers
- Yusuke Hatanaka (yusukemh@hawaii.edu)
- Ronnie Kauanoe (rkauanoe@hawaii.edu)
- Nick Miyamoto-Pennywell (nkmp@hawaii.edu)
- Quinne Uchida (qauchida@hawaii.edu)

