/**
 * Created by Nick on 11/2/2016.
 */
var bodyParser = require('body-parser');

var data = [{item: 'learn es6'}, {item: 'learn Angular 2'}, {item: 'learn reactjs'}];
var urlencodedParser = bodyParser.urlencoded({extend:false});

module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });
    app.post('/todo', urlencodedParser,function(req, res){
       data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    })


};