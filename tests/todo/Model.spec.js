define(function (require) {
	var registerSuite = require('intern!object');
	var assert = require('intern/chai!assert');
	var Model = require('../../gen/Model');

	registerSuite({
		name: 'model',

		/**
		 * a test case
		 */
		todoItemCtor: function () {
			var item = new Model.TodoItem("1", "toto", true);
			assert.strictEqual("1", item.id,  'be sure module is well loaded');
		}
	});
});