const { Router } = require("express")

const indexRouter = Router()

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
        text: "I am good",
        user: "Clark",
        added: new Date(),
    }
]

indexRouter.get("/", (req, res) => {
    res.send("message from index...")
})

module.exports = indexRouter