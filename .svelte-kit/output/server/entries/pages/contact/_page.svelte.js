import { Q as attr, K as escape_html, R as bind_props, B as pop, z as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
function _page($$payload, $$props) {
  push();
  let form = $$props["form"];
  $$payload.out.push(`<section class="container py-5"><h1 class="h3 mb-4">Contact</h1> <form method="POST" class="row g-3"><div class="col-md-6"><label class="form-label" for="name">Nom</label> <input id="name" name="name" class="form-control" required autocomplete="name"${attr("value", form?.values?.name ?? "")}/></div> <div class="col-md-6"><label class="form-label" for="email">Email</label> <input id="email" type="email" name="email" class="form-control" required autocomplete="email"${attr("value", form?.values?.email ?? "")}/></div> <div class="col-12"><label class="form-label" for="message">Message</label> <textarea id="message" name="message" rows="5" class="form-control" required>`);
  const $$body = escape_html(form?.values?.message ?? "");
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <input type="text" name="website" class="d-none" tabindex="-1" autocomplete="off"/> <div class="col-12"><button class="btn btn-primary" type="submit">Envoyer</button></div> `);
  if (form?.error) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="col-12"><div class="alert alert-danger mt-2">${escape_html(form.error)}</div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (form?.success) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="col-12"><div class="alert alert-success mt-2">Merci ! On te répond très vite.</div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form></section>`);
  bind_props($$props, { form });
  pop();
}
export {
  _page as default
};
