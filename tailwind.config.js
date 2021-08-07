module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'dark-bg': '#111827',
        'dark-content': '#151d2c',
        'dark-hover-content': '#1f2937',
        'dark-border': '#374151',
        'card-hover': '#f9fafb'
      },
      cursor: ['hover'],
      scale: ['hover'],
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        sm: '0 3px 5px 1px rgba(0,32,128,0.07)',
        navigator: '0 4px 10px rgba(0,0,0,0.05)',
        card: '0 0 transparent, 0 0 transparent, 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)'
      }
    }
  }
};
