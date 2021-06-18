const express = require("express")
const app = express();
const http = require("http");
const path = require("path")
const hbs = require("hbs")
const server = http.createServer(app)
const port = 2000 || env.process.PORT;
const fetch = require('node-fetch');

url = `https://www.newsapi.org/v2/top-headlines?country=in&apiKey=4898630f183f4b9e90de2ebbdc18063d`

url = "https://newsapi.org/v2/everything?q=tesla&from=2021-05-18&sortBy=publishedAt&apiKey=4898630f183f4b9e90de2ebbdc18063d"
url = "https://newsapi.org/v2/everything?q=technology&apiKey=4898630f183f4b9e90de2ebbdc18063d"
url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4898630f183f4b9e90de2ebbdc18063d&pageSize=100"

app.use("/static", express.static(path.join(__dirname, "static")))
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.get("/", async (req, res) => {

    let res1 = await fetch(url)
    let data = await res1.json();

    res.render("index", {
        data1: data.articles,
    })




})

server.listen(port, () => {
    console.log("app is running at port ", port)
})