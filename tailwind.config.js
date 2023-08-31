/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crypto-mate': "url('/assets/images/cryptomate.png')",
        'la-palma': "url('/assets/images/lapalma.png')",
        'lazo': "url('/assets/images/lazo.png')",
        'soy-rada': "url('/assets/images/soyrada.png')"
      },
      fontFamily: {
        main: ['Helvetica', 'Raleway'],
        flink: ['Inter', 'Helvetica', 'Raleway'],
        gothic: ['Gothic A1', 'Helvetica', 'Raleway'],
        cryptomate: ['Space Grotesk', 'Helvetica', 'Raleway'],
        jost: ['Jost', 'Helvetica', 'Raleway'],
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-20px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          }
        }
      },
      gridTemplateColumns: {
        'footer': '1.3fr 0.6fr  1fr 1fr',
      }
    },
  },
  plugins: [],
  safelist: [
    'translate-x-[100vw]',
    'translate-x-[200vw]',
    'translate-x-[300vw]',
    'translate-x-[400vw]',
    'translate-x-[500vw]',
    'translate-x-[-100vw]',
    'translate-x-[-200vw]',
    'translate-x-[-300vw]',
    'translate-x-[-400vw]',
    'translate-x-[-500vw]',
    'bg-crypto-mate',
    'bg-la-palma',
    'bg-lazo',
    'bg-soy-rada'
  ]
}
