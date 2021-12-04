const db = require('../database/models')

module.exports={
    list: (req,res) => {
        db.genres.findAll()
        .then(generos => {
            res.render('genresList', {genres: generos})
        })
        .catch(err => {
            console.log("Error al requerir los generos de la base de datos. Error:", err);
        })
    },
    detail: (req,res) => {
        db.genres.findByPk(+req.params.id)
        .then(genero =>{
            res.render('genresDetail', {genre:genero})
        })
        .catch(err => {
            console.log("Error al requerir los generos de la base de datos. Error:", err);
        }) 
    }
}