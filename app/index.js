require("../../bower_components/riot/riot"); //the riot object is global
require("../bower_components/materialize/dist/css/materialize.css!"); // css for materialize
require("../gen/tags"); //riot tags

//attach everything to the global riot so that we can use them in the tags script
riot.Model = require("../gen/todo/Model");
riot.RiotControl = require("../../node_modules/riotcontrol/riotcontrol");

//init store with mix observable and non-observable object
riot.TodoStore = riot.observable(new riot.Model.TodoList([
	riot.observable(new riot.Model.TodoItem("1", "hello", true)),
	riot.observable(new riot.Model.TodoItem("2", "world", false)),
	new riot.Model.TodoItem("3", "not observable", false)
]));

//attache the store to the global event dispatcher
riot.RiotControl.addStore(riot.TodoStore);

require("../gen/todo/presenter"); //after init Model

riot.mount("*");

//re-produce the issue!

riot.TodoStore.remove("2");
try {
	riot.update(); //update the GUI
}
catch (err) {
	console.error(err);  //--> TypeError: self.trigger is not a function
}

