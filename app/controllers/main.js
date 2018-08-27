const pages = require('./../../pages.json').pages;

exports.getMainPage = (req, res) => {
    const title = pages.index['title_'];
    res.render(`index.html`,{title});
}