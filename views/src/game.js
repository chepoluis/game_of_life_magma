let fps = 15; // Speed of the frames

const canvasX = 500; // Width pixels
const canvasY = 500; // Height pixels

let tileX, tileY; // Pixel size

// Board variables
let rows = 100;
let columns = 100;

// Color of the grids
const whiteC = '#FFFFFF';
const blackC = '#000000';

function createArray2D(row, col) {
    let obj = new Array(row);

    for (let i = 0; i < row; i++ ) {
        obj[i] = new Array(col);
    }

    return obj;
}

// Agent object
function Agent(x, y, state, ctx, board) {
    this.x = x;
    this.y = y;
    this.state = state;          // Live = 1, Dead = 0
    this.nextState = this.state; // Next state of the loop

    this.neighbours = []; // Save the list of neighbours 

    // Add the neighbours of the actual object
    this.addNeighbours = () => {
        let xNeighbour;
        let yNeighbour;

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) { 
                /*
                    Make the board like "sphere", where if an obect pass for one side pass for the another, completing the grid 3 x 3
                    [1][0][0]
                    [0][1][1]
                    [0][0][0]
                    Example: In a board 10 x 10
                    position(3,5)
                    sum 10 + 3 = 13 -> the limits of the are passed
                    sum 10 + 5 = 15
                    Mod(13 % 10) = 3 -> the position where will continue the grid
                    Mod(15 % 10) = 5
                */
                xNeighbour = (this.x + j + columns) % columns;
                yNeighbour = (this.y + i + rows) % rows;

                // Discard the current agent, i can't be my own neighbor (0, 0)
                if (i !== 0 || j !== 0) {
                    this.neighbours.push(board[yNeighbour][xNeighbour]);
                }
            }
        }
    }

    // Place the color in the squares
    this.draw = () => {
        let color;

        if (this.state === 1) {
            color = whiteC;
        } else {
            color = blackC;
        }

        ctx.fillStyle = color;
        ctx.fillRect(this.x * tileX, this.y * tileY, tileX, tileY);
    }

    // Conway laws
    this.newLoop = () => {
        let sum = 0;

        // Calculate the total of living neighbors
        for (let i = 0; i < this.neighbours.length; i++) {
            sum += this.neighbours[i].state;
        }

        // Apply the rules
        this.nextState = this.state; // defuault

        // DEAD: less than 2 or more than 3
        if ( sum < 2 || sum > 3) {
            this.nextState = 0;
        }

        // Mantain the same state (LIFE)
        if (this.state === 1) {
            if ( sum === 2 || sum === 3) {
                this.nextState = this.state;
            }    
        }
        
        // LIFE: exactly 3 living neighbors
        if ( this.state === 0 && sum === 3) {
            this.nextState = 1;
        }
    }

    // Apply the next state
    this.mutation = () => {
        this.state = this.nextState;
    }
};

// Creates the seed, where the rules will applied 
function initializeBoard(obj, ctx) {
    let state;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            state = Math.floor(Math.random()*2);
            obj[y][x] = new Agent(x, y, state, ctx, obj);
        }        
    }

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            obj[y][x].addNeighbours();
        }        
    }
}

// Main method, "where the magic happens :D"
export function startLife(canvas) {
    let ctx = canvas.getContext('2d');

    // Adjust the canvas size
    canvas.width = canvasX;
    canvas.height = canvasY;

    // Tiles sizes
    tileX = canvasX / rows;
    tileY = canvasY / columns;

    // Create board
    const board = createArray2D(rows, columns);

    // Initialize board
    initializeBoard(board, ctx);

    // Main loop, where the next states will applied
    setInterval( () => {
        mainLoop(canvas, board);
    }, 1000/fps);
}

function drawBoard(obj) {
    
    // Draw the agents
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            obj[y][x].draw();
        }
    }

    // Calculate next loop
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            obj[y][x].newLoop();
        }
    }

    // Apply mutation(next state)
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            obj[y][x].mutation();
        }
    }

}

function deleteCanvas(canvas) {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function mainLoop(canvas, board) {
    deleteCanvas(canvas);
    drawBoard(board);
}