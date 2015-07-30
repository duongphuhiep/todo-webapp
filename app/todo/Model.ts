/// <reference path="../../typings/tsd.d.ts" />

export class TodoItem {
	constructor(public id:string, public title:string, public done:boolean) {
	}
}
export class TodoList {
	constructor(public items:TodoItem[]) {
	}
	add(item:TodoItem) {
		this.items.push(item);
	}
	remove(itemId:string) {
		this.items = $.grep(this.items, (el:TodoItem)=>{
			return el.id != itemId;
		});
	}
}

import riot = require("riot"); //import the global riot

//init store
var TodoStore = riot.observable(new TodoList([
	new TodoItem("1", "hello", true),
	new TodoItem("2", "world", false)
]));

//attache the store to the global event dispatcher
import RiotControl = require("../../node_modules/riotcontrol/riotcontrol");
RiotControl.addStore(TodoStore);

//TodoStore to the global riot so that we can use them in the tag script
riot.TodoStore = TodoStore;


