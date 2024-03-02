/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        'primary' : '#0C2D48'
      },
      fontFamily: {
        sans: [
          'Montserrat',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        headline: [
          'Montserrat',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1560px',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          '@screen md': {
            paddingLeft: theme('spacing.12'),
            paddingRight: theme('spacing.12'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.24'),
            paddingRight: theme('spacing.24'),
          },
        },
      })
    },
  ],
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
}

