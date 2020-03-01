const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

async function root (req, res) {
    res.send(`<h2>Data schemas are fun!</h2>`)
}

server.use((req, res) => {
    res.status(404).json({
        message: "Route was not found",
    })
})

server
    .get("/", root)

module.exports = server;