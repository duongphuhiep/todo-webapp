require("../../bower_components/riot/riot"); //the riot object is global
require("../bower_components/materialize/dist/css/materialize.css!"); // css for materialize
require("../gen/tags"); //riot tags

//attach everything to the global riot so that we can use them in the tags script
riot.Model = require("../gen/todo/Model");
riot.RiotControl = require("../../node_modules/riotcontrol/riotcontrol");

require("../gen/todo/presenter"); //after init Model

riot.tags = riot.mount("*");
