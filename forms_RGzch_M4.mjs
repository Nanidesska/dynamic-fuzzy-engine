import { e as createAstro, f as createComponent, r as renderTemplate, j as renderHead, h as renderSlot, i as renderComponent, m as maybeRenderHead } from '../astro_Offp8vsx.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro("https://nani-sebastian.com");
const $$FormsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormsLayout;
  const { title } = Astro2.props;
  let subtitle = "Accessible Astro Dashboard";
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- favicon --><link rel="icon" type="image/svg+xml" href="/formslogo.png"><!-- open graph --><meta property="og:title" content="Accessible Astro Dashboard"><meta property="og:description" content="An Accessible Dashboard Theme for Astro including a login page, a dashboard page and several other pages and components."><meta property="og:type" content="website"><meta property="og:url" content="https://dashboard.accessible-astro.dev"><meta property="og:image" content="/social-preview-image.png"><!-- page title --><title>${title} - ${subtitle}</title>${renderHead()}</head> <body> <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/workspaces/WED/src/layouts/FormsLayout.astro", void 0);

const $$Astro = createAstro("https://nani-sebastian.com");
const $$Forms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forms;
  return renderTemplate`${renderComponent($$result, "FormsLayout", $$FormsLayout, { "title": "Guest survey", "data-astro-cid-npe3l3zs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs> <section class="bg-neutral-000" data-astro-cid-npe3l3zs> <div class="login" data-astro-cid-npe3l3zs> <div class="login__inner reveal h-screen" data-astro-cid-npe3l3zs> <div class="inner__brand" data-astro-cid-npe3l3zs> <div class="brand__text" style="font-family: Cinzel" data-astro-cid-npe3l3zs> <span data-astro-cid-npe3l3zs>Guest survey</span><br data-astro-cid-npe3l3zs> <span data-astro-cid-npe3l3zs> To make the best out of the day, some major information on your attendance would be helpful. Thank you for your participation.</span> </div> </div> <div class="inner__form space-content" style="font-family: Cinzel" data-astro-cid-npe3l3zs> <form class="login-form space-content" method="POST" id="guestSurvey" action="/guestsurvey" data-astro-cid-npe3l3zs> <div class="login-form__controls" data-astro-cid-npe3l3zs> <label for="name" id="label-name" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs>Full name *</div> </label> <div style="font-family:none;" data-astro-cid-npe3l3zs> <input name="name" type="text" id="name" required data-astro-cid-npe3l3zs></div> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <label id="label-join" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs>Are you joining our wedding? *
</div> </label> <select name="join" id="join" required data-astro-cid-npe3l3zs> <option disabled value="" data-astro-cid-npe3l3zs>--Please choose an option--</option> <option value="Yes" data-astro-cid-npe3l3zs>Yes</option> <option value="No" data-astro-cid-npe3l3zs>No</option> </select> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <label for="partner" id="label-partner" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs>Are you bringing your partner? *</div> </label> <select name="partner" id="label-partner" required data-astro-cid-npe3l3zs> <option disabled value="" data-astro-cid-npe3l3zs>--Please choose an option--</option> <option value="Yes" data-astro-cid-npe3l3zs>Yes</option> <option value="No1" data-astro-cid-npe3l3zs>No, I am single :)</option> <option value="No2" data-astro-cid-npe3l3zs>No</option> </select> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <label for="children" id="label-children" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs> Are you bringing your child(ren)? *</div> </label> <select name="children" id="children" required data-astro-cid-npe3l3zs> <option disabled value="" data-astro-cid-npe3l3zs>--Please choose an option--</option> <option value="No" data-astro-cid-npe3l3zs>No</option> <option value="Yes1" data-astro-cid-npe3l3zs>Yes, 1</option> <option value="Yes2" data-astro-cid-npe3l3zs>Yes, 2</option> <option value="Yes3" data-astro-cid-npe3l3zs>Yes, 3</option> </select> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs></p> <label for="childrenage" id="label-childrenage" data-astro-cid-npe3l3zs> <div class="clr-neutral-400" style="font-family: Cinzel" data-astro-cid-npe3l3zs>If yes, how old?</div> </label> <div style="font-family:none;" data-astro-cid-npe3l3zs> <input type="text" name="childrenage" id="childrenage" required data-astro-cid-npe3l3zs> </div> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <label for="hotel" id="label-hotel" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs> Do you want to have a hotel room near Flintsbach? *</div> </label> <select name="hotel" id="hotel" required data-astro-cid-npe3l3zs> <option disabled value="" data-astro-cid-npe3l3zs>--Please choose an option--</option> <option value="Yes" data-astro-cid-npe3l3zs>Yes</option> <option value="No" data-astro-cid-npe3l3zs>No</option> </select> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <label for="food" id="label-food" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" data-astro-cid-npe3l3zs>Let us know if you have any dining specification(s) including intolerance for spicy food.</div> </label> <div style="font-family:none;" data-astro-cid-npe3l3zs> <input type="text" name="food" id="food" data-astro-cid-npe3l3zs></div> <p style="“line-height:" 80%“ data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs></p> <button class="" type="submit" value="Submit" data-astro-cid-npe3l3zs> <div style="font-family: Cinzel" class="accentbuttonbox" data-astro-cid-npe3l3zs>
Submit
</div> </button> </div> </form> </div> <div class="login__footer text-neutral-700 " data-astro-cid-npe3l3zs> <h5 class="heading-5" style="font-family: Cinzel" data-astro-cid-npe3l3zs> <span data-astro-cid-npe3l3zs>Thank you!</span> </h5> </div> <div class="login__background h-screen" data-astro-cid-npe3l3zs></div> </div> </div> </section> <br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs><br data-astro-cid-npe3l3zs> ` })}   `;
}, "/workspaces/WED/src/pages/forms.astro", void 0);

const $$file = "/workspaces/WED/src/pages/forms.astro";
const $$url = "/forms";

const forms = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Forms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormsLayout as $, forms as f };
