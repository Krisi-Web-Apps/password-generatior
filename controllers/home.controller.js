const get = {
    home: (req, res) => {
        res.send('Hello, works!');
    },
    about: (req, res) => {
        res.send('Password generator app has strong password creation, user authentication and more…');
    }
}

module.exports = {
    get
}
