/**
 * Created by Nick on 11/2/2016.
 */
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//connect to db;
mongoose.connect('mongodb://nick:cfdtytwm@ds143767.mlab.com:43767/todo');

//create scheme it is a blueprint for our db;
var todoSchema = new mongoose.Schema({
    item: String
});

//model
var Todo = mongoose.model('Todo', todoSchema);

/*
var itemOne = Todo({item:'learn node and mang'}).save(function(err){
    if(err){
        throw err;
    }
    else {
        console.log('items saved');
    }
})
*/
//var data = [{item: 'learn es6'}, {item: 'learn Angular 2'}, {item: 'learn reactjs'}];
var urlencodedParser = bodyParser.urlencoded({extend:false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        //get data and pass it to view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        }); // {} - get all items from collect item or {item:buy flowers}
        //res.render('todo', {todos: data});

    });
    app.post('/todo', urlencodedParser ,function(req, res){
        //get data from view and added it to mongo dp;
        var newTodo = new Todo(req.body).save(function(err, data){
            if(err) {
                throw err;
            }
            else {
                res.json(data);
            }
        });
       // data.push(req.body);
       // res.json(data);
    });
    app.delete('/todo/:item', function(req, res){
        //delete requeserted item from mongo db
        Todo.find({item: req.params.item.replace(/\- /g, " ")}).remove(function(err, data){
            if(err){
                throw err;
                console.log('there is and error deleting item')
            }
            else{
                res.json(data);
            }
        });
        //data = data.filter(function(todo){
        //    return todo.item.replace(/ /g, '-') !== req.params.item;
       // });
       // res.json(data);
    })
};