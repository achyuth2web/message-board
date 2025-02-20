const db = require("../db/queries");
const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
  ];

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", links: links, messages: messages });
}

async function createMessageGet(req, res) {
  res.render("form", {
    title: "Create New Message",
    links: links
  });
}

async function createMessagePost(req, res) {
  const msg = req.body;
  await db.insertMessage(msg);
  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
