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
        'dark-bg': '#0e0e11',
        'dark-content': '#1b1d21'
      },
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
        card: '0px 2px 6px 0px rgba(199, 201, 206, 0.29)'
      }
    }
  }
};
