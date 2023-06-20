// Import the 'net' module to create TCP connections
const net = require("net");

// Import the IP and PORT constants from the './constants' module
const { IP, PORT } = require("./constants");

// Define the 'connect' function to establish a TCP connection with tje server 
const connect = function () {
  // Create a connection object using the specified IP and PORT
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // Set the encoding of the connection to UTF-8
  conn.setEncoding("utf8");

  // Event handler when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Set the name of the player using the 'setName' function
    setName(conn, "F.T");
  });

  // Event handler for recieving data from the server
  conn.on("data", (data) => {
    console.log("Recieved data:", data);
    if (data.includes("you ded cuz you idled")) {
      console.log("You were kicked out for idling.");
    }
  });
  // Return the connection object
  return conn;

};

// Function to set the name of the player
const setName = function (conn, initials) {
  const message = `Name: ${initials}`;
  // Write the name message to the server
  conn.write(message);
};

// Export the 'connect' function to be used by other modules
module.exports = { connect };