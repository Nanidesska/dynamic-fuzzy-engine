import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_Offp8vsx.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$HomeLayout } from './home_QORDRvdY.mjs';

const $$Astro = createAstro("https://nani-sebastian.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "WELCOME friends!" })}`;
}, "/workspaces/WED/src/pages/index.astro", void 0);

const $$file = "/workspaces/WED/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
