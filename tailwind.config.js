/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'oklch(67% 0.16 182.503)', // Slightly darker and more vibrant
          50: 'oklch(96% 0.03 182.503)',
          100: 'oklch(92% 0.05 182.503)',
          200: 'oklch(87% 0.08 182.503)',
          300: 'oklch(82% 0.10 182.503)',
          400: 'oklch(77% 0.13 182.503)',
          500: 'oklch(67% 0.16 182.503)',
          600: 'oklch(62% 0.18 182.503)',
          700: 'oklch(57% 0.19 182.503)',
          800: 'oklch(52% 0.17 182.503)',
          900: 'oklch(47% 0.16 182.503)',
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
        'mint-gradient': 'linear-gradient(to right, oklch(67% 0.16 182.503), oklch(72% 0.14 170))',
        'mint-gradient-soft': 'linear-gradient(to right, oklch(96% 0.03 182.503), oklch(92% 0.05 170))',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(0, 155, 144, 0.5)',
      },
    },
  },
  plugins: [],
};