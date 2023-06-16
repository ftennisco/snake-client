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

// Function to handle user input from stdin
const handleUserInput = (data) => {
  if (data === 'w') {
    // If 'w' is pressedm send a "Move: up" message to the server
    connection.write("Move: up");
  } else if (data === 'a') {
    // If 'a' is pressed, send a "Move: left" message to the server
    connection.write("Move: left");
  } else if (data === 's') {
    // If 's' is pressed, send a "Move: down" message to the server
    connection.write("Move: down");
  } else if (data === 'd') {
    // If 'd' is pressed, send a "Move: right" message to the server
    connection.write("Move: right");
  } else if (data === '1') {
    // If '1' is pressed, send a "Say: Hello everyone!" message to the server
    connection.write("Say: Hello everyone!");
  } else if (data === '2') {
    // If '2' is pressed, send a "Say: Having a great time!" message to the server
    connection.write("Say: Having a great time!");
  } else if (data === '3') {
    // If '3' is pressed, send a "Say: Let's play fair!" message to the server
    connection.write("Say: Let's play fair!"); 
  } else if (data === '\u0003') {
    // If Ctrl+C (End of Text) is pressed, exit the process
    process.exit();
  }
};

module.exports = { setupInput };