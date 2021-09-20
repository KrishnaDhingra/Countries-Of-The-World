module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false,
   theme: {
     extend: {
       textColor: {
         skin: {
           base: 'var(--color-text-base)'
         }
       },
       backgroundColor: {
         skin: {
           navbarbg: 'var(--color-navbar-bg)',
           bodybg: 'var(--color-body-bg)'
         }
       }
     }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }