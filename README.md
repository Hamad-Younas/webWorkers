# webWorkers
# Description
In JavaScript, a web worker is like a little helper that can run in the background without interrupting the main program. It's like having a friend who takes care of some tasks while you focus on your main job.

Imagine you have a big task to do, like counting from 1 to 1000. If you do it in your main JavaScript program, it might take some time, and during that time, your webpage may freeze or become unresponsive.

Now, imagine you have a web worker. It's like having a separate friend who can count from 1 to 1000 independently. Your main program and the web worker can work simultaneously, making your webpage stay responsive and smooth.
# Project
The project basically have two sections one with the webs workers and one without the web workers. This is a basic project to look for how the web workers are very useful. 
In web worker section, if you click on the start calculation button and try to change the background color of your project you can easily can do that. 
In without web worker section, you can't change the background color as if you run the code you will see the screen will stuck for 5 seconds till the calculation is not completed or maybe your browers show a message of not responding. very funny.
# Deployment
Download the code or clone the repo.
Go to the webWorkers folder.
Open the IDE i.e. Visual Studio code in that folder.
Go to the index.html page.
Right click and choose run with live server.
........
# Summary
I have never used this in projects before, and now I regret it. As i describe above what the web workers did. Very recommended.
# Challenges
I have to calculate the big amount and continues with time. so whenever the calculation starts the screen will stuck. So i have to wait for so long. So in development term, we have to post the message to the workers and when they finish they send the message back by post method. That's it.
# Reference
[Link Text](https://www.w3schools.com/html/html5_webworkers.asp)