/**
 * We can also use the CommonJs style to load module: http://requirejs.org/docs/commonjs.html
 */
define(['jquery', 'riot', 'tags', 'materialize'], function($, riot, tags, materialize)
{
	riot.route(function (action, itemId) {
		console.log("edit " + decodeURI(itemId));
	});

	riot.mount("my-todos");
});
