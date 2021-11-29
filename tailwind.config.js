module.exports = {
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        display: ['PoppinsCustom', 'system-ui', 'sans-serif'],
        body: ['PoppinsCustom', 'system-ui', 'sans-serif'],
        handwrite: ['Nanum Pen', 'system-ui', 'sans-serif'],
      },
      extend: {
        colors: {
          primary: {
            100: "#e6f5ee",
            200: "#ceebde",
            300: "#b5e0cd",
            400: "#9dd6bd",
            500: "#84ccac",
            600: "#6aa38a",
            700: "#4f7a67",
            800: "#355245",
            900: "#1a2922"
          }
        },
        scale: {
          '105': '1.05',
        },
        rotate: {
          '20': '20deg',
          '-20': '-20deg',
          '30': '30deg',
          '-30': '-30deg',
          '60': '60deg',
          '-60': '-60deg'
        },
        display: ['group-hover'],
        visibility: ['group-hover', 'hover', 'focus'],
        screens: {
          '3xl': '1600px',
        },
        height: theme => ({
          "rem-10": "10rem",
          "rem-20": "20rem",
          "rem-30": "30rem",
          "rem-40": "40rem",
          "rem-50": "50rem",
          "rem-60": "60rem",
          "rem-70": "70rem",
          "rem-80": "80rem",
          "rem-90": "90rem",
        }),
        boxShadow: {
          'border': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
          'small': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
          'card': 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
        },
        transitionProperty: {
          'height': 'height',
          'visiblity': 'visiblity',
          'spacing': 'margin, padding'
        }
      }
    },
    variants: {
      extend: {
        filter: ['hover', 'focus'],
        scale: ['group-hover']
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide')
    ]
  }
  