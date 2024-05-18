
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'cyan': '#13ADB7',
      'white': '#E9ECEB',
      'black': '#0F111D',
      'gray': '#5C6574',
      'lightGray': '#E5E5E5',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    fontSize: {
      sm: '14px',
      lsm: '16px',
      md: '18px',
      lg: '32px',
      xxl: '60px',
    },
    // height: {
    //   '128': '32rem',
    // },

    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
