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
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello world!",
        user: "Charles",
        added: new Date(),
    },
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