module Model {
	export class TodoItem {
		constructor(public id:string, public title:string, public done:boolean) {
		}
	}
	export class TodoStore {
		constructor(public items : TodoItem[]) {
		}
	}
}
