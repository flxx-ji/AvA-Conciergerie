import { E as head } from "../../../chunks/index2.js";
import { C as CTAButtons } from "../../../chunks/CTAButtons.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Services · AvA Conciergerie (Caen)</title>`;
    $$payload2.out.push(`<meta name="description" content="Services de conciergerie à Caen : accueil VIP, intendance, événementiel."/>`);
  });
  $$payload.out.push(`<section class="container py-5"><h1 class="h3 mb-4">Nos services</h1> <div class="row g-4"><div class="col-md-4"><div class="card h-100"><picture><source type="image/webp" srcset="/images/services/vip-800.webp 800w, /images/services/vip-1200.webp 1200w" sizes="(max-width: 768px) 100vw, 33vw"/> <img src="/images/services/vip-1200.webp" class="card-img-top svelte-m69sye" width="1200" height="675" loading="lazy" decoding="async" alt="Accueil VIP : transferts, check-in, réservations personnalisées"/></picture> <div class="card-body"><h2 class="h5">Accueil VIP</h2> <p class="mb-0">Transferts, check-in, réservations personnalisées.</p></div></div></div> <div class="col-md-4"><div class="card h-100"><picture><source type="image/webp" srcset="/images/services/intendance-800.webp 800w,/images/services/intendance-1200.webp 1200w" sizes="(max-width: 768px) 100vw, 33vw"/> <img src="/images/services/intendance-1200.webp" class="card-img-top svelte-m69sye" width="1200" height="675" loading="lazy" decoding="async" alt="Intendance : linge, ménage, pressing, maintenance"/></picture> <div class="card-body"><h2 class="h5">Intendance</h2> <p class="mb-0">Courses, ménage, pressing, maintenance.</p></div></div></div> <div class="col-md-4"><div class="card h-100"><picture><source type="image/webp" srcset="/images/services/event-800.webp 800w, /images/services/event-1200.webp 1200w" sizes="(max-width: 768px) 100vw, 33vw"/> <img src="/images/services/event-1200.webp" class="card-img-top svelte-m69sye" width="1200" height="675" loading="lazy" decoding="async" alt="Événementiel : organisation clé en main, invitations, logistique"/></picture> <div class="card-body"><h2 class="h5">Événementiel</h2> <p class="mb-0">Organisation clé en main, invitations, logistique.</p></div></div></div></div> <div class="mt-5">`);
  CTAButtons($$payload);
  $$payload.out.push(`<!----></div></section>`);
}
export {
  _page as default
};
