import { D as getContext, E as head, F as attr_class, G as stringify, I as store_get, J as slot, K as escape_html, M as unsubscribe_stores, B as pop, z as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>AvA Conciergerie — Conciergerie à Caen (Calvados)</title>`;
    $$payload2.title = `<title>AvA Conciergerie · Conciergerie privée à Caen (Calvados)</title>`;
    $$payload2.out.push(`<meta name="description" content="Conciergerie privée à Caen et en Normandie : réservations, intendance, accueil VIP. Réponse sous 2h ouvrées."/> <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>  <meta name="description" content="Conciergerie privée à Caen : réservations, intendance, accueil VIP. Service discret et réactif en Normandie."/> <meta property="og:title" content="AvA Conciergerie · Caen"/> <meta property="og:description" content="Conciergerie sur-mesure en Normandie : réactivité, discrétion, réseau premium."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://ton-domaine.net"/> <meta property="og:image" content="/og-cover.jpg"/>`);
  });
  $$payload.out.push(`<div class="d-flex flex-column min-vh-100"><nav class="navbar navbar-expand-md navbar-light bg-light border-bottom"><div class="container"><a class="navbar-brand fw-bold" href="/" data-sveltekit-preload-data="hover">AvA <span class="text-primary">Conciergerie</span></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir le menu"><span class="navbar-toggler-icon"></span></button> <div id="mainNav" class="collapse navbar-collapse"><ul class="navbar-nav ms-auto align-items-center gap-2"><li class="nav-item"><a${attr_class(`nav-link ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "active" : "")}`)} href="/">Accueil</a></li> <li class="nav-item"><a${attr_class(`nav-link ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/services") ? "active" : "")}`)} href="/services">Services</a></li> <li class="nav-item"><a${attr_class(`nav-link ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/about") ? "active" : "")}`)} href="/about">À propos</a></li> <li class="nav-item"><a class="btn btn-primary" href="/contact">Contact</a></li></ul></div></div></nav> <main class="flex-grow-1"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> <style>
  @media (max-width: 768px){
    .sticky-cta {
      position: sticky; bottom: 0; z-index: 1030;
      background: rgba(255,255,255,.9); backdrop-filter: blur(6px);
      border-top: 1px solid rgba(0,0,0,.06);
    }
  }
</style> <div class="sticky-cta py-2 d-md-none"><div class="container d-flex gap-2"><a href="/contact" class="btn btn-primary w-100">Devis</a> <a href="tel:+33766665848" class="btn btn-outline-secondary w-100">Appeler</a> <a href="https://wa.me/33766665848" target="_blank" rel="noopener" class="btn btn-success w-100">WhatsApp</a></div></div> <footer class="border-top py-4 mt-auto"><div class="container d-flex flex-column flex-md-row justify-content-between gap-3"><small class="text-muted">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} AvA Conciergerie — Tous droits réservés</small> <div class="d-flex gap-3"><a class="text-muted" href="https://www.instagram.com/" aria-label="Instagram"><i class="bi bi-instagram fs-5"></i></a> <a class="text-muted" href="https://fr-fr.facebook.com/" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a> <a class="text-muted" href="https://x.com/" aria-label="X"><i class="bi bi-twitter-x fs-5"></i></a></div></div></footer></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
