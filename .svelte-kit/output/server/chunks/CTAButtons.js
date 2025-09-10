import { Q as attr, K as escape_html, B as pop, z as push } from "./index2.js";
const contacts = {
  phoneDisplay: "+33 7 66 66 58 48",
  phoneRaw: "+33766665848",
  whatsapp: "33766665848"
};
function CTAButtons($$payload, $$props) {
  push();
  const telHref = `tel:${contacts.phoneRaw}`;
  const waHref = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent("Bonjour, j’aimerais des infos 🙂")}`;
  $$payload.out.push(`<div class="d-flex gap-2 flex-wrap"><a href="/contact" class="btn btn-primary">Demander un devis</a> <a class="btn btn-outline-secondary"${attr("href", telHref)} rel="external" target="_self"${attr("title", `Appeler ${contacts.phoneDisplay}`)}>Appeler ${escape_html(contacts.phoneDisplay)}</a> <a class="btn btn-outline-success"${attr("href", waHref)} rel="noopener external" target="_blank" title="WhatsApp">WhatsApp</a> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="align-self-center text-body-secondary small">(mode démo activé)</span>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
export {
  CTAButtons as C
};
