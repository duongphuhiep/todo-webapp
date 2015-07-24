/// <reference path="../../typings/tsd.d.ts" />

module Model
{
	export class TodoItem {
		constructor(public id:string, public title:string, public done:boolean) {
		}
	}
	export class TodoList {
		constructor(public items:TodoItem[]) {
		}
	}

	export var TodoStore = riot.observable(new TodoList([
		new Model.TodoItem("1", "hello", true),
		new Model.TodoItem("2", "world", false)
	]));

	//var observableStore = riot.observable(store);
}
