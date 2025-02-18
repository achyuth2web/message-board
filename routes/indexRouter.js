const express = require("express");

const router = express.Router();

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
];

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
  ];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages, links: links });
});

router.get("/new", (req, res) => {
    res.render("form", { links: links })
})

router.post("/new", (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date() });
    res.redirect("/")
});

module.exports = router;
