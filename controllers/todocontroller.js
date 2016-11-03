/**
 * Created by Nick on 11/2/2016.
 */
module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo');
    });
    app.post('/todo', function(req, res){

    });

    app.delete('/todo', function(req, res){

    })


};