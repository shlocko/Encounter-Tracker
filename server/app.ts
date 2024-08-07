const express = require("express");
const path = require("path");

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


app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, "..", "dist", 'index.html'));
    }
});

app.use(express.static(path.join(__dirname, "..", "dist")));



app.get("/api/items", (req, res) => {
    res.send(items);
})
