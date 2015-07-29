riot=require("../../bower_components/riot/riot");
require("../bower_components/materialize/dist/css/materialize.css!"); // materialize
require("../gen/tags");

/*
 require("bower_components/jquery/dist/jquery"); //Import jQuery before materialize
 require("bower_components/materialize/dist/js/materialize");
*/

var Model = require("../gen/todo/Model");
var RiotControl = require("../../node_modules/riotcontrol/riotcontrol");

//init store
var TodoStore = riot.observable(new Model.TodoList([
	new Model.TodoItem("1", "hello", true),
	new Model.TodoItem("2", "world", false)
]));

//attache the store to the global event dispatcher
RiotControl.addStore(TodoStore);

//attach everything to the global riot so that we can use them in the tag script
riot.RiotControl = RiotControl;
riot.TodoStore = TodoStore;
riot.Model = Model;

require("../gen/todo/presenter");

riot.tags = riot.mount("*");



