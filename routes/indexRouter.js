const { Router } = require("express")
const indexRouter = Router()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
]

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages})
})

indexRouter.get("/details/:index", (req, res) => {
    const { index } = req.params
    const message = messages[index - 1]
    res.render("details", { index: index, message: message,})
})

module.exports = { indexRouter, messages }