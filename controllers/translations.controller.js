const connection = require('../config/connection');

const post = {
    create: (req, res) => {
        const { lang, elementId, content } = req.body;

        const sql = `INSERT INTO translations (lang, element_id, content) VALUES ('${lang}', '${elementId}', '${content}')`;
        connection.query(sql, function(err, result) {
            if (err) {
                throw new Error(err.message);
            }

            res.send({ message: '1 record inserted' });
            return;
        });
    }
}

module.exports = {
    post
}
