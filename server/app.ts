const express = require("express");

const app = express();
const PORT = 8080;

const items = [
    {
        name: "Laptop",
        price: 700,
    },
    {
        name: "Printer",
        price: 100,
    },
]

app.listen(PORT, () => {
    console.log("Server started!");
})

app.get("/api/items", (req, res) => {
    res.send(items);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname, "../dist/index.html");
})
