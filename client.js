const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    setName(conn, "F.T");
    // sendMoveUp(conn);
  });

  conn.on("data", (data) => {
    console.log("Recieved data:", data);
    if (data.includes("you ded cuz you idled")) {
      console.log("You were kicked out for idling.");
    }
  });

  return conn;

};

const setName = function (conn, initials) {
  const message = `Name: ${initials}`;
  conn.write(message);
};

const sendMoveUp = function (conn) {
  const message = "Move: up";
  conn.write(message);
};

const sendMoveDown = function (conn) {
  const message = "Move: down";
  conn.write(message);
};

const sendMoveLeft = function (conn) {
  const message = "Move: left";
  conn.write(message);
};

const sendMoveRight = function (conn) {
  const message = "Move: right";
  conn.write(message);
};

module.exports = { connect };