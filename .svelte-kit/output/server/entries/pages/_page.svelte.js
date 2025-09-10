import "clsx";
import { C as CTAButtons } from "../../chunks/CTAButtons.js";
import { P as ensure_array_like, K as escape_html, Q as attr } from "../../chunks/index2.js";
function Process3Steps($$payload) {
  const steps = [
    {
      title: "Demande",
      desc: "Tu nous expliques le besoin (formulaire ou appel)."
    },
    {
      title: "Devis",
      desc: "On répond vite avec un devis clair et sans surprise."
    },
    {
      title: "Exécution",
      desc: "On s’occupe de tout, en toute discrétion."
    }
  ];
  const each_array = ensure_array_like(steps);
  $$payload.out.push(`<section class="container my-5"><h2 class="h4 mb-3">Comment ça marche ?</h2> <div class="row g-3"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let s = each_array[i];
    $$payload.out.push(`<div class="col-12 col-md-4"><div class="card h-100"><div class="card-body"><div class="badge bg-primary-subtle text-primary mb-2">${escape_html(i + 1)}</div> <h3 class="h5">${escape_html(s.title)}</h3> <p class="mb-0 text-body-secondary">${escape_html(s.desc)}</p></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
}
function Partners($$payload) {
  const items = [
    "Hôtel Lux",
    "ResaPro",
    "ChauffeurVIP",
    "Chef@Home",
    "Pressing+"
  ];
  const each_array = ensure_array_like(items);
  $$payload.out.push(`<section class="container my-5"><h2 class="h6 text-uppercase text-body-secondary mb-3">Ils nous font confiance</h2> <div class="d-flex flex-wrap gap-3 align-items-center"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let name = each_array[$$index];
    $$payload.out.push(`<div class="px-3 py-2 border rounded-3 text-body-secondary">${escape_html(name)}</div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
}
function Testimonials($$payload) {
  const avis = [
    {
      author: "M. D., Caen Centre",
      text: "Hyper réactifs et discrets. Organisation parfaite."
    },
    {
      author: "S. L., Mondeville",
      text: "Réservation complexe gérée en 2h. Impeccable."
    },
    {
      author: "A. R., Hérouville",
      text: "Communication fluide, prestataires sérieux."
    }
  ];
  const each_array = ensure_array_like(avis);
  $$payload.out.push(`<section class="container my-5"><h2 class="h4 mb-3">Avis clients</h2> <div class="row g-3"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let a = each_array[$$index];
    $$payload.out.push(`<div class="col-12 col-md-4"><div class="card h-100"><div class="card-body"><p class="mb-2">“${escape_html(a.text)}”</p> <div class="text-body-secondary small">— ${escape_html(a.author)}</div></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
}
function FAQ($$payload) {
  const items = [
    {
      q: "Zones desservies ?",
      a: "Caen, Hérouville-Saint-Clair, Mondeville, Ifs et le Calvados. Interventions en Normandie sur devis."
    },
    {
      q: "Délais de réponse ?",
      a: "Première réponse sous 2h ouvrées."
    },
    {
      q: "Urgences ?",
      a: "Oui, selon disponibilité du réseau (tarification spécifique)."
    },
    {
      q: "Types de services ?",
      a: "Accueil VIP, réservations, intendance, dépannage, logistique du quotidien."
    },
    {
      q: "Tarifs ?",
      a: "Au forfait ou à la mission selon la demande."
    },
    {
      q: "Confidentialité ?",
      a: "Accord de confidentialité (NDA) possible sur demande."
    }
  ];
  const each_array = ensure_array_like(items);
  $$payload.out.push(`<section class="container my-5"><h2 class="h4 mb-3">FAQ</h2> <div class="accordion" id="faq"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out.push(`<div class="accordion-item"><h2 class="accordion-header"${attr("id", "h" + i)}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${attr("data-bs-target", "#c" + i)}>${escape_html(item.q)}</button></h2> <div${attr("id", "c" + i)} class="accordion-collapse collapse" data-bs-parent="#faq"><div class="accordion-body">${escape_html(item.a)}</div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
}
function _page($$payload) {
  $$payload.out.push(`<section class="bg-light border-bottom"><div class="container py-5"><div class="row align-items-center g-4"><div class="col-lg-7"><h1 class="display-5 fw-bold mb-3">Conciergerie <span class="text-primary">sur-mesure</span> à Caen (Calvados)</h1> <p class="lead mb-4">Réservations, intendance, accueil VIP… AvA Conciergerie opère à Caen et en Normandie.</p> `);
  CTAButtons($$payload);
  $$payload.out.push(`<!----></div> <div class="col-lg-5"><div class="ratio ratio-16x9 rounded shadow-sm overflow-hidden"><picture><source srcset="/images/hero/caen-1280.webp" type="image/webp" media="(min-width: 992px)"/> <source srcset="/images/hero/caen-800.webp" type="image/webp" media="(max-width: 991px)"/> <img src="/images/hero/caen-1280.jpg" alt="Église Saint-Pierre, Caen — AvA Conciergerie" class="w-100 h-100 object-fit-cover" loading="lazy" decoding="async"/></picture></div></div></div></div></section> `);
  Process3Steps($$payload);
  $$payload.out.push(`<!----> <section class="container py-5"></section> `);
  Partners($$payload);
  $$payload.out.push(`<!----> `);
  Testimonials($$payload);
  $$payload.out.push(`<!----> `);
  FAQ($$payload);
  $$payload.out.push(`<!----> <section class="container my-5">`);
  CTAButtons($$payload);
  $$payload.out.push(`<!----></section>`);
}
export {
  _page as default
};
