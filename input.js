const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SAY_1_KEY, SAY_2_KEY, SAY_3_KEY, MAPPING} = require('./constants')

let connection;
 // Function to set up input handling
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  // Set stdin mode to raw for handling individual key presses
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // Resume stdin input stream
  stdin.resume();
  // Listen for data input from stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log(MAPPING);

// Function to handle user input from stdin
const handleUserInput = (data) => {
  if (data === MOVE_UP_KEY) {
    // If 'w' is pressed send a "Move: up" message to the server
    connection.write(MAPPING["MOVE_UP_KEY"]);
  } else if (data === MOVE_LEFT_KEY) {
    // If 'a' is pressed, send a "Move: left" message to the server
    connection.write(MAPPING["MOVE_LEFT_KEY"]);
  } else if (data === MOVE_DOWN_KEY) {
    // If 's' is pressed, send a "Move: down" message to the server
    connection.write(MAPPING["MOVE_DOWN_KEY"]);
  } else if (data === MOVE_RIGHT_KEY) {
    // If 'd' is pressed, send a "Move: right" message to the server
    connection.write(MAPPING["MOVE_RIGHT_KEY"]);
  } else if (data === SAY_1_KEY) {
    // If '1' is pressed, send a "Say: Hello everyone!" message to the server
    connection.write(MAPPING["SAY_1_KEY"]);
  } else if (data === SAY_2_KEY) {
    // If '2' is pressed, send a "Say: Having a great time!" message to the server
    connection.write(MAPPING["SAY_2_KEY"]);
  } else if (data === SAY_3_KEY) {
    // If '3' is pressed, send a "Say: Let's play fair!" message to the server
    connection.write(MAPPING["SAY_3_KEY"]); 
  } else if (data === '\u0003') {
    // If Ctrl+C (End of Text) is pressed, exit the process
    process.exit();
  }
};

module.exports = { setupInput };