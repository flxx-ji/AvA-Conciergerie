import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.BJQ_94Sc.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BrdgULFp.js","_app/immutable/chunks/DvUQz0Y7.js","_app/immutable/chunks/xGZhe4_6.js","_app/immutable/chunks/C7qaBKy1.js","_app/immutable/chunks/O3kjM3CP.js","_app/immutable/chunks/B4YSlRxu.js","_app/immutable/chunks/o1uKxVpW.js","_app/immutable/chunks/z6dFVodI.js","_app/immutable/chunks/CFyJyJeT.js","_app/immutable/chunks/DMmj7PWL.js"];
export const stylesheets = [];
export const fonts = [];
