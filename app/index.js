requirejs.config({
	baseUrl:"../",
    paths: {
	    riot: 'bower_components/riot/riot',
	    RiotControl: 'node_modules/riotcontrol/riotcontrol',

	    //jquery: use CDN instead of local jquery './bower_components/jquery/jquery'
	    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
	    materialize: 'bower_components/materialize/dist/js/materialize',
	    hammerjs: 'bower_components/materialize/js/hammer.min',
        tags: 'gen/tags'
    },
    shim: {
	   /* 'riot': {
		    exports: 'riot'
	    },*/
       /* 'RiotControl': { //no need to shim RiotControl because I fixed the module using UMD https://github.com/jimsparkman/RiotControl/issues/16
            deps: ['riot'],
            exports: 'RiotControl'
        },*/
        'tags': {
            deps: ['gen/todo/Presenter']
        },
	    //The docs only said to import jQuery before materialize.js. In fact materialize.js > hammerjs > jquery
	    'materialize': {
		    deps: ['hammerjs']
	    },
	    'hammerjs': {
		    deps: ['jquery']
	    }
    }
});

requirejs(['app/main']);

//a little test: use jquery to decorate the page, show the 12-columns grid designed by the materializeCss
require(["jquery"], function($) {
	/* only for decoration */
	$(function() {
		var parent = $("#deco")
		for (var i = 1; i<=12; i++) {
			var cell = $("<div></div>")
				.addClass("col s1")
				.css("background-color", i%2==0 ? "gray":"darkgray")
				.text(i);
			parent.append(cell);
		}
	});
});

