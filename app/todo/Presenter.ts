/// <reference path="../../typings/tsd.d.ts" />

import riot = require("riot");
import Model = require("./Model");


riot.TodoStore.on("add", (item:Model.TodoItem) => {
	riot.TodoStore.add(item);
	console.log(item);
	riot.update(); //update the GUI
});
