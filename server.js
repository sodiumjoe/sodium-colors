const http = require("http");
const fs = require("fs");

const app = http.createServer(null, (req, res) => {
  const file = fs.readFileSync("./build/index.html", "utf8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(file);
  res.end();
});

console.info("listening at localhost:3000");

app.listen({
  host: "localhost",
  port: 3000
});
