// excution environement
// 1. node.js - event driven, single threaded, non-blocking I/O model
// 2. browser - multi-threaded (event loop), blocking I/O model
// NODE_MODULES

// OS module => operating system
const os = require("os");

const freemm = os.freemem();
const host = os.hostname();
const machine = os.machine();
const load = os.loadavg();

// console.log(freemm);
// console.log(host);
// console.log(machine);
// console.log(load);

// FS module => file-system
const fs = require("fs");

// fs.mkdir("./home", { recursiv: true }, (err) => {
//   if (err) throw err;
// });

// fs.writeFile("./home/app.js", "hello", "utf8", () => {
//   throw new Error();
// });

const path = require("path");

const dirnamePath = path.dirname(__filename);
const basename = path.basename(__filename);

// console.log(dirnamePath);
// console.log(basename);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello");
    res.end();
  }

  if (req.url === "/user") {
    res.write(
      JSON.stringify({
        user: "khaled",
      })
    );
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running");
});
