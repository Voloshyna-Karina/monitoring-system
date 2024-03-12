const conn = require('../../config');

function loginUser(req, res) {
  const { login, password } = req.body;

  let query = `SELECT * FROM users WHERE userName='${login}' AND userPassword='${password}'`;

  conn.query(query, (err, result, fields) => {
    if (err) {
      console.log(err);
      // res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Incorrect login or password' });
      }
    }
  });
}

module.exports = {
  loginUser,
};