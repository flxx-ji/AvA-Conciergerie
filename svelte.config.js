import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(), // rien d’autre à configurer pour un cas simple
  }
};

export default config;