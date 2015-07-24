# Todo web application

Status: Work in progress

This is a **Work in progress** for my personal learning, I intent to build a full-stack demo application with the following technologies:

* Front-end
	* [riotjs](https://muut.com/riotjs/)
	* [MaterializeCss](http://materializecss.com/)
	* [stealjs](http://stealjs.com)
	* [TypeScript](http://www.typescriptlang.org/)
	* [stylus](https://learnboost.github.io/stylus/)

* Back-end
	* [Go language](http://golang.org/)
	* [MongoDb] (https://www.mongodb.org/)

The project structure will gradually change base on my studies. I will experiment different ways to do thing evens if it is not the best for the situation.

For now, I'm starting with the client-side
       
#Run client-side 

    $ npm install tsd -g
    $ tsd install

    $ npm install
    $ bower install
    $ npm run build
    $ npm start

then Navigate to the `app` folder

##Notes

* I don't need [Grunt](http://gruntjs.com/sample-gruntfile) or [Gulp](http://gulpjs.com/), NPM is enough (see [How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
))    
* [stealjs](http://stealjs.com) can discover dependencies hierarchy from both `package.json` (npm) and `bower.json`. The dependencies hierarchy of npm is often much bigger than bower, so I recommend to use bower over npm on a frontend project.
* I use [`tsd`](http://definitelytyped.org/tsd/) to manage the typings folder which holds the TypeScripts definition of popular library