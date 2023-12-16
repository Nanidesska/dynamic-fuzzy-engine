export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/forms_RGzch_M4.mjs').then(n => n.f);

export { page };
