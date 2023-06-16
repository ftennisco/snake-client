const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    setName(conn, "F.T");
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

module.exports = { connect };