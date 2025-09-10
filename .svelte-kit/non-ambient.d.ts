
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/services";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/services": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/contact" | "/contact/" | "/services" | "/services/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/images/hero/caen-1280.jpg" | "/images/hero/caen-1280.webp" | "/images/hero/caen-800.webp" | "/images/services/event-1200.webp" | "/images/services/event-1280.jpg" | "/images/services/event-800.webp" | "/images/services/intendance-1200.webp" | "/images/services/intendance-1280.jpg" | "/images/services/intendance-800.webp" | "/images/services/vip-1200.webp" | "/images/services/vip-1280.jpg" | "/images/services/vip-800.webp" | "/robots.txt" | string & {};
	}
}