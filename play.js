// Import the 'connect' function from the './client' module
const { connect } = require("./client");
// Import the 'setupInput' function from the './input' module
const { setupInput } = require("./input");
// Print a message to the console indicating that the connection is being established
console.log("Connecting ...");
// Call the 'connect' function to establish a connection and store the returned connection object in 'conn'
const conn = connect();
// Call the 'setupInput' function and pass the connection object 'conn' as an argument to set up input handling
setupInput(conn);