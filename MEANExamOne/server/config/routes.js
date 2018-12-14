// get quote controller
const Pet = require('../controllers/petsController')
// access a url, and calls the callback
module.exports = (app) => {
    app.get('/pets', Pet.index)
    app.get('/pets/:id', Pet.show)
    app.post('/pets', Pet.create)
    app.post('/pets/edit/:id', Pet.update)
    app.get('/pets/delete/:id', Pet.delete)
    app.patch('/pets/u/:id', Pet.upvote)
    app.patch('/pets/d/:id', Pet.downvote)
}