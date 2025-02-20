const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows || [];
}

async function insertMessage(msg) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [msg.authorName, msg.messageText]);
}

module.exports = {
  getAllMessages,
  insertMessage
};
