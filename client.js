const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.18.51.110",
    port: 50541,
  });
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Recieved data:", data);
    if (data.includes("you ded cuz you idled")) {
      console.log("You were kicked out for idling.");
    }
  });

  return conn;

};

module.exports = { connect };