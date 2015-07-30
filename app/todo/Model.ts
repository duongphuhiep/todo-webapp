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
