

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Ck2Fd3Oj.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BrdgULFp.js","_app/immutable/chunks/DvUQz0Y7.js"];
export const stylesheets = [];
export const fonts = [];
