const conn = require('../../config');

function registerUser(req, res) {
    const { idCode, login, password } = req.body;
    
    let query = `INSERT INTO users (idPersonalCode ,userName, userPassword) VALUES ('${idCode}', '${login}', '${password}')`;

    conn.query(query, (err, result) => {
        if (err) {
          console.log(err);
          // res.status(500).json({ error: 'Internal Server Error' });
        } else {
          if (result.affectedRows > 0) {
            res.json({ success: true });
          } else {
            res.json({ success: false, message: 'Error adding user' });
          }
        }
      });
}

module.exports = {
    registerUser,
};