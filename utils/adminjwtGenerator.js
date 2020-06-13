const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(email) {
  const payload = {
    customer: {
      email: email,
    },
  };

  return jwt.sign(payload, process.env.adminjwtSecret, {expiresIn: '1h'});
}

module.exports = jwtGenerator;
