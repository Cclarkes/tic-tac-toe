# Tic-Tac-Toe

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's an app that was created after a (roughly) combined 5 hours of work both in person and over the may long-weekend.

To play, simply open the app as detailed below and find somebody to compete with.
Each click will fill a box with either an X, or an O, depending on the turn.
Once somebody completes a row, column, or diagonal cross they win!
![Screenshot](https://github.com/Cclarkes/tic-tac-toe/blob/master/public/Screenshot.png)

## Installation

* Clone the repository,
  `git clone git@github.com:Cclarkes/tic-tac-toe.git tic-tac-toe`
* Navigate into the project folder,
  `cd tic-tac-toe`
* Install all the necessary dependencies,
  `npm install`
* And run the app locally.
  `npm start`

## Functionality

Upon page load player 1 begins by making the first move. After they click a square,
an X is left and player 2 is made to choose their box. As with any tic-tac-toe game,
the first player to achieve 3 X's or O's in a horizontal, vertical, or diagonal line
wins and the user is then alerted of their victory. After that point, you must reload
the page and begin again.

## Lessons Learned

I spent more time on the flexbox than I would have liked, so my CSS skills could
certainly use some work. Otherwise I got some good practice with react especially with
passing values up from child components to their parents through functions. I defined
the functions in app.js, but called them in subordinate componenents. However, because
they were defined on the higher level, and because I included parameters, I was able to
pass local state values up to parent components.

## What I would have done with more time

* I'm not really happy with the way my victory conditions were laid out. I feel like it's
much too verbose, and there's definitely a better way to verify all 8 victory conditions
without writing them all out for both X, and O.

* I used react classes and inheritance because they're what I'm comfortable with, but I
understand that the best practice right now is to use react hooks paired with functional
components. I would have liked to do this and will probably do it with a project in the
near future.

* Quality of Life additions like adding a restart button at the end, a more graphically
pleasing webpage, and maybe sound/visual effects. 
