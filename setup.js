const fs = require('fs');

const db = {
  comments: [],
};

fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
