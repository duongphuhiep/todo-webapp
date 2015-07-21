# Todo web application

Status: Work in progress

This is a **Work in progress** for my personal learning, I intent to build a full-stack demo application with the following technologies:

Front-end
* [riotjs](https://muut.com/riotjs/)
* [MaterializeCss] (http://materializecss.com/)
* [stealjs](http://stealjs.com).

Back-end
* [Go language](http://golang.org/)
* [MongoDb] (https://www.mongodb.org/)

The project structure will gradually change base on my studies. I will experiment different ways to do thing evens if it is not the best for the situation.

For now, I'm starting with the client-side

 Clone this repo and run 

    $ bower install
    
    #creates a http server with 0-configuration
    $ npm install [`live-server`](https://www.npmjs.com/package/live-server)
     
    $ npm run build-tags  #generate [`gen/tags.js`](/gen/tags.js)
      
    #starts the [`live-server`](https://www.npmjs.com/package/live-server) and run the  browser `index.html`.
    $ npm start   

##Notes

* [stealjs](http://stealjs.com) can discover dependencies hieararchy from both `package.json` (npm) and `bower.json`. The dependencies hierarchy of npm is often much bigger than bower, so I recommend to use bower over npm on a frontend project.

