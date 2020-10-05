# Game of Life

![N|Solid](https://cutt.ly/Rgqn82W)

The Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive (1) or dead (0).
Every cell interacts with its eight neighbors, which are the cells that are directly horizontally,
vertically, or diagonally adjacent.

Conway's rules
- Any living cell with fewer than two live neighbours dies, as if caused by underpopulation.
- Any living cell with more than three live neighbours dies, as if by overcrowding.
- Any living cell with two or three live neighbours lives on to the next generation.
- Any dead cell with exactly three live neighbours becomes a live cell.

# Software necessary

You need to have installed NodeJs and yarn, in your computer.

# Installation

Firs you need to clone the project or download the zip, once done.
Open the files in your favorite editor, and run the following command
```sh
npm install
```
at the root level "/game_of_life_magma". 

Then move to views folder "/game_of_life_magma/views", in your command line run 
```sh
npm install
```
again.

Once done, run the following command 
```sh
yarn run build
```
this build Bundles the app into static files for production.

Then go back to the previous folder "/game of life" and run the command
```sh
npm run dev
```
and that is it!

Just go to your browser and enter localhost:3000 and the page will be displayed.
