const pages = require('./../../pages.json').pages;

exports.getPage = (req, res) => {
    const alias = req.params.alias;
    const lang = req.cookies.lang == undefined ? 'ru' : req.cookies.lang;

    try {
        const title = pages[alias]['title_' + lang];

        res.render(`${lang}/${alias}.html`, {title, alias});
    } catch (err) {
        res.send('<h1>404 Page not found</h1>');
    }
}

exports.swapLang =(req,res) =>{
    let lang = req.cookies.lang == 'ru' ? 'en' :'ru';
    res.cookie('lang',lang);
    res.redirect('back');

}