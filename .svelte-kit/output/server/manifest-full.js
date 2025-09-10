export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","images/hero/caen-1280.jpg","images/hero/caen-1280.webp","images/hero/caen-800.webp","images/services/event-1200.webp","images/services/event-1280.jpg","images/services/event-800.webp","images/services/intendance-1200.webp","images/services/intendance-1280.jpg","images/services/intendance-800.webp","images/services/vip-1200.webp","images/services/vip-1280.jpg","images/services/vip-800.webp","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DYG_TWTt.js",app:"_app/immutable/entry/app.CzWDRgLw.js",imports:["_app/immutable/entry/start.DYG_TWTt.js","_app/immutable/chunks/DMmj7PWL.js","_app/immutable/chunks/CFyJyJeT.js","_app/immutable/chunks/DvUQz0Y7.js","_app/immutable/chunks/xGZhe4_6.js","_app/immutable/entry/app.CzWDRgLw.js","_app/immutable/chunks/D9Z9MdNV.js","_app/immutable/chunks/DvUQz0Y7.js","_app/immutable/chunks/xGZhe4_6.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CFyJyJeT.js","_app/immutable/chunks/C7qaBKy1.js","_app/immutable/chunks/o1uKxVpW.js","_app/immutable/chunks/z6dFVodI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
