const express = require("express")
const path = require("node:path")
const app = express()
const { Router } = require("express")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs") 
app.use(express.urlencoded({ extended: true }))

const router = Router()

const messages = [
    {
        text: "Hi...",
        user: "Marie",
        added: new Date(),
    },
    {
        text: "I am evil...",
        user: "Hal",
        added: new Date(),
    },
    {
        text: "I am good...",
        user: "Clark",
        added: new Date(),
    }
]

app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})
app.get("/new", (req, res) => {
    res.render("form")
})

app.post("/new", (req, res) => {
    msg = req.body.msg
    user = req.body.user
    messages.push({ text: msg, user: user, added: new Date(), })
    res.redirect("/")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board: port - ${PORT}`)
})