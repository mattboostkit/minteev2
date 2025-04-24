/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(78, 223, 204)', // #4edfcc - Main color
          50: 'rgb(202, 255, 238)', // #caffee - Lightest shade
          100: 'rgb(191, 252, 231)', // Slightly darker than 50
          200: 'rgb(180, 249, 225)', // Gradient between 100 and 300
          300: 'rgb(170, 246, 219)', // Gradient between 200 and 400
          400: 'rgb(161, 239, 213)', // #a1efd5 - Medium shade
          500: 'rgb(135, 235, 210)', // Gradient between 400 and 600
          600: 'rgb(110, 231, 208)', // Gradient between 500 and DEFAULT
          700: 'rgb(70, 200, 184)', // Slightly darker than DEFAULT
          800: 'rgb(62, 178, 163)', // Darker shade
          900: 'rgb(54, 156, 143)', // Darkest shade
        },
        accent: {
          DEFAULT: 'oklch(65% 0.2 145)',
          50: 'oklch(95% 0.05 145)',
          100: 'oklch(90% 0.08 145)',
          200: 'oklch(85% 0.11 145)',
          300: 'oklch(80% 0.14 145)',
          400: 'oklch(75% 0.17 145)',
          500: 'oklch(70% 0.2 145)',
          600: 'oklch(65% 0.2 145)',
          700: 'oklch(60% 0.19 145)',
          800: 'oklch(55% 0.18 145)',
          900: 'oklch(50% 0.17 145)',
        },
        success: {
          DEFAULT: 'oklch(65% 0.2 145)',
          500: 'oklch(65% 0.2 145)',
        },
        warning: {
          DEFAULT: 'oklch(75% 0.19 80)',
          500: 'oklch(75% 0.19 80)',
        },
        error: {
          DEFAULT: 'oklch(65% 0.25 25)',
          500: 'oklch(65% 0.25 25)',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
        'gazpacho': ['Gazpacho', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
      },
      borderRadius: {
        DEFAULT: '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        'full': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mint-gradient': 'linear-gradient(to right, rgb(78, 223, 204), rgb(110, 231, 208))',
        'mint-gradient-soft': 'linear-gradient(to right, rgb(202, 255, 238), rgb(191, 252, 231))',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(78, 223, 204, 0.5)',
      },
    },
  },
  plugins: [],
};