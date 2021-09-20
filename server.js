const http = require("http");

const app = require("express")();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

app.use("/", (req, res) => {

    res.send("data");

});
