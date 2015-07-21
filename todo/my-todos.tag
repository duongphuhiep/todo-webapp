<my-todos>
	<todo-item each={ items } id={ id }></todo-item>
	<todo-item-add></todo-item-add>

	<script type="typescript">

		class TodoItem {
			constructor (public id: string, public title: string, public done: boolean) {}
		}

		this.items = [
			new TodoItem("1", "hello", true),
			new TodoItem("2", "world", false)
		];

	</script>
</my-todos>