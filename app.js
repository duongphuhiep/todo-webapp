/*sdfsdrequire.config({
 paths: {
 jquery: './bower_components/jquery/jquery',
 riot: './bower_components/riot/riot',
 RiotControl: './node_modules/riotcontrol/riotcontrol'
 },
 shim: {
 "RiotControl": ['riot']
 }
 });*/

requirejs.config({
    paths: {
        jquery: './bower_components/jquery/jquery',
        riot: './bower_components/riot/riot',
        RiotControl: './node_modules/riotcontrol/riotcontrol',
        tags: './gen/tags'
    },
    shim: {
        'RiotControl': {
            deps: ['riot'],
            exports: 'RiotControl'
        },
        'riot':{
            exports: 'riot'
        },
        'tags': {
            deps: ['gen/todo/Presenter']
        }
    }
});

requirejs(['app/main']);
