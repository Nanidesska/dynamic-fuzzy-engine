import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, g as renderComponent, m as maybeRenderHead } from '../astro_KNdTzRAD.mjs';
import 'kleur/colors';
import 'clsx';
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
  return renderTemplate`${renderComponent($$result, "FormsLayout", $$FormsLayout, { "title": "Guest survey" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br><br><br><br><br> <section class="bg-neutral-000"> <div class="login"> <div class="login__inner reveal h-screen"> <div class="inner__brand"> <div class="brand__text" style="font-family: Cinzel"> <span>Guest survey</span><br> <span> To make the best out of the day, some major information on your attendance would be helpful. Thank you for your participation.</span> </div> </div> <div class="inner__form space-content" style="font-family: Cinzel"> <form class="login-form space-content" method="POST" id="guestSurvey" action="/guestsurvey"> <div class="login-form__controls"> <label for="name" id="label-name"> <div style="font-family: Cinzel">Full name *</div> </label> <div style="font-family:none;"> <input name="name" type="text" id="name" required></div> <p style="“line-height:" 80%“><br></p> <label id="label-join"> <div style="font-family: Cinzel">Are you joining our wedding? *
</div> </label> <select name="join" id="join" required> <option disabled value="">--Please choose an option--</option> <option value="Yes">Yes</option> <option value="No">No</option> </select> <p style="“line-height:" 80%“><br></p> <label for="partner" id="label-partner"> <div style="font-family: Cinzel">Are you bringing your partner? *</div> </label> <select name="partner" id="label-partner" required> <option disabled value="">--Please choose an option--</option> <option value="Yes">Yes</option> <option value="No1">No, I am single :)</option> <option value="No2">No</option> </select> <p style="“line-height:" 80%“><br></p> <label for="children" id="label-children"> <div style="font-family: Cinzel"> Are you bringing your child(ren)? *</div> </label> <select name="children" id="children" required> <option disabled value="">--Please choose an option--</option> <option value="No">No</option> <option value="Yes1">Yes, 1</option> <option value="Yes2">Yes, 2</option> <option value="Yes3">Yes, 3</option> </select> <p style="“line-height:" 80%“></p> <label for="childrenage" id="label-childrenage"> <div class="clr-neutral-400" style="font-family: Cinzel">If yes, how old?</div> </label> <div style="font-family:none;"> <input type="text" name="childrenage" id="childrenage" required> </div> <p style="“line-height:" 80%“><br></p> <label for="hotel" id="label-hotel"> <div style="font-family: Cinzel"> Do you want to have a hotel room near Flintsbach? *</div> </label> <select name="hotel" id="hotel" required> <option disabled value="">--Please choose an option--</option> <option value="Yes">Yes</option> <option value="No">No</option> </select> <p style="“line-height:" 80%“><br></p> <label for="food" id="label-food"> <div style="font-family: Cinzel">Let us know if you have any dining specification(s) including intolerance for spicy food.</div> </label> <div style="font-family:none;"> <input type="text" name="food" id="food"></div> <p style="“line-height:" 80%“><br></p> <button class="" type="submit" value="Submit"> <div style="font-family: Cinzel" class="accentbuttonbox">
Submit
</div> </button> </div> </form> </div> <div class="login__footer text-neutral-700 "> <h5 class="heading-5" style="font-family: Cinzel"> <span>Thank you!</span> </h5> </div> <div class="login__background h-screen"></div> </div> </div> </section> <br><br><br><br> ` })}  `;
}, "/workspaces/WED/src/pages/forms.astro", void 0);

const $$file = "/workspaces/WED/src/pages/forms.astro";
const $$url = "/forms";

export { $$Forms as default, $$file as file, $$url as url };
