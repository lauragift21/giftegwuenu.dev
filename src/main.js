// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueDisqus from "vue-disqus";

// Import main css
import "~/assets/styles/index.scss";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.meta.push(
    {
      name: "keywords",
      content: "HTML,CSS,JavaScript,Vue,React,Accessibility",
    },
    {
      name: "description",
      content:
        "Personal Blog by Gift Egwuenu. She's a Frontend Developer & Hobbyist Photographer and she's passionate about making the web accessible to everyone.",
    },
    {
      itemprop: "name",
      content: "Gift Egwuenu | Frontend Engineer",
    },
    {
      itemprop: "description",
      content:
        "Personal Blog by Gift Egwuenu. She's a Frontend Developer & Hobbyist Photographer and she's passionate about making the web accessible to everyone.",
    },
    {
      property: "og:url",
      content: "https://giftegwuenu.com",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Gift Egwuenu | Frontend Engineer",
    },
    {
      property: "og:description",
      content:
        "Personal Blog by Gift Egwuenu. She's a Frontend Developer & Hobbyist Photographer and she's passionate about making the web accessible to everyone.",
    },
    {
      property: "og:image",
      content: "https://res.cloudinary.com/lauragift/image/upload/v1589704673/Group_180_i6t7mq.png",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:image",
      content: "https://res.cloudinary.com/lauragift/image/upload/v1589704673/Group_180_i6t7mq.png",
    },
    {
      property: "twitter:title",
      content: "Gift Egwuenu | Frontend Engineer",
    },
    {
      property: "twitter:description",
      content:
        "Personal Blog by Gift Egwuenu. She's a Frontend Developer & Hobbyist Photographer and she's passionate about making the web accessible to everyone.",
    }
  );
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
