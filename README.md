# Machine learning training app 1

A simple experiment in training a simple machine learning model based on data from the [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) and specifically the section on [gradient descent](https://developers.google.com/machine-learning/crash-course/linear-regression/gradient-descent).

The way this worked was not as I originally intended but it fulfills its purpose as an experiment and I have confirmed that its results are correct compared with my manual testing of the Google data.

The model trains on data laid out in data.js and the number of iterations and convergence threshold can be set in trainer.js.

Run the file by navigating to the root of the repo and running `node trainer.js` in the terminal.

This very simple model takes 812 iterations to train the model such that the change in loss is less than 0.1 from the previous iteration.