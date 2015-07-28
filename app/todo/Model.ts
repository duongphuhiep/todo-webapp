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
}

import riot = require("riot"); //import the .d.ts for type checking