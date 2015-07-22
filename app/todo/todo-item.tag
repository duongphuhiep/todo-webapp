<todo-item>
	<div class="row" >
		<div class="col s6">
			<input type="checkbox" id="{ chekboxId }" />
			<label for="{ chekboxId }">
				Item { opts.id }
			</label>
		</div>

		<a class="waves-effect waves-red btn-flat">
			<i class="material-icons">clear</i>
		</a>
	</div>
	<style scoped>
		/*:scope { display: block }*/
		label {
			color: black;
			width: 100%;
		}
		.row {
			margin:0px;
			padding:0px;
		}
	</style>
	<script>
		this.chekboxId = opts.id + '_chk';
	</script>
</todo-item>