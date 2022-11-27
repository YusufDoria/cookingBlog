async function homepage (req, res) {
    res.render('index', { title: 'Cooking Blog - Home' });
}




module.exports = {
    homepage: homepage
}