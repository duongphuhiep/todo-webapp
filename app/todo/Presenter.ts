/// <reference path="../../typings/tsd.d.ts" />

import riot = require("riot");
import Model = require("./Model");

riot.TodoStore.on("add", (item:Model.TodoItem) => {
	riot.TodoStore.add(item);
	riot.update(); //update the GUI
});

riot.TodoStore.on("remove", (item:Model.TodoItem) => {
	//console.log("receive action remove "+item.id);
	riot.TodoStore.remove(item.id);
	riot.update(); //update the GUI
});
