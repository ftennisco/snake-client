// Define the IP address for the server as "localhost"
const IP = "localhost";
// Define the port number for the server as 50541
const PORT = 50541;

const MOVE_UP_KEY = 'w';
const MOVE_DOWN_KEY = 's';
const MOVE_LEFT_KEY = 'a';
const MOVE_RIGHT_KEY = 'd';
const SAY_1_KEY = '1';
const SAY_2_KEY = '2';
const SAY_3_KEY = '3';


const MAPPING = {
  MOVE_UP_KEY: "Move: up",
  MOVE_DOWN_KEY: "Move: down",
  MOVE_LEFT_KEY: "Move: left",
  MOVE_RIGHT_KEY: "Move: right",
  SAY_1_KEY: "Say: Hello everyone!",
  SAY_2_KEY: "Say: Having a great time!",
  SAY_3_KEY: "Say: Let's play fair!",
}


// Export the IP and PORT constants using the ES6 object property values shorthand syntax
module.exports = {
  IP,
  PORT, 
  MOVE_UP_KEY, 
  MOVE_LEFT_KEY, 
  MOVE_DOWN_KEY, 
  MOVE_RIGHT_KEY, 
  SAY_1_KEY, 
  SAY_2_KEY, 
  SAY_3_KEY, 
  MAPPING
};