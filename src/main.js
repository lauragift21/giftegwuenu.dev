
// Import main css
require('~/main.css')
import "~/assets/styles/index.scss";

// import "prismjs/themes/prism-twilight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push(
    {
      rel: 'me',
      href: 'https://twitter.com/lauragift_',
    },
    {
      rel: 'webmention',
      href: 'https://webmention.io/www.giftegwuenu.com/webmention',
    },
    {
      rel: 'pingback',
      href: 'https://webmention.io/www.giftegwuenu.com/xmlrpc',
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Fira+Code&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Merriweather&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@next/dist/aos.css",
    }
  );
}
