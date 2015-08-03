# Todo web application

This is a **Work in progress** for my personal learning, I intent to build a full-stack demo application with the following technologies:

* Front-end
	* [riotjs](https://muut.com/riotjs/): reactive components + front-end router
	* [MaterializeCss](http://materializecss.com/)
	* ~~[stealjs](http://stealjs.com): module loader (AMD)~~
	* [requirejs](http://requirejs.org): module loader (AMD)
	* [intern](https://theintern.github.io/): unit and end to end testing framework
	* [stylus](https://learnboost.github.io/stylus/): this application is trivial, I might not have a chance to try it 
	* [TypeScript](http://www.typescriptlang.org/): try learning the language and to avoid some possible javascript mine field, I'm not really fan

* Back-end
	* [Go language](http://golang.org/)
	* [MongoDb] (https://www.mongodb.org/)
	
The project structure will gradually change base on my studies. I will experiment different ways to do thing evens if it is not the best for the situation.

For now, I'm starting with the client-side
            
##Run client-side 

    $ npm install
    $ bower install
    $ npm run build
    $ npm start

then Navigate to the `app` folder

##Status

* We can add/remove item now
* Next: edit item in a new "page" so that we must to use front-end router

##Notes

* I don't need [Grunt](http://gruntjs.com/sample-gruntfile) or [Gulp](http://gulpjs.com/), NPM is enough (see [How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
))    
* [stealjs](http://stealjs.com) can discover dependencies hierarchy from both `package.json` (npm) and `bower.json`. The dependencies hierarchy of npm is often much bigger than bower, so I recommend to use bower over npm on a frontend project.
* I use [`tsd`](http://definitelytyped.org/tsd/) to manage the [typings](/typings) folder which holds the TypeScripts definition of popular library. But I also updated the riot signatures, so it is no more the same as in the public repository  (the pull request is on the way). For the time being, I commited my [typings](/typings) folder as well 
* [curl.js](https://github.com/cujojs/curl) is dead for [RaveJs](https://github.com/RaveJS/rave) which used ES6 loader in the core but not yet ready for production

##News

* https://github.com/riot/riot/issues/1055
* https://github.com/riot/riot/issues/1044

* I stop using [stealjs](http://stealjs.com) beacause it is [not compatible](https://github.com/theintern/intern/issues/453) with [intern](https://theintern.github.io/)
It might be fix in the future. For now, [requirejs](http://requirejs.org) might have less 'cool' features than [stealjs](http://stealjs.com) but it has strong support by every framework because of its popularity 

##Play ground

Let's have a un-commited `draft_` folder to play some stupid test
* an inline `display:inline` ignores `height` and `line-height:200%` properties ([cf](http://stackoverflow.com/questions/6246119/adjusting-line-height-of-label-elements-in-html-forms/6246422#6246422))
* Foreach

```js
['on','one','off','trigger'].forEach(function(api){
	console.log(api);
});
```

* Access object properties and `arguments` object

<table>
<tr><td>

	<pre>
var obj = {};
obj["on"] = "foo";
console.log(obj.on); //foo
	</pre>

</td><td>

	<pre>
var RiotControl = {};
RiotControl["trigger"] = function() {
	console.log(arguments); //{ '0': 'additem', '1': 'toto' }
	
	//convert arguments object to array
	var args = [].slice.call(arguments); //[ 'additem', 'toto' ]
}
RiotControl.trigger("additem", "toto");
	</pre>

</td></tr>
</table>

