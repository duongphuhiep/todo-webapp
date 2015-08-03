/**
 * We can also use the CommonJs style to load module: http://requirejs.org/docs/commonjs.html
 */
define(['riot', 'tags'], function(riot, tags)
{
	riot.route(function (action, itemId) {
		console.log("edit " + decodeURI(itemId));
	});

	riot.mount("my-todos");
});
