// Type definitions for riot.js
// Project: https://github.com/moot/riotjs
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module "riot"
{
	interface Observable {
		/**
		 * Listen for event, and execute callback when it is triggered
		 *
		 * Single event:
		 *      el.on('start', function() { })
		 *
		 * Multiple events, the event type is given as the argument:
		 *      el.on('start stop', function(type:string) { })
		 */
		on(events:string, callback:(...args:any[])=>void):Observable;

		/**
		 * Listen to the given event and execute the callback at most once.
		 *      el.one('start', function() {})
		 */
		one(event:string, callback:()=>void):Observable;

		/**
		 * Removes the given space separated list of event listeners
		 * el.off('start stop')
		 *
		 * Removes the given callback from the list of events
		 * el.off('start end', doIt)
		 *
		 * Removes all listeners from all event types.
		 * el.off(‘*‘)
		 */
		off(events:string, callback?:()=>void):Observable;

		/**
		 * Trigger event
		 */
		trigger(event:string, ...args:any[]):Observable;
	}


	/**
	 * event list:
	 * “update” – right before the tag is updated. allows recalculation of context data before the UI expressions are updated.
	   “updated” – right after the tag is updated. allows do some work with updated DOM
	   “mount” – right after tag is mounted on the page
	   “unmount” – after the tag is removed from the page
	 */
	interface Tag extends Observable {
		opts: any;
		parent:Tag;
		root: any;
		tags: any;
		update():void;
		update(data:any):void;
		unmount(keepTheParent:boolean):void
	}

	export var version: string;
	function observable(el:any): Observable;
	function mount(customTagSelector: string, ...opts:any):Tag[];
	function mount(selectorOrDomNode: string, tagname:string, ...opts:any):Tag[];
	function mountTo(domNode: string, tagname:string, ...opts:any):void;
	function render(tagname:string, ...opts:any):Tag;
	function update():Tag[];
	function tag(tagName:string, html:string, css?:string, attrs?:any, constructor?:(opts:any)=>void)

	function route(to:any):void;
}